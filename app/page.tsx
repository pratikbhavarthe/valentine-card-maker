"use client";
import { Button } from "./components/button";
import CardPreview from "./components/meme-viewer";
import GeneratorForm from "./components/form-generator";
import { Wrapper } from "./components/wrapper";
import TemplateContextProvider from "./providers/template-container-priovider";
import { useContext } from "react";
import { TemplateContainer } from "./Container/template-provider";
import Link from "next/link";

export default function HomePage() {
  const { template, setTemplate } = useContext(TemplateContainer);
  return <div className="page-container home-page py-12">
    <Wrapper>
      <header className="flex flex-row items-center justify-between max-lg:flex-col max-lg:items-end">
        <h1 className="leading-snug tracking-tighter font-bold text-3xl">
          {"Valentine Card Generator 🩷"}
        </h1>
        <Link href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Make a valentine meme for your loved one using https://valentine-meme-generator.vercel.app/")}`}>
          <Button variant="gloss">
            {"Share on Twitter/X"}
          </Button>
        </Link>
      </header>
      <TemplateContextProvider>
        <div className="template-generator-container flex flex-row items-start justify-between mt-24 w-full gap-12 max-lg:grid max-lg:w-fit max-lg:mx-auto">
          <GeneratorForm />
          <CardPreview />
        </div>
      </TemplateContextProvider>
    </Wrapper>
  </div>
}