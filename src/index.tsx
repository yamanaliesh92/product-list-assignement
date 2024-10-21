import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import ReactQueryProvider from "./provider/react-query-provider";
import ToasterProvider from "./provider/toast-provider";
import IndexRouter from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReactQueryProvider>
      <ToasterProvider />
      <IndexRouter>
        <App />
      </IndexRouter>
    </ReactQueryProvider>
  </React.StrictMode>
);
