import { useState } from "react";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState("");
  const handSubmit = (e) => {
    e.preventDefault();
    setName(
      e.target.elements.firstName.value + " " + e.target.elements.lastName.value
    );
  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handSubmit}>
        <label>
          First Name :
          <input name="firstName" required type="text" />
        </label>
        <br></br>
        <label>
          Last Name :
          <input name="lastName" required type="text" />
        </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      {name.length > 0 && <h3>Full Name : {name}</h3>}
    </div>
  );
}
