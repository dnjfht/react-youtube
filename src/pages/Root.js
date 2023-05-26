import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DarkModeProvider } from "../provider/DarkModeContext";

const queryClient = new QueryClient();

export default function Root() {
  return (
    <div>
      <DarkModeProvider>
        <Header />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </DarkModeProvider>
    </div>
  );
}
