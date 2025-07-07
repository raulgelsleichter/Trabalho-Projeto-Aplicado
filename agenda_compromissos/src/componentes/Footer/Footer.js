import "./Footer.css";

function Footer() {
    return (
      <footer className="footer">
        &copy; {new Date().getFullYear()} Agenda Pessoal. Todos os direitos reservados.
      </footer>
    );
  }
  
  export default Footer;