import Input from '@/components/input/Input'
import useToggle from '@/hooks/useToggle'
import clsx from 'clsx'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import FormEdit from './FormEdit'
import usePickImage from '@/hooks/usePickImage'
import { Notyf } from 'notyf'
import { getToken } from '@/utils/auth'
import { updateMyInvitation, uploadImage } from '@/service/api'
import ImagePreview from '@/components/input/ImagePreview'
import Button from '@/components/button/Button'
function FormJourney({ invitationId, form, onChange, data }: any) {
    const minimize = useToggle();
    const maxStory = 4;
    const [totalStory, setTotalStory] = useState(form?.length);
    const selectFiles1 = usePickImage();
    const selectFiles2 = usePickImage();
    const selectFiles3 = usePickImage();
    const selectFiles4 = usePickImage();

    const [isLoading, setIsLoading] = useState(false);

    function fileChangedHandler(e: ChangeEvent<HTMLInputElement>, keyName: string, index: number) {
        if (!e.target.files) return
        onChange(keyName, URL.createObjectURL(e.target.files[0]), 'journey', index)
        if (index === 0) selectFiles1.onSelectFile(e);
        if (index === 1) selectFiles2.onSelectFile(e);
        if (index === 2) selectFiles3.onSelectFile(e);
        if (index === 3) selectFiles4.onSelectFile(e);
    }

    async function handleSubmit() {
        const notify = new Notyf({ position: { x: "right", y: "top" }, duration: 5000 });
        setIsLoading(true);
        const token = getToken();
        if (!token) return

        const getFilesNotNull: { index: number, file: any }[] = [];

        const selectFiles = [selectFiles1, selectFiles2, selectFiles3, selectFiles4];

        selectFiles.map((item, index) => {
            if (item.fileImage !== null) {
                getFilesNotNull.push({ index, file: item.fileImage })
            }
        });


        if (getFilesNotNull.length > 0) {
            const uploadFoto = await uploadImage(token, {
                invitation_id: invitationId,
                field_name: getFilesNotNull.map((item) => `story_image${item.index + 1}`),
                images: getFilesNotNull.map((item) => item.file),
                old_images: [data?.image || null]
            });

            const images = uploadFoto?.data?.data?.images
            const successUpload = !!images?.length
            if (!successUpload) {
                setIsLoading(false);
                return notify.error("Gagal upload gambar")
            }

            getFilesNotNull.map((item) => {
                form[item.index] = {
                    description: form[item.index].description,
                    year: form[item.index].year,
                    image: images.shift()
                }
            })

            const updateInvitation = await updateMyInvitation(token, {
                story: form
            }, invitationId)

            console.log({ uploadFoto, updateInvitation });

            if (updateInvitation.data.success) notify.success(updateInvitation.data.message)
            setIsLoading(false);
            return
        }

        const updateInvitation = await updateMyInvitation(token, {
            story: form
        }, invitationId)

        if (updateInvitation.data.success) notify.success(updateInvitation.data.message)
        else notify.error("Failed Update My Invitation")
        setIsLoading(false);
    }

    return (
        <FormEdit>
            <form className={clsx("relative p-4 flex flex-col flex-auto gap-4", minimize.value ? 'hidden lg:block' : '')}>
                {new Array(totalStory).fill(0).map((_, index) => (
                    <>
                        <label htmlFor="" className="text-sm leading-4 font-bold">Story {index + 1}</label>
                        <Input label="Keterangan" placeholder="Keterangan" value={form[index]?.['description']} setValue={(e) => onChange('description', e, 'journey', index)} />
                        <Input label="Tahun" placeholder="Tahun" value={form[index]?.['year']} setValue={(e) => onChange('year', e, 'journey', index)} type='number' />
                        <ImagePreview label='Image Story' imagePreview={form[index]?.['image']} onChange={(e) => fileChangedHandler(e, 'image', index)} />
                        <hr />
                    </>
                ))}
                <Button isLoading={isLoading} onClick={handleSubmit}>Simpan</Button>
            </form>
        </FormEdit>
    )
}

export default FormJourney