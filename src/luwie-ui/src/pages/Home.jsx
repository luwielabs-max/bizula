import LandingNavbar from "../components/showcase/LandingNavbar";
import GridBackground from "../components/showcase/GridBackground";
import Hero from "../components/showcase/Hero";

export default function Home() {
  return (
    <main
      className="
      relative

      min-h-screen

      overflow-hidden

      bg-white
    "
    >
      <GridBackground />

      <LandingNavbar />

      <Hero />
    </main>
  );
}