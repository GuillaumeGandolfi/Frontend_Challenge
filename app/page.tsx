import { SpikesIcon } from "./components/SpikesIcon";
import GridPatternBackground from "./components/GridPatternBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <GridPatternBackground />

      <section className="relative z-10">
        <header className="flex justify-center items-center pt-10 gap-2">
          <SpikesIcon className="w-12 h-12" />
          <h1 className="text-2xl font-bold">Spikes</h1>
        </header>
      </section>
    </main>
  );
}
