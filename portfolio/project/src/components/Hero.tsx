import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero = ({ isDarkMode }: HeroProps) => {
  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-2xl ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>Hello, I'm</h2>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mt-2 mb-4"
          >
            Udita Nolkha
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl md:text-2xl mb-6">Computer Science Student</h3>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`text-base md:text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#contact" 
              className={`px-6 py-3 rounded-lg font-medium ${
                isDarkMode 
                  ? 'bg-teal-500 hover:bg-teal-600 text-white' 
                  : 'bg-teal-600 hover:bg-teal-700 text-white'
              } transition-colors duration-300`}
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className={`px-6 py-3 rounded-lg font-medium ${
                isDarkMode 
                  ? 'bg-transparent border border-white hover:bg-gray-800 text-white' 
                  : 'bg-transparent border border-gray-900 hover:bg-gray-100 text-gray-900'
              } transition-colors duration-300`}
            >
              View Projects
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex mt-8 space-x-4"
          >
            <a 
              href="https://github.com/uditanolkha" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${
                isDarkMode ? 'text-white hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'
              } transition-colors duration-300`}
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/udita-nolkha" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${
                isDarkMode ? 'text-white hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'
              } transition-colors duration-300`}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="uditanolkha@gmail.com" 
              className={`p-2 rounded-full ${
                isDarkMode ? 'text-white hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'
              } transition-colors duration-300`}
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500 shadow-2xl">
            <img 
              src="/image/main.jpeg" 
              alt="Udita Nolkha" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a 
          href="#about" 
          className={`flex flex-col items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
