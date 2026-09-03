import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { askHesu } from "@/lib/ask-hesu";

type ChatRole = "user" | "assistant";
type ChatMessage = { role: ChatRole; content: string };

const SUGGESTIONS = [
  { label: "ICD", prompt: "What is Hesu's inland container depot?" },
  { label: "CFS", prompt: "What CFS services does Hesu offer?" },
  { label: "Contact", prompt: "How do I contact Hesu?" },
  { label: "Careers", prompt: "Does Hesu have any open jobs?" },
] as const;

const HISTORY_LIMIT = 8;

export function HesuChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, pending, open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || pending) return;

    const nextUser: ChatMessage = { role: "user", content };
    const history = [...messages, nextUser];
    setMessages(history);
    setInput("");
    setPending(true);

    try {
      const result = await askHesu({
        data: { messages: history.slice(-HISTORY_LIMIT) },
      });
      const reply =
        "text" in result && result.text
          ? result.text
          : "error" in result && result.error
            ? result.error
            : "We could not reach the assistant just now. Email info@hesu.co.tz and our team will help.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "We could not reach the assistant just now. Email info@hesu.co.tz and our team will help.",
        },
      ]);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="pointer-events-none fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[60] flex flex-col items-end gap-3 md:right-6">
      {open && (
        <section
          aria-label="Hesu AI Assistant"
          className="pointer-events-auto flex w-[min(360px,calc(100vw-2rem))] max-h-[70vh] flex-col overflow-hidden rounded-sm border border-border bg-cream shadow-[0_24px_60px_-28px_color-mix(in_oklab,var(--ink)_55%,transparent)]"
        >
          <header className="flex items-center justify-between gap-3 bg-ink px-4 py-3 text-cream">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-amber">Hesu AI</p>
              <h2 className="font-display text-sm font-black">Hesu AI Assistant</h2>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-sm p-1.5 text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div ref={listRef} className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
            <p className="rounded-sm bg-secondary px-3 py-2 text-sm leading-relaxed text-ink-soft">
              I can answer questions about Hesu&apos;s ICD, CFS, fleet, team, and how to get in touch.
            </p>
            {messages.map((m, i) => (
              <p
                key={`${m.role}-${i}`}
                className={
                  m.role === "user"
                    ? "ml-8 rounded-sm bg-ink px-3 py-2 text-sm leading-relaxed text-cream"
                    : "mr-8 rounded-sm bg-secondary px-3 py-2 text-sm leading-relaxed text-ink"
                }
              >
                {m.content}
              </p>
            ))}
            {pending && (
              <p className="mr-8 rounded-sm bg-secondary px-3 py-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
                Thinking…
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 border-t border-border px-4 py-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s.label}
                type="button"
                disabled={pending}
                onClick={() => send(s.prompt)}
                className="rounded-sm border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-soft transition-colors hover:border-amber hover:text-ink disabled:opacity-50"
              >
                {s.label}
              </button>
            ))}
          </div>

          <form
            className="flex gap-2 border-t border-border bg-background p-3"
            onSubmit={(e) => {
              e.preventDefault();
              void send(input);
            }}
          >
            <label htmlFor="hesu-chat-input" className="sr-only">
              Ask Hesu
            </label>
            <input
              id="hesu-chat-input"
              ref={inputRef}
              value={input}
              disabled={pending}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Hesu…"
              maxLength={2000}
              className="min-w-0 flex-1 rounded-sm border border-input bg-card px-3 py-2 text-sm outline-none focus:border-amber disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={pending || !input.trim()}
              aria-label="Send message"
              className="inline-flex items-center justify-center rounded-sm bg-ink px-3 text-cream transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close Hesu AI Assistant" : "Ask Hesu"}
        className="pointer-events-auto inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-3 text-sm font-semibold text-cream shadow-[0_16px_30px_-16px_color-mix(in_oklab,var(--ink)_80%,transparent)] transition-transform duration-500 hover:-translate-y-0.5"
      >
        {open ? <X className="h-4 w-4 text-amber" /> : <MessageCircle className="h-4 w-4 text-amber" />}
        Ask Hesu
      </button>
    </div>
  );
}
