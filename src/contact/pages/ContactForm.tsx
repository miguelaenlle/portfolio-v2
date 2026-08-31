import { motion } from "framer-motion";
import Wrapper from "../../shared/components/Wrapper";
import EmailLink from "../components/EmailLink";

const ContactForm: React.FC = () => {
  return (
    <section className="bg-slate-950 py-20 sm:py-24">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-400">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            I&apos;m open to software engineering and research opportunities across
            applied AI, distributed systems, and production infrastructure.
          </p>
          <div className="mt-7">
            <EmailLink />
          </div>
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default ContactForm;
