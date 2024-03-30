'use client'
import React from 'react'
import {
    BarChart as BarGraph,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Bar
} from 'recharts'


type Props = {}

const data = [
    {
        name: "Jan",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Fev",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Mar",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Abr",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Mai",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jun",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jul",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Ago",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Set",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Out",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Nov",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Dez",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
]

export default function BarChart({ }: Props) {
    return (
        <ResponsiveContainer width={'100%'} height={350}>
            <BarGraph data={data}>
                <XAxis
                    dataKey={'name'}
                    tickLine={false}
                    axisLine={false}
                    stroke='#888888'
                    fontSize={12}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    stroke='#888888'
                    fontSize={12}
                    tickFormatter={(value) => `R$${value}`}
                />
                <Bar dataKey={'total'} radius={[8, 8, 0, 0]} />
            </BarGraph>
        </ResponsiveContainer>
    )
}