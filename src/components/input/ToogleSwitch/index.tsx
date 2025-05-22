'use client'
import './toogleswitch.css'

function InputToogleSwitch({ value, onChange }: { value: boolean, onChange: (value: boolean) => void }) {
    return (
        <label className="switch">
            <input checked={value} onChange={(e) => onChange(e.target.checked)} type="checkbox" />
            <span className="slider round"></span>
        </label>
    )
}

export default InputToogleSwitch