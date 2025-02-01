import { TemplateType } from "../types/globals";
import { createContext } from "react";

export type TemplateContainerType = {
  template: TemplateType;
  setTemplate: (template: TemplateType) => void;
}

export const INITIAL_TEMPLATE_DATA: TemplateType = {
  to: "",
  message: "",
  meme: "cat1.jpg"
}

export const TemplateContainer = createContext<TemplateContainerType>({
  template: INITIAL_TEMPLATE_DATA,
  setTemplate: () => { }
});