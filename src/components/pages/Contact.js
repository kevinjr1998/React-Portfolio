import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import validateEmail  from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;

    }

    if ( !userName ) {
      setErrorMessage('Please enter a name');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;

    }

    if ( !message ) {
      setErrorMessage('Please enter a message');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;

    }


    alert(`Message has been sent!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className = "d-inline-flex flex-wrap flex-column px-5 w-90">
      <h3 className = "p-2">Contact Page</h3>
      <form className="form d-inline-flex flex-wrap flex-column w-90 ">
        <div className = "form-group p-2"> 
        <label htmlFor="nameInput"> Enter Your Name</label>
      <input
          value={userName}
          name="userName"
          className = "form-control"
          onChange={handleInputChange}
          type="text"
          id="nameInput"
          placeholder="Name "
        />
        </div>
        <div className = "form-group p-2">
        <label htmlFor="emalInput"> Enter Your Email: </label>

        <input
          value={email}
          className = "form-control"
          name="email"
          onChange={handleInputChange}
          type="email"
          id = "emalInput"
          placeholder="Email"
        />
        </div>
        <div className = "form-group p-2">
        <label htmlFor="messageInput"> Enter a Message: </label>

        <textarea
          value={message}
          name="message"
          className = "form-control"
          onChange={handleInputChange}
          type="text"
          id="messageInput"
          placeholder="Enter A Message"
          rows = "3"
        />
        </div>
        <button type="button" className = "btn btn-primary" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div className = "py-2">
          <p className="error-text text-danger">{errorMessage}</p>
        </div>
      )}
        <br />
        <div className = " d-flex flex-wrap">
            <p className = "p-2 text-center"> Mobile Number: 07597 087862 </p>
            <p className = "p-2 text-center"> Email: <a href="mailto:kevinryner@yahoo.co.uk"> kevinryner@yahoo.co.uk </a></p>
        </div>
        
    </div>
  );
}

export default Contact;