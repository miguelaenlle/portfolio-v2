import { useEffect, useState } from "react";
import { useDisplay } from "../../shared/hooks/use-display";
const Subheader: React.FC<{}> = (props) => {
  const { displayed } = useDisplay(100);

  return (
    <p
      className={`text-slate-600 text-2xl animate-in ${
        displayed
          ? "block fade-in slide-in-from-top duration-500 delay-200"
          : "invisible"
      }`}
    >
      Fullstack Web & Mobile Developer
    </p>
  );
};
export default Subheader;
