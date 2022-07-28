// import loadable from "@loadable/component";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("././component/home"));
const SuspenseOnly = React.lazy(() => import("./component/suspense-only"));
const SuspenseWithMobx = React.lazy(
  () => import("./component/suspense-with-mobx")
);
const NoSuspense = React.lazy(() => import("./component/no-suspense"));

// const LoadableSuspenseOnly = loadable(
//   () => import("./component/suspense-only")
// );
// const LoadableSuspenseWithMobx = loadable(
//   () => import("./component/suspense-with-mobx")
// );
// const LoadableNoSuspense = loadable(() => import("./component/no-suspense"));

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/only" element={<LoadableSuspenseOnly />} />
          <Route path="/mobx" element={<LoadableSuspenseWithMobx />} />
          <Route path="/no" element={<LoadableNoSuspense />} />
        </Routes>
      </BrowserRouter> */}

      {/* suspense only에서 네트워크 요청이 굉장히 여러번 발생 */}
      <Suspense fallback={<p>pending data fetching....</p>}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/no" element={<NoSuspense />} />
            <Route path="/only" element={<SuspenseOnly />} />
            <Route path="/mobx" element={<SuspenseWithMobx />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
