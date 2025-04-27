import { VariantProps } from "framer-motion";

export const fadeIn = (delay?: number) => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay || 0,
        duration: 0.5,
      },
    },
  };
};

export const slideUp = (delay?: number) => {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay || 0,
        duration: 0.5,
      },
    },
  };
};

export const staggerContainer = (staggerChildren?: number, delayChildren?: number) => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren || 0.1,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
