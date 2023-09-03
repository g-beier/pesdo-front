import ExerciceSet from "./ExerciceSet";
import { useState } from "react";

export default function Exercice() {
  const [open, setOpen] = useState(false);
  return (
    <li className="w-full rounded border border-gray-500/50 bg-gray-100/80 shadow-md dark:border-gray-700/40 dark:bg-gray-800/40">
      <button
        onClick={() => setOpen(!open)}
        className="mx-2 my-1 text-lg font-bold uppercase tracking-tight"
      >
        Leg press
      </button>
      <table className={open ? "w-full" : "hidden"}>
        <thead>
          <tr className="bg-gray-300/40 dark:bg-gray-900/50">
            <th className="px-2 py-1">#</th>
            <th className="px-2 py-1">carga</th>
            <th className="px-2 py-1">reps</th>
            <th className="px-2 py-1">descanso</th>
          </tr>
        </thead>
        <tbody>
          <ExerciceSet />
          <ExerciceSet />
          <ExerciceSet />
        </tbody>
      </table>
      <p className="mx-2 text-gray-800/80 dark:text-gray-100/80">Descrição</p>
    </li>
  );
}
