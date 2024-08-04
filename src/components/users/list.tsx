'use client'

import { ProfileCard } from "@/components/ProfileCard"
// import { Search } from "../search"
import { useEffect, useState } from "react"
import { Users } from "@/lib/users"

export default function UsersList({ query }: { query: string }) {

    const [userProfileData, setUserProfileData] = useState<UserProfile[]>([])
    console.log(query)

    useEffect(() => {
        const handleSearch = () => {
            const findUser = Users.filter((user) => {
                if (query) {
                    return (
                        user.identification.full_name.toLowerCase().includes(query.toLowerCase()) ||
                        user.employment.occupation.toLowerCase().includes(query.toLowerCase()) ||
                        user.online_presence.username.toLowerCase().includes(query.toLowerCase()) ||
                        user.contact_information.email_address.toLowerCase().includes(query.toLowerCase())
                    )
                } else {
                    return true
                }
            })
            setUserProfileData(findUser)
        }
        handleSearch()
    }, [])
    
    const totalUsers = userProfileData.length

    return (
        <div className="mt-8">
            <p className="mb-10 ">Affichage de {totalUsers} {totalUsers > 1 ? "utilisateurs" : "utilisateur"}</p>
            {totalUsers === 0 ? <p>Aucun résultat</p> : (
                <div className="m-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center gap-8">
                    {userProfileData.map((user, index) => (
                            <div key={index}>
                                <ProfileCard
                                    name={user.identification.full_name}
                                    role={user.employment.occupation}
                                    photo={user.profile_photo["256x256"]}
                                    email={user.contact_information.email_address}
                                    username={user.online_presence.username}
                                />
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
    )
}