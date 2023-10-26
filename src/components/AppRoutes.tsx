import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

import { Grid } from "react-loader-spinner";
import SharedLayout from "../SharedLayout/SharedLayout";
import tabs from "../tabs.json";

const DummyTable = lazy(() => import("./DummyTable/DummyTable"));
const DummyList = lazy(() => import("./DummyList/DummyList"));
const DummyChart = lazy(() => import("./DummyChart/DummyChart"));
const NotFound = lazy(() => import("./NotFound/NotFound"));

const tabPaths = tabs.map((tab) => tab.id);

export default function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate(`${tabPaths[0]}`);
    }
  });
  return (
    <Suspense
      fallback={
        <Grid
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          visible={true}
          wrapperStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      }
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path={tabPaths[0]} element={<DummyTable />} />
          <Route path={tabPaths[1]} element={<DummyChart />} />
          <Route path={tabPaths[2]} element={<DummyList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
