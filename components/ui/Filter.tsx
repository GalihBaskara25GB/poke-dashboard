"use client"

import { redirect } from 'next/navigation'
import React from 'react'

interface FilterProps {
  pokemonTypes: [{
    name: string,
    url: string
  }],
  currentType: string
}

const Filter = ({pokemonTypes, currentType} : FilterProps) => {
    return (
        <select 
            name="filter" 
            id="filter" 
            className="h-10 w-[150px] px-2 rounded text-slate-800 focus:outline-none capitalize"
            value={currentType}
            onChange={(e) => {
                e.preventDefault()
                if (e.currentTarget.value.length > 0) {
                    redirect(`/type/${e.currentTarget.value}`)
                } else {
                    redirect('/')
                }
            }}>
            <option value="">All Type</option>
            {pokemonTypes.map(({name} : {name: string}) => {
                return (
                    <option value={name} key={name} className='capitalize'>{name}</option>
                )
            })}
        </select>
    )
}

export default Filter