import SurvivorSelector from "@/components/builder/SurvivorSelector";
import ItemGrid from "@/components/items/ItemGrid";
import BuildContainer from "@/components/builder/BuildContainer";
import { Suspense } from "react";

export default function Home() {
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
