'use client'
import { CardInfoSmall } from "@/components/Cards";
import { CardContent, CardDebit, CardDebitProps, CardParcels, CardParcelsProps, CardProps } from "@/components/Cards";
import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { CreditCard, ChevronUp, ChevronDown, Scale } from "lucide-react";
import { useEffect, useState } from "react";

const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split('/');
    return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
};

const data: Payment[] = [
    {
        userId: "ORD001",
        title: "Nana Nenem",
        transactionType: "REVENUE",
        category: {
            title: "Categoria 1",
            transactionType: "REVENUE"
        },
        transactionDate: "30/03/2024",
        value: 345.85,
    },
    {
        userId: "ORD002",
        title: "Nana Nenem",
        transactionType: "REVENUE",
        category: {
            title: "Categoria 2",
            transactionType: "REVENUE"
        },
        transactionDate: "30/03/2024",
        value: 345.85,
    },
    {
        userId: "ORD008",
        title: "Nana Nenem",
        transactionType: "REVENUE",
        category: {
            title: "Categoria 3",
            transactionType: "REVENUE"
        },
        transactionDate: "30/03/2024",
        value: 345.85,
    },
    {
        userId: "ORD009",
        title: "Nana Nenem",
        transactionType: "REVENUE",
        category: {
            title: "Categoria 4",
            transactionType: "REVENUE"
        },
        transactionDate: "30/03/2024",
        value: 345.85,
    },
    {
        userId: "ORD010",
        title: "Nana Nenem",
        transactionType: "EXPENSE",
        category: {
            title: "Categoria 5",
            transactionType: "EXPENSE"
        },
        transactionDate: "30/03/2024",
        value: 345.85,
    },
    {
        userId: "ORD011",
        title: "Nana Nenem",
        transactionType: "REVENUE",
        category: {
            title: "Categoria 6",
            transactionType: "REVENUE"
        },
        transactionDate: "30/03/2024",
        value: 345.85,
    },
]

const cardData: CardProps[] = [
    {
        label: "Despesas Pendentes",
        amount: "R$ 324,52",
        description: "Uma diminuição de 0,8%",
        icon: ChevronUp,
        style: "bg-green-600",
        color: "text-white"
    },
    {
        label: "Despesas Pagas",
        amount: "R$ 457,69",
        description: "3,2% do total das dividsa",
        icon: ChevronDown,
        style: "bg-green-600",
        color: "text-white"
    },
    {
        label: "Total",
        amount: "R$ 987,47",
        description: "Você já quitou 30%",
        icon: Scale,
        style: "bg-green-600",
        color: "text-white"
    },
];

type Payment = {
    userId: string;
    title: string;
    transactionType: string;
    category: {
        title: string;
        transactionType: string;
    }
    transactionDate: string;
    value: number;
    essential?: boolean;
    fixe?: boolean;
    completed?: boolean;
}



// Definindo um tipo para a coluna customizada
type CustomColumnDef<TData> = ColumnDef<TData> & {
    accessorKey: keyof TData | string;
    visible?: boolean
};

const formattedData = data.map(payment => ({
    ...payment,
    transactionDate: formatDate(payment.transactionDate),
}));

const columns: CustomColumnDef<Payment>[] = [
    {
        accessorKey: "title",
        header: "Titulo",
        cell: ({ row }) => {
            return (
                <div className={cn("hidden sm:table-cell")}>
                    {row.getValue('title')}
                </div>
            );
        },
        visible: true
    },
    {
        accessorKey: "transactionType",
        header: "Tipo de Transação",
        cell: ({ row }) => {
            const transactionType: string = row.getValue('transactionType');
            const onlyWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

            // Verifica se o onlyWidth é menor que 768
            if (onlyWidth < 768) {
                return (
                    <div className={cn("w-6 h-6 rounded-full text-white", {
                        "bg-red-600": transactionType === "EXPENSE",
                        "bg-green-600": transactionType === "REVENUE"
                    })}></div>
                );
            }

            // Caso contrário, renderiza o texto normalmente
            return (
                <div className={cn("font-medium w-fit px-4 py-2 rounded-lg text-white", {
                    "bg-red-600": transactionType === "EXPENSE",
                    "bg-green-600": transactionType === "REVENUE"
                })}>
                    {transactionType}
                </div>
            );
        },
        visible: true
    },
    {
        accessorKey: "category.title",
        header: "Categoria",
        cell: ({ row }) => (
            <div className={cn("hidden sm:table-cell")}>
                {row.original.category.title}
            </div>
        ),
        visible: true
    },
    {
        accessorKey: "categoryTransactionType",
        header: "Tipo de Categoria",
        cell: ({ row }) => {
            return (
                <div className={cn("hidden sm:table-cell")}>
                    {row.original.category.transactionType}
                </div>
            );
        },
        visible: true
    },
    {
        accessorKey: "transactionDate",
        header: "Data",
        cell: ({ row }) => {
            return (
                <div className={cn("sm:table-cell")}>
                    {row.getValue('transactionDate')}
                </div>
            );
        },
        visible: true
    },
]

// Defina um objeto para mapear as chaves das colunas para seu estado de visibilidade
const initialColumnVisibility = {
    title: true,
    transactionType: true,
    'category.title': true,
    'category.transactionType': true,
    transactionDate: true,
    method: true
};

export default function Revenues() {
    const [showOrderColumn, setShowOrderColumn] = useState(true);
    const [showTransactionTypeColumn, setShowTransactionTypeColumn] = useState(true);
    const [showCategoryTitleColumn, setShowCategoryTitleColumn] = useState(true);
    const [showCategoryTransactionTypeColumn, setShowCategoryTransactionTypeColumn] = useState(true);
    const [showTransactionDateColumn, setShowTransactionDateColumn] = useState(true);
    const [showMethodColumn, setShowMethodColumn] = useState(true);
    const [onlyWidth, setOnlyWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => {
            const newWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
            setOnlyWidth(newWidth);

            setShowOrderColumn(newWidth >= 640);
            setShowTransactionTypeColumn(true); // Sempre mostra a coluna de tipo de transação
            setShowCategoryTitleColumn(true);
            setShowCategoryTransactionTypeColumn(true);
            setShowTransactionDateColumn(newWidth >= 640);
            setShowMethodColumn(newWidth >= 640);
        };

        handleResize(); // Chama a função uma vez para definir os valores iniciais
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Ajustando a visibilidade das colunas com base nas variáveis de estado
    const adjustedColumns = columns.map(col => {
        switch (col.accessorKey) {
            case 'title':
                return { ...col, visible: showOrderColumn };
            case 'transactionType':
                return { ...col, visible: showTransactionTypeColumn };
            case 'category.title':
                return { ...col, visible: showCategoryTitleColumn };
            case 'category.transactionType':
                return { ...col, visible: showCategoryTransactionTypeColumn };
            case 'transactionDate':
                return { ...col, visible: showTransactionDateColumn };
            case 'method':
                return { ...col, visible: showMethodColumn };
            default:
                return col;
        }
    });

    return (
        <div className="flex flex-col gap-2 w-full">
            <PageTitle title="Receitas" />
            <section className="grid w-full grid-cols-1 gap-1  transition-all sm:gap-x-4 sm:grid-cols-3">
                {cardData.map((d, i) =>
                    <CardInfoSmall
                        key={i}
                        amount={d.amount}
                        icon={d.icon}
                        label={d.label}
                        style={d.style}
                        color={d.color}
                    />
                )}
            </section>
            <section className="w-full mt-4">
                <CardContent className="p-0">
                    <DataTable columns={adjustedColumns.filter(col => col.visible !== false)} data={formattedData} />
                </CardContent>
            </section>
        </div>
    );
}