import React from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Header } from "./src/layouts/header/Header";
import { Body } from "./src/layouts/body/Body";
const AppLayout = () => {
  return (
    <div className="app">
      <Theme>
        <Header />
        <Body />
      </Theme>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
