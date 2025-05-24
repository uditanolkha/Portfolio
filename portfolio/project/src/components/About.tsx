import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  isDarkMode: boolean;
}

const About = ({ isDarkMode }: AboutProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className={`w-24 h-1 mx-auto ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'}`}></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.2,
                },
              },
            }}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="md:w-1/2"
          >
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Workspace"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.4,
                },
              },
            }}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="md:w-1/2"
          >
            <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>
              Who I Am
            </h3>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I am a computer science student, I see myself as a hardworking and enthusiastic individual eager to 
              acquire new skills. I am excited about gaining my first work experience. I am eager to apply my 
              theoretical knowledge in a practical setting, collaborate with experienced professionals, and contribute
              to meaningful projects. 
            </p>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Furthermore, I am committed to continuous learning and personal growth, always seeking opportunities 
              to enhance my technical and soft skills. 
            </p>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              When I'm not coding, you can find me exploring new design trends, attending tech meetups, or enjoying outdoor 
              activities to recharge my creative energy.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Education</h4>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  B.Tech in Computer Science<br />
                  Rajasthan Technical University
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Bhilwara ,Rajasthan<br />
                  Open to Remote Work
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;