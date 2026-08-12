import React, { useEffect, useRef } from 'react';
import { cn } from '../lib/utils';

export function PerspectiveGrid({
  className,
  gridSize = 24,
  showOverlay = true,
  fadeRadius = 75,
  fadeStop = '#ffffff',
}) {
  const canvasRef = useRef(null);
  const trailRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const colors = [
      'rgba(255, 133, 161, ', // Pastel Pink
      'rgba(76, 201, 240, ',  // Pastel Cyan
      'rgba(110, 231, 183, ', // Pastel Green
      'rgba(96, 165, 250, ',  // Pastel Blue
      'rgba(167, 139, 250, ', // Pastel Purple
    ];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      if (clientX < 0 || clientX > rect.width || clientY < 0 || clientY > rect.height) return;

      const normX = clientX / rect.width;
      const normY = clientY / rect.height;

      const col = Math.floor(normX * gridSize);
      const row = Math.floor(normY * gridSize);

      if (col >= 0 && col < gridSize && row >= 0 && row < gridSize) {
        const last = trailRef.current[trailRef.current.length - 1];
        if (!last || last.row !== row || last.col !== col) {
          trailRef.current.push({
            row,
            col,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: 1.0,
          });
          if (trailRef.current.length > 50) {
            trailRef.current.shift();
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const cellW = w / gridSize;
      const cellH = h / gridSize;

      // Draw grid line matrix
      ctx.strokeStyle = 'rgba(0, 132, 255, 0.15)';
      ctx.lineWidth = 1;

      for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellW, 0);
        ctx.lineTo(i * cellW, h);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i * cellH);
        ctx.lineTo(w, i * cellH);
        ctx.stroke();
      }

      // Draw active glowing mouse-tracked tiles
      trailRef.current.forEach((tile) => {
        tile.life -= 0.015; // Smooth decay
        if (tile.life > 0) {
          ctx.fillStyle = `${tile.color}${tile.life.toFixed(2)})`;
          ctx.fillRect(
            tile.col * cellW + 1,
            tile.row * cellH + 1,
            cellW - 2,
            cellH - 2
          );
        }
      });

      // Remove expired tiles
      trailRef.current = trailRef.current.filter((t) => t.life > 0);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gridSize]);

  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10 select-none",
        className
      )}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
        '--fade-stop': fadeStop,
      }}
    >
      {/* 3D Rotated Interactive Plane */}
      <div
        className="absolute w-[180%] h-[180%] origin-center pointer-events-auto"
        style={{
          left: "-40%",
          top: "-40%",
          transform: "rotateX(32deg) rotateY(-4deg) rotateZ(16deg) scale(1.3)",
          transformStyle: "preserve-3d",
        }}
      >
        <canvas ref={canvasRef} className="w-full h-full block cursor-pointer" />
      </div>

      {/* Radial Gradient Overlay Mask */}
      {showOverlay && (
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle, transparent 20%, var(--fade-stop) ${fadeRadius}%)`,
          }}
        />
      )}
    </div>
  );
}

export default PerspectiveGrid;
