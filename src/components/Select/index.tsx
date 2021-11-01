import * as C from "./styles";
import React, { useState, useEffect, FormEvent } from "react";
import api from "../../services/api";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


import { IList } from "../../pages/Listagem";

const Select: React.FC = (props: any) => {
  const [select, setSelect] = useState("");
  
  const buscar = async (value: string) => {
    const { data } = await api.get<IList[]>(`?${value}`);
    props.setLists(data);
    console.log(buscar);
  };


  const listSelect = (e: any) => {
    e.preventDefault(); 
    //@ts-ignore
    setSelect(e.target.value);
    console.log(listSelect)
  };

  useEffect(() => {
    (async () => {
      const value = encodeURIComponent(select);
      if (value) {
        await buscar(value);
      }
    })();
  }, [select]);
  console.log(select);
    
  

 const Valores = [{
   value: "/",
   label: "todos",
   
 },
 {
  value: "by_name",
  label: "Nome",
  
},
{
  value: "by_city",
  label: "Cidade",
  
}
]
 

  return (
    <div className="container">
      <C.Container>
      <TextField style={{ width: "300px", height: "35px"}}
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
