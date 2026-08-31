import { motion } from "framer-motion";
import Wrapper from "../../shared/components/Wrapper";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const About: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-20 sm:py-24">
      <Wrapper>
        <div className="mx-auto grid max-w-5xl items-center gap-8 sm:grid-cols-[minmax(220px,320px)_minmax(0,1fr)] md:gap-14">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -3 }}
            className="group relative mx-auto w-full max-w-[320px] overflow-hidden rounded-[1.25rem] border border-zinc-200 bg-zinc-100 shadow-sm"
            style={{ aspectRatio: "1 / 1" }}
          >
            <img
              src="/images/miguel.jpg"
              alt="Miguel Aenlle"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
            />
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="min-w-0"
          >
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Hey there! <span aria-hidden="true">👋</span>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              <p>
                I&apos;m Miguel, a Computer Science Major at the University of
                Illinois, Urbana-Champaign.
              </p>
              <p>
                I build secure, production-grade systems at the
                intersection of machine learning, distributed systems, and cloud
                computing.
              </p>
              <p>See some of my work and experience below!</p>
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
