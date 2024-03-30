import React from 'react'

export type SalesProps = {
    name: string;
    email: string;
    saleAmout: string
}

export default function SalesCard(props: SalesProps) {
    return (
        <div className='flex flex-wrap justify-between gap-3'>
            <section className='flex justify-between gap-3'>
                <div className='h-12 w-12 rounded-full bg-gray-100 p-1'>
                    <img width={200} height={200} src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${props.name}`} alt="Avatar" />
                </div>
                <div className='text-sm'>
                    <p>{props.name}</p>
                    <div className='text-ellipsis overflow-hidden whitespace-nowrap w-[120px] text-gray-400
                    sm:w-auto'>
                        {props.email}
                    </div>
                </div>
            </section>
            <p>{props.saleAmout}</p>
        </div>
    )
}
