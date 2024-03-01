import Nav from "../components/nav";

export default function Login() {
  return (
    <div>
      <Nav />
      <h1>Login</h1>

      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />

        <button>Login</button>
      </form>
    </div>
  );
}
