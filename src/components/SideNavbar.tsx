// components/SideNavbar.tsx
'use client';

import React, { useState } from 'react';
import { Nav } from './ui/nav';
import Image from 'next/image';
import Logo01 from '../../public/LOGO-001.png';
import Logo02 from '../../public/LOGO-002.png';
import { ChevronRight, LayoutDashboard, TrendingUp, TrendingDown, CircleDollarSign, BookUp2, CircleAlert, LogOut, ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import { useWindowWidth } from '@react-hook/window-size';

export default function SideNavbar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onlyWidth = useWindowWidth();
    const mobileWidth = onlyWidth < 768;

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <>
            <div className={`relative w-${isCollapsed || mobileWidth ? '55' : '64'} border-r pl-1 px-1 pb-10 pt-[40px] bg-white transition-all`}>
                {/* Logos */}
                {isCollapsed || mobileWidth ? (
                    <div className="flex justify-center pb-4">
                        <Image src={Logo01} alt="Logo 01" width={20} />
                    </div>
                ) : (
                    <div className="pl-4 pb-4">
                        <Image src={Logo02} alt="Logo 02" width={90} />
                    </div>
                )}
                {/* Botão de Esconder Menu */}
                {!mobileWidth && (
                    <div className="absolute right-[-20px] top-2 ">
                        <Button onClick={toggleSidebar} variant="secondary" className="rounded-full p-2 bg-white text-hunas">
                            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
                        </Button>
                    </div>
                )}
                {/* Botões da Nav */}
                <Nav
                    isCollapsed={mobileWidth ? true : isCollapsed}
                    links={[
                        {
                            title: 'Dashboard',
                            href: '/',
                            icon: LayoutDashboard,
                            variant: 'hunas',
                        },
                        {
                            title: 'Receitas',
                            href: 'pages/revenues',
                            color: 'text-green-600',
                            icon: TrendingUp,
                            variant: 'hunasHover',
                        },
                        {
                            title: 'Despesas',
                            href: 'pages/expenses',
                            color: 'text-rose-700',
                            icon: TrendingDown,
                            variant: 'hunasHover',
                        },
                        {
                            title: 'Dívidas',
                            href: 'pages/debts',
                            icon: CircleDollarSign,
                            variant: 'hunasHover',
                        },
                        {
                            title: 'Taxas Competitivas',
                            href: 'pages/bestrate',
                            icon: BookUp2,
                            variant: 'hunasHover',
                        },
                        {
                            title: 'Juros Abusivos',
                            href: 'pages/abusive',
                            icon: CircleAlert,
                            variant: 'hunasHover',
                        },
                        {
                            title: 'Sair',
                            href: '/logout',
                            icon: LogOut,
                            variant: 'hunasHover',
                        },
                    ]}
                />
            </div>
        </>
    );
}
