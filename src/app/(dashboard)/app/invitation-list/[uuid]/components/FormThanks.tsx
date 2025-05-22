import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import useToggle from '@/hooks/useToggle'
import clsx from 'clsx'
import React, { ChangeEvent, useEffect, useState } from 'react'
import FormEdit from './FormEdit'
import { updateMyInvitation, uploadImage } from '@/service/api'
import { getToken } from '@/utils/auth'
import usePickImage from '@/hooks/usePickImage'
import { Notyf } from 'notyf'
import ImagePreview from '@/components/input/ImagePreview'
function FormThanks({ invitationId, form, onChange, data }: any) {
    const minimize = useToggle();
    const selectFile = usePickImage();
    const [isLoading, setIsLoading] = useState(false);
    function fileChangedHandler(e: ChangeEvent<HTMLInputElement>, keyName: string) {
        if (!e.target.files) return
        onChange(keyName, URL.createObjectURL(e.target.files[0]), 'thanks')
        selectFile.onSelectFile(e);
    }


    async function handleSubmit() {
        const notify = new Notyf({ position: { x: "right", y: "top" }, duration: 5000 });
        setIsLoading(true);
        const token = getToken();
        if (!token) return
        let image_url = '';

        if (!!selectFile.fileImage) {
            const uploadFoto = await uploadImage(token, {
                images: [selectFile.fileImage],
                old_images: [data?.home_image_cover || null],
                field_name: ['thanks_image_cover'],
                invitation_id: invitationId
            });

            const successUpload = !!uploadFoto?.data?.data?.images?.length
            if (!successUpload) {
                setIsLoading(false);
                return notify.error("Gagal upload gambar")
            }

            image_url = uploadFoto?.data?.data?.images[0];
            const updateInvitation = await updateMyInvitation(token, {
                thanks: {
                    ...form,
                    imageCover: image_url
                }
            }, invitationId)

            if (updateInvitation.data.success) notify.success(updateInvitation.data.message)
            return setIsLoading(false);
        }

        const updateInvitation = await updateMyInvitation(token, {
            thanks: {
                coupleName: form.coupleName,
                family: form.family,
                imageCover: form.image_cover
            }
        }, invitationId)

        if (updateInvitation.data.success) notify.success(updateInvitation.data.message)
        else notify.error("Failed Update My Invitation")
        setIsLoading(false);


    }

    return (
        <FormEdit>
            <form className={clsx("relative p-4 flex flex-col flex-auto gap-10", minimize.value ? 'hidden lg:block' : '')}>
                <ImagePreview label='Background Image' imagePreview={form['imageCover']} onChange={(e) => fileChangedHandler(e, 'imageCover')} />
                <Input label="Nama Panggilan Kedua Mempelai" placeholder="Nama Panggilan Kedua Mempelai" value={form['coupleName']} setValue={(e) => onChange('coupleName', e, 'thanks')} />
                <Input label="Keluarga Besar dari" placeholder="Keluarga Besar" value={form['family']} setValue={(e) => onChange('family', e, 'thanks')} />
                <Button onClick={handleSubmit} isLoading={isLoading}>Simpan</Button>
            </form>
        </FormEdit>
    )
}

export default FormThanks