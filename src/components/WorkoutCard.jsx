import { Link } from "react-router-dom";

export default function WorkoutCard() {
  return (
    <Link
      to="/workout"
      className="inline-flex items-center gap-4 rounded border border-gray-500/50 bg-gray-100/80 p-2 shadow-md dark:border-gray-700/40 dark:bg-gray-800/40"
    >
      <span className="font-bold">Treino 1</span>
      <span className="text-sm text-gray-800/70 dark:text-gray-200/70">
        peito, costas
      </span>
    </Link>
  );
}
