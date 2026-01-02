"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  id,
  delay = 0,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            setTimeout(() => {
              section.classList.add("animate-in");
            }, Math.max(0, delay));
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -100px 0px" }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <section
      ref={sectionRef}
      className={`animated-section ${className}`}
      id={id}
    >
      {children}
    </section>
  );
}

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            // Add stagger effect with random jitter for organic feel
            const jitter = Math.random() * 0.05;
            setTimeout(() => {
              card.classList.add("card-animate-in");
            }, Math.max(0, delay + jitter * 1000));
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={cardRef} className={`animated-card ${className}`}>
      {children}
    </div>
  );
}

export function FloatingGradients() {
  return (
    <div className="floating-gradients">
      <div className="gradient-blob blob-1"></div>
      <div className="gradient-blob blob-2"></div>
      <div className="gradient-blob blob-3"></div>
    </div>
  );
}

const sparklePositions = [
  // Column 1 (0-20%)
  { x: 5, y: 10 },
  { x: 8, y: 35 },
  { x: 12, y: 60 },
  { x: 15, y: 80 },
  { x: 18, y: 25 },
  // Column 2 (20-40%)
  { x: 22, y: 15 },
  { x: 25, y: 50 },
  { x: 28, y: 75 },
  { x: 32, y: 40 },
  { x: 35, y: 65 },
  // Column 3 (40-60%)
  { x: 42, y: 20 },
  { x: 45, y: 45 },
  { x: 48, y: 70 },
  { x: 52, y: 30 },
  { x: 55, y: 55 },
  // Column 4 (60-80%)
  { x: 62, y: 15 },
  { x: 65, y: 40 },
  { x: 68, y: 65 },
  { x: 72, y: 35 },
  { x: 75, y: 60 },
  // Column 5 (80-100%)
  { x: 82, y: 25 },
  { x: 85, y: 50 },
  { x: 88, y: 75 },
  { x: 92, y: 20 },
  { x: 95, y: 55 },
  // Extra scattered
  { x: 10, y: 90 },
  { x: 38, y: 10 },
  { x: 58, y: 85 },
  { x: 78, y: 10 },
  { x: 90, y: 85 },
  { x: 20, y: 5 },
  { x: 50, y: 95 },
  { x: 70, y: 5 },
  { x: 30, y: 30 },
  { x: 80, y: 40 },
  { x: 40, y: 80 },
  { x: 60, y: 25 },
  { x: 25, y: 90 },
  { x: 75, y: 15 },
  { x: 35, y: 70 },
];

const sparkleScales = [
  0.4, 0.6, 0.5, 0.8, 0.3, 0.7, 0.55, 0.9, 0.45, 0.65, 0.5, 0.75, 0.35, 0.85,
  0.6, 0.7, 0.4, 0.95, 0.5, 0.8, 0.65, 0.45, 0.7, 0.55, 0.85, 0.6, 0.75, 0.4,
  0.9, 0.5, 0.65, 0.3, 0.8, 0.55, 0.7, 0.45, 0.85, 0.6, 0.75, 1.0,
];

// Deterministic variation based on index for SSR consistency
const getSparkleVariation = (index: number) => {
  // Use a simple deterministic formula based on index
  // This creates a pseudo-random but consistent value
  const seed = (index * 7919) % 1000; // Prime number for distribution
  return (seed / 1000) * 0.4 - 0.2; // -0.2 to 0.2s variation
};

export function Sparkles() {
  return (
    <div className="sparkles">
      {sparklePositions.map((pos, i) => {
        const baseDelay = (i * 0.25) % 3; // Cycle through 3 seconds
        const variation = getSparkleVariation(i); // Deterministic, not random
        const finalDelay = Math.max(0, baseDelay + variation);

        return (
          <div
            key={i}
            className="sparkle"
            style={
              {
                "--sparkle-delay": `${finalDelay}s`,
                "--sparkle-x": `${pos.x}%`,
                "--sparkle-y": `${pos.y}%`,
                "--sparkle-scale": sparkleScales[i],
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  let currentRotateX = 0;
  let currentRotateY = 0;
  let targetRotateX = 0;
  let targetRotateY = 0;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      targetRotateX = (y - centerY) / 12;
      targetRotateY = (centerX - x) / 12;
    };

    const animate = () => {
      // Smooth easing towards target rotation
      currentRotateX += (targetRotateX - currentRotateX) * 0.15;
      currentRotateY += (targetRotateY - currentRotateY) * 0.15;

      card.style.transform = `perspective(1200px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) translateZ(20px) scale(1.02)`;
      requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => {
      targetRotateX = 0;
      targetRotateY = 0;
    };

    const animationId = requestAnimationFrame(animate);
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className={`tilt-card ${className}`}>
      {children}
    </div>
  );
}

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement>(null);
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let isHovering = false;

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;

      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = 80; // Attraction distance

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < distance) {
        targetX = (dx / dist) * (distance - dist) * 0.3;
        targetY = (dy / dist) * (distance - dist) * 0.3;
      } else {
        targetX = 0;
        targetY = 0;
      }
    };

    const animate = () => {
      // Smooth spring-like easing
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      button.style.transform = `translate(${currentX}px, ${currentY}px) scale(1)`;
      requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      targetX = 0;
      targetY = 0;
    };

    const animationId = requestAnimationFrame(animate);
    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (href) {
    return (
      <a
        href={href}
        ref={buttonRef as any}
        className={`magnetic-btn btn btn-primary ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as any}
      className={`magnetic-btn btn btn-primary ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function FeatureCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-80px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={ref}
      className={`feature-card ${isVisible ? "animate-in" : ""} ${className}`}
      style={{
        animation: isVisible
          ? "slideUpWithRotate 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
          : "none",
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}
