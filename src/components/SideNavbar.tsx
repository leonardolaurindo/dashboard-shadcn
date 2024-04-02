'use client'

import React, { useState } from 'react'
import { Nav } from './ui/nav'

type Props = {}
import Image from 'next/image'
import Logo01 from '../../public/LOGO-001.png'
import Logo02 from '../../public/LOGO-002.png'

import {
    BookUp2,
    ChevronRight,
    CircleAlert,
    CircleDollarSign,
    LogOut,
} from "lucide-react"
import { Button } from './ui/button'
import { useWindowWidth } from '@react-hook/window-size'

export default function SideNavbar({ }: Props) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onlyWidth = useWindowWidth()
    const mobileWidth = onlyWidth < 768;

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed);
    }
    return (
        <>
            <div className='relative min-w-[100px] border-r pl-1 pr-8 pb-10 pt-[40px]'>
                {/* Logos */}
                {isCollapsed ?
                    <div className='flex justify-center'>
                        <Image
                            src={Logo01}
                            alt='Logo 01'
                            width={20}
                        />
                    </div>
                    :
                    <div>
                        <Image
                            src={Logo02}
                            alt='Logo 02'
                            width={90}
                        />

                    </div>
                }
                {/* Botão de Esconder Menu */}
                {!mobileWidth && (
                    <div className='absolute right-[-20px] top-2'>
                        <Button onClick={toggleSidebar} variant='secondary' className='rounded-full p-2'>
                            <ChevronRight />
                        </Button>
                    </div>
                )}
                {/* Botões da Nav */}
                <Nav
                    isCollapsed={mobileWidth ? true : isCollapsed}
                    links={[
                        {
                            title: "Dividas",
                            href: "/",
                            icon: CircleDollarSign,
                            variant: "hunas",
                        },
                        {
                            title: "Melhor Taxa",
                            href: "/bestrate",
                            icon: BookUp2,
                            variant: "hunasHover",
                        },
                        {
                            title: "Juros Abusivos",
                            href: "/abusive",
                            icon: CircleAlert,
                            variant: "hunasHover",
                        },
                        {
                            title: "Sair",
                            href: "/logout",
                            icon: LogOut,
                            variant: "hunasHover",
                        },
                    ]}
                />
            </div>
        </>
    )
}