import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact = ({ isDarkMode }: ContactProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

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
      id="contact"
      ref={ref}
      className={`py-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
          <div className={`w-24 h-1 mx-auto ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'}`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
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
            className="md:w-1/3"
          >
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg mb-8`}>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="flex items-start mb-6">
                <Mail className={`mr-4 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`} />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:contact@example.com"
                    className={`${isDarkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors duration-300`}
                  >
                    uditanolkha@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Phone className={`mr-4 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`} />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a
                    href="tel:+918829942842"
                    className={`${isDarkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors duration-300`}
                  >
                    +918829942842
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className={`mr-4 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`} />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    B-284,R.K.colony,Bhilwara,Rajasthan<br />
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                You can also find me on these platforms:
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/uditanolkha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    isDarkMode ? 'bg-gray-600 hover:bg-teal-500' : 'bg-gray-200 hover:bg-teal-500'
                  } text-white transition-colors duration-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/udita-nolkha-70736925a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    isDarkMode ? 'bg-gray-600 hover:bg-teal-500' : 'bg-gray-200 hover:bg-teal-500'
                  } text-white transition-colors duration-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    isDarkMode ? 'bg-gray-600 hover:bg-teal-500' : 'bg-gray-200 hover:bg-teal-500'
                  } text-white transition-colors duration-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
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
            className="md:w-2/3"
          >
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitError && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  There was an error sending your message. Please try again later.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg ${
                        isDarkMode
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-teal-400'
                          : 'bg-gray-100 border-gray-300 text-gray-900 focus:border-teal-600'
                      } border focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                        isDarkMode ? 'focus:ring-teal-400' : 'focus:ring-teal-600'
                      }`}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg ${
                        isDarkMode
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-teal-400'
                          : 'bg-gray-100 border-gray-300 text-gray-900 focus:border-teal-600'
                      } border focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                        isDarkMode ? 'focus:ring-teal-400' : 'focus:ring-teal-600'
                      }`}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-teal-400'
                        : 'bg-gray-100 border-gray-300 text-gray-900 focus:border-teal-600'
                    } border focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      isDarkMode ? 'focus:ring-teal-400' : 'focus:ring-teal-600'
                    }`}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-2 rounded-lg ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-teal-400'
                        : 'bg-gray-100 border-gray-300 text-gray-900 focus:border-teal-600'
                    } border focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      isDarkMode ? 'focus:ring-teal-400' : 'focus:ring-teal-600'
                    }`}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg font-medium flex items-center ${
                    isDarkMode
                      ? 'bg-teal-500 hover:bg-teal-600 text-white'
                      : 'bg-teal-600 hover:bg-teal-700 text-white'
                  } transition-colors duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;