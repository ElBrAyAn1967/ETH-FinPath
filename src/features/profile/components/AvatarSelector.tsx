"use client";

import { useState } from "react";
import { User, UserCircle } from "lucide-react";
import { motion } from "framer-motion";

interface AvatarSelectorProps {
  selected: "male" | "female" | null;
  onChange: (type: "male" | "female") => void;
}

export function AvatarSelector({ selected, onChange }: AvatarSelectorProps) {
  return (
    <div className="flex gap-6 justify-center">
      <AvatarOption
        type="male"
        label="Masculino"
        selected={selected === "male"}
        onClick={() => onChange("male")}
        icon={<User className="w-16 h-16" />}
        color="var(--primary)"
      />
      <AvatarOption
        type="female"
        label="Femenino"
        selected={selected === "female"}
        onClick={() => onChange("female")}
        icon={<UserCircle className="w-16 h-16" />}
        color="var(--accent)"
      />
    </div>
  );
}

interface AvatarOptionProps {
  type: string;
  label: string;
  selected: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  color: string;
}

function AvatarOption({
  label,
  selected,
  onClick,
  icon,
  color,
}: AvatarOptionProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative flex flex-col items-center gap-4 p-8 rounded-2xl
        border-2 transition-all duration-300
        ${
          selected
            ? "border-[var(--primary)] bg-[var(--primary)]/10 shadow-lg"
            : "border-[var(--border)] bg-[var(--card)] hover:border-[var(--primary)]/50"
        }
      `}
    >
      <div
        className="rounded-full p-6"
        style={{
          backgroundColor: selected ? `${color}20` : "var(--card-dark)",
          color: selected ? color : "var(--foreground)",
        }}
      >
        {icon}
      </div>
      <span className="text-lg font-medium text-[var(--foreground)]">
        {label}
      </span>
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>
      )}
    </motion.button>
  );
}
