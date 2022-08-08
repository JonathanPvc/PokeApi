
//3paso

import { pokeApi } from "../api/pokemonApi";
import { FetchAllPokemonResponse, Pokemon, SmallPokemon } from "../interfaces/fetchAllPokemonResponse";

//paso 9 promesa
export const fetchAllPokemon = async() : Promise<Pokemon[]>  =>{
    const resp = await pokeApi.get<FetchAllPokemonResponse>('pokemon?limit=1500');
//obtener la data paso 8
    //resp.data.results[6]

    const smallPokemonList = resp.data.results;

    //paso 12 retornamos el arr
 return transformSmallPokemonIntoPokemon( smallPokemonList );
//console.log(resp);
}



//paso 10  trae un arreeglo y necesito transfomarlo cen el objecto del fetch
const transformSmallPokemonIntoPokemon = ( smallPokemonList : SmallPokemon[]) : Pokemon[]=>{

    //paso 11
    const pokemonArr : Pokemon[] = smallPokemonList.map( poke => {

            //paso 14 traer el id q no se encuentra en el objecto api
            const pokeArr = poke.url.split('/');
            //console.log(pokeArr) paso14paradarnoscuenta del id 
            const id = pokeArr[6];

            //paso 15 el pic vamos a sprites-----frontdefault
            const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`

        //paso 13 traer la data 
        return{
            id  : id ,
            name: poke.name,
            pic : pic,
        }
    })

    //console.log(pokemonArr)
    //return[];
    return pokemonArr;

    
}