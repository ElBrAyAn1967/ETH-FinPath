"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AvatarSelector } from "./AvatarSelector";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

interface ProfileSetupFormProps {
  walletAddress: string;
  onComplete: (profile: ProfileData) => void;
}

export interface ProfileData {
  username: string;
  displayName: string;
  avatarType: "male" | "female";
  bio: string;
}

export function ProfileSetupForm({
  walletAddress,
  onComplete,
}: ProfileSetupFormProps) {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [avatarType, setAvatarType] = useState<"male" | "female" | null>(null);
  const [bio, setBio] = useState("");

  const [usernameStatus, setUsernameStatus] = useState<
    "idle" | "checking" | "available" | "taken"
  >("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (username.length < 3) {
      setUsernameStatus("idle");
      return;
    }

    const timeoutId = setTimeout(async () => {
      setUsernameStatus("checking");
      try {
        const response = await fetch("/api/auth/check-username", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username }),
        });

        const data = await response.json();
        setUsernameStatus(data.available ? "available" : "taken");
      } catch (error) {
        console.error("Username check failed:", error);
        setUsernameStatus("idle");
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [username]);

  const isFormValid =
    username.length >= 3 &&
    displayName.length >= 2 &&
    avatarType !== null &&
    usernameStatus === "available";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid || !avatarType) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/create-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          walletAddress,
          username,
          displayName,
          avatarType,
          bio,
        }),
      });

      if (response.ok) {
        onComplete({ username, displayName, avatarType, bio });
      } else {
        const error = await response.json();
        alert(error.error || "Error al crear perfil");
      }
    } catch (error) {
      console.error("Profile creation failed:", error);
      alert("Error al crear perfil. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-8 bg-[var(--card)] rounded-3xl border border-[var(--border)] shadow-xl"
      onSubmit={handleSubmit}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-2">
          Personaliza tu Perfil
        </h2>
        <p className="text-[var(--muted-foreground)]">
          Crea tu identidad en FinQuest
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
            Elige tu Avatar
          </label>
          <AvatarSelector selected={avatarType} onChange={setAvatarType} />
        </div>

        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-[var(--foreground)] mb-2"
          >
            Nombre de Usuario
          </label>
          <div className="relative">
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))
              }
              placeholder="usuario123"
              className="w-full px-4 py-3 bg-[var(--card-dark)] border border-[var(--border)] rounded-xl text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] pr-12"
              maxLength={20}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              {usernameStatus === "checking" && (
                <Loader2 className="w-5 h-5 text-[var(--muted-foreground)] animate-spin" />
              )}
              {usernameStatus === "available" && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
              {usernameStatus === "taken" && (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
            </div>
          </div>
          {usernameStatus === "taken" && (
            <p className="text-sm text-red-500 mt-1">
              Este nombre ya está en uso
            </p>
          )}
          {username.length > 0 && username.length < 3 && (
            <p className="text-sm text-[var(--muted-foreground)] mt-1">
              Mínimo 3 caracteres
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="displayName"
            className="block text-sm font-medium text-[var(--foreground)] mb-2"
          >
            Nombre para Mostrar
          </label>
          <input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Tu Nombre"
            className="w-full px-4 py-3 bg-[var(--card-dark)] border border-[var(--border)] rounded-xl text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            maxLength={30}
          />
        </div>

        <div>
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-[var(--foreground)] mb-2"
          >
            Bio (Opcional)
          </label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Cuéntanos sobre ti..."
            className="w-full px-4 py-3 bg-[var(--card-dark)] border border-[var(--border)] rounded-xl text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
            rows={3}
            maxLength={160}
          />
          <p className="text-xs text-[var(--muted-foreground)] mt-1 text-right">
            {bio.length}/160
          </p>
        </div>
      </div>

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        disabled={!isFormValid || isSubmitting}
        className="w-full mt-8"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Creando Perfil...
          </>
        ) : (
          "Comenzar Aventura"
        )}
      </Button>
    </motion.form>
  );
}
