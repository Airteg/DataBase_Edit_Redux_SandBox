import React, { useState } from "react";
import AddUser from "../container/AddUser";
import UserList from "../container/UserList";

export default function App() {
  // const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      <AddUser />
      <UserList />
    </div>
  );
}
