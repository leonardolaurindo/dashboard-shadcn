'use client'

import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { cn } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}

type Payment = {
    order: string;
    status: string;
    lastOrder: string;
    method: string;
}

const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "order",
        header: "Pedido",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            return <div className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
                "bg-red-200": row.getValue("status") === "Pendente",
                "bg-orange-200": row.getValue("status") === "Processando",
                "bg-green-200": row.getValue("status") === "Pago"
            })}>
                {row.getValue('status')}
            </div>
        }
    },
    {
        accessorKey: "lastOrder",
        header: "Data",
    },
    {
        accessorKey: "method",
        header: "Pagamento"
    }
]

const data: Payment[] = [
    {
        order: "ORD001",
        status: "Pendente",
        lastOrder: "30/03/2024",
        method: "Catão de Credito"
    },
    {
        order: "ORD002",
        status: "Processando",
        lastOrder: "30/03/2024",
        method: "Catão de Credito"
    },
    {
        order: "ORD008",
        status: "Processando",
        lastOrder: "03/03/2024",
        method: "Cartão de Crédito"
    },
    {
        order: "ORD009",
        status: "Pendente",
        lastOrder: "04/03/2024",
        method: "Transferência Bancária"
    },
    {
        order: "ORD010",
        status: "Pago",
        lastOrder: "05/03/2024",
        method: "Boleto Bancário"
    },
    {
        order: "ORD011",
        status: "Pendente",
        lastOrder: "06/03/2024",
        method: "Apple Pay"
    },
    {
        order: "ORD012",
        status: "Processando",
        lastOrder: "07/03/2024",
        method: "Google Pay"
    },
    {
        order: "ORD013",
        status: "Pendente",
        lastOrder: "08/03/2024",
        method: "Dinheiro"
    },
    {
        order: "ORD014",
        status: "Pago",
        lastOrder: "09/03/2024",
        method: "PIX"
    },
    {
        order: "ORD015",
        status: "Pendente",
        lastOrder: "10/03/2024",
        method: "Cheque"
    },
    {
        order: "ORD016",
        status: "Processando",
        lastOrder: "11/03/2024",
        method: "Venmo"
    },
    {
        order: "ORD017",
        status: "Pendente",
        lastOrder: "12/03/2024",
        method: "Bitcoin"
    },
    {
        order: "ORD018",
        status: "Pago",
        lastOrder: "13/03/2024",
        method: "Ethereum"
    },
    {
        order: "ORD019",
        status: "Pendente",
        lastOrder: "14/03/2024",
        method: "Litecoin"
    },
    {
        order: "ORD020",
        status: "Processando",
        lastOrder: "15/03/2024",
        method: "Alipay"
    },
    {
        order: "ORD021",
        status: "Pendente",
        lastOrder: "16/03/2024",
        method: "WeChat Pay"
    },
    {
        order: "ORD022",
        status: "Pago",
        lastOrder: "17/03/2024",
        method: "MB WAY"
    },
    {
        order: "ORD023",
        status: "Pendente",
        lastOrder: "18/03/2024",
        method: "Transferência Internacional"
    },
    {
        order: "ORD024",
        status: "Processando",
        lastOrder: "19/03/2024",
        method: "American Express"
    },
    {
        order: "ORD025",
        status: "Pendente",
        lastOrder: "20/03/2024",
        method: "Samsung Pay"
    },
    {
        order: "ORD026",
        status: "Pago",
        lastOrder: "21/03/2024",
        method: "Square Cash"
    },
    {
        order: "ORD027",
        status: "Pendente",
        lastOrder: "22/03/2024",
        method: "NFC"
    }
]


export default function OrdersPage({ }: Props) {
    return (
        <div className='flex flex-col gap-5 w-full'>
            <PageTitle title='Pedidos' />
            <DataTable columns={columns} data={data} />
        </div>
    )
}

