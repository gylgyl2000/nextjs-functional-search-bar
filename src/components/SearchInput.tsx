// 'use client'

import { useRouter } from "next/navigation"
import { useState, ChangeEvent } from "react"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export const SearchInput = ({ defaultValue }: iDefault) => {
    const router = useRouter()
    const [inputValue, setValue] = useState(defaultValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value
        setValue(inputValue)
    }

    const handleSearch = () => {
        if (inputValue) return router.push(`/?q=${inputValue}`)
        if (!inputValue) return router.push("/")
    }

    const handleKeyPress = (event: { key: any }) => {
        if (event.key === "Enter") return handleSearch()
    }

    return (
        <div className="search__input border-[2px] border-solid border-slate-500 flex flex-row items-center gap-5 p-1 rounded-[15px]">
            <label htmlFor="inputId" className="size-6 text-slate-500"><MagnifyingGlassIcon /></label>
            <input type="text"
                id="inputId"
                placeholder="Entrez un mot-clé"
                value={inputValue ?? ""}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                className="bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3" />
        </div>
    )
}