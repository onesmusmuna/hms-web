import Nav from "../components/nav";

export default function Register() {
  return (
    <div>
      <Nav />
      <h1>Register</h1>

      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />

        <button>Register</button>
      </form>
    </div>
  );
}
