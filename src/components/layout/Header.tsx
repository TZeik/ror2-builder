import Link from "next/link";
import { FaGithub, FaDiscord, FaBook } from "react-icons/fa";

export default function Header() {
  return (
    <header className="border-b border-gray-700 py-6 mb-6">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Grupo de título */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-orange-500">
            {"Zeik's Risk of Rain 2 Build Planner"}
          </h1>
          <p className="text-gray-400 text-sm">
            Create your perfect builds
          </p>
        </div>

        {/* Navegación */}
        <nav className="flex gap-6 items-center flex-wrap justify-center">
          <Link
            href="/docs"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <FaBook className="text-lg" />
            <span>Docs</span>
          </Link>
          <Link
            href="https://github.com/yourusername/ror2-build-planner"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://discord.gg/ror2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <FaDiscord className="text-lg" />
            <span>Community</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}