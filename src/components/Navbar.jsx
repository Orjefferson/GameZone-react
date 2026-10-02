import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="gz-navbar" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src="/img/logo.png" alt="Logo GameZone" className="gz-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-label="Abrir menu" />

        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/#lancamentos">Lançamentos</Nav.Link>
            <Nav.Link as={Link} to="/#noticias">Notícias</Nav.Link>
            <Nav.Link as={Link} to="/comunidade">Comunidade</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3">
            <Link to="/#noticias" aria-label="Pesquisar">
              <img src="/img/search.png" alt="" width="18" height="18" style={{ filter: 'invert(100%)' }} />
            </Link>
            <Link to="/comunidade" className="gz-user-btn">
              <img src="/img/user.png" alt="" width="14" height="14" style={{ filter: 'invert(100%)', marginRight: 6 }} />
              Usuário
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}