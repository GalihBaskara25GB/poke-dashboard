"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Order = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    return (
        <select 
            name="order" 
            id="order" 
            className="h-10 w-[110px] px-2 rounded text-slate-800 focus:outline-none"
            onChange={(e) => {
                const query = `?page=${searchParams.get('page') ?? 1}&order=${e.currentTarget.value}`
                router.push(query)
            }}>
            <option value="asc">#ID Asc</option>
            <option value="desc">#ID Desc</option>
        </select>
    )
}

export default Order