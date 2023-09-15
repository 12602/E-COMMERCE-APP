import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Search = () => {
  const [name, setName] = useState("");
  const search = () => {};
  return (
    <div className="m-2 p-2  d-flex align-items-center justify-content-center ">
      <div className=" d-flex form-group text-center align-items-center ">
        <Form.Control
          type="email"
          style={{ width: "50vw" }}
          placeholder="Enter product"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={search}>Search</Button>
      </div>
    </div>
  );
};

export default Search;
