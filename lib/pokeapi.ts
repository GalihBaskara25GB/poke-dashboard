export const getPokemons = async ({ page = 0, limit = parseInt(process.env.PAGINATION_PER_PAGE ?? '25') }: {
    page?: number
    limit?: number
}) => {
    try {
        const res = await fetch(`${process.env.POKEAPI_URL}pokemon?limit=${limit}&offset=${(page - 1) * limit}`)
        if (res.status === 404) {
            return []
        }
        if (res.status === 500) {
            throw new Error("Error: Failed to fetch all pokemon data");
        }
        const data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        throw new Error("Error: Failed to fetch all pokemon data");
    }
}

export const getPokemonByName = async (name: string) => {
    try {
        const res = await fetch(`${process.env.POKEAPI_URL}pokemon/${name}`)
        if (res.status === 404) {
            return []
        }
        if (res.status === 500) {
            throw new Error("Error: Failed to fetch pokemon data by name");
        }
        const data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        throw new Error("Error: Failed to fetch pokemon data by name");
    }
}

export const getPokemonTypes = async () => {
    try {
        const res = await fetch(`${process.env.POKEAPI_URL}type`)
        if (res.status === 404) {
            return []
        }
        if (res.status === 500) {
            throw new Error("Error: Failed to fetch pokemon types data");
        }
        const data = await res.json()
        return data.results
    } catch (e) {
        console.log(e)
        throw new Error("Error: Failed to fetch pokemon types data");
    }

}

export const getPokemonByType = async (type: string) => {
    try {
        const res = await fetch(`${process.env.POKEAPI_URL}type/${type}`)
        if (res.status === 404) {
            return []
        }
        if (res.status === 500) {
            throw new Error("Error: Failed to fetch pokemon data by type");
        }
        const data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        throw new Error("Error: Failed to fetch pokemon data by type");
    }
}