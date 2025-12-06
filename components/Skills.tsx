"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import {
  FaCode,
  FaPalette,
  FaCloud,
  FaDatabase,
  FaShieldAlt,
  FaTools,
  FaBrain,
} from "react-icons/fa";

const categoryIcons: { [key: string]: React.ReactElement } = {
  "Backend Development": <FaCode />,
  "Frontend Development": <FaPalette />,
  "Cloud & DevOps": <FaCloud />,
  Databases: <FaDatabase />,
  "Security & Monitoring": <FaShieldAlt />,
  "Tools & Practices": <FaTools />,
  "AI/ML & Data Science": <FaBrain />,
};

const categoryColors: { [key: string]: string } = {
  "Backend Development": "from-purple-500 to-pink-500",
  "Frontend Development": "from-blue-500 to-cyan-500",
  "Cloud & DevOps": "from-green-500 to-teal-500",
  Databases: "from-orange-500 to-red-500",
  "Security & Monitoring": "from-red-500 to-pink-500",
  "Tools & Practices": "from-indigo-500 to-purple-500",
  "AI/ML & Data Science": "from-pink-500 to-purple-500",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            My technical toolkit for building robust solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${categoryColors[category]} text-white mr-3`}
                >
                  {categoryIcons[category]}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
