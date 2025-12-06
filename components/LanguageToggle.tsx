'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';
import { motion } from 'framer-motion';

const languages = [
  { code: 'en' as Language, label: 'EN', flag: '🇬🇧' },
  { code: 'de' as Language, label: 'DE', flag: '🇩🇪' },
  { code: 'it' as Language, label: 'IT', flag: '🇮🇹' },
];

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`relative px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            language === lang.code
              ? 'text-white'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {language === lang.code && (
            <motion.div
              layoutId="activeLanguage"
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-1">
            <span>{lang.flag}</span>
            <span>{lang.label}</span>
          </span>
        </motion.button>
      ))}
    </div>
  );
}
