'use client'

import React, { useState, useEffect, Suspense } from "react"
import { useSearchParams } from 'next/navigation'
import Users from '@/services/users'
import { ProfileCard } from "@/components/ProfileCard"
import { SearchInput } from "@/components/SearchInput"

export default function Home() {
    const [userProfileData, setUserProfileData] = useState<UserProfile[]>([])
    const searchParams = useSearchParams()
    const searchQuery = searchParams && searchParams.get("q")

    useEffect(() => {
        const handleSearch = () => {
            const findUser = Users.filter((user) => {
                if (searchQuery) {
                    return (
                        user.identification.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        user.employment.occupation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        user.online_presence.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        user.contact_information.email_address.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                } else {
                    return true
                }
            })
            setUserProfileData(findUser)
        }
        handleSearch()
    }, [searchQuery])

    const totalUser = userProfileData.length

    return (
        <section className="h-[100vh] w-screen px-[2rem] md:px-[6rem] mt-[100px]">
            <p className="mb-10 ">Affichage de {totalUser} {totalUser > 1 ? "utilisateurs" : "utilisateur"}</p>
            <Suspense>
                <SearchInput defaultValue={searchQuery} />
            </Suspense>
            <div className="mt-8">
                {totalUser === 0 ? <p>Aucun résultat</p> : (
                    <div className="m-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center gap-8">
                        {userProfileData.map(user => {
                            return (
                                <div key={user.id}>
                                    <ProfileCard
                                        name={user.identification.full_name}
                                        role={user.employment.occupation}
                                        photo={user.profile_photo["256x256"]}
                                        email={user.contact_information.email_address}
                                        username={user.online_presence.username}
                                    />
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}