"use client";
import { useContext } from "react";
import { FormItemWrapper, Input } from "./input";
import { Label } from "./tag";  
import { TemplateContainer } from "../Container/template-provider";
import { MemeType } from "../types/globals";
import { cn } from "../../lib/utils";

const MemeTypeOptions: { name: string; type: MemeType }[] = [
  { name: 'Cat1', type: 'cat1.jpg' },
  { name: 'Cat2', type: 'cat2.jpg' },
  { name: 'Cat3', type: 'cat3.jpg' },
]

const GreetingOptions = [
  'gn cutiee',
  'hello sexy',
  'how you doin,'
]

export default function GeneratorForm() {
  const { template, setTemplate } = useContext(TemplateContainer);

  return <div className="generator-form grid grid-cols-1 gap-6 w-full p-6 rounded-xl">
    <FormItemWrapper>
      <Label>Giving to</Label>
      <Input
        placeholder="Your loved one's name"
        className=""
        onChange={(e) => setTemplate({
          ...template,
          to: e.target.value as string
        })}
        value={template.to}
      />
    </FormItemWrapper>
    <FormItemWrapper>
      <Label>Message</Label>
      <Input
        placeholder={`Write a message for ${template.to}`}
        onChange={(e) => setTemplate({
          ...template,
          message: e.target.value as string
        })}
        value={template.message}
      />
      <div className="pre-designed-greetings-wrapper flex flex-row items-center justify-start gap-2">
        {GreetingOptions.map((greeting, index) => {
          return <button className={cn("truncate px-3 py-1.5 text-sm font-medium border border-gray-200 shadow-sm rounded-lg hover:bg-gray-100")} key={index}
            onClick={() => setTemplate({
              ...template,
              message: greeting
            })}
          >
            {greeting}
          </button>
        })}
      </div>
    </FormItemWrapper>
    <div className="meme-type-options-wrapper flex flex-row items-stretch gap-4">
      {MemeTypeOptions.map((option, index) => {
        return <div
          key={index}
          className={cn("rounded-xl w-16 h-16 border-4 border-white shadow cursor-pointer",
            template.meme === option.type && "border-[#e378a6]"
          )}
          onClick={() => setTemplate({ ...template, meme: option.type })}
          style={{
            backgroundImage: `url('/${option.type}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
            backgroundSize: 'cover'
          }}
        />
      })}
    </div>
  </div>
}