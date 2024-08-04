'use client';

import { Search } from '../../components/search';
// import { Users } from '../../lib/users'
// import { Metadata } from 'next';
import UsersList from '../../components/users/list';
// import { Suspense, useEffect, useState } from 'react';
// import { UsersListSkeleton } from '../../components/skeletons';

// export const metadata: Metadata = {
    // title: 'Users',
// };

interface SearchParamsProps {
    searchParams?: {
        query?: string;
    };
}

export default function UsersPage({
    searchParams,
}: Readonly<SearchParamsProps>) {
    // const query = searchParams?.query || '';
    console.log(searchParams)

    const query = searchParams?.query ?? "";
    console.log(query)

    // const customers = await fetchFilteredCustomers(query);

    

    return (
        <div className="h-[100vh] w-screen px-[2rem] md:px-[6rem] mt-[100px]">
            <Search placeholder="Search customers..." />
            <span>Query: {query}</span>
            {/* <Suspense key={query} fallback={<UsersListSkeleton />}> */}
                <UsersList query={query} />
            {/* </Suspense> */}
        </div>
    )
}