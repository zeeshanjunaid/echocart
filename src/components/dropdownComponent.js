import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import faqs from "../faqs";

const DropdownComponent = () => {
  const results = [
    {
      name: "zeeshan",
    },
    { name: "sobia" },
    { name: "gurya" },
    { name: "kiran" },
    { name: "razo" },
  ];
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSeatch] = useState("");
  const onTextChange = (e) => {};
  return (
    <Form.Group controlId="search">
      <Form.Control
        onChange={onTextChange}
        onClick={() => setDisplay(!display)}
        value={search}
        type="text"
        placeholder="Search for your question"
        onChange={(e) => setSeatch(e.target.value)}
      />
      <FaSearch />
      {display && (
        <div className="autoContainer">
          {faqs.map((result, index) => {
            return (
              <a key={index} href="#">
                {result.category}
              </a>
            );
          })}
        </div>
      )}
    </Form.Group>
  );
};

export default DropdownComponent;
