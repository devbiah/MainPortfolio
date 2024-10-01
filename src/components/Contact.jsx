import '../App.css'
export default function Contact() {
  return (
    <>
      <div id="contact" className="footer-container">
        <div className="socialmedia-container">
          <h3 className="footer-title"> Contact Me: </h3>
          <div className="socialmedia">
            <a href="https://github.com/devbiah/" target="_blank">
              <img src="/github.png" alt="" />
            </a>
            <a href="mailto:emmyisilva@gmail.com">
              <img src="/email.png" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/beatriz-silva-65230b2b0/"
              target="_blank"
            >
              <img src="/linkedin.png" alt="" />
            </a>
            <a href="https://www.instagram.com/imthebiah" target="_blank">
              <img src="/instagram.png" alt="" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5548998625708"
              target="_blank"
            >
              <img src="/whatsapp.png" alt="" />
            </a>
          </div>
        </div>
        <p className="footer-text">
          Repository Link:{" "}
          <a href="https://github.com/devbiah/MainPortfolio" target="_blank">
            github
          </a>
        </p>
        <p className="footer-text">
          Template from  <a href="https://github.com/adrianhajdin/project_3D_developer_portfolio/tree/main" target='_blank'>adrianhajdin</a>
        </p>
      </div>
    </>
  );
}