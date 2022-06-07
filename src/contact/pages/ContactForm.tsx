import Wrapper from "../../shared/components/Wrapper";
import EmailLink from "../components/EmailLink";

const ContactForm: React.FC<{}> = (props) => {
  return (
    <div>
      <div className="bg-hero-pattern py-60 space-y-3">
        <Wrapper>
          <div>
            <p className="text-3xl text-zinc-800">In need of a developer?</p>
            <div className="flex items-center width max-w-2xl pt-5">
              <p className="text-xl text-zinc-600">
                I'm currently open to employment and freelance opportunities.
                Feel free to start a chat!
              </p>
            </div>
            <br />
            <EmailLink />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};
export default ContactForm;
