"use client";

import { SpikesIcon } from "./components/SpikesIcon";
import { Card } from "./components/Card";
import GridPatternBackground from "./components/GridPatternBackground";
import { Marquee } from "./components/Marquee";

export default function Home() {
  const cardsData = [
    {
      name: "Shoguntoto",
      username: "@thomasdev59",
      message:
        "C'est une belle plateforme, les explications sont clairs, les maquettes professionnelles.",
      image: "/profile-picture/picture-1.webp",
    },
    {
      name: "Baptiste",
      username: "@baptiste_lechat",
      message:
        "Des projets de qualité avec toutes les ressources dont on aurait besoin pour les réaliser.",
      image: "/profile-picture/picture-2.webp",
    },
    {
      name: "Jojok63",
      username: "@jojok_63",
      message:
        "Une communauté très réactive, toujours prête à vous aider quelque soit le sujet.",
      image: "/profile-picture/picture-3.webp",
    },
    {
      name: "Guillaume",
      username: "@bishop",
      message: "Incroyable communauté, on progresse vite en se challengeant",
      image: "/profile-picture/picture-4.webp",
    },
    {
      name: "Hocine",
      username: "@hocine",
      message:
        "J'aime bien le concept d'avoir une communauté, Ezis est très à l'écoute et n'hésite pas à répondre aux questions.",
      image: "/profile-picture/picture-5.webp",
    },
    {
      name: "Youtmax654",
      username: "@youtmax654",
      message:
        "Je me suis grandement améliorer sur les technologies que j'utilise et sur ma façon de traviller sur un projet.",
      image: "/profile-picture/picture-6.webp",
    },
    {
      name: "LucasQust",
      username: "@LucasQust",
      message:
        "C’est vraiment du lourd, les challenges sont cool, l’environnement qu’Ezis à mit en place est top !",
      image: "/profile-picture/picture-7.webp",
    },
    {
      name: "Eihposenna",
      username: "@eihposenna",
      message:
        "Ça me fait découvrir pas mal de choses sur Tailwind et les différentes possibilités qui sont offertes.",
      image: "/profile-picture/picture-8.webp",
    },
    {
      name: "Shoguntoto",
      username: "@thomasdev",
      message:
        "C'est une belle plateforme, les explications sont clairs, les maquettes professionnelles.",
      image: "/profile-picture/picture-9.webp",
    },
  ];

  const extendedData = [...cardsData, ...cardsData, ...cardsData];

  // Tableau pour la ligne du haut
  const topItems = extendedData.map((card, i) => (
    <div key={i} style={{ width: 320, height: 240 }}>
      <Card
        name={card.name}
        username={card.username}
        message={card.message}
        image={card.image}
      />
    </div>
  ));

  // Tableau ligne du bas
  const bottomItems = extendedData.map((card, i) => (
    <div key={i} style={{ width: 320, height: 240 }}>
      <Card
        name={card.name}
        username={card.username}
        message={card.message}
        image={card.image}
      />
    </div>
  ));

  return (
    <main className="relative min-h-screen overflow-hidden">
      <GridPatternBackground />

      <section className="relative z-10">
        <header className="flex justify-center items-center pt-10 gap-2">
          <SpikesIcon className="w-12 h-12" />
          <h1 className="text-2xl font-bold">Spikes</h1>
        </header>
      </section>

      <section className="relative z-10 flex flex-col items-center justify-center gap-2 min-h-screen">
        {/* Ligne du haut */}
        <Marquee
          items={topItems}
          speed={50}
          gap={20}
          height={220}
          direction="ltr"
        />

        {/* Ligne du bas */}
        <Marquee
          items={bottomItems}
          speed={50}
          gap={20}
          height={220}
          direction="rtl"
        />
      </section>
    </main>
  );
}
