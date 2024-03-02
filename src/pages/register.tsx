import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Nav from "../components/nav";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [plain, setPLain] = useState("");

  const notify = (text: string) => toast(text);

  const onRegister = (e: React.SyntheticEvent) => {
    e.preventDefault();

    fetch("http://localhost:3000/auth/register", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, plain }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "bad") {
          return notify(`${data.msg}`);
        }
        notify(`${data.msg}`);
      });
  };

  return (
    <div>
      <Nav />
      <h1>Register</h1>
      <ToastContainer position="top-center" autoClose={1500} />
      <form onSubmit={onRegister}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={plain}
          onChange={(e) => setPLain(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
