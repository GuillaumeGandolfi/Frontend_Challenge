"use client";

import React, { useEffect, useRef } from "react";

/**
 * MarqueeProps:
 * - items: un tableau d'éléments React (les cartes) à faire défiler
 * - speed: vitesse en pixels par seconde
 * - gap: espace en pixels entre les cartes
 * - height: hauteur du conteneur
 * - direction: "ltr" (gauche → droite) ou "rtl" (droite → gauche)
 */

interface MarqueeProps {
  items: React.ReactNode[];
  speed?: number;
  gap?: number;
  height?: number;
  direction?: "ltr" | "rtl";
}

export function Marquee({
  items,
  speed = 50,
  gap = 40,
  height = 220,
  direction = "ltr",
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;

    // On récuềre chaque carte et on stock sa position X
    const elements: Array<{ el: HTMLDivElement; x: number }> = [];

    // Alignement des cartes les unes après les autres
    let currentX = 0;
    for (const child of Array.from(container.children)) {
      const el = child as HTMLDivElement;
      const elWidth = el.offsetWidth;
      elements.push({ el, x: currentX });
      currentX += elWidth + gap;
    }

    let prevTime = performance.now();
    let reqId: number;

    const animate = (time: number) => {
      const dt = (time - prevTime) / 1000; // en secondes
      prevTime = time;

      for (const obj of elements) {
        if (direction === "ltr") {
          obj.x += speed * dt;
          // Si l'élément dépasse le bord droit, on le remet à gauche
          if (obj.x > containerWidth) {
            const minX = Math.min(...elements.map((o) => o.x));
            obj.x = minX - obj.el.offsetWidth - gap;
          }
        } else {
          obj.x -= speed * dt;
          // Si l'élément sort à gauche, on le remet à droite
          if (obj.x + obj.el.offsetWidth < 0) {
            const maxX = Math.max(
              ...elements.map((o) => o.x + o.el.offsetWidth)
            );
            obj.x = maxX + gap;
          }
        }

        obj.el.style.transform = `translate3d(${obj.x}px, 0, 0)`;
      }

      reqId = requestAnimationFrame(animate);
    };

    reqId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(reqId);
  }, [items, speed, gap, direction]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: `${height}px`,
        whiteSpace: "nowrap",
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
