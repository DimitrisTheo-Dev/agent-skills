import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Search,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sun,
  Moon,
  X,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import "./index.css";

type Skill = {
  name: string;
  description: string;
  instructions: string;
  invocation: string;
  install: string;
  setup: string;
  source: string;
};
declare global {
  interface Window {
    SKILLS: Skill[];
  }
}
const views: Record<
  string,
  { title: string; subtitle: string; category: string; uses: string[] }
> = {
  "vibe-ui": {
    title: "Vibe UI",
    subtitle: "Design & polish",
    category: "design",
    uses: [
      "Shape a new interface around its audience",
      "Refine typography, spacing and interactions",
      "Review a design with concrete, visible evidence",
    ],
  },
  "landing-page-design": {
    title: "Landing pages",
    subtitle: "Story & conversion",
    category: "design",
    uses: [
      "Define the offer and primary action",
      "Show the product with useful, truthful proof",
      "Build a clear story from first impression to action",
    ],
  },
  "product-ux-writing": {
    title: "UX writing",
    subtitle: "Labels, help & feedback",
    category: "writing",
    uses: [
      "Write clear labels and action copy",
      "Guide people through onboarding and forms",
      "Explain loading, empty and error states",
    ],
  },
  "agent-readiness": {
    title: "Agent readiness",
    subtitle: "Discovery & access",
    category: "agents",
    uses: [
      "Audit discoverability and access",
      "Plan the smallest useful improvements",
      "Verify changes against actual agent tasks",
    ],
  },
};
const skills = Object.keys(views)
  .map((name) => window.SKILLS.find((s) => s.name === name)!)
  .filter(Boolean);
function CopyButton({
  value,
  label = "Copy",
  onFailure,
}: {
  value: string;
  label?: string;
  onFailure: (value: string) => void;
}) {
  const [status, setStatus] = useState<"idle" | "pending" | "copied">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const generation = useRef(0);
  useEffect(
    () => () => {
      generation.current++;
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    if (status === "pending") return;
    const request = ++generation.current;
    if (timer.current) clearTimeout(timer.current);
    setStatus("pending");
    try {
      await navigator.clipboard.writeText(value);
      if (request !== generation.current) return;
      setStatus("copied");
      timer.current = setTimeout(() => setStatus("idle"), 1600);
    } catch {
      if (request !== generation.current) return;
      setStatus("idle");
      onFailure(value);
    }
  }
  return (
    <Button
      variant="outline"
      size="sm"
      className="copy-button"
      onClick={copy}
      aria-disabled={status === "pending"}
      aria-busy={status === "pending"}
      data-copied={status === "copied"}
      aria-label={status === "copied" ? "Copied" : label}
    >
      <span className="copy-glyph" key={status} aria-hidden="true">
        {status === "copied" ? (
          <Check />
        ) : status === "pending" ? (
          <Loader2 className="spin" />
        ) : (
          <Copy />
        )}
      </span>
      <span>
        {status === "copied"
          ? "Copied"
          : status === "pending"
            ? "Copying"
            : label}
      </span>
      <span className="sr-only" role="status">
        {status === "copied" ? "Copied to clipboard" : ""}
      </span>
    </Button>
  );
}
function App() {
  const initial =
    skills.find((s) => s.name === location.hash.slice(1)) || skills[0];
  const [selected, setSelected] = useState(initial);
  const [detailOpen, setDetailOpen] = useState(Boolean(location.hash));
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("overview");
  const [installOpen, setInstallOpen] = useState(false);
  const [manual, setManual] = useState<string | null>(null);
  const [dark, setDark] = useState(() => {
    try {
      return (
        (localStorage.getItem("skills-appearance") ||
          (matchMedia("(prefers-color-scheme:dark)").matches
            ? "dark"
            : "light")) === "dark"
      );
    } catch {
      return false;
    }
  });
  const input = useRef<HTMLInputElement>(null);
  const detail = useRef<HTMLElement>(null);
  const manualText = useRef<HTMLTextAreaElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const selectedRef = useRef(selected);
  selectedRef.current = selected;
  const queryLower = query.trim().toLowerCase();
  const matches = skills
    .map((s) => ({
      skill: s,
      rank: [
        views[s.name].title,
        views[s.name].subtitle,
        s.name,
        s.invocation,
        s.description,
        s.instructions,
      ].findIndex((t) => t.toLowerCase().includes(queryLower)),
    }))
    .filter(
      ({ skill, rank }) =>
        rank >= 0 &&
        (category === "all" || views[skill.name].category === category),
    )
    .sort((a, b) => a.rank - b.rank)
    .map((x) => x.skill);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("skills-appearance", dark ? "dark" : "light");
    } catch {}
  }, [dark]);
  useEffect(() => {
    const route = () => {
      const name = location.hash.slice(1);
      const found = skills.find((s) => s.name === name);
      setDetailOpen(Boolean(found) || name === "detail");
      if (found) {
        setSelected(found);
        setActiveTab("overview");
        setInstallOpen(false);
      }
      requestAnimationFrame(() => {
        if (found || name === "detail")
          detail.current?.focus({ preventScroll: true });
        else
          document
            .querySelector<HTMLAnchorElement>(
              `a[data-skill="${selectedRef.current.name}"]`,
            )
            ?.focus({ preventScroll: true });
      });
    };
    const key = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        !/INPUT|TEXTAREA/.test((e.target as HTMLElement).tagName) &&
        !document.querySelector("[role=dialog]")
      ) {
        e.preventDefault();
        if (matchMedia("(max-width:640px)").matches) {
          history.replaceState(null, "", "#");
          setDetailOpen(false);
        }
        requestAnimationFrame(() => input.current?.focus());
      }
    };
    window.addEventListener("hashchange", route);
    document.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("hashchange", route);
      document.removeEventListener("keydown", key);
    };
  }, []);
  useEffect(() => {
    if (matches.length && !matches.some((s) => s.name === selected.name)) {
      setSelected(matches[0]);
      setActiveTab("overview");
      setInstallOpen(false);
      if (matchMedia("(min-width:641px)").matches)
        history.replaceState(null, "", `#${matches[0].name}`);
    }
  }, [query, category, selected.name]);
  function reset() {
    setQuery("");
    setCategory("all");
    requestAnimationFrame(() => input.current?.focus());
  }
  function recover(value: string) {
    returnFocus.current = document.activeElement as HTMLElement;
    setManual(value);
  }
  const view = views[selected.name];
  return (
    <TooltipProvider delayDuration={350}>
      <a className="skip-link" href="#detail">
        Skip to selected skill
      </a>
      <div className={`workspace ${detailOpen ? "detail-open" : ""}`}>
        <aside className="library" aria-label="Skill library">
          <div className="library-heading">
            <a href="#" onClick={reset} className="brand">
              Skills
            </a>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="theme-button"
                  aria-label={`Switch to ${dark ? "light" : "dark"} appearance`}
                  onClick={() => setDark(!dark)}
                >
                  {dark ? <Sun /> : <Moon />}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                {dark ? "Light" : "Dark"} appearance
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="search-wrap">
            <Search aria-hidden="true" />
            <Input
              ref={input}
              type="search"
              aria-label="Search skills"
              placeholder="Search skills…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.nativeEvent.isComposing) return;
                if (e.key === "Escape") setQuery("");
                if (e.key === "Enter" && matches[0])
                  location.hash = matches[0].name;
              }}
            />
            {query ? (
              <Button
                variant="ghost"
                size="icon"
                className="clear-search"
                aria-label="Clear search"
                onClick={() => {
                  setQuery("");
                  input.current?.focus();
                }}
              >
                <X />
              </Button>
            ) : (
              <kbd aria-hidden="true">/</kbd>
            )}
          </div>
          <ToggleGroup
            type="single"
            value={category}
            onValueChange={(value) => value && setCategory(value)}
            className="filters"
            aria-label="Filter skills"
          >
            {["all", "design", "writing", "agents"].map((x) => (
              <ToggleGroupItem
                key={x}
                value={x}
                aria-label={x[0].toUpperCase() + x.slice(1)}
              >
                {x[0].toUpperCase() + x.slice(1)}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <nav className="skill-list" aria-label="Skills">
            {matches.map((s) => (
              <a
                className="skill-row"
                data-skill={s.name}
                key={s.name}
                href={`#${s.name}`}
                aria-current={selected.name === s.name ? "page" : undefined}
                onClick={() => {
                  if (location.hash === `#${s.name}`) {
                    setDetailOpen(true);
                    requestAnimationFrame(() => detail.current?.focus());
                  }
                }}
              >
                <span>
                  <strong>{views[s.name].title}</strong>
                  <small>{views[s.name].subtitle}</small>
                </span>
                <ChevronRight aria-hidden="true" />
              </a>
            ))}
          </nav>
          {!matches.length && (
            <div className="list-empty">
              <p>No matching skills</p>
              <Button variant="outline" size="sm" onClick={reset}>
                Clear filters
              </Button>
            </div>
          )}
          <p className="sr-only" role="status">
            {matches.length} {matches.length === 1 ? "skill" : "skills"}
          </p>
        </aside>
        <main
          ref={detail}
          className="detail"
          tabIndex={-1}
          aria-labelledby={matches.length ? "skill-title" : undefined}
        >
          <Button asChild variant="ghost" size="sm" className="back-button">
            <a href="#">
              <ChevronLeft />
              Skills
            </a>
          </Button>
          {matches.length ? (
            <div className="detail-content" key={selected.name}>
              <div className="detail-heading">
                <div className="title-block">
                  <h1 id="skill-title">{view.title}</h1>
                  <p>{view.subtitle}</p>
                </div>
                <CopyButton value={selected.invocation} onFailure={recover} />
              </div>
              <div className="invocation">
                <span>Use in Codex</span>
                <code>{selected.invocation}</code>
              </div>
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="detail-tabs"
              >
                <TabsList className="tabs-list" aria-label="Skill details">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="instructions">Instructions</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="overview">
                  <ul>
                    {view.uses.map((use) => (
                      <li key={use}>{use}</li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="instructions">
                  <pre className="instructions" tabIndex={0}>
                    {selected.instructions}
                  </pre>
                </TabsContent>
              </Tabs>
              <Collapsible
                open={installOpen}
                onOpenChange={setInstallOpen}
                className="installation"
              >
                <div className="detail-footer">
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="install-trigger"
                    >
                      <ChevronRight className={installOpen ? "expanded" : ""} />
                      Install locally
                    </Button>
                  </CollapsibleTrigger>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={selected.source} target="_blank" rel="noreferrer">
                      View source
                      <ArrowUpRight />
                    </a>
                  </Button>
                </div>
                <CollapsibleContent className="install-content">
                  <div className="install-inner">
                    <p>{selected.setup}</p>
                    <code>{selected.install}</code>
                    <CopyButton
                      value={selected.install}
                      label="Copy command"
                      onFailure={recover}
                    />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ) : (
            <div className="detail-empty">
              <Search />
              <h1>No skills found</h1>
              <p>Try another word or clear your filters.</p>
              <Button variant="outline" size="sm" onClick={reset}>
                Clear filters
              </Button>
            </div>
          )}
        </main>
      </div>
      <Dialog
        open={manual !== null}
        onOpenChange={(open) => {
          if (!open) setManual(null);
        }}
      >
        <DialogContent
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            manualText.current?.focus();
            manualText.current?.select();
          }}
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            returnFocus.current?.focus();
          }}
        >
          <DialogHeader>
            <DialogTitle>Copy this text</DialogTitle>
            <DialogDescription>
              Clipboard access is unavailable. Select the text and copy it with
              your device.
            </DialogDescription>
          </DialogHeader>
          <textarea
            ref={manualText}
            aria-label="Text to copy"
            readOnly
            rows={3}
            value={manual || ""}
          />
          <Button
            variant="outline"
            onClick={() => {
              manualText.current?.focus();
              manualText.current?.select();
            }}
          >
            Select text
          </Button>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}
createRoot(document.getElementById("root")!).render(<App />);
