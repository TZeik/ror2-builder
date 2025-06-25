"use client";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { BiCoffeeTogo } from "react-icons/bi";
import { FaCircleInfo } from "react-icons/fa6";
import * as Popover from "@radix-ui/react-popover";
import { useDevice } from "@/context/DeviceContext"; // Adjust the import path as needed

export default function Header() {
  const { isMobile } = useDevice();

  if (isMobile) {
    return (
      <header className="border-b border-gray-700 py-4 mb-4">
        <div className="container mx-auto px-4 flex flex-col items-center gap-3">
          {/* Title group - centered and more compact */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-xl font-bold text-orange-500">
              {"Zeik's RoR2 Toolkit"}
            </h1>
            <p className="text-gray-400 text-xs">
              Item reference and build planner
            </p>
          </div>

          {/* Navigation - horizontal and more compact */}
          <nav className="flex gap-4 items-center flex-wrap justify-center">
            {/* About Popover */}
            <Popover.Root>
              <Popover.Trigger asChild>
                <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-xs cursor-pointer">
                  <FaCircleInfo className="text-base" />
                  <span>About</span>
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content
                  side="bottom"
                  sideOffset={5}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-xs text-gray-300 max-w-xs shadow-lg z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
                >
                  <h3 className="font-semibold text-orange-500 mb-1">
                    Welcome to the Risk of Rain 2 Toolkit
                  </h3>
                  <p className="mt-1 pl-1 mb-1">
                    Plan builds and track items. Save or share your builds!
                  </p>
                  <h3 className="font-semibold text-orange-500 mb-1">
                    How to use:
                  </h3>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Left click/drag to add items</li>
                    <li>Right click to remove items</li>
                    <li>Click +/- to adjust quantities</li>
                    <li>Save builds per survivor</li>
                    <li>Share via url or export</li>
                  </ul>
                  <p className="mt-2 text-2xs italic">
                    Fan-made tool - Not affiliated with Hopoo Games or Gearbox
                  </p>
                  <Popover.Arrow className="fill-gray-700" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>

            <Link
              href="https://coff.ee/zeik"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-xs"
            >
              <BiCoffeeTogo className="text-base" />
              <span>Coffee</span>
            </Link>
            <Link
              href="https://riskofrain2.fandom.com/wiki/Risk_of_Rain_2_Wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-400 hover:text-white transition-colors text-xs"
            >
              <FaBook className="text-base" />
              <span>Wiki</span>
            </Link>
          </nav>
        </div>
      </header>
    );
  }

  // Original desktop version
  return (
    <header className="border-b border-gray-700 py-6 mb-6">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Grupo de título */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-orange-500">
            {"Zeik's Risk of Rain 2 Toolkit"}
          </h1>
          <p className="text-gray-400 text-sm">
            Friendly webtool for item and character reference and build planner
          </p>
        </div>

        {/* Navegación */}
        <nav className="flex gap-6 items-center flex-wrap justify-center">
          {/* About con Popover (tooltip click-to-close) */}
          <Popover.Root>
            <Popover.Trigger asChild>
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
                <FaCircleInfo className="text-lg" />
                <span>About</span>
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                side="bottom"
                sideOffset={5}
                className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-sm text-gray-300 max-w-s shadow-lg z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
              >
                <h3 className="font-semibold text-orange-500 mb-2">
                  Welcome to the Risk of Rain 2 Toolkit
                </h3>
                <p className="mt-2 pl-1 text-s mb-2">
                  With this tool, you can plan builds and keep track of items.
                  <br />
                  Save your builds or share them with your friends!
                </p>
                <h3 className="font-semibold text-orange-500 mb-2">
                  How to use:
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Left click or drag to add items to your build (you can stack
                    them)
                  </li>
                  <li>Right click to remove items from the build</li>
                  <li>Click +/- to adjust quantities</li>
                  <li>
                    Save builds for each survivor, select a survivor from the
                    selector
                  </li>
                  <li>
                    Share builds via url or export them into a local importable
                    file
                  </li>
                </ul>
                <p className="mt-4 text-xs italic">
                  This is a Fan-made tool - And is NOT affiliated with Hopoo
                  Games nor Gearbox Publishing
                </p>
                <Popover.Arrow className="fill-gray-700" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>

          <Link
            href="https://coff.ee/zeik"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <BiCoffeeTogo className="text-lg" />
            <span>Buy me a coffee!</span>
          </Link>
          <Link
            href="https://riskofrain2.fandom.com/wiki/Risk_of_Rain_2_Wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-white transition-colors text-sm"
          >
            <FaBook className="text-lg" />
            <span>Wiki</span>
          </Link>
          <span className="text-sm text-gray-500">v1.0.1</span>
        </nav>
      </div>
    </header>
  );
}
