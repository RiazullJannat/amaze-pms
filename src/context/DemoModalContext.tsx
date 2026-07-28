"use client";

import * as React from "react";

interface DemoModalContextValue {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const DemoModalContext = React.createContext<DemoModalContextValue>({
  open: false,
  openModal: () => {},
  closeModal: () => {},
});

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  const openModal = React.useCallback(() => setOpen(true), []);
  const closeModal = React.useCallback(() => setOpen(false), []);

  return (
    <DemoModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  return React.useContext(DemoModalContext);
}
