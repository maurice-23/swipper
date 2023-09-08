import React, { Component } from "react";
import { useState } from "react";
function Form() {
  const [name, setName] = useState();
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
    }
  return (
    <div>
      <form method="get" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Form</legend>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit" disabled = {!name} id="subm"> Submit</button>
          
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
