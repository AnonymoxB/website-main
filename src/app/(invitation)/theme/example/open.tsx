import React from 'react'

function ExampleOpen() {
    function handleClick() {
        const getIdMainContent = document.getElementById("main-content");
        const getIdOpenSection = document.getElementById("open-section");
        if (getIdMainContent !== null) getIdMainContent.classList.remove("hidden");
        if (getIdOpenSection !== null) getIdOpenSection.classList.add("hidden")
    }

    return (
        <section
            className="min-h-screen min-w-full bg-cover bg-[url('/theme/example/images/open-image.png')] animate__animated animate__fadeInDown"
            id="open-section"
        >
            <div className="min-h-screen bg-gray-600 bg-opacity-50 flex flex-col items-center justify-center space-y-3 font-Plus-Jakarta-Sans">
                <img
                    src="./theme/example/images/Ellipse-1.png"
                    alt="elipse"
                    className="w-[203.46px] h-[203.46px] md:w-[257px] md:h-[257px] rounded-full animate__animated animate__zoomIn"
                />
                <div className="text-center lg:space-y-5">
                    <div className="text-gray-50 text-sm md:text-base font-medium font-Plus-Jakarta-Sans leading-normal">
                        The Wedding of
                    </div>
                    <h1 className="text-white lg:text-[80px] text-3xl font-bold font-Plus-Jakarta-Sans">
                        Budi & Ayu
                    </h1>
                </div>
                <div className="lg:pt-5 text-gray-50 text-base font-medium font-Plus-Jakarta-Sans leading-normal">
                    Dear Mr./Mrs./Ms
                </div>
                <h2 className="text-gray-50 text-[43.05px] font-bold font-Plus-Jakarta-Sans leading-[51.66px]">
                    Nama Tamu
                </h2>
                <span className="text-gray-50 text-base font-medium font-Plus-Jakarta-Sans leading-normal">
                    You are coridially invited to our wedding
                </span>
                <div>
                    <button
                        onClick={handleClick}
                        className="flex items-center gap-[4.67px] bg-gray-50 px-[18.69px] py-3.5 rounded-xl"
                    >
                        <img src="/public/svg/redeem.svg" alt="" />
                        <span className="text-center text-gray-700 text-sm font-semibold font-Plus-Jakarta-Sans leading-tight">
                            Open Invitation
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ExampleOpen