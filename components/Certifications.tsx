"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaCloud,
  FaShieldAlt,
  FaBrain,
  FaCode,
  FaAward,
} from "react-icons/fa";

const categoryIcons: { [key: string]: React.ReactElement } = {
  Cloud: <FaCloud />,
  Security: <FaShieldAlt />,
  "AI/ML": <FaBrain />,
  Development: <FaCode />,
};

const categoryColors: { [key: string]: string } = {
  Cloud: "from-blue-500 to-cyan-500",
  Security: "from-red-500 to-pink-500",
  "AI/ML": "from-purple-500 to-pink-500",
  Development: "from-green-500 to-teal-500",
};

export default function Certifications() {
  const { t } = useLanguage();
  
  const groupedCerts = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {} as { [key: string]: typeof certifications });

  return (
    <section
      id="certifications"
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
            {t.certifications.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t.certifications.subtitle}
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(groupedCerts).map(([category, certs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${categoryColors[category]} text-white mr-3`}
                >
                  {categoryIcons[category] || <FaAward />}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {category}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certs.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
