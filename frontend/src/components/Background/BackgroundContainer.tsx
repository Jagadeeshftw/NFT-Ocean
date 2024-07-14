import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { AuroraBackground } from "../ui/aurora-background";

const BackgroundContainer: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <AuroraBackground className="min-h-screen">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        {children}
      </motion.div>
    </AuroraBackground>
  );
};

export default BackgroundContainer;
