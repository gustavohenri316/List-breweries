import * as C from "./styles";
import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";
import { IList } from "../../pages/Listagem";

export default function Search(props: {
  setLists: Dispatch<SetStateAction<IList[]>>;
}) {
  const [buscaPesquisa, setBuscaPesquisa] = useState("");

  const buscar = async (query: string) => {
    const { data } = await api.get<IList[]>(`/search?query=${query}`);
    props.setLists(data);
    console.log(buscar);
  };

  const listBusca = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector("#searchText") as HTMLInputElement;
    setBuscaPesquisa(input.value);
    console.log(listBusca);
  };

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(buscaPesquisa);
      if (query) {
        await buscar(query);
      }
    })();
  }, [buscaPesquisa]);
  console.log(buscaPesquisa);

  return (
    <>
      <C.Busca>
        <form className="searchForm" onSubmit={(e) => listBusca(e)}>
          <input id="searchText" type="text" placeholder="Pesquisar" />

          
        </form>
        {buscaPesquisa && <p>Resultados para {buscaPesquisa}...</p>}
    
      <br/>
      </C.Busca>
    </>
  );
}
