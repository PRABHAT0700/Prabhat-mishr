import React, { useState } from "react";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from "react-notifications";


export default function ContactMe() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here (e.g., send form data to server)

    // Show success message
    NotificationManager.success('Success message', 'Form filled successfully');

    // Clear input values
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setTopic("");
    setMessage("");
  };

  return (<>
    <NotificationContainer />
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <br />
        <p className="text-lg">
          Feel free to Contact me by submitting the form below and I will get
          back to
          <br /> you as soon as possible
        </p>
      </div>

      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>

          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>

          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>

        </div>

          <label htmlFor="choose-topic" className="contact--label">
            <span className="text-md">Choose a topic</span>
            <select
              id="choose-topic"
              className="contact--input text-md"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            >
              <option value="">Select One...</option>
              <option value="Job Offer">Job Offer</option>
              <option value="Freelancing Work">Freelancing Work</option>
              <option value="Personal meet">Personal meet</option>
            </select>
          </label>

          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>

          <label htmlFor="checkbox" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
          </label>

          <div>
            <button className="btn btn-primary contact--form--btn" type="submit">
              Submit
            </button>
          </div>

      </form>
    </section>
    </>);
}