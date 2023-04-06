import React, { useState } from 'react';

function Api() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = Object.values(formValues);
    console.log(values);
    // You can now use the values array as needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleInputChange}
        ></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Api;
