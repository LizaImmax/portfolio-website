"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCode, FaAward, FaProjectDiagram, FaRocket } from "react-icons/fa";

const stats = [
  {
    icon: <FaCode />,
    value: 4,
    suffix: "+",
    label: "Years Experience",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaProjectDiagram />,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaAward />,
    value: 15,
    suffix: "+",
    label: "Certifications",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: <FaRocket />,
    value: 25,
    suffix: "%",
    label: "Cost Reduction Achieved",
    color: "from-orange-500 to-red-500",
  },
];

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Impact by Numbers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Delivering measurable results across projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4`}
                >
                  <div className="text-3xl">{stat.icon}</div>
                </div>
                <div className="text-5xl font-bold text-gray-800 dark:text-white mb-2">
                  <Counter end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
