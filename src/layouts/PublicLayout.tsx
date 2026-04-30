import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/Particles";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <ParticlesBackground />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
