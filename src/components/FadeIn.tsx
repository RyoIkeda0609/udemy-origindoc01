import React, { createContext, useContext } from "react";
import { motion } from "framer-motion";

const FadeInStaggerContext = createContext(false);
const viewport = { once: true, margin: `0px 0px -200px` };

type FadeInProps = {
  children: React.ReactNode;
};

const FadeIn = (children: FadeInProps) => {
  const isInStaggerGroup = useContext(FadeInStaggerContext);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...children}
    ></motion.div>
  );
};

export default FadeIn;
