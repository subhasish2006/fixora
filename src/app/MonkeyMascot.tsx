'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MonkeyMascotProps {
  isPasswordFocused: boolean;
  showPassword: boolean;
}

export default function MonkeyMascot({ isPasswordFocused, showPassword }: MonkeyMascotProps) {
  // Mode logic:
  // - 'peek': Password is being shown (one eye open, one paw shifted)
  // - 'covered': Password field active & hidden (both eyes covered)
  // - 'idle': Not focusing on password field
  const mode = isPasswordFocused
    ? showPassword
      ? 'peek'
      : 'covered'
    : 'idle';

  return (
    <div className="w-28 h-28 mx-auto relative flex items-center justify-center">
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full drop-shadow-md overflow-visible"
      >
        {/* Outer Ears */}
        <circle cx="22" cy="50" r="14" fill="#8D5B4C" />
        <circle cx="22" cy="50" r="9" fill="#F3D2C1" />
        <circle cx="98" cy="50" r="14" fill="#8D5B4C" />
        <circle cx="98" cy="50" r="9" fill="#F3D2C1" />

        {/* Head */}
        <circle cx="60" cy="52" r="36" fill="#8D5B4C" />

        {/* Face Patch (Tan area) */}
        <path
          d="M 38,48 Q 48,34 60,45 Q 72,34 82,48 Q 86,68 60,78 Q 34,68 38,48 Z"
          fill="#F3D2C1"
        />

        {/* Nose */}
        <ellipse cx="60" cy="62" rx="5" ry="3.5" fill="#4A2E2B" />

        {/* Mouth */}
        <motion.path
          d={mode === 'idle' ? "M 52,69 Q 60,76 68,69" : "M 55,70 Q 60,73 65,70"}
          fill="none"
          stroke="#4A2E2B"
          strokeWidth="2.5"
          strokeLinecap="round"
          transition={{ duration: 0.2 }}
        />

        {/* Left Eye */}
        <g className="origin-[48px_48px]">
          {mode === 'idle' ? (
            <>
              <circle cx="48" cy="48" r="5.5" fill="#2D3748" />
              <circle cx="50" cy="46" r="2" fill="#FFFFFF" />
            </>
          ) : (
            // Closed left eye (happy curve)
            <path
              d="M 43,49 Q 48,44 53,49"
              fill="none"
              stroke="#4A2E2B"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          )}
        </g>

        {/* Right Eye */}
        <g className="origin-[72px_48px]">
          {mode === 'idle' || mode === 'peek' ? (
            <>
              {/* Eye pupil looks down towards password input in peek mode */}
              <circle cx="72" cy={mode === 'peek' ? "50" : "48"} r="5.5" fill="#2D3748" />
              <circle cx={mode === 'peek' ? "73" : "74"} cy={mode === 'peek' ? "49" : "46"} r="2" fill="#FFFFFF" />
            </>
          ) : (
            // Closed right eye (covered mode)
            <path
              d="M 67,49 Q 72,44 77,49"
              fill="none"
              stroke="#4A2E2B"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          )}
        </g>

        {/* Left Paw / Hand */}
        <motion.g
          initial={false}
          animate={
            mode === 'idle'
              ? { x: 0, y: 38, rotate: 0 }
              : { x: 18, y: -8, rotate: -10 } // Covers left eye in both covered & peek mode
          }
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <ellipse cx="32" cy="50" rx="11" ry="13" fill="#8D5B4C" />
          <ellipse cx="32" cy="52" rx="7" ry="8" fill="#F3D2C1" />
        </motion.g>

        {/* Right Paw / Hand */}
        <motion.g
          initial={false}
          animate={
            mode === 'idle'
              ? { x: 0, y: 38, rotate: 0 }
              : mode === 'covered'
              ? { x: -18, y: -8, rotate: 10 } // Covers right eye fully
              : { x: -6, y: 14, rotate: 25 } // Shifted down in peek mode so right eye looks out!
          }
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <ellipse cx="88" cy="50" rx="11" ry="13" fill="#8D5B4C" />
          <ellipse cx="88" cy="52" rx="7" ry="8" fill="#F3D2C1" />
        </motion.g>
      </svg>
    </div>
  );
}