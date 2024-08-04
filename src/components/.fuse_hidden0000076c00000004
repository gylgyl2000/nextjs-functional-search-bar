'use client';
 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useDebounce, useDebouncedCallback } from 'use-debounce';
import { Input } from './ui/input';
 
export function Search({ placeholder }: { placeholder: string}) {
    // const router = useRouter();
    // const initialRender = useRef(true);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    // const [inputValue, setValue] = useState(search)

    // const [query] = useDebounce(inputValue, 750);
    // console.log(query)
    // useEffect(() => {
    //     if (initialRender.current) {
    //         initialRender.current = false;
    //         return;
    //     }
    
    //     if (!query) {
    //         router.push("/");
    //     } else {
    //         router.push(`?search=${query}`);
    //     }
    // }, [query]);

    const handleSearch = useDebouncedCallback((term: string) => {
        console.log(`Searching... ${term}`);
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300)
    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const inputValue = event.target.value
    //     setValue(inputValue)
    // }
    
    // const handleSearch = () => {
    //     const params = new URLSearchParams(searchParams);
    //     if (inputValue) {
    //         params.set('query', inputValue);
    //     } else {
    //         params.delete('query');
    //     }
    //     replace(`${pathname}?${params.toString()}`);
    // }

    // const handleKeyPress = (event: { key: any }) => {
    //     if (event.key === "Enter") return handleSearch()
    // }
    
    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <Input
                type='text'
                // className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm text-black outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                // value={inputValue}
                // onChange={(e) => {setValue(e.target.value)}}
                onChange={(e) => {handleSearch(e.target.value);}}
                // onChange={handleChange}
                // onKeyDown={handleKeyPress}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
    );
}