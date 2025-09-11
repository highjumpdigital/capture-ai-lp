import type { Metadata } from "next";
import HomePageClient from "./_component/HomePageClient";

export const metadata: Metadata = {
  title: "AI Chatbot Agent for Your Website (OpenAI's GPT)",
  description:
    "Get Chat GPT technology on your website in minutes. Launch an AI chatbot agent—no code in 3 easy steps.",
};

export default function Home() {
  return <HomePageClient />;
}
