import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "./i18n";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";

const queryClient = new QueryClient();

// remember to try Astro into this e-commerce

// also content-vissibilty css property

ReactDOM.render(
  // side note: React.StrictMode  makes components render twice. In case you're wondering 😁
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
