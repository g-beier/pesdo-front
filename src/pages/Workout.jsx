import { ChevronLeftIcon as ReturnIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Workout() {
  return (
    <main>
      <div>
        <Link
          to="/"
          className="inline-flex flex-row flex-nowrap items-center gap-2"
        >
          <ReturnIcon className="h-6 w-6" />
          Voltar
        </Link>
        <h1 className="text-2xl font-bold">Treino 1</h1>
      </div>
      <ol>
        <li></li>
      </ol>
    </main>
  );
}
