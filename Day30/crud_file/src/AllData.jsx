import axios from "axios";
import React ,{ useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteData from "./DeleteData";

function AllData() {
  const [allData, setAllData] = useState([]);

  const navigate = useNavigate();
 
  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);

  const url = "https://650698ca3a38daf4803e8526.mockapi.io/task/data";
 
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setAllData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
 
  const openConfirmDeleteModalHandler = (id) => {
    setShowModal(true);
    setItemToDeleteId(id);
  };
 
  const hideDeleteModalHandler = () => {
    setShowModal(false);
    setItemToDeleteId(0);
  };
 
  const confirmDeleteHandler = () => {
    axios
      .delete(`https://650698ca3a38daf4803e8526.mockapi.io/task/data/${itemToDeleteId}`)
      .then((response) => {
        setAllData((previousState) => {
          return previousState.filter((_) => _.id !== itemToDeleteId);
        });
        setItemToDeleteId(0);
        setShowModal(false);
      });
  };
 
  return (
    <>
      <DeleteData
        showModal={showModal}
        hideDeleteModalHandler={hideDeleteModalHandler}
        title="Delete Confirmation"
        body="Are you want delete this itme?"
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteData>
      <Row className="mt-2">
        <Col md={{ span: 4, offset: 4 }} >
          <Button variant="primary" onClick={() => navigate("/add-data")}>
            Add New User
          </Button>
        </Col>
      </Row>
      <Row xs={1} md={3} className="g-2">
        {allData.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Body>
                <Card.Title>NAME : {item.name}</Card.Title>
                <Card.Text>USERNAME : {item.username}</Card.Text>
                <Card.Text>EMAIL : {item.email}</Card.Text>
                <Card.Text>ADDRESS : {item.address.street}</Card.Text>
                <Card.Text>{item.address.suite}</Card.Text>
                <Card.Text>{item.address.city}</Card.Text>
                <Card.Text>{item.address.zipcode}</Card.Text>
                <Card.Text>PHONE NO : {item.phone}</Card.Text>
                <Card.Text>WEBSITE : {item.website}</Card.Text>
                <Card.Text> COMPANY : {item.company.name}</Card.Text>
                <Card.Text>{item.company.catchPhrase}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/update-data/${item.id}`)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() =>{openConfirmDeleteModalHandler(item.id)}}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
export default AllData;