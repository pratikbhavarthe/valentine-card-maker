'use client';

import { INITIAL_TEMPLATE_DATA, TemplateContainer } from "../Container/template-provider";
import { TemplateType } from "../types/globals";
import { ReactNode, useState } from "react";

export default function TemplateContextProvider({ children }: { children: ReactNode }) {
  const [template, setTemplate] = useState<TemplateType>(INITIAL_TEMPLATE_DATA);
  return <TemplateContainer.Provider value={{ template, setTemplate }}>
    {children}
  </TemplateContainer.Provider>
}