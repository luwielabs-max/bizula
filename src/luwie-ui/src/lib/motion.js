export const buttonMotion = {
  whileHover: {
    y: -2,
    scale: 1.00,
  },

  whileTap: {
    y: 1,
    scale: 0.90,
  },

  transition: {
    type: "spring",
    stiffness: 500,
    damping: 30,
  },
};

export const avatarMotion = {
  whileHover: {
    scale: 1.04,
  },

  transition: {
    type: "spring",
    stiffness: 400,
    damping: 20,
  },
};

export const inputMotion = {
  whileFocus: {
    scale: 1.005,
  },

  transition: {
    duration: 0.15,
  },
};

export const sidebarMotion = {
  initial: {
    x: -20,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
  },

  transition: {
    duration: 0.25,
  },
};

export const dockItemMotion = {
  whileHover: {
    y: -4,
    scale: 1.08,
  },

  whileTap: {
    scale: 0.95,
    y: -2,
  },

  transition: {
    type: "spring",
    stiffness: 400,
    damping: 20,
  },
};