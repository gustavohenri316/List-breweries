import * as C from './styles'
import React, { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react'
import api from '../../services/api'
import { FiSearch } from "react-icons/fi";
import { IList } from '../../pages/Listagem';





export default function Search(props:   { setLists: Dispatch<SetStateAction<IList[]>>; } ) {
    const [buscaPesquisa, setBuscaPesquisa] = useState('')

    const buscador = async (query: string)  => {
        const { data } = await api.get<IList[]>(`/search?query=${query}`)
        props.setLists(data)
    }

    const listBusca = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement
        const input = form.querySelector('#searchText') as HTMLInputElement
        setBuscaPesquisa(input.value)
    }

    useEffect(() => {
        (async () => {
            const query = encodeURIComponent(buscaPesquisa)
            if (query) {
                await buscador(query)
            }
        })()
    }, [buscaPesquisa]) 

    return (
        <>
        <C.Busca>
            <form className="searchForm" onSubmit={event => listBusca (event)}>
                <input
                    id="searchText"
                    type="text"
                    placeholder="Pesquisar"
                />
                
                <button
                >
                  <FiSearch style={{color: "#FFF"}}/>
                </button>
               
            </form>
            {buscaPesquisa && <p>Resultados para {buscaPesquisa}...</p>}
            </C.Busca>
        </>
    )
}