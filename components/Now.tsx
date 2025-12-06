"use client";

import { motion } from "framer-motion";
import {
  FaCloud,
  FaMicrophone,
  FaBook,
  FaRocket,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const currentProjects = [
  {
    icon: <FaCloud />,
    title: "Upepo Cloud",
    status: "In Active Development",
    description:
      "Building a cloud platform from scratch to deeply understand cloud computing through reverse-engineering. Creating a stage-based system from Core Node to distributed scalability.",
    progress: 35,
    links: {
      github: "https://github.com/LizaImmax/Upepo-Cloud",
    },
    techStack: ["Cloud Computing", "System Design", "Networking", "Security"],
    updates: [
      "Completed Core Node infrastructure design",
      "Working on distributed load balancing",
      "Documenting architecture decisions",
    ],
  },
  {
    icon: <FaMicrophone />,
    title: "Upepo Voices",
    status: "Growing Platform",
    description:
      "Platform for sharing stories that inspire and connect through interviews, podcasts, and industry insights. Building a community of tech voices.",
    progress: 60,
    links: {
      github: "https://github.com/LizaImmax/Upepo-Voices",
    },
    techStack: ["TypeScript", "Next.js", "React", "Content Management"],
    updates: [
      "Launched initial platform",
      "Planning first podcast series",
      "Building content calendar",
    ],
  },
  {
    icon: <FaBook />,
    title: "Upepo Soul",
    status: "New Initiative",
    description:
      "A wellness and mindfulness platform focused on mental health, personal growth, and holistic well-being for the tech community.",
    progress: 20,
    links: {
      github: "https://github.com/LizaImmax/Upepo-Soul",
    },
    techStack: ["Wellness", "Content Platform", "Community Building"],
    updates: [
      "Conceptualizing platform structure",
      "Researching wellness content strategy",
      "Building initial framework",
    ],
  },
  {
    icon: <FaBook />,
    title: "Upepo Book Club",
    status: "New Initiative",
    description:
      "A community-driven book club focusing on technical books, leadership, personal development, and diverse perspectives in tech.",
    progress: 15,
    links: {
      github: "https://github.com/LizaImmax/Upepo-BookClub",
    },
    techStack: ["Community", "Education", "Literature"],
    updates: [
      "Selecting inaugural book list",
      "Setting up discussion platform",
      "Building reading community",
    ],
  },
];

const learning = [
  {
    icon: <FaCloud />,
    title: "AZ-305: Designing Microsoft Azure Infrastructure Solutions",
    institution: "Microsoft",
    description: "Azure Solutions Architect Expert certification path - designing enterprise-grade cloud solutions",
    status: "In Progress",
  },
  {
    icon: <FaBook />,
    title: "Masters in Financial Engineering",
    institution: "WorldQuant University",
    description: "Advanced degree program combining finance, mathematics, and computer science for quantitative finance",
    status: "In Progress",
  },
];

const goals = [
  {
    icon: <FaRocket />,
    title: "Q1 2026 Goals",
    items: [
      "Complete Upepo Cloud Stage 6: Security and Identity",
      "Launch Upepo Soul wellness platform",
      "Host first Upepo Book Club discussion",
      "Launch 3 podcast episodes on Upepo Voices",
      "Publish 5 technical blog posts",
      "Make significant progress in AZ-305 certification",
    ],
  },
];

export default function Now() {
  return (
    <section
      id="now"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            What I&apos;m Working On Now
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Current projects, learning journey, and upcoming goals
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Last updated: December 2025
          </p>
        </motion.div>

        {/* Current Projects - Upepo Ecosystem */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
          >
            🚀 The Upepo Ecosystem
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white mr-3">
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {project.title}
                      </h4>
                      <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium mt-1">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400">
                      Progress
                    </span>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Recent Updates:
                  </h5>
                  <ul className="space-y-1">
                    {project.updates.map((update, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                      >
                        <span className="text-purple-600 mr-2">•</span>
                        {update}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex space-x-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                    >
                      <FaGithub className="mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
          >
            📚 Currently Learning
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learning.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white mr-4">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {item.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                      {item.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
          >
            🎯 Upcoming Goals
          </motion.h3>
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white mr-4">
                  {goal.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {goal.title}
                </h4>
              </div>
              <ul className="space-y-3">
                {goal.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-700 dark:text-gray-300 flex items-start"
                  >
                    <span className="text-purple-600 mr-3 text-xl">▸</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
