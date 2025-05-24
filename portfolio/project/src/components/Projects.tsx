import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  github?: string;
  live?: string;
}

const Projects = ({ isDarkMode }: ProjectsProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Women Empowerment',
      description: 'Front End Web Development Project On Gender Equality',
      image: 'images/project1.jpeg',
      category: ['WebSite', 'Dashboard'],
      technologies: ['HTML', 'JavaScript', 'CSS'],
      github: 'https://github.com/uditanolkha/FEWD-PROJECT-',
    },
    // {
    //   id: 2,
    //   title: 'Social Media App',
    //   description: 'A social networking platform with real-time messaging, post sharing, and user connections.',
    //   image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   category: ['Web App', 'Mobile'],
    //   technologies: ['React Native', 'Firebase', 'Redux', 'Express'],
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    // },
    // {
    //   id: 3,
    //   title: 'Task Management Tool',
    //   description: 'A productivity application for teams to organize tasks, track progress, and collaborate effectively.',
    //   image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   category: ['Web App', 'Productivity'],
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    // },
    // {
    //   id: 4,
    //   title: 'Travel Blog Website',
    //   description: 'A responsive blog website showcasing travel experiences, photography, and destination guides.',
    //   image: 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   category: ['Website', 'Blog'],
    //   technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    // },
    // {
    //   id: 5,
    //   title: 'Weather App',
    //   description: 'A weather application providing real-time forecasts, location-based weather data, and interactive maps.',
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   category: ['Web App', 'Mobile'],
    //   technologies: ['React', 'API Integration', 'Geolocation', 'PWA'],
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    // },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects, skills, and professional experience.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: ['Website', 'Portfolio'],
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/uditanolkha',
    },
  ];

  const categories = ['All', 'Website', 'Dashboard', 'Portfolio'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeCategory));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <div className={`w-24 h-1 mx-auto ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'}`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Here are some of the projects I've worked on. Click on them to learn more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? isDarkMode
                    ? 'bg-teal-500 text-white'
                    : 'bg-teal-600 text-white'
                  : isDarkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover={{ y: -10 }}
                className={`rounded-lg overflow-hidden shadow-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute inset-0 ${
                    isDarkMode ? 'bg-black/30' : 'bg-black/20'
                  } flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300`}>
                    <div className="flex space-x-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full text-gray-900 hover:text-teal-600 transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full text-gray-900 hover:text-teal-600 transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.category.map((cat) => (
                      <span
                        key={cat}
                        className={`text-xs px-2 py-1 rounded-full ${
                          isDarkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2 py-1 rounded-full ${
                          isDarkMode
                            ? 'bg-gray-700 text-teal-400'
                            : 'bg-teal-100 text-teal-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
