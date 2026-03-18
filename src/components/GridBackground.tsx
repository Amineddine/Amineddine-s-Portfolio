"use client";

import { useEffect, useRef } from "react";

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return undefined;
    }

    let animationFrame = 0;
    const dots: Array<{ x: number; y: number; drift: number; size: number }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      dots.length = 0;

      const count = Math.min(Math.floor((canvas.width * canvas.height) / 180000), 24);
      for (let index = 0; index < count; index += 1) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          drift: Math.random() * 0.4 + 0.1,
          size: Math.random() * 1.6 + 0.4,
        });
      }
    };

    const draw = () => {
      const time = performance.now() * 0.00018;
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.strokeStyle = "rgba(151, 166, 190, 0.045)";
      context.lineWidth = 1;

      const gridSize = 92;
      for (let x = 0; x < canvas.width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
        context.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvas.width, y);
        context.stroke();
      }

      context.strokeStyle = "rgba(149, 208, 224, 0.08)";
      context.lineWidth = 1.05;

      for (let y = 120; y < canvas.height; y += 260) {
        const drift = Math.sin(time + y * 0.002) * 24;
        context.beginPath();
        context.moveTo(-40, y + drift);
        context.bezierCurveTo(
          canvas.width * 0.22,
          y - 38 + drift,
          canvas.width * 0.5,
          y + 44 - drift,
          canvas.width + 40,
          y - 18 + drift
        );
        context.stroke();
      }

      dots.forEach((dot, index) => {
        dot.y += dot.drift;
        if (dot.y > canvas.height + 20) {
          dot.y = -20;
          dot.x = Math.random() * canvas.width;
        }

        context.beginPath();
        context.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        context.fillStyle = index % 3 === 0 ? "rgba(149, 208, 224, 0.18)" : "rgba(255, 255, 255, 0.09)";
        context.fill();
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-80" />;
}
