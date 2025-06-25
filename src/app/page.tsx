"use client";
import SurvivorSelector from "@/components/builder/SurvivorSelector";
import ItemGrid from "@/components/items/ItemGrid";
import BuildContainer from "@/components/builder/BuildContainer";
import { Suspense } from "react";
import { useDevice } from "@/context/DeviceContext";

export default function Home() {

  const { isMobile } = useDevice();

  if (isMobile) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <SurvivorSelector />
            <div className="lg:col-span-1 mt-11">
              <Suspense fallback={<div>Loading...</div>}>
                <BuildContainer />
              </Suspense>
            </div>
            <ItemGrid />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-8">
          <SurvivorSelector />
          <ItemGrid />
        </div>
        <div className="lg:col-span-1 mt-11">
          <Suspense fallback={<div>Loading...</div>}>
            <BuildContainer />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
