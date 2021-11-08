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
        
          <Button outline color="info" onClick={back} style={{backgroundColor: "#404040", border: "1px solid #404040", color: "#FFF"}}>
            Voltar
          </Button>{" "}
       
      </div>
      <br />
      
        <Card  variant="top" style={{ width: "100%", textAlign: "center", color:"#999999"}} >
        <ListGroup variant="flush">
          <ListGroup.Item><strong>ID:</strong> {list?.id}</ListGroup.Item>
          <ListGroup.Item><strong>Nome:</strong> {list?.name}</ListGroup.Item>
          <ListGroup.Item><strong>Pais: </strong>{list?.country}</ListGroup.Item>
          <ListGroup.Item><strong>Provincia:</strong> {list?.county_province}</ListGroup.Item>
          <ListGroup.Item><strong>Cidade: </strong>{list?.city}</ListGroup.Item>
          <ListGroup.Item><strong>Endereço:</strong> {list?.address_2}</ListGroup.Item>
          <ListGroup.Item><strong>Endereço 2:</strong> {list?.address_3}</ListGroup.Item>
          <ListGroup.Item><strong>Tipo de Cervejaria:</strong> {list?.brewery_type}</ListGroup.Item>
          <ListGroup.Item><strong>Criado em:</strong> {list?.created_at}</ListGroup.Item>
          <ListGroup.Item><strong>Telefone:</strong> {list?.phone}</ListGroup.Item>
          <ListGroup.Item><strong>Código Postal:</strong> {list?.postal_code}</ListGroup.Item>
          <ListGroup.Item><strong>Estado:</strong> {list?.state}</ListGroup.Item>
          <ListGroup.Item><strong>Rua:</strong> {list?.street}</ListGroup.Item>
          <ListGroup.Item><strong>Atualizado em:</strong> {list?.updated_at}</ListGroup.Item>
          <ListGroup.Item><strong>Latidute:</strong> {list?.latitude}</ListGroup.Item>
          <ListGroup.Item><strong>Longitude:</strong> {list?.longitude}</ListGroup.Item>
          <ListGroup.Item><strong>Web site:</strong> {list?.website_url}</ListGroup.Item>
        </ListGroup>
      </Card>
      
    </div>
  );
};

export default Detalhes;
