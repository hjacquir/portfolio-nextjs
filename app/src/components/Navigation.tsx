'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {NavigationLinkType} from '@/types/NavigationLink.type'

export function Navigation({href, children, startsWith}: NavigationLinkType) {
    const pathname = usePathname()

    const isActive = pathname === href || pathname.startsWith(href + startsWith)

    return (
        <Link href={href} className={`nav-link${isActive ? '--active' : ''}`}>
            {children}
        </Link>
    )
}