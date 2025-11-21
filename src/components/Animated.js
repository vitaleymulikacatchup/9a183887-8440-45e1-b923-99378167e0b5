// src/components/Animated.js
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FX } from '../lib/motion';

export default function Animated({
  as = 'div',           // 'div' | 'section' | 'header' | 'li' | ...
  preset = 'fadeUp',    // 'fadeIn' | 'fadeUp' | 'slideIn' | 'scaleIn' | 'none'
  options = {},         // { d, t, e, y, x, s }
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] || motion.div;

  if (reduce || preset === 'none') {
    // Respect reduced motion: render without animation
    const Plain = as in motion ? (as) : 'div';
    return React.createElement(Plain, { ...rest }, children);
  }

  const cfg = (FX[preset] || FX.fadeUp)(options);
  return <Comp {...cfg} {...rest}>{children}</Comp>;
}