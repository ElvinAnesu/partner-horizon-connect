import { Link } from "@tanstack/react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProfileAvatar, type TeamMember } from "@/components/leadership-carousel";
import { cn } from "@/lib/utils";

type TeamMemberDialogProps = {
  member: TeamMember | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function TeamMemberDialog({ member, open, onOpenChange }: TeamMemberDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "max-h-[92vh] w-[min(960px,calc(100vw-1.5rem))] max-w-none overflow-hidden border-border bg-background p-0 shadow-[0_40px_80px_-40px_color-mix(in_oklab,var(--ink)_70%,transparent)] sm:rounded-sm",
          "data-[state=open]:zoom-in-100 data-[state=closed]:zoom-out-100",
          "[&>button]:right-3 [&>button]:top-3 [&>button]:z-20 [&>button]:rounded-sm [&>button]:bg-cream/10 [&>button]:p-2 [&>button]:text-cream [&>button]:opacity-100 [&>button]:hover:bg-cream/20 md:[&>button]:bg-ink/5 md:[&>button]:text-ink",
        )}
      >
        {member && (
          <div className="team-profile-enter grid max-h-[92vh] overflow-y-auto md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:overflow-hidden">
            <div className="relative min-h-[280px] bg-ink md:min-h-[520px]">
              <ProfileAvatar
                member={member}
                className="absolute inset-0 h-full w-full rounded-none [&_img]:h-full [&_img]:w-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-ink/10" />
            </div>

            <div className="flex flex-col justify-center gap-6 bg-background p-8 md:p-10 lg:p-12">
              <div>
                <p className="eyebrow text-amber">
                  / {member.department ?? "Leadership"}
                </p>
                <DialogTitle className="mt-3 font-display text-3xl font-black leading-none tracking-tight text-ink md:text-4xl">
                  {member.name}
                </DialogTitle>
                <p className="mt-3 text-sm font-semibold text-amber md:text-base">{member.role}</p>
                <DialogDescription className="sr-only">
                  Profile for {member.name}, {member.role}
                </DialogDescription>
              </div>

              {member.focus && member.focus.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {member.focus.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-sm border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-soft"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}

              <div>
                <p className="eyebrow text-ink-soft">About</p>
                <div className="mt-3 space-y-4 text-sm leading-relaxed text-ink-soft md:text-base">
                  {(member.detail ?? member.bio).split(/\n\n+/).map((para) => (
                    <p key={para.slice(0, 48)}>{para}</p>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-semibold text-cream transition-transform duration-500 hover:-translate-y-0.5"
                  onClick={() => onOpenChange(false)}
                >
                  Work with us <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
