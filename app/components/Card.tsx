"use client";
import Image from "next/image";

interface CardProps {
  name: string;
  username: string;
  message: string;
  image: string;
}

export function Card({ name, username, message, image }: CardProps) {
  return (
    <div className="relative w-[320px] p-[1px] rounded-lg bg-gradient-to-br from-white/20 to-transparent">
      <div
        className="
          rounded-md
          p-4
          bg-card
          text-card-foreground
          w-[320px]
          h-[200px]
          overflow-y-auto
        "
      >
        <div className="flex items-center gap-3">
          <Image
            src={image}
            alt={`Photo de ${name}`}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="leading-tight">
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">@{username}</p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed whitespace-normal break-words">
          {message}
        </p>
      </div>
    </div>
  );
}
