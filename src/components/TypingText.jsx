import { motion } from "framer-motion";
import { typingVariants } from "../utils/motionVariants";

export default function TypingText({ text, background }) {
  const characters = text.split("")

  return (
    <h1 style={{ letterSpacing: "-0.15rem" }}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={typingVariants}
          initial="hidden"
          animate="visible"
          className={`text-2xl sm:text-3xl font-semibold text-themeNeonGreen`}
        >
          {/* Conditionally render spaces */}
          {char === " " ? "\u00A0" : char} {/* Non-breaking space for spaces */}
        </motion.span>
      ))}
    </h1>
  )
}