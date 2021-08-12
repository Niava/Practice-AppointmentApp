import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
      Name:
      <input 
        type = "text" 
        value = {name} 
        placeholder = "Name"
        onChange = {({target}) => {setName(target.value)}}
      />
      </label>
      <label>
      Phone:
      <input 
        type="tel" 
        value={phone} 
        placeholder="04XX-XXX-XXX"
        pattern = "^\(?[\d]{4}[\s-]?[\d]{3}[\s-]?[\d]{3}$"
        onChange = {({target}) => {setPhone(target.value)}}
      />
      </label>
      <label>
      Email:
      <input 
        type="email" 
        value={email} 
        placeholder="Email"
        onChange = {({target}) => {setEmail(target.value)}}
      />
      </label>
      <input type="submit" />
    </form>
  );
};
