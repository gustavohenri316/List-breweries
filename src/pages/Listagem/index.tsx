import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { Table } from "reactstrap";
import api from "../../services/api";
import { FaSistrix } from "react-icons/fa";

interface IList {
  id: string;
  city: string;
  name: string;
}

const Listagem: React.FC = () => {
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

  return (
    <div className="container">
      <br />
      <h1>Listagem de Cervejarias</h1>
      <br />
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Filtrar por...</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Cidade</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Nome</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <form style={{display: "flex", marginLeft:"80%"}}>
        <input type="search" id="texto" style={{ marginBottom: "0", float: "left"}} />
        <FaSistrix style={{ width: "40px" ,height: "30px",  marginLeft:"5px", marginBottom: "0"  ,cursor:"pointer", backgroundColor: "blue", borderRadius: "10px"}}/>
      </form>
      <br />
      <br />
      <br />
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
                <Button outline color="info" onClick={() => viewList(list.id)}>
                  info
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Listagem;
