import { cn } from '@/lib/utils';
import { Progress } from "@/components/ui/progress"
import { LucideIcon } from 'lucide-react';
import { Settings, Pencil, Zap, Trash2 } from "lucide-react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import React from 'react'

export type CardProps = {
    label: string;
    icon: LucideIcon;
    amount: string;
    description: string;
    style?: string;
    color?: string;
}

export type CardDebitProps = {
    title: string;
    icon: LucideIcon;
    contractedValue: string;
    parcelValue: string;
    remaningValue: string;
    totalMonth: number;
    remainingMonths: number;
    feesRate: string;
    amortSystem: "PRiCE" | "SAC";
    totalFees: string;
}

export default function Card(props: CardProps) {
    return (
        <CardContent className={props.style}>
            <section className='flex justify-between gap-2'>
                {/* Label */}
                <p className={cn(
                    "text-lg",
                    props.color
                )}>{props.label}</p>
                {/* Icon */}
                <props.icon className={cn(
                    "w-6 h-6",
                    props.color
                )} />
            </section>
            <section className='flex flex-col gap-1'>
                <h2 className='text-2xl font-semibold'>{props.amount}</h2>
                <p className='text-xs text-gray-500'>{props.description}</p>
            </section>
        </CardContent>
    )
}

export function CardDebit(props: CardDebitProps) {
    return (
        <CardContent >
            <section className='flex justify-between gap-2'>
                <div className='flex'>

                    <props.icon className="w-6 h-6" />
                    <p className="font-semibold pl-2">{props.title}</p>
                </div>
                <div>
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>
                                <Settings className='w-4 h-4' />
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    <Zap className='w-4 h-4 mr-2' />Amortizar
                                </MenubarItem>
                                <MenubarItem>
                                    <Pencil className='w-4 h-4 mr-2' />Editar
                                </MenubarItem>
                                <MenubarItem>
                                    <Trash2 className='w-4 h-4 mr-2' />Excluir
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>

                </div>
            </section>
            <div className='flex justify-between p-3 gap-8'>
                <section className='flex  w-2/3'>
                    <div className="grid gap-3 w-full">
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Valor Contratado
                                </span>
                                <span className='font-medium'>{props.contractedValue}</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Valor com Juros
                                </span>
                                <span className='font-medium'>{props.totalFees}</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className='text-muted-foreground'>
                                    Valor Restante
                                </span>
                                <span className='font-medium'>{props.remaningValue}</span>
                            </li >
                            <li className="flex items-center justify-between">
                                <span className='text-muted-foreground '>
                                    Valor da Parcela
                                </span>
                                <span className='font-medium'>{props.parcelValue}</span>
                            </li>

                            <li className="flex items-center justify-between">
                                <span className='text-muted-foreground '>
                                    Parcelas Restantes
                                </span>
                                <span className='font-medium'>{props.remainingMonths} meses</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='flex w-1/3 p-3'>
                    <div className="grid  w-full">
                        <div className="font-light">Detalhes das Taxas</div>
                        <ul className="grid gap-3 text-sm font-light">
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Taxa de Juros
                                </span>
                                <span>{props.feesRate}</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Sistema de Amortização
                                </span>
                                <span>{props.amortSystem}</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Prazo
                                </span>
                                <span>{props.totalMonth} meses</span>
                            </li>
                        </ul>

                    </div>
                </section>
            </div>
            <section className='p-5'>
                <Progress value={33} />
            </section>
        </CardContent>
    )
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={cn(
                "flex w-full flex-col gap-3 rounded-xl border p-5 shadow-lg",
                props.className
            )}
        />
    );
}