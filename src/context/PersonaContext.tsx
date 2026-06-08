"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { isPersona, type Persona } from "@/lib/types";

interface PersonaState {
  /** active narration lens — null until a profile is chosen */
  persona: Persona | null;
  setPersona: (p: Persona) => void;
  /** has the visitor seen the intro splash before (this browser)? */
  hasVisited: boolean;
  markVisited: () => void;
  /** detail-modal state, lifted here so any card can open the title page */
  activeItemId: string | null;
  openItem: (id: string) => void;
  closeItem: () => void;
  /** sound preference for the ta-dum (muted by default) */
  muted: boolean;
  toggleMuted: () => void;
}

const PersonaContext = createContext<PersonaState | null>(null);

const KEY_PERSONA = "nf-persona";
const KEY_VISITED = "nf-visited";
const KEY_MUTED = "nf-muted";

export function PersonaProvider({ children }: { children: ReactNode }) {
  const [persona, setPersonaState] = useState<Persona | null>(null);
  const [hasVisited, setHasVisited] = useState(false);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [muted, setMuted] = useState(true);

  // hydrate from localStorage (an external system) once on mount
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      const storedPersona = localStorage.getItem(KEY_PERSONA);
      if (storedPersona && isPersona(storedPersona)) {
        setPersonaState(storedPersona);
      }
      if (localStorage.getItem(KEY_VISITED) === "1") setHasVisited(true);
      if (localStorage.getItem(KEY_MUTED) === "0") setMuted(false);
    } catch {
      /* localStorage may be unavailable (private mode) — non-fatal */
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const setPersona = useCallback((p: Persona) => {
    setPersonaState(p);
    try {
      localStorage.setItem(KEY_PERSONA, p);
    } catch {
      /* ignore */
    }
  }, []);

  const markVisited = useCallback(() => {
    setHasVisited(true);
    try {
      localStorage.setItem(KEY_VISITED, "1");
    } catch {
      /* ignore */
    }
  }, []);

  const openItem = useCallback((id: string) => setActiveItemId(id), []);
  const closeItem = useCallback(() => setActiveItemId(null), []);

  const toggleMuted = useCallback(() => {
    setMuted((m) => {
      const next = !m;
      try {
        localStorage.setItem(KEY_MUTED, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo<PersonaState>(
    () => ({
      persona,
      setPersona,
      hasVisited,
      markVisited,
      activeItemId,
      openItem,
      closeItem,
      muted,
      toggleMuted,
    }),
    [
      persona,
      setPersona,
      hasVisited,
      markVisited,
      activeItemId,
      openItem,
      closeItem,
      muted,
      toggleMuted,
    ],
  );

  return (
    <PersonaContext.Provider value={value}>{children}</PersonaContext.Provider>
  );
}

export function usePersona(): PersonaState {
  const ctx = useContext(PersonaContext);
  if (!ctx) {
    throw new Error("usePersona must be used within a PersonaProvider");
  }
  return ctx;
}
