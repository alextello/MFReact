import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Montar funcion para iniciar la app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// si estamos en dev y en aislamiento, llamar inmediatamente
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// si estamos a travez del contenedor deberiamos exportar la funcion mount
export { mount };
