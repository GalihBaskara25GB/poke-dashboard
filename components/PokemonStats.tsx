"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface PokemonStatsProps {
    pokemonStats: any
}

const PokemonStats = ({ pokemonStats }: PokemonStatsProps) => {
    const [isImageError, setIsImageError] = useState(false)
    
    return (
        <div className="w-full flex flex-col gap-10 items-center justify-center mt-10">
            <div className="bg-green-100 shadow-xl flex flex-col justify-center items-center w-full md:w-[600px]">
                <div className="h-auto lg:w-[250px] flex items-center justify-center rounded-l text-center overflow-hidden ">
                    <Image 
                        className='w-full' 
                        src={isImageError ? `/pokeball.png` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonStats.id}.png`} 
                        alt={pokemonStats.name} 
                        width={100} 
                        height={100} 
                        onError={() => setIsImageError(true)} />
                </div>
                <div className="bg-white rounded-r p-4 flex flex-col justify-between leading-normal w-full">
                    <div className="mb-8">
                        <p className="text-sm text-slate-600 flex items-center font-bold">#{pokemonStats.id}</p>
                        <div className="text-slate-600 font-bold text-xl mb-2 capitalize">{pokemonStats.name}</div>
                        <p className="text-slate-600 text-base">Abilities:</p>
                        <div className="flex">
                            {pokemonStats.abilities.map((pokemonAbility: any) => (
                                <span 
                                    className="inline-flex bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 capitalize" 
                                    key={pokemonStats.name + pokemonAbility.ability.name + Math.random()}>
                                    {pokemonAbility.ability.name}
                                </span>
                            ))}
                        </div>
                    </div>
                    {pokemonStats.stats.map((pokemonStat: any) => (
                        <div className="grid grid-cols-2" key={pokemonStat.stat.name} title={`${pokemonStat.stat.name} - ${pokemonStat.base_stat}`}>
                            <div className='text-slate-600 capitalize'>{pokemonStat.stat.name}</div>
                            <div className='w-full'>
                                <div className={`w-full bg-slate-300 rounded-full h-3`}>
                                    <div className={`bg-green-600 h-3 rounded-full w-full`} style={{
                                        width: pokemonStat.base_stat
                                    }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex items-center justify-center mt-5">
                        {pokemonStats.types.map((pokemonType: any) => (
                            <span className="inline-flex bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={pokemonStats.name + pokemonType.type.name}>
                                #{pokemonType.type.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <Link href="/" className='hover:shadow-xl hover:transition-all text-slate-600 hover:text-slate-800 p-2 rounded-full px-5'>
                Back to Home
            </Link>
        </div>
    )
}

export default PokemonStats