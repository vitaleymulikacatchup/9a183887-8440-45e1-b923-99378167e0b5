// src/lib/motion.js
export const FX = {
  none: () => ({}),

  fadeIn: ({ d=0, t=0.6, e='easeOut' } = {}) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: t, ease: e, delay: d }
  }),

  fadeUp: ({ d=0, t=0.6, e='easeOut', y=16 } = {}) => ({
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: t, ease: e, delay: d }
  }),

  slideIn: ({ d=0, t=0.6, e='easeOut', x=24 } = {}) => ({
    initial: { opacity: 0, x },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: t, ease: e, delay: d }
  }),

  scaleIn: ({ d=0, t=0.5, e='easeOut', s=0.98 } = {}) => ({
    initial: { opacity: 0, scale: s },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: t, ease: e, delay: d }
  })
};