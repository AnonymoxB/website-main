import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import useToggle from '@/hooks/useToggle'
import clsx from 'clsx'
import React, { ChangeEvent, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import FormEdit from './FormEdit'
import ImagePreview from '@/components/input/ImagePreview'
import usePickImage from '@/hooks/usePickImage'
import { getToken } from '@/utils/auth'
import { Notyf } from 'notyf'
import { updateMyInvitation, uploadImage } from '@/service/api'
function FormDate({ invitationId, form, onChange, data }: any) {
    const minimize = useToggle();
    const selectFile = usePickImage();
    const [isLoading, setIsLoading] = useState(false);

    function fileChangedHandler(e: ChangeEvent<HTMLInputElement>, keyName: string) {
        if (!e.target.files) return
        onChange(keyName, URL.createObjectURL(e.target.files[0]), 'date')
        selectFile.onSelectFile(e);
    }

    async function handleSubmit() {
        const notify = new Notyf({ position: { x: "right", y: "top" }, duration: 5000 });
        setIsLoading(true);
        const token = getToken();
        if (!token) return

        if (!!selectFile.fileImage) {
            const uploadFoto = await uploadImage(token, {
                invitation_id: invitationId,
                field_name: ['date_image_cover'],
                images: [selectFile.fileImage],
                old_images: [data?.date_image_cover || null]
            });

            const images = uploadFoto?.data?.data?.images
            const successUpload = !!images?.length
            if (!successUpload) {
                setIsLoading(false);
                return notify.error("Gagal upload gambar")
            }

            const updateInvitation = await updateMyInvitation(token, {
                date: {
                    ...form,
                    date_image_cover: images[0]
                }
            }, invitationId)

            console.log({ uploadFoto, updateInvitation });

            if (updateInvitation.data.success) notify.success(updateInvitation.data.message)
            setIsLoading(false);
            return
        }

        const updateInvitation = await updateMyInvitation(token, {
            date: form
        }, invitationId)

        if (updateInvitation.data.success) notify.success(updateInvitation.data.message)
        else notify.error("Failed Update My Invitation")
        setIsLoading(false);
    }

    return (
        <FormEdit>
            <form className={clsx("relative p-4 flex flex-col flex-auto gap-4", minimize.value ? 'hidden lg:block' : '')}>
                <ImagePreview label='Background Image' imagePreview={form['coverImage']} onChange={(e) => fileChangedHandler(e, 'coverImage')} />
                <Input label='Tanggal Akad' placeholder='Tanggal Akad' value={form['eventDate1']} setValue={(e) => onChange('eventDate1', e, 'date')} type='date' min={new Date().toDateString()} />
                <label htmlFor={'eventDate1'} className={twMerge(clsx("text-xs leading-4 font-bold"))}>Waktu </label>
                <div className='flex flex-row gap-4 overflow-hidden w-full'>
                    <input type="time" value={form['timeStart1']} onChange={(e) => onChange('timeStart1', e.target.value, 'date')} />
                    -
                    <input type="time" value={form['timeEnd1']} onChange={(e) => onChange('timeEnd1', e.target.value, 'date')} />
                </div>
                <Input label='Zona Waktu' placeholder='Zona Waktu' value={form['timeZone1']} setValue={(e) => onChange('timeZone1', e, 'date')} />
                <Input label='Nama Tempat Akad Nikah' placeholder='Nama Tempat Akad Nikah' value={form['place1']} setValue={(e) => onChange('place1', e, 'date')} />
                <Input label='Alamat Akad Nikah' placeholder='Alamat Akad Nikah' value={form['street1']} setValue={(e) => onChange('street1', e, 'date')} />
                <Input label='Link Maps' placeholder='Link Maps' value={form['linkMaps1']} setValue={(e) => onChange('linkMaps1', e, 'date')} />

                <hr />

                <Input label='Tanggal Resepsi' placeholder='Tanggal Resepsi' value={form['eventDate2']} setValue={(e) => onChange('eventDate2', e, 'date')} type='date' min={new Date().toDateString()} />
                <label htmlFor={'eventDate2'} className={twMerge(clsx("text-xs leading-4 font-bold"))}>Waktu </label>
                <div className='flex flex-row gap-4 overflow-hidden w-full'>
                    <input type="time" value={form['timeStart2']} onChange={(e) => onChange('timeStart2', e.target.value, 'date')} />
                    -
                    <input type="time" value={form['timeEnd2']} onChange={(e) => onChange('timeEnd2', e.target.value, 'date')} />
                </div>
                <Input label='Zona Waktu' placeholder='Zona Waktu' value={form['timeZone2']} setValue={(e) => onChange('timeZone2', e, 'date')} />
                <Input label='Nama Tempat Resepsi' placeholder='Nama Tempat Resepsi' value={form['place2']} setValue={(e) => onChange('place2', e, 'date')} />
                <Input label='Alamat Resepsi' placeholder='Alamat Resepsi' value={form['street2']} setValue={(e) => onChange('street2', e, 'date')} />
                <Input label='Link Maps' placeholder='Link Maps' value={form['linkMaps2']} setValue={(e) => onChange('linkMaps2', e, 'date')} />

                <Button isLoading={isLoading} onClick={handleSubmit}>Simpan</Button>
            </form>
        </FormEdit>
    )
}

export default FormDate