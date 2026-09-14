"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

//experience data
const experience = {
  icon: "",
  title: "My experience",
  description: "Professional Experience",
  items: [
    {
      company: "Auger Inc.",
      position: "Software Development Engineer",
      duration: "Jan 2026 – Aug 2026",
      details2: [
        {
          jobTitle: "Bellevue, WA · Onsite · Startup",
          description: [
            "Java services and APIs, including defining service contracts.",
            "An ML platform (MLflow) for scientists to develop, test, train, run, and deploy models — separate from the data platform.",
            "Integrated that ML platform into the data-pipeline infrastructure.",
            "Data-processing pipelines over millions of records.",
            "Tactical generalist across the rest of the platform as a startup SDE.",
          ],
        },
      ],
    },
    {
      company: "Quadrant",
      position: "Software Developer",
      duration: "May 2025 – Jan 2026",
      details2: [
        {
          jobTitle: "Software Developer",
          description: ["Client: Auger"],
        },
      ],
    },
    {
      company: "Infor",
      position: "Software Engineer",
      duration: "Jul 2019 – Aug 2022",
      details2: [
        {
          jobTitle: "Software Engineer",
          description: [
            "I led the development of critical microservices using Core Java and Spring Boot for the Infor ION OneView platform, which enhanced business process visibility and monitoring. My role involved architecting and optimizing a multi-threaded microservices architecture, leading to a 25% increase in system uptime and a 20% reduction in response times. I successfully integrated complex messaging solutions with RabbitMQ and Google Pub/Sub, increasing throughput by 30%, and played a key role in refining Agile processes, which boosted feature delivery timelines by 20%. Additionally, I mentored junior developers and enhanced the CI/CD pipeline using Jenkins and Git, streamlining deployment processes and ensuring reliable releases.",
          ],
        },
      ],
    },
    {
      company: "Wedigma",
      position: "Software Developer (freelance)",
      duration: "2022 – 2024",
      details2: [
        {
          jobTitle: "Software Developer",
          description: [
            "Created a Java Spring Boot application with React Front end and Node JS APIs, designed as a Portability as a Service, whose main objective was to retrieve a COBOL object from the database, create an extracted JSON payload, and execute Trigger in the MySQl database",
          ],
        },
      ],
    },
  ],
};
//education data
const education = {
  title: "My Education",
  description: "",
  items: [
    {
      institution: "Troy University, Troy, AL",
      degree: "Master of Computer Science",
      concentration: "(Network and Information Security)",
      duration: "Aug 2022 – May 2024",
      Majors:
        "Distributed Systems, Machine Learning, Adv Computer Networks, Systems Design",
    },
    {
      institution: "Vasavi College of Engineering (Osmania University)",
      degree: "Bachelor of Engineering",
      concentration: "(Computer Science)",
      duration: "Aug 2015 – May 2019",
      Majors:
        "AI, Image Processing, Data Structures, Cloud Computing, Distributed Systems, OOPS, DBMS",
    },
  ],
};
//publication data
const publication = {
  icon: "",
  title: "My Publications",
  description: "Advanced Database Systems",
  items: [
    {
      publication_name: "Springer",
      name: "Data Transfer Methods and Strategies: Unified Replication Model Using Trees",
      published_date: "March 2024",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-56950-0_14",
    },
  ],
};
//skills data
const skills = {
  title: "My Skills",
  items: [
    {
      title: "Programming Languages & Cloud: ",
      list: "Java, C, C++, Python, SQL, JavaScript, TypeScript, Scala, AWS, Azure, Terraform, Azure Machine Learning, Spark, PySpark, Microsoft Fabric, OneLake, Delta Lake, Iceberg, Snowflake, Kafka, Cosmos DB, CI/CD",
    },
    {
      title: "Full Stack Development: ",
      list: "APIs, REST, Spring Boot, Microservices, Microservices architecture, Flask, Next.js, React.js, Angular, HTML, CSS, Postgres, PostgreSQL, MySQL, MongoDB, Cosmos DB, Kubernetes, Docker, ElasticSearch, TailwindCSS, API Gateway",
    },
    {
      title: "Problem Solving: ",
      list: "Object-Oriented Programming (OOP), Test Driven Development (TDD), Data Structures, Distributed Systems",
    },
    {
      title: "Tools & Methodologies: ",
      list: "OAuth, OIDC, AuthN, AuthZ, Microsoft Entra ID, Entra App, IAM, OpenAPI, Hibernate, SLF4J, SDLC, Swagger, Agile, Git, Unix/Linux, Azure DevOps, YAML, Gradle, Maven, Azure Artifacts, MLflow, MLOps, Datadog, API Gateway, Temporal, SFTP, Jenkins, Vercel, Cursor, Claude, Codex, Agents, LLM",
    },
  ],
};

const Resume = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedEducation, setSeletedEducation] = useState(null);
  const sectionRef = useRef(null);
  const handleTabchange = (value) => {
    setSelectedExperience(null);
    setSeletedEducation(null);
  };
  useEffect(() => {
    if (selectedExperience !== null) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedExperience]);
  useEffect(() => {
    if (selectedEducation !== null) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedEducation]);
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{
    //     opacity: 1,
    //     transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
    //   }}
    //   className="xl:mt-[5%] flex flex-col items-center  justify-center py-12 xl:pb-64px"
    // >
    <div className="container mx-auto pb-10">
      <Tabs
        defaultValue="experience"
        className="flex flex-col gap-8"
        onValueChange={handleTabchange}
      >
        <TabsList className="grid grid-cols-2 xl:grid-cols-4 gap-3 w-full max-w-none">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="publication">Publication</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="experience" className="w-full min-h-0">
          <div className="flex flex-col gap-6">
            <h3 className="text-4xl font-bold text-center xl:text-left">
              {experience.title}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experience.items.map((item, index) => (
                <li
                  key={index}
                  className={`bg-[#232329] py-5 px-6 rounded-xl flex flex-col gap-1 cursor-pointer hover:bg-accent-hover/10 ${
                    selectedExperience === index ? "ring-2 ring-accent" : ""
                  }`}
                  onClick={() => setSelectedExperience(index)}
                >
                  <span className="text-accent text-sm">{item.duration}</span>
                  <h3 className="text-xl leading-tight">{item.position}</h3>
                  <p className="text-white/60">{item.company}</p>
                </li>
              ))}
            </ul>
            {selectedExperience !== null && (
              <div
                ref={sectionRef}
                className="flex flex-col gap-3 bg-[#232329] rounded-xl py-5 px-6"
              >
                {experience.items[selectedExperience].details2.map(
                  (detail, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <p className="text-accent">{detail.jobTitle}</p>
                      {detail.description.map((desc, descIndex) => (
                        <p
                          key={descIndex}
                          className="text-white/80 leading-snug border-b border-white/10 pb-2"
                        >
                          {desc}
                        </p>
                      ))}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="education" className="w-full min-h-0">
          <div className="flex flex-col gap-6">
            <h3 className="text-4xl font-bold text-center xl:text-left">
              {education.title}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {education.items.map((item, index) => (
                <li
                  key={index}
                  className={`bg-[#232329] py-5 px-6 rounded-xl flex flex-col gap-1 cursor-pointer hover:bg-accent-hover/10 ${
                    selectedEducation === index ? "ring-2 ring-accent" : ""
                  }`}
                  onClick={() => setSeletedEducation(index)}
                >
                  <span className="text-accent text-sm">{item.duration}</span>
                  <h3 className="text-xl leading-tight">{item.degree}</h3>
                  <p className="text-white/60">{item.institution}</p>
                </li>
              ))}
            </ul>
            {selectedEducation !== null && (
              <div
                ref={sectionRef}
                className="flex flex-col gap-2 bg-[#232329] rounded-xl py-5 px-6"
              >
                <p className="text-accent">
                  {education.items[selectedEducation].degree}{" "}
                  {education.items[selectedEducation].concentration}
                </p>
                {education.items[selectedEducation].Majors.split(",").map(
                  (line, i) => (
                    <p
                      key={i}
                      className="text-white/80 leading-snug border-b border-white/10 pb-2"
                    >
                      {line.trim()}
                    </p>
                  )
                )}
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="publication" className="w-full min-h-0">
          <div className="flex flex-col gap-6">
            <h3 className="text-4xl font-bold text-center xl:text-left">
              {publication.title}
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              {publication.items.map((item, index) => (
                <li
                  key={index}
                  className="bg-[#232329] py-6 px-6 rounded-xl flex flex-col gap-2"
                >
                  <span className="text-accent text-sm">
                    {item.published_date}
                  </span>
                  <h3 className="text-xl leading-tight">{item.name}</h3>
                  <p className="text-white/60">{item.publication_name}</p>
                  <Link href={item.link} className="text-accent underline">
                    link
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="w-full min-h-0">
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold text-center xl:text-left">
              {skills.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {skills.items.map((item, index) => (
                <li
                  key={index}
                  className="bg-[#232329] py-3 px-5 rounded-xl flex flex-col gap-1"
                >
                  <span className="text-white/60">{item.title}</span>
                  <span className="text-sm leading-relaxed">{item.list}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
    //</motion.div>
  );
};

export default Resume;
