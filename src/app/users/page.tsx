
'use client'
import { useState, useEffect, Suspense } from "react"
import { ProfileCard } from "@/components/ProfileCard"
import { SearchInput } from "@/components/SearchInput"
// import { data, iProfile } from "@/services/data"
import { Users } from "@/lib/users"
import { useSearchParams } from 'next/navigation'

const UsersPage = () => {
//   const [profileData, setProfileData] = useState<iProfile[]>([])
    const [userProfileData, setUserProfileData] = useState<UserProfile[]>([])
    const searchParams = useSearchParams()
    const searchQuery = searchParams && searchParams.get("q");

    useEffect(() => {
        const handleSearch = () => {
        const findUser = Users.filter((user) => {
            if (searchQuery) {
                return (
                    user.identification.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    user.employment.occupation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    user.online_presence.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    user.contact_information.email_address.toLowerCase().includes(searchQuery.toLowerCase())
                );
            } else {
                return true;
            }
        });
        setUserProfileData(findUser);
        };
        handleSearch();
    }, [searchQuery]);

  const totalUsers = userProfileData.length;

  return (
    <section className="h-[100vh] w-screen px-[2rem] md:px-[6rem] mt-[100px]">
        <p className="mb-10 ">Affichage de {totalUsers} {totalUsers > 1 ? "utilisateurs" : "utilisateur"}</p>
        <Suspense>
            <SearchInput defaultValue={searchQuery} />
        </Suspense>
        <div className="mt-8">
            {totalUsers === 0 ? <p>Aucun résultat</p> : (
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
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
    </section>
  )
}

export default UsersPage