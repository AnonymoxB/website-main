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
function FormHome({ invitationId, form, onChange, data }: any) {
    const minimize = useToggle();
    const selectFile = usePickImage();
    const [isLoading, setIsLoading] = useState(false);
    function fileChangedHandler(e: ChangeEvent<HTMLInputElement>, keyName: string) {
        if (!e.target.files) return
        onChange(keyName, URL.createObjectURL(e.target.files[0]), 'home')
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
                field_name: ['home_image_cover'],
                invitation_id: invitationId
            });

            const successUpload = !!uploadFoto?.data?.data?.images?.length
            if (!successUpload) {
                setIsLoading(false);
                return notify.error("Gagal upload gambar")
            }

            image_url = uploadFoto?.data?.data?.images[0];
            const updateInvitation = await updateMyInvitation(token, {
                home: {
                    ...form,
                    image_cover: image_url
                }
            }, invitationId)

            if (updateInvitation.data.success) notify.success(updateInvitation.data.message)
            return setIsLoading(false);
        }

        const updateInvitation = await updateMyInvitation(token, {
            home: {
                couple_name: form.couple_name,
                couple_date: form.couple_date,
                image_cover: form.image_cover
            }
        }, invitationId)

        if (updateInvitation.data.success) notify.success(updateInvitation.data.message)
        else notify.error("Failed Update My Invitation")
        setIsLoading(false);


    }

    return (
        <FormEdit>
            <form className={clsx("relative p-4 flex flex-col flex-auto gap-10", minimize.value ? 'hidden lg:block' : '')}>
                <Input label="Nama Panggilan Kedua Mempelai" placeholder="Nama Panggilan Kedua Mempelai" value={form['couple_name']} setValue={(e) => onChange('couple_name', e, 'home')} />
                <ImagePreview label='Background Image' imagePreview={form['image_cover']} onChange={(e) => fileChangedHandler(e, 'image_cover')} />
                <Input label="Tanggal Pernikahan" placeholder="Tanggal Pernikahan" value={form['couple_date']} setValue={(e) => onChange('couple_date', e, 'home')} type='date' />
                <Button onClick={handleSubmit} isLoading={isLoading}>Simpan</Button>
            </form>
        </FormEdit>
    )
}

export default FormHome