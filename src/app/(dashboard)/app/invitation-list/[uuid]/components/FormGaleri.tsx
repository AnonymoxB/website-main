import Input from '@/components/input/Input'
import useToggle from '@/hooks/useToggle'
import clsx from 'clsx'
import React, { ChangeEvent, useState } from 'react'
import FormEdit from './FormEdit'
import usePickImage from '@/hooks/usePickImage'
import { Notyf } from 'notyf'
import { getToken } from '@/utils/auth'
import { updateMyInvitation, uploadImage } from '@/service/api'
import ImagePreview from '@/components/input/ImagePreview'
import Button from '@/components/button/Button'
function FormGalery({ invitationId, form, onChange, data }: any) {

    const minimize = useToggle();
    const selectFiles1 = usePickImage();
    const selectFiles2 = usePickImage();
    const selectFiles3 = usePickImage();
    const selectFiles4 = usePickImage();
    const selectFiles5 = usePickImage();
    const selectFiles6 = usePickImage();

    const [isLoading, setIsLoading] = useState(false);

    function fileChangedHandler(e: ChangeEvent<HTMLInputElement>, keyName: string, index: number) {
        if (!e.target.files) return
        if (index === 0) selectFiles1.onSelectFile(e);
        if (index === 1) selectFiles2.onSelectFile(e);
        if (index === 2) selectFiles3.onSelectFile(e);
        if (index === 3) selectFiles4.onSelectFile(e);
        if (index === 4) selectFiles5.onSelectFile(e);
        if (index === 5) selectFiles6.onSelectFile(e);

        const formImage = form?.imagesUrl;

        formImage[index] = URL.createObjectURL(e.target.files[0])
        onChange(keyName, formImage, 'gallery')
    }

    async function handleSubmit() {
        const notify = new Notyf({ position: { x: "right", y: "top" }, duration: 5000 });
        setIsLoading(true);
        const token = getToken();
        if (!token) return

        const getFilesNotNull: { index: number, file: any }[] = [];

        const selectFiles = [selectFiles1, selectFiles2, selectFiles3, selectFiles4, selectFiles5, selectFiles6];

        selectFiles.map((item, index) => {
            if (item.fileImage !== null) {
                getFilesNotNull.push({ index, file: item.fileImage })
            }
        });


        if (getFilesNotNull.length > 0) {
            const uploadFoto = await uploadImage(token, {
                invitation_id: invitationId,
                field_name: getFilesNotNull.map((item) => `imageUrl${item.index + 1}`),
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
                form.imagesUrl[item.index] = images.shift()
            })

            const updateInvitation = await updateMyInvitation(token, {
                gallery: form
            }, invitationId)


            if (updateInvitation.data.success) notify.success(updateInvitation.data.message)
            setIsLoading(false);
            return
        }

        const updateInvitation = await updateMyInvitation(token, {
            gallery: form
        }, invitationId)

        if (updateInvitation.data.success) notify.success(updateInvitation.data.message)
        else notify.error("Failed Update My Invitation")
        setIsLoading(false);
    }

    return (
        <FormEdit>
            <form className={clsx("relative p-4 flex flex-col flex-auto gap-4", minimize.value ? 'hidden lg:block' : '')}>
                <Input label="Quotes" placeholder="Quotes" value={form.quotes} setValue={(e) => onChange('quotes', e, 'gallery')} />
                <ImagePreview label='Image Galery' imagePreview={form.imagesUrl[0]} onChange={(e) => fileChangedHandler(e, 'imagesUrl', 0)} />
                <ImagePreview label='' imagePreview={form.imagesUrl[1]} onChange={(e) => fileChangedHandler(e, 'imagesUrl', 1)} />
                <ImagePreview label='' imagePreview={form.imagesUrl[2]} onChange={(e) => fileChangedHandler(e, 'imagesUrl', 2)} />
                <ImagePreview label='' imagePreview={form.imagesUrl[3]} onChange={(e) => fileChangedHandler(e, 'imagesUrl', 3)} />
                <ImagePreview label='' imagePreview={form.imagesUrl[4]} onChange={(e) => fileChangedHandler(e, 'imagesUrl', 4)} />
                <ImagePreview label='' imagePreview={form.imagesUrl[5]} onChange={(e) => fileChangedHandler(e, 'imagesUrl', 5)} />
                <hr />
                <Button isLoading={isLoading} onClick={handleSubmit}>Simpan</Button>
            </form>
        </FormEdit>
    )
}

export default FormGalery