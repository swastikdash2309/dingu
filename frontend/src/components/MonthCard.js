import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const MonthCard = ({ monthNumber, title, text, imageUrl, reverse = false, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (onToggle) {
      onToggle(monthNumber, newIsOpen);
    }
  };

  const textParagraphs = text.split('\n\n').filter(p => p.trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full"
      data-testid={`month-card-${monthNumber}`}
    >
      <div className="glass-panel rounded-3xl shadow-xl border border-white/50 overflow-hidden">
        <motion.button
          onClick={handleToggle}
          className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-white/20 transition-all duration-300"
          data-testid={`month-toggle-${monthNumber}`}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <motion.h3 
            className="font-heading text-4xl md:text-5xl text-romantic-accent"
            animate={{ 
              scale: isOpen ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.div
            animate={{ 
              rotate: isOpen ? 180 : 0,
              scale: isOpen ? 1.1 : 1 
            }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          >
            <ChevronDown className="w-8 h-8 text-romantic-accent" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div
                className={`p-6 md:p-8 pt-0 flex flex-col ${
                  reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                } gap-6 md:gap-8 items-center`}
              >
                <motion.div 
                  className={`w-full md:w-1/2 ${monthNumber === 2 ? 'brightness-125' : ''}`}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <img
                    src={imageUrl}
                    alt={`Month ${monthNumber}`}
                    className="rounded-2xl shadow-md w-full h-64 md:h-80 object-cover"
                    data-testid={`month-image-${monthNumber}`}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{
                      background: 'radial-gradient(circle, rgba(216,180,248,0.3) 0%, transparent 70%)',
                      pointerEvents: 'none'
                    }}
                  />
                </motion.div>
                <motion.div 
                  className="w-full md:w-1/2 space-y-4"
                  initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.7,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 80
                  }}
                >
                  {textParagraphs.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      className="font-body text-base md:text-lg text-gray-700 leading-relaxed"
                      data-testid={`month-text-${monthNumber}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + (index * 0.1),
                        ease: "easeOut"
                      }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MonthCard;
