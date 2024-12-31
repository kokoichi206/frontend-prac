"use client";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useSidebar } from "./use-sidebar";

interface ClientWrapperProps {
  children: React.ReactNode;
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const { isOpen } = useSidebar();

  return (
    <>
      <Header />
      <Sidebar isOpen={isOpen} />
      <main className="flex-1">{children}</main>
    </>
  );
}
