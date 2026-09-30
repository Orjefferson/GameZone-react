import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="gz-navbar" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#topo">
          <img src="/img/logo.png" alt="Logo GameZone" className="gz-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-label="Abrir menu" />

        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#lancamentos">Lançamentos</Nav.Link>
            <Nav.Link href="#noticias">Notícias</Nav.Link>
            <Nav.Link href="#cta">Comunidade</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3">
            <a href="#noticias" aria-label="Pesquisar">
              <img src="/img/search.png" alt="" width="18" height="18" style={{ filter: 'invert(100%)' }} />
            </a>
            <a href="#cta" className="gz-user-btn">
              <img src="/img/user.png" alt="" width="14" height="14" style={{ filter: 'invert(100%)', marginRight: 6 }} />
              Usuário
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}