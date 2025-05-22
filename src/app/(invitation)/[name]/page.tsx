'use client'
import SectionHome from "../sections/SectionHome"
import SectionCouple from "../sections/SectionCouple"
import SectionOpen from "../sections/SectionOpen"
import { useEffect, useState } from "react"
import Nav from "../components/example/nav"
import SectionCountdown from "../sections/SectionCoutdown"
import SectionJourney from "../sections/SectionJourney"
import SectionAglimps from "../sections/SectionAglimps"
import SectionShareLove from "../sections/SectionShareLove"
import SectionRsvp from "../sections/SectionRsvp"
import SectionFooter from "../sections/Footer"

const FAKE_DATA: any = {
    themeName: "example",
    home: {
        couple_name: "Budi & Ayu",
        couple_date: '2023-02-21',
        image_cover_preview: '/theme/example/images/hero-image.png',
    },
    couple: {
        couple1: {
            name: "Budi i",
            fullName: "Budi, S.E.",
            img: "/theme/example/images/budi-image.png",
            description: "Anak pertama dari Bapak Fulan & Ibu Fulana",
            instagram: "",
            whatsapp: "",
            fatherName: "B Fulan",
            motherName: "I Fulan"


        },
        couple2: {
            name: "Ayu",
            fullName: "Ayu, S.E.",
            img: "/theme/example/images/suci-image.png",
            description: "Anak pertama dari Bapak Fulan & Ibu Fulana",
            instagram: "",
            whatsapp: "",
            nameGroom: "Fulan",
        }
    },
    countdown: {
        coverImage: '/theme/example/images/countdown-image.png',
        event1: {
            eventName: 'Akad Nikah',
            eventDate: '2023-11-30',
            eventTime: {
                start: '10:00',
                end: '11:00',
                timeZone: 'WIB'
            },
            place: 'Gedung Wedding',
            street: 'Jl. Kemerdekaan No. 1 Jakarta'
        },
        event2: {
            eventName: 'Resepsi Pernikahan',
            eventDate: '2023-11-30',
            eventTime: {
                start: '10:00',
                end: '11:00',
                timeZone: 'WIB'
            },
            place: 'Gedung Wedding',
            street: 'Jl. Kemerdekaan No. 1 Jakarta'
        }
    },
    journey: [
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
    ],
    aglimps: {
        videoUrl: {
            source: "",
            poster: "/theme/example/images/poster-video.png"
        },
        imagesUrl: [
            "/theme/example/images/galery-image.png",
            "/theme/example/images/galery-image.png",
            "/theme/example/images/galery-image.png",
            "/theme/example/images/galery-image.png",
            "/theme/example/images/galery-image.png",
        ]
    }
}

function Page() {

    const [isShowNavVisible, setIsShowNavVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const showNavElement = document.getElementById("show-nav");

            if (showNavElement) {
                const showNavRect = showNavElement.getBoundingClientRect();
                // Check if the element with id 'show-nav' is visible on the screen
                if (showNavRect.top >= 0 && showNavRect.top <= window.innerHeight) {
                    setIsShowNavVisible(true);
                } else {
                    setIsShowNavVisible(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <>
            <SectionOpen />
            <main className="hidden" id="main-content">
                <div
                    className={`nav-container ${isShowNavVisible ? "hidden" : "block"}`}
                >
                    <Nav themeName="example" />
                </div>
                <SectionHome themeName="example" data={FAKE_DATA.home} />
                <div id="show-nav">
                    <SectionCouple themeName="example" data={FAKE_DATA.couple} />
                    <SectionCountdown themeName="example" data={FAKE_DATA.countdown} />
                    <SectionJourney themeName="example" data={FAKE_DATA.journey} />
                    <SectionAglimps themeName="example" data={FAKE_DATA.aglimps} />
                    <SectionShareLove themeName="example" data={[]}/>
                    <SectionRsvp themeName="example" />
                    <SectionFooter themeName="example" data={{  imageCover: 'string',coupleName: "string", family: 'string' }}/>
                </div>
            </main>
        </>
    )
}

export default Page