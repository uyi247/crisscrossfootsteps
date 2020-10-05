import React, { useState } from "react";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  const [contact, setContact] = useState("");

  const onHandleChange = (e) => {
    const value = e.target.value;

    setContact({
      ...contact,
      [e.target.name]: value,
    });
  };
  const handleSubmitForm = () => {
    console.log("===========", contact);
  };
  return (
    <div className="contactPage">
      <h1 className="page_title">Contact us</h1>
      {/* <hr className="divider" /> */}
      <p className="intro">
        Have any questions, comments, feedback, or just want to say hi? I’d love
        to hear from you! A few notes:
      </p>
      <div className="list-holder">
        <ul>
          <li>
            If you’re suffering from anxiety but dreaming of seeing the world, I
            recommend jumping on a plane and doing just that. There is something
            soul refreshing with traveling the planet.
          </li>
          <li>
            If you’re looking for advice with your travel to places listed on
            this page, feel free to reach out with your questions
          </li>
        </ul>
      </div>
      <div className="form">
        <p>Name</p>
        <input name="name" onChange={onHandleChange} />
        <p>Email</p>
        <input name="email" onChange={onHandleChange} />
        <p>Subject</p>
        <input name="subject" onChange={onHandleChange} />
        <p>Comment or Message *</p>
        <textarea name="email" className="textarea" onChange={onHandleChange} />
        <button onClick={handleSubmitForm}>Submit</button>
      </div>
    </div>
  );
};
export default ContactUsPage;
