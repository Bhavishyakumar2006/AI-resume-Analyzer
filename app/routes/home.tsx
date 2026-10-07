import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants/Index";
import { useCallback } from "react";
import { callbackify } from "util";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('./images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Application & Resume Ratings</h1>
        <h2>Review your submisions and check AI-powered feedback.</h2>
      </div>
    </section>
    {resumes.map((resume) => (
      <h1>{resume.jobTitle}</h1>
    ))}
  </main>;
}
