import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer has-text-white">
      <div className="container">
        <div className="columns is-multiline">
          {/* Navigation */}
          <div className="column is-one-third">
            <h3 className="title is-5 has-text-primary">Navigation</h3>
            <ul>
              <li>
                <Link href="/">
                  <span className="has-text-white">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="has-text-white">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <span className="has-text-white">Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="has-text-white">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="column is-one-third">
            <h3 className="title is-5 has-text-primary">Contact</h3>
            <p>
              <a href="mailto:zarina.admin@novaenterprice.online" className="has-text-white">
                zarina.admin@novaenterprice.online  
              </a>
            </p>
            <p>
              <a href="tel:+1(442)212-3207" className="has-text-white">
                +1(442)212-3207
              </a>
            </p>
            <p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="has-text-white"
              >
                California, USA
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div className="column is-one-third">
            <h3 className="title is-5 has-text-primary">Follow Us</h3>
            <div className="is-flex is-align-items-center is-justify-content-start">
              <a
                href="#"
                className="icon has-text-white mr-3"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                className="icon has-text-white mr-3"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="icon has-text-white" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="has-text-centered has-text-white mt-5">
          <p>© 2025 Nova Enterprise Online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
