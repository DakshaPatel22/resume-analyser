import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Check karalo" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
  
export default function Home() {
  return(

  <main className="bg-[url('/images/bg-main.svg')]">
    <Navbar/>
    <section className="main-section">
      <div className="page-heading">
         <h1>Track Your Application & resume ratings </h1>
         <h2> Review submission and check ai powered feedbacks</h2>
      </div>
    </section>
    {resumes.length>0 &&( 
    <div className="resumes-section">
      { resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume}/>
          ))}
          </div>
        )} 
    </main>
  )
}
