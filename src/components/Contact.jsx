import '../App.css';
import linkedin from '../assets/imgs/linkedin.png';
import github from '../assets/imgs/github.png';
import email from '../assets/imgs/email.png'; 
import instagram from '../assets/imgs/instagram.png';
import whatsapp from '../assets/imgs/whatsapp.png';

export default function Contact() {
  return (
    <>
      <div id="contact" className="footer-container">
        <div className="socialmedia-container">
          <h3 className="footer-title">Contact Me:</h3>
          <div className="socialmedia">
            <a href="https://github.com/devbiah/" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
            <a href="mailto:emmyisilva@gmail.com">
              <img src={email} alt="Email" />
            </a>
            <a href="https://www.linkedin.com/in/beatriz-silva-65230b2b0/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/imthebiah" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5548998625708" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </div>
        <p className="footer-text">
          Repository Link:{" "}
          <a href="https://github.com/devbiah/MainPortfolio" target="_blank" rel="noopener noreferrer">
            github
          </a>
        </p>
        <p className="footer-text">
          Template from{" "}
          <a href="https://github.com/adrianhajdin/project_3D_developer_portfolio/tree/main" target="_blank" rel="noopener noreferrer">
            adrianhajdin
          </a>
        </p>
      </div>
    </>
  );
}
