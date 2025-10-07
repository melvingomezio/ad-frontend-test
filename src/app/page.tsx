import { Suspense } from "react";
import { CatalogScreen } from "./journeys/catalog/screens/catalog.screen";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CatalogScreen />
    </Suspense>
  );
}
