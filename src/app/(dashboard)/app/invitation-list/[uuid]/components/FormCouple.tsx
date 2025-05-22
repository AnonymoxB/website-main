import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import useToggle from '@/hooks/useToggle'
import clsx from 'clsx'
import React, { ChangeEvent, useState } from 'react'
import FormEdit from './FormEdit'
import usePickImage from '@/hooks/usePickImage'
import { Notyf } from 'notyf'
import { updateMyInvitation, uploadImage } from '@/service/api'
import { getToken } from '@/utils/auth'
import ImagePreview from '@/components/input/ImagePreview'
function FormCouple({ invitationId, form, onChange, data }: any) {
    const minimize = useToggle();
    const totalUseFiles = 2;
    const selectFiles = new Array(totalUseFiles).fill(usePickImage());
    const [isLoading, setIsLoading] = useState(false)


    function fileChangedHandler(e: ChangeEvent<HTMLInputElement>, keyName: string, index: number) {
        if (!e.target.files) return
        onChange(keyName, URL.createObjectURL(e.target.files[0]), 'couple')
        selectFiles[index].onSelectFile(e);
    }

    async function handleSubmit() {
        const notify = new Notyf({ position: { x: "right", y: "top" }, duration: 5000 });
        setIsLoading(true);
        const token = getToken();
        if (!token) return

        const files: {
            image: string
            field_name: string
        }[] = selectFiles.map((item, index) => ({
            image: item.fileImage,
            field_name: `img${index + 1}`
        }));

        if (files.length > 0) {
            const uploadFoto = await uploadImage(token, {
                invitation_id: invitationId,
                images: files.map((item) => item.image),
                field_name: files.map((item) => item.field_name),
                old_images: files.map((item) => data[item.field_name] ?? null)
            })

            console.log(data);
            console.log(uploadFoto);


            const images = uploadFoto?.data?.data?.images;
            const successUpload = !!images?.length
            if (!successUpload) {
                setIsLoading(false);
                return notify.error("Gagal upload gambar")
            }

            const newFiles = files.reduce((acc: Record<string, string>, curr: any, index) => { acc[curr.field_name] = images[index]; return acc; }, {});

            const updateInvitation = await updateMyInvitation(token, {
                couple: {
                    ...form,
                    ...newFiles
                }
            }, invitationId)

            if (updateInvitation.data.success) notify.success(updateInvitation.data.message)
            return setIsLoading(false);
        }

        const updateInvitation = await updateMyInvitation(token, { couple: form }, invitationId)

        if (updateInvitation.data.success) notify.success(updateInvitation.data.message)
        else notify.error("Failed Update My Invitation")
        setIsLoading(false);

    }

    return (
        <FormEdit>
            <form className={clsx("relative p-4 flex flex-col flex-auto gap-4", minimize.value ? 'hidden lg:block' : '')}>
                <ImagePreview label='Foto Mempelai Pria' imagePreview={form['img1']} onChange={(e) => fileChangedHandler(e, 'img1', 0)} />
                <Input label="Nama Panggilan Mempelai Pria" placeholder="Nama Panggilan Mempelai Pria" value={form['name1']} setValue={(e) => onChange('name1', e, 'couple')} />
                <Input label="Nama Lengkap" placeholder="Nama Lengkap " value={form['fullName1']} setValue={(e) => onChange('fullName1', e, 'couple')} />
                <Input label="Nama Orang Tua" placeholder="Nama Orang" value={form['parent1']} setValue={(e) => onChange('parent1', e, 'couple')} />
                <Input label="Instagram" placeholder="Instagram " value={form['instagram1']} setValue={(e) => onChange('instagram1', e, 'couple')} />
                <Input label="Whatsapp" placeholder="Whatsapp" value={form['whatsapp1']} setValue={(e) => onChange('whatsapp1', e, 'couple')} />

                <hr />
                <ImagePreview label='Foto Mempelai Wanita' imagePreview={form['img2']} onChange={(e) => fileChangedHandler(e, 'img2', 1)} />
                <Input label="Nama Panggilan Mempelai Wanita" placeholder="Nama Panggilan Mempelai Wanita" value={form['name2']} setValue={(e) => onChange('name2', e, 'couple')} />
                <Input label="Nama Lengkap " placeholder="Nama Lengkap " value={form['fullName2']} setValue={(e) => onChange('fullName2', e, 'couple')} />
                <Input label="Nama Orang Tua" placeholder="Nama Orang" value={form['parent2']} setValue={(e) => onChange('parent2', e, 'couple')} />
                <Input label="Instagram " placeholder="Instagram " value={form['instagram2']} setValue={(e) => onChange('instagram2', e, 'couple')} />
                <Input label="Whatsapp " placeholder="Whatsapp " value={form['whatsapp2']} setValue={(e) => onChange('whatsapp2', e, 'couple')} />
                <Button isLoading={isLoading} onClick={handleSubmit}>Simpan</Button>
            </form>
        </FormEdit>
    )
}

export default FormCouple