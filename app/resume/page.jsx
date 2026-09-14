"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

//About me
const about = {
  title: "About me",
  description: "",
  info: [
    { fieldName: "Name", fieldValue: "SaiSharan Karam" },
    { fieldName: "Phone", fieldValue: "+1(334)-372-0616" },
    { fieldName: "Experience", fieldValue: "4+ years" },
    { fieldName: "Nationality", fieldValue: "Indian" },

    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Hindi, Telugu" },
    { fieldName: "Email", fieldValue: "saisharank2008@gmail.com" },
  ],
};
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
      duration: "2023 – 2024",
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
      list: "Java, C, C++, Python, SQL, JavaScript, TypeScript, Scala, AWS, Azure, Terraform, Azure Machine Learning, Spark, PySpark, Microsoft Fabric, OneLake, Delta Lake, Iceberg, Snowflake, Kafka, CI/CD",
    },
    {
      title: "Full Stack Development: ",
      list: "APIs, REST, Spring Boot, Microservices, Flask, Next.js, React.js, Angular, HTML, CSS, Postgres, PostgreSQL, MySQL, MongoDB, Cosmos DB, Kubernetes, Docker, ElasticSearch, TailwindCSS",
    },
    {
      title: "Problem Solving: ",
      list: "Object-Oriented Programming (OOP), Test Driven Development (TDD), Data Structures, Distributed Systems",
    },
    {
      title: "Tools & Methodologies: ",
      list: "OAuth, OIDC, IAM, OpenAPI, Hibernate, SLF4J, SDLC, Swagger, Agile, Git, Unix/Linux, Azure DevOps, YAML, Gradle, Maven, Azure Artifacts, MLflow, MLOps, Datadog, API Gateway, Temporal, SFTP, Jenkins, Vercel, Cursor, Codex, Claude",
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
    <div className="container mx-auto ">
      <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        onValueChange={handleTabchange}
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="publication">Publication</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          {/* <TabsTrigger value="about">About Me</TabsTrigger> */}
        </TabsList>
        {/**content */}
        <div className="w-full min-w-0">
          {/**experience */}
          <TabsContent value="experience" className="w-full ">
            <div className="flex flex-col gap-[10px] text-center xl:text-left w-full">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ul className="flex flex-col gap-[10px] w-full">
                {experience.items.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="bg-[#232329] py-4 px-6 rounded-xl flex flex-col xl:grid xl:grid-cols-[auto_1fr_auto] xl:items-center gap-2 hover:bg-accent-hover/10 cursor-pointer"
                      onClick={() => setSelectedExperience(index)}
                    >
                      <span className="text-accent xl:whitespace-nowrap">
                        {item.duration}
                      </span>
                      <h3 className="text-xl leading-tight text-center xl:text-left">
                        {item.position}
                      </h3>
                      <p className="text-white/60 xl:whitespace-nowrap xl:text-right">
                        {item.company}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
          {/**education */}
          <TabsContent value="education" className="w-full">
            <div className="flex flex-col  gap-[30px] text-center xl:text-left xl:w-[35rem]">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[500px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-full py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1  hover:bg-accent-hover/10 cursor-pointer"
                        onClick={() => setSeletedEducation(index)}
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl leading-tight max-w-full text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/**publication */}
          <TabsContent value="publication" className="w-full">
            <div className="flex flex-col  gap-[30px] text-center xl:text-left xl:w-[35rem]">
              <h3 className="text-4xl font-bold">{publication.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {publication.description}
              </p>

              <ul className="grid grid-cols-1  gap-[30px] ">
                {publication.items.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="bg-[#232329] h-[250px] w-110 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-accent">{item.published_date}</span>

                      <h3 className="text-xl  min-h-[60px] text-center lg:text-left">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.publication_name}</p>

                        <Link href={item.link} className="text-blue-700">
                          link
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
          {/**skills */}
          <TabsContent
            value="skills"
            className="w-full text-center xl:text-left"
          >
            <div className="flex pb-3 flex-col gap-[10px] xl:w-[35rem]">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto mt-0 xl:mx-8">
                {about.description}
              </p>
              <ScrollArea className="h-[400px]]">
                <ul className=" flex flex-col gap-3 max-w-[620px] mx-auto xl:mx-0">
                  {skills.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] w-110 py-2 px-5 rounded-xl flex-col justify-center items-center lg:items-start gap-4"
                      >
                        {" "}
                        <span className="text-white/60">{item.title}</span>
                        <span className="text-sm">{item.list}</span>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/**About me*/}
          <TabsContent
            value="about"
            className="w-full text-center xl:text-left"
          >
            <div className="flex flex-col gap-[30px] xl:w-[35rem]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-8">
                {about.description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
      <div className="w-full mb-[25px] mt-6 ">
        {selectedExperience !== null && (
          <div
            ref={sectionRef}
            className="mt-3 p-4 bg-[#232329] rounded-xl items-center justify-center"
          >
            <h4 className="text-2xl font-bold">
              {experience.items[selectedExperience].company}
            </h4>
            <ul className="text-white/60 mt-2 list-disc pl-5">
              {experience.items[selectedExperience].details2.map(
                (detail, index) => (
                  <li key={index}>
                    <p className="text-accent">{detail.jobTitle}</p>
                    {detail.description.map((desc, descIndex) => (
                      <p key={descIndex}>
                        <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></span>
                        {desc}
                      </p>
                    ))}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
        {selectedEducation !== null && (
          <div
            ref={sectionRef}
            className="mt-1 p-4 bg-[#232329]  rounded-xl items-center justify-center  "
          >
            <h4 className="text-2xl font-bold">
              {education.items[selectedEducation].degree} in{" "}
              {education.items[selectedEducation].concentration} at{" "}
              {education.items[selectedEducation].institution}
            </h4>
            <p className="text-white/60 mt-2">
              {education.items[selectedEducation].Majors}
            </p>
          </div>
        )}
      </div>
    </div>
    //</motion.div>
  );
};

export default Resume;
