'use client'

import { ReactNode, useState } from "react"
import { GridIcon, IconEye, IconPencil } from "../../../public/assets/iconSVG"
import useToogle from "@/hooks/useToggle"

interface EditUndanganProps {
    children: React.ReactNode,
    sectionName: string,
    onEdit?: () => void,
    formComponent: ReactNode,
}

function EditUndangan({ children, sectionName, onEdit, formComponent }: EditUndanganProps) {
    const [isEdit, setIsEdit] = useState(false)
    const isPreview = useToogle();

    return (
        <>
            <div className='bg-neutral-100 border-[1px] border-neutral-200 flex p-5 rounded-xl gap-10'>
                <GridIcon />
                <h2 className='flex-1 text-blue-500'>{sectionName}</h2>

                {isPreview.value && !!onEdit && (
                    <button onClick={() => { setIsEdit(!isEdit); onEdit() }}>
                        <IconPencil />
                    </button>
                )}
                <button onClick={isPreview.toggleChange}>
                    <IconEye />
                </button>
            </div>
            {(isPreview.value) && children}

            {isPreview.value && isEdit && formComponent}
        </>
    )
}

export default EditUndangan