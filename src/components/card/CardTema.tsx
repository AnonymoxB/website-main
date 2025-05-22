import Image from 'next/image'
import Button from '../button/Button'
import { ThemeType } from '@/type/theme'
import ButtonSelectTheme from '../button/ButtonSelectTheme'

function CardTema(props: ThemeType) {
    return (
        <div className="w-full bg-white shadow-sm rounded-xl">
            <div className="w-full md:h-[227px]">
                <Image
                    src={props.image}
                    alt="tema-1"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-t-xl"
                />
            </div>
            <div className="flex p-4 gap-4">
                <div className="w-full ">
                    <span className="text-xs text-neutral-400 line-clamp-1 hover:line-clamp-none duration-300">{props.template_category.title}</span>
                    <h4 className="font-medium text-base text-neutral-900">{props.title}</h4>
                </div>
                <div>
                    <div className="flex gap-0.5 text-blue-500 text-xs font-medium bg-blue-50 pl-1 py-0.5 pr-[6px] rounded-full text-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1886_1420" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                                <rect width="14" height="14" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1886_1420)">
                                <path d="M6.38412 7.35335L6.99999 6.88333L7.60687 7.35335C7.71232 7.43712 7.8187 7.44049 7.92603 7.36346C8.03334 7.28643 8.06942 7.18547 8.03428 7.06058L7.79196 6.28429L8.43587 5.79183C8.53908 5.7118 8.56974 5.61084 8.52787 5.48894C8.48598 5.36704 8.4026 5.30608 8.2777 5.30608H7.49133L7.25462 4.55C7.2135 4.4251 7.12862 4.36266 6.99999 4.36266C6.87135 4.36266 6.78647 4.4251 6.74535 4.55L6.50864 5.30608H5.72227C5.5914 5.30608 5.50502 5.36704 5.46314 5.48894C5.42125 5.61084 5.45192 5.7118 5.55513 5.79183L6.19902 6.28429L5.95672 7.06058C5.91559 7.18547 5.95017 7.28643 6.06048 7.36346C6.17079 7.44049 6.27867 7.43712 6.38412 7.35335ZM4.48045 12.7447C4.30845 12.8052 4.15065 12.7819 4.00706 12.6746C3.86347 12.5672 3.79167 12.4257 3.79167 12.25V8.79261C3.42222 8.40671 3.13542 7.96062 2.93125 7.45433C2.72708 6.94802 2.625 6.40769 2.625 5.83333C2.625 4.61282 3.04904 3.57853 3.89712 2.73046C4.74519 1.88238 5.77948 1.45834 6.99999 1.45834C8.22049 1.45834 9.25478 1.88238 10.1029 2.73046C10.9509 3.57853 11.375 4.61282 11.375 5.83333C11.375 6.40769 11.2729 6.94802 11.0687 7.45433C10.8646 7.96062 10.5777 8.40671 10.2083 8.79261V12.25C10.2083 12.4257 10.1365 12.5672 9.99291 12.6746C9.84932 12.7819 9.69152 12.8053 9.51952 12.7447L6.99999 11.9471L4.48045 12.7447ZM6.99999 9.33333C7.97221 9.33333 8.7986 8.99305 9.47915 8.3125C10.1597 7.63194 10.5 6.80555 10.5 5.83333C10.5 4.86111 10.1597 4.03472 9.47915 3.35416C8.7986 2.67361 7.97221 2.33333 6.99999 2.33333C6.02776 2.33333 5.20137 2.67361 4.52082 3.35416C3.84026 4.03472 3.49999 4.86111 3.49999 5.83333C3.49999 6.80555 3.84026 7.63194 4.52082 8.3125C5.20137 8.99305 6.02776 9.33333 6.99999 9.33333Z" fill="#0181FF" />
                            </g>
                        </svg>
                        {props.type}
                    </div>
                </div>
            </div>
            <div className='flex gap-2'>
                <Button type='Tertiary' className='flex-1 border-[1px] border-blue-500 hover:bg-blue-400 hover:text-white'>Preview</Button>
                <ButtonSelectTheme id={props.id} />
            </div>
        </div>
    )
}

export default CardTema