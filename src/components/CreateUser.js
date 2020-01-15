import React, { useState } from "react";


function CreateUser() {
  const [user, setUser] = useState({
    //new object
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setUser(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {user.fName} {user.lName}
      </h1>
      <p>{user.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={user.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={user.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={user.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateUser;
