/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

import Pagination from "./ui/Pagination";
import Search from "./ui/Search";
import Filter from "./ui/Filter";
import Order from "./ui/Order";
import PokemonCard from './PokemonCard';
import { getPokemons, getPokemonTypes } from '@/lib/pokeapi';
import { redirect } from "next/navigation";
import NotFound from "@/app/not-found";

interface PokemonListProps {
    searchParams: Promise<{[key: string]: string | string[] | undefined}>,
    filterByType: boolean,
    pokemonDataByType: any,
    selectedPokemonType: string
}

const PokemonList = async ({searchParams, filterByType = false, pokemonDataByType = [], selectedPokemonType = ''}: PokemonListProps) => {
    const searchParameters = await searchParams
    let currentPage = parseInt(searchParameters.page as string || '1')
    currentPage = isNaN(currentPage) ? 1 : currentPage
    const dataPerPage = parseInt(process.env.PAGINATION_PER_PAGE as string || '25')
    
    const pokemonTypeData = await getPokemonTypes()
    const pokemonData = filterByType ? pokemonDataByType : await getPokemons({page: currentPage, limit: dataPerPage})

    const pokemons = filterByType ? pokemonData.pokemon : pokemonData.results
    const totalPokemonData = filterByType ? pokemonData.pokemon.length : pokemonData.count
    const offset = (currentPage - 1) * dataPerPage

    if (currentPage < 1 || currentPage > Math.round(totalPokemonData / dataPerPage)) {
        redirect('/')
    }

    if (searchParameters.order === 'desc') {
        pokemons.reverse()
    } else {
        pokemons.sort()
    }

    if (pokemons.length === 0) {
        return (
            <NotFound />
        )
    }

    return (
        <>
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-2 md:gap-0">
                <div className="flex flex-row h-10 grow pr-0 md:pr-5 gap-2">
                    <Search />
                </div>
                <div className="flex flex-row items-center gap-2 justify-between">
                    <Filter pokemonTypes={pokemonTypeData} currentType={selectedPokemonType} />
                    <Order />
                </div>
            </div>
            {pokemons.length > 0 && (
                <div className="flex items-end justify-items-end justify-end">
                    <Pagination page={currentPage} perPage={dataPerPage} totalRow={totalPokemonData}/>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {!filterByType && pokemons.map(({name, url} : {name: string, url: string}) => {
                    const pokemonId = url.split('/')[6]
                    return (
                        <Link href={`/pokemon/${name}`} key={pokemonId}>
                            <PokemonCard id={pokemonId} name={name} />
                        </Link>
                    )
                })}
                {filterByType && pokemons.map((pokemon: any, index: number) => {
                    if (index >= offset && index <= offset+dataPerPage) {
                        const pokemonId = pokemon.pokemon.url.split('/')[6]
                        return (
                            <Link href={`/pokemon/${pokemon.pokemon.name}`} key={pokemonId}>
                                <PokemonCard id={pokemonId} name={pokemon.pokemon.name} />
                            </Link>
                        )
                    }
                })}
            </div>
            {pokemons.length > 0 && (
                <div className="flex items-end justify-items-end justify-end">
                    <Pagination page={currentPage} perPage={dataPerPage} totalRow={totalPokemonData}/>
                </div>
            )}
        </>
    )
}

export default PokemonList