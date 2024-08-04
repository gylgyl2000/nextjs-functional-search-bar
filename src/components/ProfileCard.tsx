'use client'

import Image from 'next/image'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

export const ProfileCard = ({ name, email, username, role, photo }: Readonly<UserProfileCard>) => {

    return (
        <div className="w-full bg-white rounded-[15px] border border-solid">
            <Image src={photo} alt={username} className="w-1/2 ml-auto mr-auto my-10 rounded-full border-4 border-sky-500 border-double" height={100} width={100} />
            <h2 className="text-2xl text-amber-600 text-center font-bold">{name}</h2>
            <p className='text-center text-black font-bold'>{role}</p>
            <div className="text-sm bg-slate-300 p-3 text-black mt-10">
                <p><EnvelopeIcon className='size-5 float-left mr-2' />{email}</p>
                <p>@{username}</p>
            </div>
        </div>
    )
}
