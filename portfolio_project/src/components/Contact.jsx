import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <h3>Contact Me</h3>
      <p>Feel free to get in touch with me using the information below:</p>
      <ul>
        <li>Email: <a href="mailto:lowellcaraballo@gmail.com"><FaEnvelope /> lowellcaraballo@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/lowell-caraballo-3415bb278"><FaLinkedin /> LinkedIn Profile</a></li>
        <li>GitHub: <a href="https://github.com/LowellC86"><FaGithub /> GitHub Profile</a></li>
      </ul>
    </div>
  );
};

export default Contact;
