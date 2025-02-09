import { getPokemonByType } from '@/lib/pokeapi'
import React from 'react'
import NotFound from '../not-found'
import PokemonList from '@/components/PokemonList'

interface TypeProps {
    searchParams: Promise<{[key: string]: string | string[] | undefined}>,
    params: {name: string}
  }

const Type = async ({searchParams, params} : TypeProps) => {
    const { name } = await params
    const pokemonData = await getPokemonByType(name)

    if (pokemonData.length === 0) {
        return (
            <NotFound />
        )
    } else {
        return (
            <PokemonList searchParams={searchParams} filterByType={true} pokemonDataByType={pokemonData} selectedPokemonType={name}/>
        )
    }
    
}

export default Type