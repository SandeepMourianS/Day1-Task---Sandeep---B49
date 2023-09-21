import axios from "axios";
import React, { useRef } from "react"; 
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function AddData() {
  const name = useRef("");
  const username = useRef("");
  const email = useRef("");
  const addressStreet = useRef("");
  const addressSuite = useRef("");
  const addressCity = useRef("");
  const addressZipcode = useRef("");
  const phone = useRef("");
  const website = useRef("");
  const companyName = useRef("");
  const companyCatch = useRef("");

  const navigate = useNavigate();

  const addDataHandler = () => {
    var payload = {
        name: name.current.value,
        username: username.current.value,
        email: email.current.value,
        address: {
          street: addressStreet.current.value,
          suite: addressSuite.current.value,
          city: addressCity.current.value,
          zipcode: addressZipcode.current.value,
        },
        phone: phone.current.value,
        website: website.current.value,
        company: {
          name: companyName.current.value,
          catchPhrase: companyCatch.current.value ,
        },
      };
    axios.post("https://650698ca3a38daf4803e8526.mockapi.io/task/data", payload).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <legend>Create</legend>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" ref={username} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" ref={email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" ref={addressStreet} />
          <Form.Control type="text" ref={addressSuite} />
          <Form.Control type="text" ref={addressCity} />
          <Form.Control type="number" ref={addressZipcode} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" ref={phone} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formWebsite">
          <Form.Label>Website</Form.Label>
          <Form.Control type="text" ref={website} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCompany">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" ref={companyName} />
          <Form.Control type="text" ref={companyCatch} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={addDataHandler}> 
          Add
        </Button>
      </Form>
    </>
  );  
}

export default AddData;
