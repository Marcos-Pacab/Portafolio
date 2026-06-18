import "../styles/footer.css";

const iconPerson = "/src/assets/icons/icon-avatar.png";
const iconGmail = "/src/assets/icons/icon-gmail.png";
const iconPhone = "/src/assets/icons/icon-whatsapp.png";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo-container">
        <img
          src="/src/assets/images/mi-logo.png"
          alt="Logo"
          className="footer-logo"
        />
      </div>

      <hr className="footer-divider" />

      <div className="footer-contact-wrapper">
        <h3 className="footer-contact-title">Contacto:</h3>

        <div className="footer-contact-info">
          <span className="contact-item">
            <img src={iconPerson}></img>
            Marcos pacab
          </span>
          <span className="contact-item">
            <img src={iconGmail}></img>
            marcospacabmay@gmail.com
          </span>
          <span className="contact-item">
            <img src={iconPhone}></img>
            +52 997-108-3813
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
