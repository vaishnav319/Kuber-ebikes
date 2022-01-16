import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
          <img className="icon" src="images/icon4.png" />
        </h3>

        <p class="footer-links">
          <a href="#">Home </a>·<a href="#">Shop </a>·<a href="#">About us</a>·
          <a href="#">Become a Dealer</a>·<a href="#">Contact </a>
        </p>

        <p class="footer-company-name">Kuber © 2022</p>

        <div class="footer-icons">
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
          <a href="#">
            <LinkedInIcon />
          </a>
        </div>
      </div>

      <div class="footer-right">
        <p>Contact Us</p>

        <form action="#" method="post">
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
