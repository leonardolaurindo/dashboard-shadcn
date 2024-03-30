'use client'

import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}

export type Payment = {
    name: string;
    email: string;
    lastOrder: string;
    method: string;
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "name",
        header: "Nome",
        cell: ({ row }) => {
            return (
                <div className='flex gap-2 items-center'>
                    <img
                        className='h-10 w-10'
                        src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${row.getValue("name")}`}
                        alt="Avatar"
                    />
                    <p>{row.getValue("name")}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "lastOrder",
        header: "Ultimo Pedido",
    },
    {
        accessorKey: "method",
        header: "Pagamento"
    }
]

export const data: Payment[] = [
    {
        name: "John Doe",
        email: "john@email.com",
        lastOrder: "30/03/2024",
        method: "Cartão de Credito"
    },
    {
        name: "Alice Smith",
        email: "alice@email.com",
        lastOrder: "15/03/2024",
        method: "Paypal"
    },
    {
        name: "Bob Johnson",
        email: "bob@email.com",
        lastOrder: "13/03/2024",
        method: "Pix"
    },
    {
        name: "Bob Johnson",
        email: "bob@email.com",
        lastOrder: "13/03/2024",
        method: "Pix"
    },
    {
        name: "Bob Johnson",
        email: "bob@email.com",
        lastOrder: "13/03/2024",
        method: "Pix"
    },
    {
        name: "Bob Johnson",
        email: "bob@email.com",
        lastOrder: "13/03/2024",
        method: "Pix"
    },
    {
        name: "Bob Johnson",
        email: "bob@email.com",
        lastOrder: "13/03/2024",
        method: "Pix"
    },
    {
        name: "Bob Johnson",
        email: "bob@email.com",
        lastOrder: "13/03/2024",
        method: "Pix"
    },
    {
        name: "Bob Johnson",
        email: "bob@email.com",
        lastOrder: "13/03/2024",
        method: "Pix"
    },
    {
        name: "Bob Johnson",
        email: "bob@email.com",
        lastOrder: "13/03/2024",
        method: "Pix"
    },
    {
        name: "Bob Johnson",
        email: "bob@email.com",
        lastOrder: "13/03/2024",
        method: "Pix"
    },
]


export default function UsersPage({ }: Props) {
    return (
        <div className='flex flex-col gap-5 w-full'>
            <PageTitle title='Usuarios' />
            <DataTable columns={columns} data={data} />
        </div>
    )
}

