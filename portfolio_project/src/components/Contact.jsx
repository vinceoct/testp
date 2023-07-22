import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here (e.g., send data to a backend server or store it in a database)
    console.log(formData);
  };

  return (
    <div>
      <h3>Contact Me</h3>
      <p>Feel free to get in touch with me using the information below:</p>
      <ul>
        <li>Email: <a href="mailto:lowellcaraballo@gmail.com">lowellcaraballo@gmail.com</a></li>
      </ul>

      <h2>Connect on LinkedIn</h2>
      <p>You can also reach me on LinkedIn:</p>
      <a href="https://www.linkedin.com/in/lowell-caraballo-3415bb278">LinkedIn Profile</a>
    </div>
  );
};

export default Contact;
