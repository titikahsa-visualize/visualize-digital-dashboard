import { useEffect, useState } from "react";

export default function StarsBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStars = () => {
      const newStars = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 80 + 5}%`,
        left: `${Math.random() * 80 + 5}%`,
        delay: `${Math.random() * 10}s`,
        rotation: `${Math.random() * 360}deg`,
      }));
      setStars(newStars);
    };

    createStars();
    const interval = setInterval(createStars, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: "absolute",
            width: "4px",
            height: "4px",
            backgroundColor: "white",
            boxShadow: "0 0 6px 3px white",
            borderRadius: "50%",
            animation: "shooting 5s ease-out infinite",
            animationDelay: star.delay,
            top: star.top,
            left: star.left,
            transform: `rotate(${star.rotation})`,
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "2px",
              height: "80px",
              background: "linear-gradient(to bottom, white, transparent)",
              transform: "rotate(90deg)",
              top: "-40px",
              left: "1px",
              opacity: 0.5,
            }}
          />
        </div>
      ))}
      <style>{`
        @keyframes shooting {
          0% {
            transform: translateX(0) translateY(0) scaleX(1);
            opacity: 1;
          }
          100% {
            transform: translateX(400px) translateY(200px) scaleX(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}