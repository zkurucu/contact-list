import { useState, useEffect } from "react";

import "./styles.css";

import Form from "./Form";
import List from "./List";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Zafer",
      phone_number: 1231235,
    },
    {
      fullname: "Mehmet",
      phone_number: 2421412,
    },
    {
      fullname: "Ayşe",
      phone_number: 8979782,
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
