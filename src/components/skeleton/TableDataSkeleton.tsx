import React from 'react'

function TableDataSkeleton({ row = 3, col = 1 }: { row: number, col: number }) {
    return (
        <>
            {new Array(row).fill(0).map((_, index) => (
                <tr key={index}>
                    {new Array(col).fill(0).map((_, index_col) => (
                        <td key={index + '' + index_col} className='p-1'>
                            <div className='skeleton'></div>
                        </td>
                    ))}
                </tr>
            ))}
        </>
    )
}

export default TableDataSkeleton