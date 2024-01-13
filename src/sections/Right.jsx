import { education, experience, projects } from "./data";
import { projectTitle, experienceTitle, educationTitle } from "./data";


function Experience() {
  return (
    <div class="bg-primary text-white rounded-box flex flex-col items-start py-3 px-5">
      <h2 class="font-bold text-xl mb-2">{experienceTitle}</h2>
      {experience.map((item) => (
        <div class="flex flex-row gap-2 items-start mb-2">
          <img class="h-12 w-12 rounded-2xl" src={item.icon} />
          <div class="flex flex-col">
            <div class="flex flex-row justify-between items-center">
              <div class="text-lg font-bold">{item.company}</div>
              <div class="text-sm text-primary-content">{item.loc}</div>
            </div>

            <div class="flex flex-row justify-between items-center">
              <div class="text-md font-bold">{item.pos}</div>
              <div class="text-sm text-primary-content">{item.time}</div>
            </div>

            <div>
              {item.description.map((p) => (
                <p class='text-sm text-justify'>{p}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


function Projects() {
  return (
    <div class="bg-primary text-white text-justify rounded-box flex flex-col items-start py-3 px-4">
      <h2 class="font-bold text-xl mb-2">{projectTitle}</h2>
      {projects.map((item) => (
        <div class="flex flex-col w-[32rem]">
          <div class="flex flex-row gap-2 items-center">
            <img class="w-6 h-6 rounded-lg" src={item.icon} />
            <a
              class="font-bold underline text-info-content"
              href={item.link}
              title={item.name}
              target="_blank"
            >
              {item.name}
              &nbsp;<i class="ri-external-link-line"></i>
            </a>
            {item.metric? 
            <div class="flex flex-row gap-2 text-info-content">
              <span class="flex flex-row"><i class="ri-star-line"/>{item.metric.star}</span>
              <span class="flex flex-row"><i class="ri-git-branch-line"/>{item.metric.fork}</span>
            </div> : null}
            <div class="text-sm ml-auto text-primary-content">{item.year}</div>
          </div>

          <div class="ml-6">
            {item.description.map((p) => (
              <p class="text-sm">
               {p}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


function Education() {
  return (
    <div class="bg-primary text-white rounded-box flex flex-col items-start py-3 px-5">
      <h2 class="font-bold text-xl mb-2">{educationTitle}</h2>
      {education.map((item) => (
        <div class="mb-1 flex flex-row gap-2 items-start">
          <img class="h-12 w-12" src={item.icon} />
          <div class="flex flex-col w-[28rem]">
            <div class="flex flex-row justify-between items-center">
              <div class="text-md font-bold">{item.school}</div>
              <div class="text-sm text-primary-content">{item.loc}</div>
            </div>

            <div class="flex flex-row justify-between items-center">
              <div class="text-md font-bold">{item.degree}</div>
              <div class="text-sm text-primary-content">{item.time}</div>
            </div>

            <div>
              {item.description.map((p) => (
                <p class="text-sm">{p}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Right() {
  return (
    <div class="flex flex-col gap-3 pt-3">
      <Experience />
      <Projects />
      <Education />
    </div>
  );
}
