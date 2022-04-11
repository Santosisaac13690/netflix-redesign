import React from "react";
import "./navfooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <footer>
        <div className="socials">
          <a href="https://www.facebook.com/netflixus" className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/Netflix/" className="social-icons">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/netflix" className="social-icons">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.youtube.com/user/NewOnNetflix"
            className="social-icons"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>

        <div className="help-links">
          <ul>
            <li>
              <a href="https://www.netflix.com/">Audio & Subtitles</a>
            </li>
            <li>
              <a href="https://www.netflix.com/">Audio Description</a>
            </li>
            <li>
              <a href="https://www.netflix.com/">Help Center</a>
            </li>
            <li>
              <a href="https://www.netflix.com/">Gift Cards</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://www.netflix.com/">Media Center</a>
            </li>
            <li>
              <a href="https://www.netflix.com/">Investor Relations</a>
            </li>
            <li>
              <a href="https://www.netflix.com/">Jobs</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://www.netflix.com/">Terms of use</a>
            </li>
            <li>
              <a href="https://www.netflix.com/">Privacy</a>
            </li>
            <li>
              <a href="https://www.netflix.com/">Legal Notices</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://www.netflix.com/">Cookie Preferences</a>
            </li>
            <li>
              <a href="https://www.netflix.com/">Corporate Information</a>
            </li>
            <li>
              <a href="https://www.netflix.com/">Contact Us</a>
            </li>
          </ul>
        </div>

        <p className="copyright">&copy; 1997-2021, Netflix Inc.</p>
      </footer>
    </div>
  );
}

export default Footer;
