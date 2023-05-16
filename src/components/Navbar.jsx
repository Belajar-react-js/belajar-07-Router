import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
            <Nav.Link href="#action1">Beranda</Nav.Link>
            <Nav.Link href="#action2">Layanan Kami</Nav.Link>
            <Nav.Link href="#action1">Cek IMT </Nav.Link>
            <Nav.Link href="#action2">Artikel</Nav.Link>
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
