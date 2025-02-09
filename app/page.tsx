import PokemonList from "@/components/PokemonList";

interface HomeProps {
    searchParams: {[key: string]: string | string[] | undefined}
}

export default async function Home({searchParams}: HomeProps) {
    return (
        <PokemonList searchParams={searchParams} filterByType={false} pokemonDataByType={[]} selectedPokemonType=''/>
    );
}
