"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  FaPython,
  FaReact,
  FaJava,
  FaDatabase,
  FaNetworkWired,
  FaRoute,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiJupyter,
  SiFlask,
  SiSpringboot,
  SiSpringsecurity,
  SiTailwindcss,
  SiNextdotjs,
  SiVercel,
  SiOpencv,
  SiTensorflow,
  SiScikitlearn,
  SiKaggle,
  SiHtml5,
  SiCss3,
  SiAxios,
  SiHibernate,
  SiPostcss,
} from "react-icons/si";

const projects = [
  {
    nums: "01",
    categoty: "AI",
    title: "CelebLikeMe",
    link: "https://github.com/sharanreddy799/CelebLikeMe",
    description:
      "Celebrity LikeMe is a web application that utilizes machine learning models to detect skin tone, recognize faces, and predict the closest celebrity match based on facial features.",
    stack: [
      "python",
      "jupyter",
      "flask",
      "CNN",
      "Open-cv",
      "tensorflow",
      "Scikit-learn",
      "Model Training",
      "kaggle",
    ],
  },
  {
    nums: "02",
    category: "Web Application",
    title: "Learning Management System (LMS)",
    link: "https://github.com/sharanreddy799/Online-Learning-Management",
    description:
      "An online platform for managing courses, user registration, and authentication, facilitating a comprehensive learning experience.",
    stack: [
      "React",
      "React Router",
      "Axios",
      "Java",
      "HTML",
      "CSS",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
    ],
  },
  {
    nums: "03",
    category: "Personal Portifolio",
    title: "Sharan.io",
    link: "https://github.com/sharanreddy799/saisharankaram.github.io",
    description:
      "A personal portifolio page, built from scratch using NextJs & TailwindCss hosted on Vercel. It was my first front end project in my learning curve of React & JavaScript",
    stack: ["React", "NextJs", "HTML", "TailwindCss", "vercel"],
  },
];
const techIcons = {
  python: <FaPython title="Python" />,
  jupyter: <SiJupyter title="jupyter" />,
  flask: <SiFlask title="flask" />,
  React: <FaReact title="React" />,
  Java: <FaJava title="Java" />,
  "Spring Boot": <SiSpringboot title="Spring Boot" />,
  "Spring Security": <SiSpringsecurity title="Spring Security" />,
  NextJs: <SiNextdotjs title="NextJs" />,
  TailwindCss: <SiTailwindcss title="TailwindCss" />,
  vercel: <SiVercel title="vercel" />,
  "Open-cv": <SiOpencv title="Open-cv" />,
  tensorflow: <SiTensorflow title="tensorflow" />,
  "Scikit-learn": <SiScikitlearn title="Scikit-learn" />,
  kaggle: <SiKaggle title="kaggle" />,
  HTML: <SiHtml5 title="HTML" />,
  CSS: <SiCss3 title="CSS" />,
  Axios: <SiAxios title="Axios" />,
  CNN: <FaProjectDiagram title="CNN" />, // Suitable icon for neural networks
  "Model Training": <FaDatabase title="Model Training" />, // Suitable icon for model training
  "React Router": <FaRoute title="React Router" />, // Suitable icon for React Router
  "Spring Data JPA": <FaDatabase title="Spring Data JPA" />, // Suitable icon for Spring Data JPA
  Hibernate: <SiHibernate title="Hibernate" />, // Suitable icon for Hibernate
};
const Projects = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{
    //     opacity: 1,
    //     transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
    //   }}
    //   className="xl:mt-[5%] flex flex-col items-center  justify-center py-12 xl:py-0 mx-auto"
    // >
    <div className="container mx-auto">
      <Tabs defaultValue="01" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="01">CelebeLikeMe</TabsTrigger>
          <TabsTrigger value="02">Online Learning Management</TabsTrigger>
          <TabsTrigger value="03">Personal Portifolio</TabsTrigger>
        </TabsList>
        {projects.map((project) => (
          <TabsContent
            key={project.nums}
            value={project.nums}
            className="w-full"
          >
            <div className="flex flex-col text-center xl:text-left xl:w-[35rem] bg-[#232329] h-full  py-6 px-8 rounded-xl justify-center items-center xl:items-start gap-8  cursor-pointer">
              <h3 className="text-4xl font-bold">{project.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {project.description}
              </p>
              <Link href={project.link} className="text-blue-700">
                link
              </Link>

              <ul className=" grid grid-cols-5 gap-[25px] pb-100px  xl:flex flex-row">
                {project.stack.map((tech, index) => {
                  return (
                    <li className="" key={index}>
                      <div className="text-[28px] text-accent">
                        {techIcons[tech] || tech}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
    // </motion.div>
  );
};

export default Projects;
