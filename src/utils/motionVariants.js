import { duration } from "@mui/material"
import { easeIn, easeInOut, filterProps, transform } from "framer-motion"

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
      delay: 0.5,
      staggerChildren: 1,
      delayChildren: 1
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

export const projectCardVariant = {
  tilt: {
    rotate: 0,
  },
  untilt :{
    rotate: 0,
    transition: {
      duration: 0.8,
    }
  }
}

export const waveVariant = {
  preWave: {
    rotateY: "180deg"
  },
  wave: {
    rotateY: 0,
    transition: {
      duration: 1
    }
  } 
}

export const glitchVariants = {
  visible: {
    x: [0, 5, 0, -5, 0, 5, 0], 
    opacity: [1, 0.7, 0.3, 1],
    transition: {
      duration: 0.1,
      repeat: 10,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  },
};

export const descVariant = {
  hide: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  show: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};

export const typingVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.08, // Staggered delay, adjust to control typing speed
    }
  }),
};