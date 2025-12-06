"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaCloud,
  FaCode,
  FaShieldAlt,
  FaChartLine,
  FaServer,
  FaLock,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Backend Development",
    description:
      "Scalable backend solutions using Ruby on Rails, Python (Django/Flask/FastAPI), and Spring Boot. RESTful APIs, GraphQL, and microservices architecture.",
    features: [
      "API Design & Development",
      "Database Optimization",
      "Performance Tuning",
      "Real-time Features (WebSockets)",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Architecture & DevOps",
    description:
      "AWS-certified expertise in designing, deploying, and optimizing cloud infrastructure. Infrastructure as Code (Terraform/CloudFormation) and CI/CD pipelines.",
    features: [
      "AWS/Azure/GCP Solutions",
      "Infrastructure as Code",
      "CI/CD Pipeline Setup",
      "Cost Optimization (25% avg savings)",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cloud Security & Audits",
    description:
      "Comprehensive security assessments and implementations. IAM policies, encryption, intrusion detection, and compliance with security best practices.",
    features: [
      "Security Audits & Assessments",
      "IAM & Access Control",
      "Compliance Implementation",
      "Vulnerability Remediation",
    ],
    color: "from-red-500 to-pink-500",
  },
  {
    icon: <FaChartLine />,
    title: "System Optimization",
    description:
      "Performance analysis and optimization for existing systems. Database query optimization, caching strategies, and scalability improvements.",
    features: [
      "Performance Monitoring",
      "Database Query Optimization",
      "Caching Implementation",
      "Load Balancing",
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    icon: <FaServer />,
    title: "Microservices Architecture",
    description:
      "Breaking down monolithic applications into scalable microservices. Design patterns, API gateways, and service mesh implementations.",
    features: [
      "Monolith to Microservices Migration",
      "API Gateway Setup",
      "Service Discovery",
      "Container Orchestration (K8s)",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <FaLock />,
    title: "DevSecOps Consulting",
    description:
      "Integrating security into DevOps workflows. Automated security scanning, secure CI/CD pipelines, and security best practices training.",
    features: [
      "Security Automation",
      "Secure Pipeline Design",
      "Compliance Monitoring",
      "Team Training",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <FaCode />,
    title: "Technical Writing & Documentation",
    description:
      "Expert technical writing services in cloud computing, bioinformatics, finance, and software engineering. Clear, accurate documentation for complex technical concepts.",
    features: [
      "Cloud Architecture Documentation",
      "Bioinformatics & Computational Biology",
      "Financial Engineering & FinTech",
      "API Documentation & Guides",
    ],
    color: "from-pink-500 to-rose-500",
  },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.services.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-4`}
              >
                <div className="text-3xl">{service.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                  >
                    <span className="text-purple-600 mr-2 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {t.services.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
