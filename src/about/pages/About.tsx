import { motion } from "framer-motion";
import Wrapper from "../../shared/components/Wrapper";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 pt-20 bg-white">
      <Wrapper>
        <div className="flex flex-col sm:flex-row gap-8 md:gap-12 items-center justify-start mx-auto max-w-[1600px]">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full sm:w-auto max-w-[400px] shadow-lg rounded-lg"
          >
            <img
              src="/images/miguel.jpg"
              alt="Miguel Aenlle"
              style={{ aspectRatio: "1 / 1" }}
              className="w-full sm:w-80 max-w-[400px] sm:max-w-80 rounded-lg object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-2xl"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Hey there! 👋
            </motion.h2>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-gray-700">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                I'm Miguel, a Computer Science Major at the University of Illinois, Urbana-Champaign.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I have extensive experience in <b>large-scale cloud backend development</b>, <b>AI infrastructure</b>, & <b>full-stack engineering</b>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                See some of my work and experience below!
              </motion.p>
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
