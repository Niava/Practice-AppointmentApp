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
        placeholder="+614XX-XXX-XXX"
        pattern = "^(\+[6][1]*(\[0-9]*\|-[0-9]*-))?[0]?[1-9][0-9\- ]*$"
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
