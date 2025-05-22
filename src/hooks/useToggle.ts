import React, { useState } from 'react'

function useToggle() {
    const [value, setValue] = useState(false)

    function toggleChange() {
        setValue(!value)
    }

    return { value, setValue, toggleChange }
}

export default useToggle