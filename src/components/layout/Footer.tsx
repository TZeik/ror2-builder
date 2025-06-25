import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 py-6 mt-8 bg-gray-900/50">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Información legal y copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {"Zeik's Risk of Rain 2 Toolkit - This is a fan-made project"}
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Not affiliated with Hopoo Games or Gearbox Publishing. Risk of Rain 2 is a registered trademark of Hopoo Games.
            </p>
          </div>

          {/* Enlaces y redes sociales */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex gap-4">
              <Link
                href="https://github.com/TZeik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </Link>
              <Link
                href="coff.ee/zeik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Buy me a coffee"
              >
                <SiKofi className="text-lg" />
              </Link>
            </div>

            <div className="text-gray-500 text-xs text-center md:text-right">
              <p>Found an issue? <Link href="https://github.com/TZeik/ror2-builder/issues" target="_blank" className="text-blue-400 hover:underline">Report it here</Link></p>
              <p className="mt-1">v1.1.0 - Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Nota adicional para móviles */}
        <div className="mt-6 text-center text-gray-600 text-xs md:hidden">
          <p>This is an unofficial fan project. All game assets belong to their respective owners.</p>
        </div>
      </div>
    </footer>
  );
}