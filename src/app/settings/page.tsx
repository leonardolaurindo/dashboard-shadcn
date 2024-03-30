'use client'

import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { cn } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}

export type Payment = {
    category: string;
    value: string | number | boolean
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "category",
        header: "Categoria",
    },
    {
        accessorKey: "value",
        header: "Valor",
    }
]

export const data: Payment[] = [
    {
        category: "Conta",
        value: true,
    },
    {
        category: "Notificações",
        value: false,
    },
    {
        category: "Idioma",
        value: "Portugês",
    },
    {
        category: "Tema",
        value: "Dark",
    }
]


export default function SettingsPage({ }: Props) {
    return (
        <div className='flex flex-col gap-5 w-full'>
            <PageTitle title='Configurações' />
            <DataTable columns={columns} data={data} />
        </div>
    )
}

