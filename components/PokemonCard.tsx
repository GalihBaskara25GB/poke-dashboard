"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const PokemonCard = ({id, name} : {id: string, name: string}) => {
  const [isImageError, setIsImageError] = useState(false)

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-green-100 hover:m-2 hover:transition-all">
        <Image 
            className="w-full"
            src={isImageError ? `/pokeball.png` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt="Pokemon Image"
            width={100}
            height={100}
            onError={() => setIsImageError(true)}/>
        <div className="flex flex-row items-center justify-between px-6 py-4 bg-white  h-auto md:min-h-[150px] lg:h-auto">
            <div className="font-bold text-xl mb-2 text-slate-600 capitalize">{name}</div>
            <div className="font-bold text-sm mb-2 text-slate-600">#{id}</div>
        </div>
    </div>
  )
}

export default PokemonCard