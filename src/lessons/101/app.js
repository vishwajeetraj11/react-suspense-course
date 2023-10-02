import React, { Fragment, Suspense, lazy } from "react";
// 1. Change this static import to a dynamic import, wrapped in React.lazy
// import PokemonDetail from "./pokemon-detail";

const PokemonDetail = lazy(() => import("./pokemon-detail"));

export default function App() {
  return (
    <div>
      {/* 2. Wrap this component in a React.Suspense component with fallback */}
     <Suspense fallback={<Fragment>Loading...</Fragment>}>
     <PokemonDetail />
     </Suspense>
    </div>
  );
}
