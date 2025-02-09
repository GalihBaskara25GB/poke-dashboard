"use client"

import { redirect } from 'next/navigation'
import React from 'react'

const Search = () => {
  return (
    <input 
        type="text"
        className="h-full w-full px-2 rounded text-slate-800 focus:shadow-xl focus:outline-none"
        placeholder="Enter pokemon name, then type enter"
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
              redirect(`/pokemon/${e.currentTarget.value}`)
            }
          }} />
  )
}

export default Search