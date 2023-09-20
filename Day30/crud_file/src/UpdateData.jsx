import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
 
function UpdateFruit() {
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
 
  const { id } = useParams();
 
  const navigate = useNavigate();
 
  useEffect(() => {
    axios.get(`http://localhost:4000/data/${id}`).then((response) => {
      name.current.value = response.data.name;
      username.current.value = response.data.username;
      email.current.value = response.data.email;
      addressStreet.current.value = response.data.address.street;
      addressSuite.current.value = response.data.address.suite;
      addressCity.current.value = response.data.address.city;
      addressZipcode.current.value = response.data.address.zipcode;
      phone.current.value = response.data.phone;
      website.current.value = response.data.website;
      companyName.current.value = response.data.company.name;
      companyCatch.current.value = response.data.company.catchPhrase;
    });
  }, []);
 
  const updateFruitHandler = () => {
    var payload = {
        name: name.current.value,
        username: username.current.value,
        email: email.current.value,
        address: {
          street: addressStreet.current.value,
          suite: addressSuite.current.value,
          city: addressCity.current.value,
          zipcode: addressZipcode.current.value ? Number(addressZipcode.current.value) : 0,
        },
        phone: phone.current.value ? Number(phone.current.value) : 0,
        website: website.current.value,
        company: {
          name: companyName.current.value,
          catchPhrase: companyCatch.current.value ,
        },
      };
    axios.put(`http://localhost:4000/data/${id}`, payload).then((response) => {
        navigate("/");
    })
  };
 
  return (
    <>
      <legend>Update</legend>
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
        <Button variant="primary" type="button" onClick={updateFruitHandler}>
          Update
        </Button>
      </Form>
    </>
  );
}
export default UpdateFruit;