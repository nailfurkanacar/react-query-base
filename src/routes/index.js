import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasicQ } from "../containers/BasicQ";
import { DependentQ } from "../containers/DependentQ";
import { ParallelQ } from "../containers/ParallelQ";
import { CachedQ } from "../containers/CachedQ";
import { PaginationQ } from "../containers/PaginationQ";
import { LayoutWithNavbar } from "../layouts/DefaultLayoutWithNavbar";
import { StaleTimeQ } from "../containers/StaleTimeQ";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWithNavbar>
              <BasicQ />
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/dependentQ"
          element={
            <LayoutWithNavbar>
              <DependentQ />
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/parallelQ"
          element={
            <LayoutWithNavbar>
              <ParallelQ />
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/cachedQ"
          element={
            <LayoutWithNavbar>
              <CachedQ />
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/staledTimeQ"
          element={
            <LayoutWithNavbar>
              <StaleTimeQ />
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/paginationQ"
          element={
            <LayoutWithNavbar>
              <PaginationQ />
            </LayoutWithNavbar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
