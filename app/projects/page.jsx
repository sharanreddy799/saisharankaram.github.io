"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    nums: "01",
    categoty: "AI",
    title: "CelebLikeMe",
    description: "",
    stack: [{ name: "python" }, { name: "CNN" }, { name: "" }],
  },
];
const Projects = () => {
  return <div> projects page</div>;
};

export default Projects;
