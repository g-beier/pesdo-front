import WorkoutCard from "../components/WorkoutCard";

export default function Home() {
  return (
    <main className="w-full">
      <h1 className="text-2xl font-bold">Treinos</h1>
      <ol className="mt-8 flex flex-col gap-4">
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
      </ol>
    </main>
  );
}
