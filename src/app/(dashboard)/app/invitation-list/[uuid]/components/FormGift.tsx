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
import SelectBank from '@/components/input/selectBank'
function FormGift({ invitationId, form, onChange, data }: any) {

    const minimize = useToggle();

    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit() {
        const notify = new Notyf({ position: { x: "right", y: "top" }, duration: 5000 });
        setIsLoading(true);
        const token = getToken();
        if (!token) return

        const updateInvitation = await updateMyInvitation(token, {
            gift: form
        }, invitationId)

        if (updateInvitation.data.success) notify.success(updateInvitation.data.message)
        else notify.error("Failed Update My Invitation")
        setIsLoading(false);
    }

    function addBank() {
        onChange('namaBank', 'bca', 'gift', form.length)
        onChange('nomorRekening', '123456789', 'gift', form.length)
        onChange('atasNama', 'Budi', 'gift', form.length)
    }


    return (
        <FormEdit>
            <form className={clsx("relative p-4 flex flex-col flex-auto gap-4", minimize.value ? 'hidden lg:block' : '')}>
                {form.map((_: any, index: number) => (
                    <>
                        <SelectBank value={form.bank} onChange={onChange} index={index} />
                        <Input label="Nomor Rekening" placeholder="Nomor Rekening" value={form[index].nomorRekening} setValue={(e) => onChange('nomorRekening', e, 'gift', index)} />
                        <Input label="Atas Nama" placeholder="Atas Nama" value={form[index].atasNama} setValue={(e) => onChange('atasNama', e, 'gift', index)} />
                        < hr />
                    </>
                ))}
                <Button onClick={addBank} type='Tertiary' className='border-[1px] border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'>+ Tambahan Rekening</Button>
                <Button isLoading={isLoading} onClick={handleSubmit}>Simpan</Button>
            </form>
        </FormEdit>
    )
}

export default FormGift