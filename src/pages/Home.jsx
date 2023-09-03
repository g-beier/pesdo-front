import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>Treinos</h1>
      <ol>
        <Link to="/workout">Treino 1</Link>
        <Link to="/workout">Treino 2</Link>
      </ol>
    </main>
  );
}
