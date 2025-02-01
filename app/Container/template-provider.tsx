import { TemplateType } from "../types/globals";
import { createContext } from "react";

export type TemplateProviderType = {
  template: TemplateType;
  setTemplate: (template: TemplateType) => void;
}

export const INITIAL_TEMPLATE_DATA: TemplateType = {
  to: "",
  message: "",
  meme: "cat-01.jpeg"
}

export const TemplateProvider = createContext<TemplateProviderType>({
  template: INITIAL_TEMPLATE_DATA,
  setTemplate: () => { }
});