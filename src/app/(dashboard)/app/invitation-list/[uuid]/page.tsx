'use client'
import Button from '@/components/button/Button'
import CardFiturEdit from '@/components/card/CardFiturEdit'
import HeaderDashboard from '@/components/header/HeaderDashboard'
import InputToogleSwitch from '@/components/input/ToogleSwitch'
import EditUndangan from '@/components/Toogle/EditUndangan'
import SectionHome from '@/app/(invitation)/sections/SectionHome'
import { useEffect, useState } from 'react'
import SectionCouple from '@/app/(invitation)/sections/SectionCouple'
import useToogle from '@/hooks/useToggle'
import FormHome from './components/FormHome'
import FormMusic from './components/FormMusic'
import usePickImage from '@/hooks/usePickImage'
import FormSetting from './components/FormSetting'
import { getToken } from '@/utils/auth'
import { getMyInvitationDetail } from '@/service/api'
import { InvitationFullType } from '@/type/invitation'
import SectionCountdown from '@/app/(invitation)/sections/SectionCoutdown'
import SectionJourney from '@/app/(invitation)/sections/SectionJourney'
import SectionAglimps from '@/app/(invitation)/sections/SectionAglimps'
import SectionShareLove from '@/app/(invitation)/sections/SectionShareLove'
import SectionRsvp from '@/app/(invitation)/sections/SectionRsvp'
import SectionFooter from '@/app/(invitation)/sections/Footer'
import FormCouple from './components/FormCouple'
import FormDate from './components/FormDate'
import FormJourney from './components/FormJourney'
import FormRsvp from './components/FormRsvp'
import BukuTamu from './components/BukuTamu'
import KirimUndangan from './components/KirimUndangan'
import SectionInfo from './SectionInfo'
import LayarSapa from './components/LayarSapa'
import FormGalery from './components/FormGaleri'
import FormGift from './components/FormGift'
import FormThanks from './components/FormThanks'





interface FormCoupleState {
    name1: string;
    fullName1: string;
    img1: string;
    instagram1: string;
    whatsapp1: string;
    parent1: string;
    name2: string;
    fullName2: string;
    img2: string;
    instagram2: string;
    whatsapp2: string;
    parent2: string;
}

const FAKE_DATA: any = {
    themeName: "example",
    home: {
        couple_name: "Budi & Ayu",
        couple_date: new Date().toLocaleDateString(),
        image_cover_preview: '/theme/example/images/hero-image.png',
    },
    couple: {
        couple1: {
            name: "Budi",
            img: "/assets/imageExample/image-example2.png",
            description: "Anak pertama dari Bapak Fulan & Ibu Fulana",
            instagram: "",
            whatsapp: "",
            parent: "Anak dari Bapak Fulan & Ibu Fulana",
        },
        couple2: {
            name: "Ayu",
            img: "/assets/imageExample/image-example3.png",
            description: "Anak pertama dari Bapak Fulan & Ibu Fulana",
            instagram: "",
            whatsapp: "",
            parent: "Anak dari Bapak Fulan & Ibu Fulana",
        }
    },
    countdown: {
        event1: {
            eventName: 'Akad Nikah',
            eventDate: '2023-11-30',
            eventTime: '10:00 - 11:00',
            place: 'Gedung weddings',
            street: 'Jl. Kemerdekaan No. 1 Jakarta'
        },
        event2: {
            eventName: 'Resepsi Pernikahan',
            eventDate: '2023-11-30',
            eventTime: '10:00 - 11:00',
            place: 'Gedung weddings',
            street: 'Jl. Kemerdekaan No. 1 Jakarta'
        }
    }
}

function Page({ params }: { params: { uuid: string } }) {
    const [isPublish, setIsPublish] = useState(false);
    const ModalEditHome = useToogle();
    const ModalCouple = useToogle();
    const ModalMusic = useToogle();
    const ModalSetting = useToogle();
    const ModalRsvp = useToogle();
    const ModalBukuTamu = useToogle();
    const ModalKirimUndangan = useToogle();
    const ModalLayarSapa = useToogle()

    type FormHomeState = {
        couple_name: string;
        couple_date: string;
        image_cover: string;
    };

    const [formHome, setFormHome] = useState<FormHomeState>({
        couple_name: 'Couple Name',
        couple_date: '01-01-2023',
        image_cover: '',
    });

    const DateCover = usePickImage();


    const [formCouple, setFormCouple] = useState<FormCoupleState>({
        name1: 'Budi',
        fullName1: 'Budi, S.E',
        img1: '/assets/imageExample/image-example2.png',
        instagram1: '',
        whatsapp1: '',
        parent1: 'Anak dari Bapak Fulan & Ibu Fulana',
        name2: 'Suci',
        fullName2: 'Suciati, S.E',
        img2: '/assets/imageExample/image-example3.png',
        instagram2: '',
        whatsapp2: '',
        parent2: 'Anak dari Bapak Fulan & Ibu Fulana',
    });

    const [formDate, setFormDate] = useState({
        coverImage: DateCover?.preview || '/assets/imageExample/image-example2.png',
        eventName1: 'Akad Nikah',
        eventDate1: '2023-11-30',
        timeStart1: '10:00',
        timeEnd1: '11:00',
        timeZone1: 'WIB',
        place1: 'Gedung weddings',
        street1: 'Jl. Kemerdekaan No. 1 Jakarta',
        linkMap1: 'https://goo.gl/maps/1qG7c7r1t4i',
        eventName2: 'Resepsi Pernikahan',
        eventDate2: '2023-11-30',
        timeStart2: '10:00',
        timeEnd2: '11:00',
        timeZone2: 'WIB',
        place2: 'Gedung weddings',
        street2: 'Jl. Kemerdekaan No. 1 Jakarta',
        linkMap2: 'https://goo.gl/maps/1qG7c7r1t4i',
    })

    const [formJourney, setFormJourney] = useState([
        {
            description: "Akad Nikah",
            image: "/theme/example/images/the-journey-image.png",
            year: "2023"
        },
        {
            description: "Resepsi Pernikahan",
            image: "/theme/example/images/the-journey-image.png",
            year: "2023"
        },
        {
            description: "Akad Nikah",
            image: "/theme/example/images/the-journey-image.png",
            year: "2023"
        }
    ])

    const [formGalery, setFormGalery] = useState({
        quotes: `"Aku akan berusaha menjadi pasangan hidup kamu yang sempurna
        walau aku jauh dari kata sempurna, tapi aku akan terus belajar
        menjadi yang terbaik untuk mencintai, melindungi, dan menjaga
        kamu seumur hidupku"`,
        imagesUrl: [
            "/theme/example/images/galery-image.png",
            "/theme/example/images/galery-image.png",
            "/theme/example/images/galery-image.png",
            "/theme/example/images/galery-image.png",
            "/theme/example/images/galery-image.png",
            "/theme/example/images/galery-image.png",
        ],
    })

    const [formGift, setFormGift] = useState([
        {
            namaBank: "bca",
            nomorRekening: "1234567890",
            atasNama: "Budi",
        }
    ])

    const [formThanks, setFormThanks] = useState({
        imageCover: '/theme/example/images/hero-image.png',
        coupleName: 'Budi & Suci',
        family: 'Fulan & Fulana',
    })

    function handleChangeForm(key: string, value: string, section: string) {
        switch (section) {
            case 'home':
                setFormHome({ ...formHome, [key]: value })
                return
            case 'couple':
                setFormCouple({ ...formCouple, [key]: value })
                return
            case 'date':
                setFormDate({ ...formDate, [key]: value })
                return
            case 'journey':
                setFormJourney({ ...formJourney, [key]: value })
                return
            case 'gallery':
                setFormGalery({ ...formGalery, [key]: value })
                return
            case 'thanks':
                setFormThanks({ ...formThanks, [key]: value })
                return
            default:
                return
        }

    }

    function handleChangeArrayForm(key: string, value: string, section: string, index: number) {
        switch (section) {
            case 'journey':
                let temp: any = [...formJourney];
                temp[index][key] = value;
                setFormJourney(temp)
                return
            case 'gift':
                let tempGift: any = [...formGift];
                if (!formGift[index]) {
                    tempGift.push({
                        namaBank: "",
                        nomorRekening: "",
                        atasNama: "",
                    });
                }
                tempGift[index][key] = value;
                setFormGift(tempGift)
                return
            default:
                return
        }

    }

    const [invitation, setInvitation] = useState<InvitationFullType>()
    const [isLoading, setIsLoading] = useState(true)

    async function getInvitationsDetail() {
        const token = getToken();
        if (!token) return
        setIsLoading(true)
        try {
            const { data } = await getMyInvitationDetail(token, params.uuid)
            const myInvitation: InvitationFullType = data.data

            setInvitation(myInvitation)
            if (myInvitation?.detail?.home) {
                setFormHome({
                    couple_name: myInvitation?.detail?.home?.couple_name || "Budi & Ayu",
                    couple_date: myInvitation?.detail?.home?.couple_date || "2023-11-30",
                    image_cover: myInvitation?.detail?.home?.image_cover || "/theme/example/images/hero-image.png"
                })
            }

            if (myInvitation?.detail?.couple) {
                setFormCouple({ ...myInvitation?.detail?.couple })
            }

            if (myInvitation?.detail?.date) {
                setFormDate({ ...myInvitation?.detail?.date })
            }

            if (myInvitation?.detail?.story) {
                setFormJourney([...myInvitation?.detail?.story])
            }

            if (myInvitation?.detail?.gallery) {
                setFormGalery({ ...myInvitation?.detail?.gallery })
            }

            if (myInvitation?.detail?.gift) {
                setFormGift([...myInvitation?.detail?.gift])
            }

            if (myInvitation?.detail?.thanks) {
                setFormThanks({ ...myInvitation?.detail?.thanks })
            }

            setIsLoading(false)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getInvitationsDetail()
    }, [])

    return (
        <main className='bg-neutral-50 flex-1 min-h-screen px-4'>
            <div className='ml-6 lg:ml-0'>
                <HeaderDashboard title='Edit Undangan' />
            </div>

            <SectionInfo isLoading={isLoading} />
            {/* UNTUK SEMENTARA|| NANTI PERSECTION */}
            {!isLoading ? (
                <>
                    <section className='grid lg:grid-cols-3 md:grid-cols-2 gap-x-10 gap-y-4 px-10 mt-7'>
                        <CardFiturEdit src='/assets/icon/command.png' title='Tema' />
                        <CardFiturEdit onClick={ModalSetting.toggleChange} src='/assets/icon/settings.png' title='Pengaturan' >
                            <FormSetting params={params.uuid} visible={ModalSetting.value} modalTitle='Pengaturan' onClose={ModalSetting.toggleChange} footer={<Button className='w-full' size='small' >Simpan Perubahan</Button>} />
                        </CardFiturEdit>
                        <CardFiturEdit onClick={ModalMusic.toggleChange} src='/assets/icon/music-4.png' title='Musik' >
                            <FormMusic params={params.uuid} visible={ModalMusic.value} modalTitle='Music' onClose={ModalMusic.toggleChange} footer={<Button type='Tertiary' className='border-[1px] border-blue-500 text-blue-500 w-full' size='small' >Load More</Button>} />
                        </CardFiturEdit>
                        <CardFiturEdit src='/assets/icon/file-image.png' title='Background' />
                        <CardFiturEdit onClick={ModalRsvp.toggleChange} src='/assets/icon/mail.png' title='RSVP' >
                            <FormRsvp params={params.uuid} visible={ModalRsvp.value} modalTitle='RSVP' onClose={ModalRsvp.toggleChange} />
                        </CardFiturEdit>
                        <CardFiturEdit onClick={ModalBukuTamu.toggleChange} src='/assets/icon/users.png' title='Buku Tamu'>
                            <BukuTamu invitationId={invitation?.id} visible={ModalBukuTamu.value} modalTitle='Buku Tamu' onClose={ModalBukuTamu.toggleChange} />
                        </CardFiturEdit>
                        <CardFiturEdit src='/assets/icon/eye.png' title='Review' />
                        <CardFiturEdit onClick={ModalKirimUndangan.toggleChange} src='/assets/icon/send.png' title='Kirim' >
                            <KirimUndangan invitationId={invitation?.id} params={params.uuid} visible={ModalKirimUndangan.value} modalTitle='Kirim Undangan' onClose={ModalKirimUndangan.toggleChange} />
                        </CardFiturEdit>
                        <CardFiturEdit onClick={ModalLayarSapa.toggleChange} src='/assets/icon/monitor-smartphone.png' title='Layar Sapa' >
                            <LayarSapa invitationId={invitation?.id} visible={ModalLayarSapa.value} modalTitle='Layar Sapa' onClose={ModalLayarSapa.toggleChange} />
                        </CardFiturEdit>
                    </section>
                    <section className='flex flex-col gap-7 mt-7'>
                        <div className='bg-blue-300 border-[1px] border-neutral-200 flex p-5 rounded-xl gap-10'>
                            <h2 className='flex-1'>Status Undangan</h2>
                            <InputToogleSwitch value={isPublish} onChange={setIsPublish} />
                        </div>
                        <EditUndangan sectionName='Home' onEdit={ModalEditHome.toggleChange} formComponent={<FormHome invitationId={invitation?.id} form={formHome} onChange={handleChangeForm} data={invitation?.detail?.home} />}>
                            <SectionHome themeName={FAKE_DATA.themeName} isEdit data={{ ...formHome, image_cover_preview: formHome.image_cover }} />
                        </EditUndangan>


                        <EditUndangan sectionName='Couple' onEdit={ModalCouple.toggleChange} formComponent={<FormCouple invitationId={invitation?.id} form={formCouple} onChange={handleChangeForm} data={invitation?.detail?.couple} />} >
                            <SectionCouple themeName={FAKE_DATA.themeName} data={
                                {
                                    couple1: {
                                        fullName: formCouple.fullName1,
                                        name: formCouple.name1,
                                        parent: formCouple.parent1,
                                        img: formCouple.img1,
                                        instagram: formCouple.instagram1
                                    },
                                    couple2: {
                                        fullName: formCouple.fullName2,
                                        name: formCouple.name2,
                                        parent: formCouple.parent2,
                                        img: formCouple.img2,
                                        instagram: formCouple.instagram2
                                    }
                                }
                            } isEdit={true} />

                        </EditUndangan>

                        <EditUndangan sectionName='Date' onEdit={ModalCouple.toggleChange} formComponent={<FormDate invitationId={invitation?.id} form={formDate} onChange={handleChangeForm} data={invitation?.detail?.date} />} >
                            <SectionCountdown themeName={FAKE_DATA.themeName} data={
                                {
                                    coverImage: DateCover.preview || formDate.coverImage,
                                    event1: {
                                        eventName: formDate.eventName1,
                                        eventDate: formDate.eventDate1,
                                        eventTime: {
                                            start: formDate.timeStart1,
                                            end: formDate.timeEnd1,
                                            timeZone: formDate.timeZone1
                                        },
                                        place: formDate.place1,
                                        street: formDate.street1,
                                        link: formDate.linkMap1
                                    },
                                    event2: {
                                        eventName: formDate.eventName2,
                                        eventDate: formDate.eventDate2,
                                        eventTime: {
                                            start: formDate.timeStart2,
                                            end: formDate.timeEnd2,
                                            timeZone: formDate.timeZone2
                                        },
                                        place: formDate.place1,
                                        street: formDate.street2,
                                        link: formDate.linkMap2
                                    }
                                }
                            } />
                        </EditUndangan>

                        <EditUndangan sectionName='Story' onEdit={ModalCouple.toggleChange} formComponent={<FormJourney invitationId={invitation?.id} form={formJourney} onChange={handleChangeArrayForm} data={invitation?.detail?.story} />} >
                            <SectionJourney themeName={FAKE_DATA.themeName} data={formJourney} />
                        </EditUndangan>

                        <EditUndangan sectionName='Galeri' onEdit={ModalCouple.toggleChange} formComponent={<FormGalery invitationId={invitation?.id} form={formGalery} onChange={handleChangeForm} data={invitation?.detail?.gallery} />} >
                            <SectionAglimps isEdit themeName={FAKE_DATA.themeName} data={formGalery} />
                        </EditUndangan>

                        <EditUndangan sectionName='Wedding Gift' onEdit={ModalCouple.toggleChange} formComponent={<FormGift invitationId={invitation?.id} form={formGift} onChange={handleChangeArrayForm} data={invitation?.detail?.gift} />} >
                            <SectionShareLove themeName={FAKE_DATA.themeName} data={formGift} />
                        </EditUndangan>
                        <EditUndangan sectionName='RSVP' formComponent={<FormHome form={formHome} onChange={handleChangeForm} />} >
                            <SectionRsvp themeName={FAKE_DATA.themeName} />
                        </EditUndangan>
                        <EditUndangan sectionName='Thanks' onEdit={ModalCouple.toggleChange} formComponent={<FormThanks invitationId={invitation?.id} form={formThanks} onChange={handleChangeForm} data={invitation?.detail?.thanks} />} >
                            <SectionFooter themeName={FAKE_DATA.themeName} data={formThanks} />
                        </EditUndangan>
                    </section>
                </>
            ) : (
                <>
                    <section className='grid lg:grid-cols-3 md:grid-cols-2 gap-x-10 gap-y-4 px-10 mt-7'>
                        {new Array(9).fill(null).map((v, i) => (
                            <div key={'shimer' + i} className='bg-neutral-100 border-[1px] rounded-2xl flex flex-col items-center gap-y-2 h-[93px] justify-center skeleton' />
                        ))}
                    </section>
                    <section className='flex flex-col gap-7 mt-7'>
                        <div className='skeleton h-[70px] rounded-xl' />
                        <div className='skeleton h-[70px] rounded-xl' />
                    </section>
                </>
            )}


        </main >
    )
}

export default Page