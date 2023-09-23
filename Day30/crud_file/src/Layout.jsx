import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './layout.css'
 
function Layout(props) {
  return (
    <div>
        <Navbar expand="lg" variant="dark" bg="success">
          <Container className='container'>
            <Navbar.Brand >User Info</Navbar.Brand>
          </Container>
        </Navbar>
      <Container>{props.children}</Container>
    </div>
  );
}
export default Layout;