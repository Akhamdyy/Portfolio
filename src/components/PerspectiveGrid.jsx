import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function PerspectiveGrid() {
  // We use motion values to avoid triggering a React re-render 60 times a second
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalizing mouse position (-0.5 to 0.5)
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // We rotate the grid based on mouse movement
  // rotateX: tilts the floor forward/backward
  // rotateY: tilts the floor left/right
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["60deg", "50deg"]); 
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  return (
    <div className="fixed inset-0 z-1 overflow-hidden pointer-events-none">
      {/* Dynamic Glow that follows mouse slightly */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(37,99,235,0.15),transparent_80%)]"
        style={{
          '--x': useTransform(mouseX, [-0.5, 0.5], ["40%", "60%"]),
          '--y': useTransform(mouseY, [-0.5, 0.5], ["40%", "60%"])
        }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center perspective-[1000px]">
        <motion.div 
          style={{ 
            rotateX, 
            rotateY, 
            transformStyle: "preserve-3d" 
          }}
          className="relative w-[200%] h-[200%] origin-center"
        >
          {/* The Grid Lines */}
          <div 
            className="w-full h-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:50px_50px]"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)'
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}