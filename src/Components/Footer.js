import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Akshay Pratap Singh</h4>
      <h4>Copyright &copy; 2024 APS</h4>
      <div className='footerLinks'>
        <a href="https://www.linkedin.com/in/akshay-pratap-singh-84711931a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:krishnarathore2302@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/akshay_pratap_06/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer