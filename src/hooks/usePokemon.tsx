import { useEffect, useState } from "react";
import { fetchAllPokemon } from "../helpers/fetchAllPokemons";
import { Pokemon } from "../interfaces/fetchAllPokemonResponse";

// 1 paso
export const usePokemon = () =>{

    const [isLoading, setisLoading] = useState(true);
    //paso16
    const [pokemons, setpokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        //carga de los pokemons
        //5paso
        fetchAllPokemon()//paso 17
        .then( pokemons => {
            setisLoading(false);
            setpokemons( pokemons ) 

        })
    }, [])
    return{
        isLoading,
        pokemons, // paso17.2
    }
}

