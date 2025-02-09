"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

interface PaginationProps {
    page: number,
    perPage: number,
    totalRow: number
}

const Pagination = ({page, perPage, totalRow} : PaginationProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const totalPage = Math.round(totalRow / perPage)
    const hasPrevPage = page > 1
    const hasNextPage = page < totalPage
    const orderQuery = ['asc', 'desc'].includes(searchParams.get('order') as string) ? `&order=${searchParams.get('order')}` : '&order=asc'

    return (
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-xs" aria-label="Pagination">
            {hasPrevPage && (
                <>
                    <a
                        onClick={(e) => {
                            e.preventDefault()
                            router.push(`?page=${page-1}${orderQuery}`)
                        }}
                        href=""
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-green-400 focus:z-20 focus:outline-offset-0">
                        <span className="sr-only">Previous</span>
                        <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a
                        onClick={(e) => {
                                e.preventDefault()
                                router.push(`?page=1$${orderQuery}`)
                            }}
                        href=""
                        className="relative inline-flex items-center px-2 py-2 text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-green-400 focus:z-20 focus:outline-offset-0">
                        First
                    </a>
                </>
            )}
            
            <a 
                onClick={(e) => e.preventDefault()}
                href="" 
                aria-current="page" 
                className="relative z-10 inline-flex items-center bg-green-400 px-4 py-2 text-sm font-semibold text-gray-900 focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {page}
            </a>
            {hasNextPage && (
                <>
                    <a
                        onClick={(e) => {
                                e.preventDefault()
                                router.push(`?page=${totalPage}${orderQuery}`)
                            }}
                        href=""
                        className="relative inline-flex items-center px-2 py-2 text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-green-400 focus:z-20 focus:outline-offset-0">
                        Last
                    </a>
                    <a
                        onClick={(e) => {
                                e.preventDefault()
                                router.push(`?page=${page+1}${orderQuery}`)
                            }}
                        href=""
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-green-400 focus:z-20 focus:outline-offset-0">
                        <span className="sr-only">Next</span>
                        <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </a>
                </>
            )}
        </nav>
    )
}

export default Pagination