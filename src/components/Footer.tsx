import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="bottom-copyright">
        <p>Akame © 2024 All Rights Reserved.</p>
      </div>
      <div className="social-icons-area">
        <ul className="social-icons">
    <li><a href="https://www.linkedin.com/in/bisolaodusanwo/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
    <li><a href="https://github.com/bisolaodusanwo"><FontAwesomeIcon icon={faGithub} /></a></li>
    <li><a href="https://www.instagram.com/abizcodes?igsh=Z215Z3k2bXRjZ2ln"><FontAwesomeIcon icon={faInstagram} /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
