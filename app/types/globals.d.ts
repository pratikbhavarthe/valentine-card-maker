export type MemeType =
  | "cat1.jpg"
  | "cat2.jpg"
  | "cat3.jpg";

export type TemplateType = {
  to: string;
  message: string;
  meme: MemeType;
}