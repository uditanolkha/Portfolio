import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase as BriefcaseBusiness, CalendarRange, Building } from 'lucide-react';

interface ExperienceProps {
  isDarkMode: boolean;
}

const Experience = ({ isDarkMode }: ExperienceProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experienceData = [
    {
      title: 'Frontend Developer',
      company: 'CSRBOX',
      period: 'Jun,2024-August,2024',
      description: 'Mastered core front-end tools and techniques, including HTML, CSS, and JavaScript.Completed practical projects focused on building responsive websites and improving usability.',
      skills: ['JavaScript', 'HTML/CSS', 'Responsive Design', 'Bootstrap'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience</h2>
          <div className={`w-24 h-1 mx-auto ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'}`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-12 md:mb-0 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2 p-6">
                <div
                  className={`p-6 rounded-lg shadow-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } relative`}
                >
                  {/* Timeline dot for desktop */}
                  <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-teal-500 border-4 border-white dark:border-gray-800 z-10 left-0 md:left-auto md:right-0 md:translate-x-1/2 md:-translate-x-full"></div>

                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <div className="flex items-center mb-2">
                    <Building size={18} className={`mr-2 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`} />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <CalendarRange size={18} className={`mr-2 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`} />
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {job.period}
                    </span>
                  </div>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-sm px-3 py-1 rounded-full ${
                          isDarkMode
                            ? 'bg-gray-600 text-teal-300'
                            : 'bg-teal-100 text-teal-800'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;