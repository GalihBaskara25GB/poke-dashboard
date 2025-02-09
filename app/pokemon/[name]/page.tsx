import PokemonStats from '@/components/PokemonStats'
import { getPokemonByName } from '@/lib/pokeapi'
import React from 'react'
import NotFound from '../not-found'

interface PokemonProps {
    params: Promise<{name: string}>
}

const Pokemon = async ({params} : PokemonProps) => {
    const { name } = await params
    const pokemonData = await getPokemonByName(name)

    if (pokemonData.length === 0) {
        return (
            <NotFound />
        )
    } else {
        return (
            <PokemonStats pokemonStats={pokemonData} />
        )
    }
    
}

export default Pokemon