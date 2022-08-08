import { ChangeEvent, useState } from "react";
import { Loading } from "../components/Loadin";
import { usePokemon } from "../hooks/usePokemon";
import { Pokemon } from "../interfaces/fetchAllPokemonResponse";


export const HomePages = () => {
  //6paso llamamos el hook aqui regla de hooks deben ir siempre arriba  .......paso18 traemos nuestro hook
  //usePokemon();

  const {isLoading, pokemons} = usePokemon(); //18.2

  //paso 23
  const [currentPage, setCurrentPage] = useState(0);

  //paso 26
  const [search, setSearch] = useState('');

  //paso 20
  // if( isLoading ){
  //   return(
  //     
  //   )
  // }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //AQUI EMPEZO LA PAGUINACION
//paso 21
  const filterredPokemons = (): Pokemon[] => {
//paso 28
    if(search.length === 0)

    //return pokemons.slice(0,5); 21.1
    //paso 24 agregar currentpage
    return pokemons.slice(currentPage, currentPage + 5);

      //paso 29
    //si hay algo en la caja de text 
    const filtered = pokemons.filter( poke => poke.name.includes(search) );
    return filtered.slice( currentPage, currentPage +5 );




  }

  //paso 25 y crear input y su estado

  const nextPage = () =>{
    //paso 30
    if(pokemons.filter( poke => poke.name.includes(search) ).length > currentPage + 5 )
    setCurrentPage(currentPage + 5)
  }

  const prevPage = () => {
    if(currentPage === 0 ) return;
    setCurrentPage(currentPage -5 )
  }
  
//paso 27 agregamos value y onchange al input y miramos el tipo de elemnto que trae onChange={(event) => setSearch(event.target.value)}

const onSearchChange = ({ target } : ChangeEvent<HTMLInputElement>) => {

  setCurrentPage(0);
  setSearch( target.value );

}



  return (
    <div className='mt-5'>
      <h1>Listado de Pokemons</h1>
      <hr />
      
      <input 
      type='text'
      className="mb-2 form-control"
      placeholder="Buscar Pokemon"
      value={ search }
      onChange={onSearchChange}
      />
        {
          //paso22 crear botones y hacer estado al estado
        }
      <button className="btn btn-primary" onClick={ prevPage }>
        Anteriores
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={nextPage}>
        Siguiente
      </button>

      <table className="table">
        <thead>
          <tr>
            <th style={{ width: 100}}>ID</th>
            <th style={{ width: 150}}>Nombre</th>
            <th >Imagen</th>
          </tr>
        </thead>
        { //paso 19
        }
        <tbody>
          {
            //pokemons.map(({id, name , pic}) => ( paso21 cambiar pokemons por filterrespokemons
            filterredPokemons().map(({ id, name, pic }) => (

              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                  <img
                    src={pic}
                    alt={name}
                    style={{ height: 100 }}
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>


      {//CONTINUA PASO 20
      }


      {
        isLoading && <Loading />
      }

    </div>
  )
}

