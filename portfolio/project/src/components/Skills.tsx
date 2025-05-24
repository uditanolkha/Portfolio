import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillProps {
  isDarkMode: boolean;
}

const Skills = ({ isDarkMode }: SkillProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skills = [
    { name: 'JavaScript' ,level :'85'},
    { name: 'HTML/CSS',level:'95'},
    { name: 'Git' ,level:'90'},
    { name: 'Responsive Design',level :'80'},
    { name: 'C/C++',level :'90'},
    { name: 'Java',level : '75'},
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
          <div className={`w-24 h-1 mx-auto ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'}`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I've learned a variety of technologies and tools throughout my collegelife. Here are some of my key skills:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              whileHover={{ scale: 1.03 }}
              className={`p-6 rounded-lg ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors duration-300`}
            >
              <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
              <div className="relative h-4 w-full bg-gray-300 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  className={`absolute top-0 left-0 h-full ${
                    isDarkMode ? 'bg-teal-400' : 'bg-teal-600'
                  } rounded-full`}
                ></motion.div>
              </div>
              <div className="flex justify-end mt-1">
                <span className="text-sm">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;