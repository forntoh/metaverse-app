import { motion } from "framer-motion";

export const Button = ({ label, className, ...props }) => {
  return (
    <motion.button
      className={`border-primary border rounded px-6 py-2 bg-primary text-background transition-all whitespace-nowrap select-none text-lg font-bold ${className}`}
      whileTap={{
        scale: 0.95,
        transition: {
          duration: 0.025,
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.025,
        },
      }}
      {...props}
    >
      {label}
    </motion.button>
  );
};
