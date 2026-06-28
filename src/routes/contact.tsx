import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hesu Investment Ltd" },
      { name: "description", content: "Get in touch with Hesu Investment Ltd for ICD, CFS, warehousing and distribution services in Tanzania." },
      { property: "og:title", content: "Contact — Hesu Investment Ltd" },
      { property: "og:description", content: "Talk to our operations team in Dar es Salaam." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
          <p className="eyebrow text-amber">/ Get in touch</p>
          <h1 className="display-xl mt-6 max-w-4xl text-cream">
            Let's move<br /><span className="text-amber">something.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-16 px-5 py-24 md:grid-cols-[1fr_1.4fr] md:px-10">
        <div className="space-y-10">
          <div>
            <p className="eyebrow text-amber">Head office</p>
            <p className="mt-3 font-display text-2xl font-black leading-tight">
              Dar es Salaam<br />Tanzania
            </p>
          </div>
          <div>
            <p className="eyebrow text-amber">Email</p>
            <a href="mailto:info@hesu.co.tz" className="mt-3 block font-display text-xl font-black hover:text-amber">
              info@hesu.co.tz
            </a>
          </div>
          <div>
            <p className="eyebrow text-amber">Phone</p>
            <p className="mt-3 font-display text-xl font-black">+255 000 000 000</p>
          </div>
          <div>
            <p className="eyebrow text-amber">Hours</p>
            <p className="mt-3 text-ink-soft">Operations: 24 / 7<br />Office: Mon–Sat, 08:00–18:00 EAT</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-5 rounded-sm border border-border bg-card p-8 md:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Company" name="company" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
          </div>
          <Field label="Service of interest" name="service" placeholder="ICD, CFS, distribution…" />
          <div>
            <label className="eyebrow text-ink-soft">Tell us about your cargo</label>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-amber"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ink px-6 py-4 text-sm font-semibold text-cream hover:-translate-y-0.5 transition-transform"
          >
            {sent ? "✓ Message sent — we'll be in touch" : "Send enquiry →"}
          </button>
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-ink-soft">{label}{required && <span className="text-amber"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-amber"
      />
    </div>
  );
}
