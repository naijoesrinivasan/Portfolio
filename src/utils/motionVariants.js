import { duration } from "@mui/material"
import { easeIn, easeInOut, transform } from "framer-motion"

export const slideFromLeft = {
  hide: {
    // x: "-100vw",
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5
    }
  }
}

export const slideFromRight = {
  hide: {
    // x: "100vw",
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5
    }
  }
}

export const slideFromTop = {
  hide: {
    y: 100,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeInOut"
    }
  }
}

export const slideFromBottom = {
  hide: {
    y: -100,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeInOut"
    }
  }
}

export const navVariant = {
  hide: {
    y: "-100vh",
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      ease: "easeOut"
    }
  }
}

export const gradVariant = {
  hide: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 1
    }
  }
}

export const heroHover = {
  hover: {
    scale: [1, 1.05, 1]
  }
}