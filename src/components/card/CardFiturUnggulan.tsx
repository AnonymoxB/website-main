import clsx from 'clsx'

interface CardFiturUnggulanProps {
    icon: React.ReactNode
    bgIcon: string
    title: string
    description: string
}
function CardFiturUnggulan({ icon, bgIcon, title, description }: CardFiturUnggulanProps) {
    return (
        <div className="flex flex-row md:flex-col gap-2 border-[1px] p-4 rounded w-full">
            <div className={clsx("h-[50px] w-[50px] flex items-center justify-center  rounded", bgIcon)}>
                {icon}
            </div>
            <header className='flex flex-col w-full'>
                <h2 className='text-sm font-bold text-neutral-700'>
                    {title}
                </h2>
                <p className='text-sm text-neutral-600'>
                    {description}
                </p>
            </header>
        </div>
    )
}

export default CardFiturUnggulan