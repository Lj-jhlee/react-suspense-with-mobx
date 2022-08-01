import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import loadable from "@loadable/component";

// import Home from "././component/home";

// import LazyOrNot from "././component/lazy-or-not";

// import NoSuspenseWithFetchIndex from "./component/no-suspense-fetch-index";

// import NoSuspenseWithFetchComponent from "./component/no-suspense-fetch-component";

// import NoSuspenseWithMobxAndIndex from "./component/no-suspense-mobx-index";

// import NoSuspenseWithMobxAndComponent from "./component/no-suspense-mobx-component";

// import SuspenseWithFetchAndComponent from "./component/suspense-fetch-component";

// import SuspenseWithFetchAndIndex from "./component/suspense-fetch-index";

// import SuspenseWithMobxAndIndex from "./component/suspense-mobx-index";

// import SuspenseWithMobxAndComponent from "./component/suspense-mobx-component";

const Home = React.lazy(() => import("././component/home"));
const LazyOrNot = React.lazy(() => import("././component/lazy-or-not"));
const RaceCondition = React.lazy(() => import("././component/race-condition"));
const NoSuspenseWithFetchIndex = React.lazy(
  () => import("./component/no-suspense-fetch-index")
);
const NoSuspenseWithFetchComponent = React.lazy(
  () => import("./component/no-suspense-fetch-component")
);
const NoSuspenseWithMobxAndIndex = React.lazy(
  () => import("./component/no-suspense-mobx-index")
);
const NoSuspenseWithMobxAndComponent = React.lazy(
  () => import("./component/no-suspense-mobx-component")
);
const SuspenseWithFetchAndComponent = React.lazy(
  () => import("./component/suspense-fetch-component")
);
const SuspenseWithFetchAndIndex = React.lazy(
  () => import("./component/suspense-fetch-index")
);
const SuspenseWithMobxAndIndex = React.lazy(
  () => import("./component/suspense-mobx-index")
);
const SuspenseWithMobxAndComponent = React.lazy(
  () => import("./component/suspense-mobx-component")
);

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

      <Suspense fallback={<p>pending data fetching....</p>}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/lazy-or-not" element={<LazyOrNot />} />
            <Route path="/race-condition" element={<RaceCondition />} />

            <Route
              path="/no-suspense-fetch-index"
              element={<NoSuspenseWithFetchIndex />}
            />
            <Route
              path="/no-suspense-fetch-component"
              element={<NoSuspenseWithFetchComponent />}
            />

            <Route
              path="/no-suspense-mobx-index"
              element={<NoSuspenseWithMobxAndIndex />}
            />
            <Route
              path="/no-suspense-mobx-component"
              element={<NoSuspenseWithMobxAndComponent />}
            />

            <Route
              path="/suspense-fetch-index"
              element={<SuspenseWithFetchAndIndex />}
            />
            <Route
              path="/suspense-fetch-component"
              element={<SuspenseWithFetchAndComponent />}
            />

            <Route
              path="/suspense-mobx-index"
              element={<SuspenseWithMobxAndIndex />}
            />
            <Route
              path="/suspense-mobx-component"
              element={<SuspenseWithMobxAndComponent />}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
