import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Nav from "../components/nav";

export default function Login() {
  const [email, setEmail] = useState("");
  const [plain, setPLain] = useState("");

  // const notify = (text: string) => toast(text);

  const onLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();

    axios("http://localhost:3000/auth/login", {
      method: "post",
      headers: { "Content-type": "application/json" },
      withCredentials: true,
      data: { email, plain },
      // body: JSON.stringify({ email, plain }),
    }).then((response) => {
      let a = response.headers["set-cookie"];
      // document.cookie.push(response.headers["set-cookie"]);
      console.log(a);
    });

    // fetch("http://localhost:3000/auth/login", {
    //   method: "post",
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify({ email, plain }),
    // })
    //   .then((response) => {
    //     const cookie = response.headers.getSetCookie();
    //     console.log(cookie);

    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     console.log("\n==========\n");
    //     console.log(data);

    // if (data.status === "bad") {
    //   return notify(`${data.msg}`);
    // }
    // notify(`${data.msg}`);
    //   });
  };

  return (
    <div>
      <Nav />
      <h1>Login</h1>
      <ToastContainer position="top-center" autoClose={1500} />

      <form onSubmit={onLogin}>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
