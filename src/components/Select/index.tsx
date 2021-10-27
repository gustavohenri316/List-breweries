import * as C from "./styles";
import React, { useState, useEffect, FormEvent } from "react";
import api from "../../services/api";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


import { IList } from "../../pages/Listagem";

const Select: React.FC = (props: any) => {
  const [select, setSelect] = useState("");

  const listar = async (query: string)  => {
    const { data } = await api.get<IList[]>(`/?by_name=${query}`)
    props.setLists(data)
    console.log(listar)
}

  const listSelect = (e: any) => {
    e.preventDefault(); 
    //@ts-ignore
    setSelect(e.target.value);
    console.log(listSelect)
  };


  

 const Valores = [{
   value: "todos",
   label: "todos",
   
 },
 {
  value: "Nome",
  label: "Nome",
  
},
{
  value: "Cidades",
  label: "Cidade",
  
}
]
 

  return (
    <div className="container">
      <C.Container>
      <TextField style={{ width: "200px", height: "50px"}}
          select
          value={select}
          onChange={listSelect}
          
        >
          {Valores.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </C.Container>
    </div>
  );
};

export default Select;
