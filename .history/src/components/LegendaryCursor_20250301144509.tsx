import { useEffect, useRef } from 'react';

export default function LegendaryCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let isEnabled = true;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Cursor trail array
        const trail: { x: number; y: number; age: number }[] = [];
        const maxTrailLength = 30;
        const trailFadeSpeed = 0.05;
        let mouseX = 0;
        let mouseY = 0;

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

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Add new point to trail
            trail.unshift({ x: mouseX, y: mouseY, age: 1 });

            // Remove old points
            if (trail.length > maxTrailLength) {
                trail.pop();
            }

            // Draw trail
            ctx.beginPath();
            ctx.moveTo(trail[0].x, trail[0].y);

            // Draw curved line through points
            for (let i = 1; i < trail.length - 1; i++) {
                const xc = (trail[i].x + trail[i + 1].x) / 2;
                const yc = (trail[i].y + trail[i + 1].y) / 2;
                ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);

                // Update point age
                trail[i].age -= trailFadeSpeed;
            }

            // Style for trail
            const gradient = ctx.createLinearGradient(
                trail[0].x, trail[0].y,
                trail[trail.length - 1].x, trail[trail.length - 1].y
            );
            gradient.addColorStop(0, 'rgba(34, 197, 94, 0.8)'); // Matching your green
            gradient.addColorStop(1, 'rgba(22, 163, 74, 0)'); // Fade to transparent

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.stroke();

            // Clean up old points
            trail.forEach((point, i) => {
                if (point.age <= 0) {
                    trail.splice(i, 1);
                }
            });

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