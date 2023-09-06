import {
  ChevronLeftIcon as ReturnIcon,
  PencilIcon as EditIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Exercice from "../components/Exercice";

export default function Workout() {
  return (
    <main className="w-full">
      <Link to="/" className="inline-flex flex-row items-center gap-1">
        <ReturnIcon className="h-4 w-4" />
        <span>Voltar</span>
      </Link>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Treino 1</h1>
        <button className="rounded-md bg-gray-300/40 p-2 transition-all hover:bg-gray-300/80 focus:outline-none focus:ring-2 focus:ring-gray-500/60 dark:bg-gray-700/40 dark:hover:bg-gray-700/80">
          <EditIcon className="h-4 w-4" />
        </button>
      </div>
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
