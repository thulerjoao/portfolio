import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  delta: number;
  speedX: number;
  speedY: number;
}

const StarsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const numStars = 150;
    const stars: Star[] = Array.from({ length: numStars }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.5, // Algumas estrelas um pouco maiores
      alpha: Math.random(),
      delta: (Math.random() * 0.003 + 0.001), // Piscar suave
      speedX: (Math.random() - 0.5) * 0.075, // movimento horizontal lento
      speedY: (Math.random() - 0.5) * 0.03  // movimento vertical lento
    }));

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = theme.colors.backgroundColor;
      ctx.fillRect(0, 0, width, height);

      stars.forEach(star => {
        // Movimento sutil
        star.x += star.speedX;
        star.y += star.speedY;

        // Loop de bordas (para parecer infinito)
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Piscar suave
        star.alpha += star.delta;
        if (star.alpha <= 0.1 || star.alpha >= 1) star.delta *= -1;

        // Desenhar estrela
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default StarsBackground;

// import { useEffect, useRef } from "react";
// import styled from "styled-components";
// import theme from "../../styles/theme";

// const Canvas = styled.canvas`
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: -1;
//   width: 100%;
//   height: 100%;
// `;

// const StarsBackground = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const animationFrameId = useRef<number>(0);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     canvas.width = width;
//     canvas.height = height;

//     const numStars = 150;
//     const stars = Array.from({ length: numStars }).map(() => ({
//       x: Math.random() * width,
//       y: Math.random() * height,
//       radius: Math.random() * 1.5,
//       alpha: Math.random(),
//       delta: Math.random() * 0.005 + 0.001,
//     }));

//     const animate = () => {
//       if (!ctx) return;

//       ctx.clearRect(0, 0, width, height);
//       ctx.fillStyle = theme.colors.backgroundColor;
//       ctx.fillRect(0, 0, width, height);

//       stars.forEach((star) => {
//         star.alpha += star.delta;
//         if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;

//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
//         ctx.fill();
//       });

//       animationFrameId.current = requestAnimationFrame(animate);
//     };

//     animate();

//     const handleResize = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       canvas.width = width;
//       canvas.height = height;
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       cancelAnimationFrame(animationFrameId.current);
//     };
//   }, []);

//   return <Canvas ref={canvasRef} />;
// };

// export default StarsBackground;
