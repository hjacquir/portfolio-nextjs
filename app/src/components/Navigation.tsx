'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {NavigationLinkType} from '@/src/types/NavigationLink.type'

export function Navigation({href, children}: NavigationLinkType) {
    const pathname = usePathname()

    const isActive = pathname === href || pathname.startsWith(href + '/')

    return (
        <Link href={href} className={`nav-link${isActive ? '--active' : ''}`}>
            {children}
        </Link>
    )
}