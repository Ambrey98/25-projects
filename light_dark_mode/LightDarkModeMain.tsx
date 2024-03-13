import { useEffect, useState } from "react";
import UseLocalStorage from "./hooks/useLocalStorage";
import "./LightDarkMode.scss";

export default function LightDarkModeMain() {
  const [theme, setTheme] = UseLocalStorage("theme", "light");

  return (
    <div
      className={`container ${
        theme === "light" ? "container--light" : "container--dark"
      }`}
    >
      <h1 className={theme === "light" ? "text--light" : "text--dark"}>
        Light and Dark mode
      </h1>
      <button
        className={theme === "light" ? "btn--light" : "btn--dark"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Change theme
      </button>
    </div>
  );
}
