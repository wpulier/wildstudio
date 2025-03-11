'use client';

import { useEffect, useRef } from 'react';

export default function LegendaryCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let isEnabled = true;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Cursor trail array with spring physics
        const points: { x: number; y: number; vx: number; vy: number }[] = Array(15).fill(null).map(() => ({
            x: 0,
            y: 0,
            vx: 0,
            vy: 0
        }));

        // Physics parameters
        const spring = 0.08;
        const friction = 0.75;
        const mouseThreshold = 0.5; // How closely the first point follows the mouse
        const trailStrength = 0.85; // How closely each point follows the previous one

        let mouseX = 0;
        let mouseY = 0;
        let lastMouseX = 0;
        let lastMouseY = 0;
        let mouseVelocityX = 0;
        let mouseVelocityY = 0;

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Initialize canvas size
        handleResize();
        window.addEventListener('resize', handleResize);

        // Track mouse movement
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            if (!isEnabled || !ctx) return;

            // Calculate mouse velocity
            mouseVelocityX = mouseX - lastMouseX;
            mouseVelocityY = mouseY - lastMouseY;
            lastMouseX = mouseX;
            lastMouseY = mouseY;

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update points with spring physics
            for (let i = 0; i < points.length; i++) {
                const point = points[i];

                if (i === 0) {
                    // First point follows mouse with spring physics
                    const dx = mouseX - point.x;
                    const dy = mouseY - point.y;

                    // Add spring force
                    point.vx += dx * spring;
                    point.vy += dy * spring;
                } else {
                    // Other points follow the previous point
                    const prevPoint = points[i - 1];
                    const dx = prevPoint.x - point.x;
                    const dy = prevPoint.y - point.y;

                    // Add spring force
                    point.vx += dx * spring * trailStrength;
                    point.vy += dy * spring * trailStrength;
                }

                // Apply friction
                point.vx *= friction;
                point.vy *= friction;

                // Update position
                point.x += point.vx;
                point.y += point.vy;
            }

            // Draw trail
            if (points.length > 2) {
                // Draw the main curve
                ctx.beginPath();
                ctx.moveTo(points[0].x, points[0].y);

                // Draw curved line through points
                for (let i = 1; i < points.length - 1; i++) {
                    const xc = (points[i].x + points[i + 1].x) / 2;
                    const yc = (points[i].y + points[i + 1].y) / 2;
                    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
                }

                // Calculate trail width based on mouse velocity
                const speed = Math.min(Math.sqrt(mouseVelocityX * mouseVelocityX + mouseVelocityY * mouseVelocityY), 50);
                const baseWidth = 2;
                const maxWidth = 8;
                const dynamicWidth = baseWidth + (speed / 10);

                // Create dynamic gradient based on speed
                const gradient = ctx.createLinearGradient(
                    points[0].x, points[0].y,
                    points[points.length - 1].x, points[points.length - 1].y
                );

                // Adjust colors based on speed
                const intensity = Math.min(0.7 + speed / 100, 1);

                // Multiple color stops for sparkly effect
                gradient.addColorStop(0, `rgba(255, 255, 255, ${intensity})`);
                gradient.addColorStop(0.2, `rgba(70, 158, 255, ${intensity * 0.9})`);
                gradient.addColorStop(0.4, `rgba(128, 0, 255, ${intensity * 0.8})`);
                gradient.addColorStop(0.7, `rgba(255, 0, 128, ${intensity * 0.7})`);
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                // Add glow effect
                ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
                ctx.shadowBlur = 5 + speed / 10;
                ctx.strokeStyle = gradient;
                ctx.lineWidth = Math.min(dynamicWidth, maxWidth);
                ctx.lineCap = 'round';
                ctx.stroke();

                // Reset shadow for next frame
                ctx.shadowBlur = 0;

                // Draw particles along the trail for extra sparkle
                if (speed > 10) {
                    const particleCount = Math.floor(speed / 5);
                    for (let i = 0; i < particleCount; i++) {
                        const pointIndex = Math.floor(Math.random() * (points.length - 2)) + 1;
                        const point = points[pointIndex];
                        const size = Math.random() * 3 + 1;

                        ctx.beginPath();
                        ctx.arc(
                            point.x + (Math.random() * 20 - 10),
                            point.y + (Math.random() * 20 - 10),
                            size, 0, Math.PI * 2
                        );
                        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`;
                        ctx.fill();
                    }
                }
            }

            requestAnimationFrame(animate);
        };

        // Start animation
        animate();

        // Cleanup
        return () => {
            isEnabled = false;
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 9999
            }}
        />
    );
} 