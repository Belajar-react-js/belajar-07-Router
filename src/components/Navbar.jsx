import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function NavbarSipenting() {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#">
          <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201272/Assets/navbar_bfjxem.png" alt="" width={150} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 fw-medium fs-5" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link as={NavLink} to="/" exact>
              Beranda
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cekstunting">
              Cek IMT
            </Nav.Link>
            <Nav.Link as={NavLink} to="/artikel">
              Artikel
            </Nav.Link>
          </Nav>
          <Button className="mx-3" variant="outline-success">
            Masuk
          </Button>
          <Button variant="success">Daftar</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSipenting;
