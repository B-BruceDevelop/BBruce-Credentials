// src/app/(pages)/latest-cases/page.tsx

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import CaseCard from "./card";

import { allProjects } from "@/lib/projects";
import { validCodes } from "@/lib/authConfig";

const MixedBrandArts = async () => {
  // Acceder a las cookies en el servidor
  const cookieStore = await cookies();
  const code = cookieStore.get("userCode")?.value;

  // Verificar si el código es válido
  if (!code || !validCodes[code]) {
    redirect("/");
  }

  const userConfig = validCodes[code];

  // Filtrar los proyectos que corresponden al usuario usando el título
  const userProjects = allProjects.filter((project) =>
    userConfig.projects.includes(project.title)
  );

  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Header
        title="Latest Cases"
        prevPage="/mixed-brand-arts"
        nextPage="/highlight-reel"
      />
      <section className="flex flex-grow items-center justify-center w-full h-full p-4 gap-4 ">
        
        {userProjects.map((project) => (
          <div
            key={project.id}
            className="flex-grow flex-shrink-0 h-[75vh] transition-[flex-grow] duration-300 ease-in-out hover:flex-grow-[4]"
          >
            <CaseCard
              id={project.id}
              backgroundImage={project.backgroundImage}
              logo={project.logo}
              backgroundColor={project.backgroundColor}
              title={project.title}
              subtitle={project.subtitle}
              link={project.link}
            />
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
};

export default MixedBrandArts;