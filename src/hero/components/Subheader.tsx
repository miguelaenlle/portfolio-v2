import { useEffect, useState } from "react";
import { useDisplay } from "../../shared/hooks/use-display";
const Subheader: React.FC<{}> = (props) => {
  const { displayed } = useDisplay(100);

  return (
    <p className={`text-zinc-600 break-words text-2xl micro:text-xl w-full`}>
      Fullstack Web & Mobile Developer
    </p>
  );
};
export default Subheader;
