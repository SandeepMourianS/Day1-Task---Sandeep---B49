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
    axios.post("https://jsonplaceholder.typicode.com/users", payload).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <legend>Create</legend>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control placeholder="name" type="text" ref={name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Control placeholder="username" type="text" ref={username} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control placeholder="email" type="email" ref={email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Control placeholder="street" type="text" ref={addressStreet} />
          <Form.Control placeholder="suite" type="text" ref={addressSuite} />
          <Form.Control placeholder="city" type="text" ref={addressCity} />
          <Form.Control placeholder="zipcode" type="number" ref={addressZipcode} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Control placeholder="phone" type="number" ref={phone} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formWebsite">
          <Form.Control placeholder="website" type="text" ref={website} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCompany">
          <Form.Control placeholder="company" type="text" ref={companyName} />
          <Form.Control placeholder="about" type="text" ref={companyCatch} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={addDataHandler}> 
          Add
        </Button>
      </Form>
    </>
  );  
}

export default AddData;
