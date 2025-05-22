'use client'
import CardUndanganDashboard from "@/components/card/CardUndanganDashboard"
import InputSearch from "@/components/input/InputSearch"
import { getMyInvitation } from "@/service/api"
import { InvitationFullType } from "@/type/invitation"
import { getToken } from "@/utils/auth"
import { useEffect, useState } from "react"

function SectionListInvitation() {
    const [search, setSearch] = useState('')
    const [invitations, setInvitations] = useState<InvitationFullType[]>([])
    const [isLoading, setIsLoading] = useState(false)

    async function getInvitations() {
        const token = getToken();
        if (!token) return
        setIsLoading(true)
        try {
            const { data } = await getMyInvitation(token)
            const { items } = data.data;
            setInvitations(items)
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getInvitations()
    }, [])

    return (
        <section className='flex flex-col gap-10'>
            <InputSearch placholder='Cari undangan' onChange={(e: any) => setSearch(e.target.value)} />
            <div className='grid lg:grid-cols-2 gap-x-10 gap-y-4'>
                {invitations.map((invitation, index) => (
                    <CardUndanganDashboard key={index} invitation={invitation} />
                ))}
                {isLoading && (
                    <>
                        <div className='skeleton h-[120px]' />
                        <div className='skeleton h-[120px]' />
                    </>
                )}
            </div>
        </section>
    )
}

export default SectionListInvitation