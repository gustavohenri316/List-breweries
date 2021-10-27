import * as C from "./styles";
import React, { useState, useEffect, FormEvent } from "react";
import api from "../../services/api";

import { IList } from "../../pages/Listagem";

const Select: React.FC = (props: any) => {
  const [select, setSelect] = useState("");

  const listar = async (query: string)  => {
    const { data } = await api.get<IList[]>(`/?by_name=${query}`)
    props.setLists(data)
    console.log(listar)
}

  const listSelect = (e: React.FormEvent<HTMLOptionElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const select = form.querySelector("#searchText") as HTMLInputElement;
    setSelect(select.value);
    console.log(listSelect)
  };


  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(select);
      if (query) {
        await listar(query);
      }
    })();
  }, [select]);

 

  return (
    <div className="container">
      <C.Container>
        <form>
        <select>
          <option>Todos</option>
          <option onSubmit={e => listSelect (e)}>Nome</option>
          <option>Cidade</option>
        </select>
        <button>Submit</button>
        </form>
        
      </C.Container>
    </div>
  );
};

export default Select;
