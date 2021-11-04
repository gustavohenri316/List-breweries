import * as C from "./styles";
import React, { useEffect, useState } from "react";
import { TextField, MenuItem, IconButton } from "@mui/material";
import api from "../../services/api";
import { IList } from "../../pages/Listagem";
import { Search } from '@mui/icons-material';

export default function Seletor(props: {
  setLists: React.Dispatch<React.SetStateAction<IList[]>>;
}) {
  const [buscaPesquisa, setBuscaPesquisa] = useState("");
  const [valor, setValor] = React.useState("");

  const buscador = async (query: string) => {
    const { data } = await api.get<IList[]>(`${valor}=${query}`);
    props.setLists(data);
    console.log(buscador);
  };

  const Buscar = (e: any) => {
    e.preventDefault();
    setBuscaPesquisa(e.target.value);
    console.log(Buscar);
  };

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(buscaPesquisa);
      if (query) {
        await buscador(query);
      }
    })();
  }, [buscaPesquisa]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValor(e.target.value);
    console.log(handleChange);
  };

  const valores = [
    {
      value: "/search?query",
      label: "Todos",
    },
    {
      value: "?by_name",
      label: "Nome",
    },
    {
      value: "?by_city",
      label: "Cidade",
    },
  ];

  return (
    <>
      <C.Container>
        <TextField
          style={{ width: "200px" }}
          id="outlined-select-currency"
          select
          placeholder="Selecione"
          value={valor}
          onChange={handleChange}
        >
          {valores.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <C.Container2>
          <TextField
            className="serach"
            onChange={Buscar}
            id="searchText"
            type="search"
            placeholder="Pesquisar"
          >
            
              <Search /> 
            
          </TextField>

          {buscaPesquisa && <p>Resultados para {buscaPesquisa}...</p>}
        </C.Container2>
        <br />
      </C.Container>
    </>
  );
}
