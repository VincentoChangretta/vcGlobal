import React, { useEffect, useRef, useState } from 'react';
import './AnimatedCursor.css';

const AnimatedCursor = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const circlesRef = useRef([]);

    useEffect(() => {
        const circles = circlesRef.current;
        const circleWidth = circles[0]?.offsetWidth;

        circles.forEach((circle) => {
            circle.x = 0;
            circle.y = 0;
        });

        const handleMouseMove = (e) => {
            setCoords({ x: e.pageX, y: e.pageY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        function animateCircles() {
            let x = coords.x;
            let y = coords.y;

            circles.forEach((circle, index) => {
                circle.style.left = `${x - circleWidth / 2}px`;
                circle.style.top = `${y - circleWidth / 2}px`;
                circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

                circle.x = x;
                circle.y = y;

                const nextCircle = circles[index + 1] || circles[0];
                x += (nextCircle.x - x) * 0.1;
                y += (nextCircle.y - y) * 0.1;
            });

            requestAnimationFrame(animateCircles);
        }

        animateCircles();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [coords]);

    const circleElements = [];
    for (let i = 0; i < 30; i++) {
        circleElements.push(
            <div
                key={i}
                className='circle'
                ref={(el) => (circlesRef.current[i] = el)}
            ></div>,
        );
    }

    return <div>{circleElements}</div>;
};

export default AnimatedCursor;
