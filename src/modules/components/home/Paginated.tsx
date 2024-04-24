import { Button } from "antd"
import React from "react"

export const PaginatedComponent: React.FC<IPaginated> = ({ setPage, fetchCharacters, setSkeleton }) => {
    return (
        <>
            {Array.from(Array(10).keys()).map((item: number) => {
                return <Button
                    type="text"
                    onClick={() => {
                        setSkeleton(true)
                        setPage(item + 1)
                        fetchCharacters()
                    }}
                    className='text-white font-rick-morty'
                >{item + 1}</Button>
            })}
        </>
    )
}