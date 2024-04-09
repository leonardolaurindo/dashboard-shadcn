import { cn } from '@/lib/utils';
import { Progress } from "@/components/ui/progress"
import { ChevronRight, Dot, HandCoins, Home, LucideIcon } from 'lucide-react';
import { Pencil, Zap, Trash2 } from "lucide-react";
import React from 'react'
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Separator } from './ui/separator';

export type CardProps = {
    label: string;
    icon: LucideIcon;
    amount: string;
    description?: string;
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

export type CardParcelsProps = {
    debtName: string;
    debtValue: number;
    debtMonth: number;
    remaningMonth: number;
}

export default function CardInfo(props: CardProps) {
    return (
        <CardContent className={cn(
            "text-lg",
            props.style
        )}>
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

export function CardInfoSmall(props: CardProps) {
    return (
        <CardContent className="flex-row text-md p-3 gap-1">
            <section className=' justify-between gap-2 w-full '>
                {/* Label */}
                <p className="text-lg font-light sm:text-sm lg:text-lg sm:text-clip">{props.label}</p>
                <div className='flex flex-col gap-1 ml-2'>
                    <h2 className='text-2xl font-semibold sm:text-sm lg:text-2xl'>{props.amount}</h2>
                </div>
            </section>
            {/* Icon */}
            <section className='inline-block align-middle mt-2'>
                <div className={`${props.style} rounded-full p-2`}>
                    <props.icon className={`${props.color} w-8 h-8 sm:w-6 sm:h-6`} />
                </div>
            </section>

        </CardContent >
    )
}

export function CardDebit(props: CardDebitProps) {
    return (
        <CardContent className="mb-4 shadow-md shadow-black/25">
            <section className='gap-2'>
                <div className='flex pb-2'>

                    <props.icon className="w-6 h-6" />
                    <p className="font-semibold pl-2">{props.title}</p>
                </div>
                <div className=''>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" className='transition ease-in-out duration-1000 mr-2 text-hunas hover:bg-white hover:shadow-md hover:shadow-hunas hover:text-hunas
                    sm:shadow-lg'>
                                    <Zap className="h-4 w-4" /> <span className='hidden ml-2 sm:inline-block'>Amortizar</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className='inline-block sm:hidden'>
                                <p>Amortizar</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" className='mr-2'>
                                    <Pencil className="h-4 w-4" /> <span className='hidden ml-2 sm:inline-block'>Editar</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className='inline-block sm:hidden'>
                                <p>Editar</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" className='mr-2'>
                                    <Trash2 className="h-4 w- " /> <span className='hidden ml-2 sm:inline-block'>Deletar</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className='inline-block sm:hidden'>
                                <p>Deletar</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </section>
            <div className='p-3'>
                <section className=''>
                    <div className="grid">
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
                <div className='pt-2'>
                    <Separator className="my-2" />
                </div>
                <section className='p-3'>
                    <div className="grid">
                        <div className="font-light mb-2">Detalhes das Taxas</div>
                        <div className='p-2'>
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
                    </div>
                </section>
            </div>
            <section className='p-5'>
                <Progress value={33} />
            </section>
        </CardContent>
    )
}

export function CardParcels(props: CardParcelsProps) {
    return (
        <section className='transition ease-in-out duration-500 grid grid-cols-3 border border-white hover:shadow-sm hover:shadow-black/15 rounded-2xl p-2'>
            <div className='col-span-2'>
                <div className='flex bg-blend-color-burn'>
                    <p className='truncate'>• {props.debtName}</p>
                </div>
                <div>
                    <span className='font-light text-muted-foreground text-sm'>Parcela {props.debtMonth}</span><span className='hidden sm:inline sm:ml-1 font-light text-muted-foreground text-sm'>de {props.remaningMonth}</span><span className='font-light text-muted-foreground text-sm ml-3 sm:hidden'>Valor: R$ {props.debtValue}</span>
                </div>
            </div>
            <div className='grid justify-items-end align-middle'>
                <p className='hidden sm:inline'>R$ {props.debtValue}</p>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" className='mr-2 text-black hover:shadow-sm hover:shadow-green-800/80 hover:bg-white  hover:text-green-800'>
                                <HandCoins className='mt-2 mb-2 mr-1 w-4 h-4' />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Pagar</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </div>
        </section>
    )
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={cn(
                "flex w-full flex-col gap-3 rounded-xl border p-5 shadow-lg bg-white",
                props.className
            )}
        />
    );
}