import WorkoutCard from "../components/WorkoutCard";
import { PlusSmallIcon as PlusIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="w-full">
      <h1 className="text-2xl font-bold">Treinos</h1>
      <ol className="mt-8 flex flex-col gap-4">
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <li>
          <button className="inline-flex items-center gap-2 rounded-md bg-primary-400 p-1 pr-2 text-white shadow-md shadow-primary-800/30 transition-all hover:-translate-y-0.5 hover:bg-primary-300 focus:outline-none focus:ring-4 focus:ring-primary-300/70 dark:bg-primary-500/80 dark:hover:bg-primary-400/80">
            <PlusIcon className="h-6 w-6" />
            <span>Novo treino</span>
          </button>
        </li>
      </ol>
    </main>
  );
}
