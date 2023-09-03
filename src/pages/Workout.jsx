import { ChevronLeftIcon as ReturnIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Exercice from "../components/Exercice";

export default function Workout() {
  return (
    <main className="w-full">
      <Link to="/" className="inline-flex flex-row items-center gap-1">
        <ReturnIcon className="h-4 w-4" />
        <span>Voltar</span>
      </Link>
      <h1 className="text-2xl font-bold">Treino 1</h1>
      <p className="text-gray-800/70 dark:text-gray-200/70">peito, costas</p>
      <ol className="mt-8 flex flex-col gap-4">
        <Exercice />
        <Exercice />
        <Exercice />
        <Exercice />
      </ol>
    </main>
  );
}
