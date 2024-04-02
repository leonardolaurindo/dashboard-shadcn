import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import React from 'react'

export type CardProps = {
    label: string;
    icon: LucideIcon;
    amount: string;
    description: string;
    style?: string;
    color?: string;
}

export default function Card(props: CardProps) {
    return (
        <CardContent className={props.style}>
            <section className='flex justify-between gap-2'>
                {/* Label */}
                <p className='text-lg'>{props.label}</p>
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