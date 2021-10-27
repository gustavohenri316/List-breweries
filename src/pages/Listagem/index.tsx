import * as C from './styles'
import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import { Table } from "reactstrap";
import api from "../../services/api";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Search from '../../components/Busca/busca';


export interface IList {
  id: string;
  city: string;
  name: string;
}

const Listagem: React.FC = (props: any) => {
  const [lists, setLists] = useState<IList[]>([]);
  const history = useHistory();
  
  useEffect(() => {
    loadList();
  }, []);

  async function loadList() {
    const { data } = await api.get<IList[]>("/");
    console.log(data);
    setLists(data);
  }
  function viewList(id: string) {
    history.push(`/detalhes/${id}`);
  }
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  const [search, setSearch] = useState("");

  const listOpcoes = [
    { label: 'Todos', },
    { label: 'Cidade', },
    { label: 'Nome', },
  ]
  
  function buscar(e: any) {
    e.preventDefault();
    history.push("/search?query=" + search);
  }
  
  return (
    <div className="container">
      <br />
      <h1>Listagem de Cervejarias</h1>
      <br />
      <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={listOpcoes}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params}  />}
        />
      </div>
      <div>
        
        
      </div>
      <br />
       
      <Search setLists={setLists} />

      <Table dark>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cidade</th>
            <th>Nome</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((list) => (
            <tr key={list.id}>
              <td>{list.id}</td>
              <td>{list.city}</td>
              <td>{list.name}</td>
              <td>
                <Button outline color="info" onClick={() => viewList(list.id)} style={{backgroundColor: "#404040", border: "1px solid #404040", color: "#FFF"}}>
                  Informações
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default withRouter(Listagem);
