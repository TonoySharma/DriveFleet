"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname();
    // console.log(pathName, 'pathName')
    const isActive = href === pathname

    return <Link href={href} className={`${isActive ? "border-b-2 border-b-red-500 text-red-600" :""}`}>
        {children}</Link>

   
};

export default NavLink;