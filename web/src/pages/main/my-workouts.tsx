import { WorkoutCard } from "@/components/core/workout-card";
import { Header } from "@/components/layout/header";

export function MyWorkoutsPage() {
  return (
    <div className="w-full h-full min-h-screen bg-primary">
      <Header />
      <main className="container bg-foreground text-white py-4">
        <h1 className="text-3xl font-bold my-4">Rian Workouts</h1>
        <div className="w-full h-[1px] bg-background"/>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
        </div>
      </main>

    </div>
  )
}