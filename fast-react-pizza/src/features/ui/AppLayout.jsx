//mport React from "react";
import Header from "./Header";
import CartOverview from "../cart/CartOverview.jsx";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader.jsx";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
