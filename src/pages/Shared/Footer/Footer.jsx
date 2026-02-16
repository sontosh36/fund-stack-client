import React from "react";
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import footerLogo from "../../../assets/bank logo.png"
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center p-5 md:p-18">
      <aside>
        <img className="" src={footerLogo} alt="" />
        <h3 className="text-xl md:text-2xl lg:text-4xl font-bold">
          Fund Stack
        </h3>
        <p>Fund Stack is a web-based platform that streamlines microloan applications, verification, approval workflows and repayment trackin.It monitor loan status, generate reports and maintain secure records efficiency trough a certralized, user-friendly dashboard.</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="#">
           <FaXTwitter size={30}/>
          </a>
          <a href="#">
            <FaLinkedin size={30}/>
          </a>
          <a href="#">
            <FaYoutube size={35}/>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
