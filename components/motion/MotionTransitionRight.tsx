"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionTransitionRightProps {
  children: ReactNode;
}

const MotionTransitionRight: React.FC<MotionTransitionRightProps> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionTransitionRight;
