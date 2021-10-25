import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Card } from "reactstrap";
import { useEffect, useState } from "react";
import api from "../../services/api";
import ListGroup from "react-bootstrap/esm/ListGroup";

interface ILists {
   address_2: string;
   address_3: string;
   brewery_type: string;
   city: string;
   country: string;
   county_province: string;
   created_at: Date;
   id: string;
   latitude: number;
   longitude: number;
   name: string;
   phone: number;
   postal_code: number;
   state: string;
   street: string;
   updated_at: Date;
   website_url: string;
}

const Detalhes: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [list, setList] = useState<ILists>();

  useEffect(() => {
    loadLists();
  }, []);

  function back() {
    history.goBack();
  }

  async function loadLists() {
    const { data } = await api.get<ILists>(`/${id}`);
    console.log(data);
    setList(data);
  }

  return (
    <div className="container">
      <br />
      <div className="list-header">
        <h1>Informações</h1>
        <Link to="/" className="nav-link">
          <Button outline color="info" onClick={back}>
            Voltar
          </Button>{" "}
        </Link>
      </div>
      <br />
      
        <Card style={{ width: "100%", textAlign: "center", backgroundColor:"#C0C0C0"}}>
        <ListGroup variant="flush">
          <ListGroup.Item>ID: {list?.id}</ListGroup.Item>
          <ListGroup.Item>Nome: {list?.name}</ListGroup.Item>
          <ListGroup.Item>Pais: {list?.country}</ListGroup.Item>
          <ListGroup.Item>Provincia: {list?.county_province}</ListGroup.Item>
          <ListGroup.Item>{list?.city}</ListGroup.Item>
          <ListGroup.Item>{list?.address_2}</ListGroup.Item>
          <ListGroup.Item>{list?.address_3}</ListGroup.Item>
          <ListGroup.Item>{list?.brewery_type}</ListGroup.Item>
          <ListGroup.Item>{list?.created_at}</ListGroup.Item>
          <ListGroup.Item>{list?.phone}</ListGroup.Item>
          <ListGroup.Item>{list?.postal_code}</ListGroup.Item>
          <ListGroup.Item>{list?.state}</ListGroup.Item>
          <ListGroup.Item>{list?.street}</ListGroup.Item>
          <ListGroup.Item>{list?.updated_at}</ListGroup.Item>
          <ListGroup.Item>{list?.latitude}</ListGroup.Item>
          <ListGroup.Item>{list?.longitude}</ListGroup.Item>
          <ListGroup.Item>{list?.website_url}</ListGroup.Item>
          
        </ListGroup>
      </Card>
      
    </div>
  );
};

export default Detalhes;
