"use client";

import { useState } from "react";
import Link from "next/link";

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
      company: "Infor",
      position: "Software Engineer (Java & Data)",
      duration: "2019 - 2022",
      details:
        "At Infor Pvt Ltd, I developed and maintained scalable microservices using Core Java and Spring Boot, improving system uptime by 15%. I engineered and deployed RESTful APIs for the ION middleware, enhancing data exchange efficiency by 30%. I led the migration of the ION OneView platform from AWS to Azure, optimizing performance and cost efficiency. I implemented CI/CD automation with Jenkins, reducing deployment time by 30%, and developed NoSQL queries in Elasticsearch to improve data retrieval speed and accuracy. Additionally, I authored unit and functional tests using JUnit and JSUnit to ensure comprehensive test coverage and mentored junior team members, fostering a collaborative team environment.",
    },
    {
      company: "Defence R&D Organization (India)",
      position: "Intern",
      duration: "2016 - 2017",
      details:
        "During my internship at the Defence Research & Development Organisation (DRDO), I developed a Java-based data transmission application for secure military communications, focusing on optimizing networking and data stream processes. I cataloged thousands of devices within an IP network, designing an XML storage solution and generating CSV format outputs to efficiently manage and review the devices on the network.",
    },
  ],
};
//education data
const education = {
  icon: "",
  title: "My Education",
  description: "",
  items: [
    {
      institution: "Troy University",
      degree: "Master's Degree",
      concentration: "(Network and Internet Security)",
      duration: "Aug'22 - May'24",
      Majors:
        "ADV ARTIFICIAL INTELLIGENCE, ANALYSIS OF ALGORITHMS, ADVANCED COMPUTER NETWORK,  ADVANCED DATABASE CONCEPTS",
    },
    {
      institution: "Osmania University",
      degree: "Bachelor's Degree",
      concentration: "(Computer and Information Science)",
      duration: "Aug'15 - May'19",
      Majors:
        "DATA STRUCTURES AND ALGORITHMS, WEB TECHNOLOGIES, CLOUD COMPUTING, DISTRIBUTED SYSTREMS",
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
    { title: "Languages: ", list: "Java 11, Python, SQL, JavaScript, C++, C#" },
    {
      title: "Frameworks: ",
      list: "Spring Boot, REST, Microservices, RabbitMQ, NodeJS, Express, Linux, Docker, Kubernetes, ReactJS, TailwindCSS, Angular, Next.js, CNN, Flask",
    },
    {
      title: "WebTechnologies: ",
      list: "CSS, HTML5, XML, JSON, Ajax, GraphQL",
    },
    {
      title: "Databases: ",
      list: "MySQL, Oracle, PostgreSQL, PL/SQL, Apache Kafka, Elasticsearch, OpenSearch",
    },
    {
      title: "Cloudplatforms: ",
      list: "AWS (EC2, S3, SQS, RDS), Google Cloud Platform, Microsoft Azure (Service Bus)",
    },
    {
      title: "DevelopmentTools: ",
      list: "SVN, Git, Jenkins, Gradle, Maven, Postman, Jira, Confluence, VSCode",
    },
    {
      title: "TestingFrameworks: ",
      list: "JUnit, JSUnit, Selenium, Test driven development",
    },
    {
      title: "SoftSkills",
      list: " Event-driven architecture, Linux Server, Performance Tuning, organizational skills, attention to detail, Agile, multi-tasking, effective prioritization",
    },
  ],
};

import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedEducation, setSeletedEducation] = useState(null);
  const handleTabchange = (value) => {
    setSelectedExperience(null);
    setSeletedEducation(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="xl:mt-[5%] flex flex-col items-center  justify-center py-12 xl:pb-64px"
    >
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
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/**content */}
          <div className=" w-full xl:h-[300px] lg:h-[300px]">
            {/**experience */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col  gap-[10px] text-center xl:h-[400px] xl:text-left xl:w-[35rem]">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[200px] w-110 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 xl:hover:bg-accent-hover/10 cursor-pointer"
                        onClick={() => setSelectedExperience(index)}
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
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
                          className="bg-[#232329] h-full  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1  xl:hover:bg-accent-hover/10 cursor-pointer"
                          onClick={() => setSeletedEducation(index)}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
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
                        <span className="text-accent">
                          {item.published_date}
                        </span>

                        <h3 className="text-xl  min-h-[60px] text-center lg:text-left">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">
                            {item.publication_name}
                          </p>

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
              <div className="flex flex-col gap-[30px] xl:w-[35rem]">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-8">
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
        <div className="w-full mt-6 ">
          {selectedExperience !== null && (
            <div className="mt-4  p-6 bg-[#232329] rounded-xl items-center justify-center  ">
              <h4 className="text-2xl font-bold">
                {experience.items[selectedExperience].position} at{" "}
                {experience.items[selectedExperience].company}
              </h4>
              <p className="text-white/60 mt-2">
                {experience.items[selectedExperience].details}
              </p>
            </div>
          )}
          {selectedEducation !== null && (
            <div className="mt-4 p-6 bg-[#232329]  rounded-xl items-center justify-center  ">
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
    </motion.div>
  );
};

export default Resume;
