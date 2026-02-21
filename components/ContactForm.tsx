"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <form
      action="https://formsubmit.co/support@nettsaga.com"
      method="POST"
      className="space-y-5"
    >
      {/* Honeypot */}
      <input type="text" name="_honey" className="hidden" />
      {/* Disable captcha */}
      <input type="hidden" name="_captcha" value="false" />
      {/* Return to same page */}
      <input type="hidden" name="_next" value="https://nettsaga.com/contact" />

      <div>
        <label
          htmlFor="name"
          className="block text-xs font-semibold uppercase tracking-[0.15em] text-dark/60"
        >
          Name <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={update}
          placeholder="Your full name"
          className="mt-2 w-full rounded-xl border border-dark/[0.08] bg-paper px-4 py-3 text-sm text-dark outline-none transition-colors placeholder:text-muted focus:border-dark/20 focus:ring-1 focus:ring-dark/10"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-semibold uppercase tracking-[0.15em] text-dark/60"
        >
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={update}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-xl border border-dark/[0.08] bg-paper px-4 py-3 text-sm text-dark outline-none transition-colors placeholder:text-muted focus:border-dark/20 focus:ring-1 focus:ring-dark/10"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-xs font-semibold uppercase tracking-[0.15em] text-dark/60"
        >
          Phone <span className="text-xs font-normal normal-case tracking-normal text-muted">(optional)</span>
        </label>
        <div className="mt-2 flex">
          <span className="inline-flex items-center rounded-l-xl border border-r-0 border-dark/[0.08] bg-dark/[0.04] px-3 text-sm text-slate">
            +63
          </span>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={update}
            placeholder="9XX XXX XXXX"
            className="w-full rounded-r-xl border border-dark/[0.08] bg-paper px-4 py-3 text-sm text-dark outline-none transition-colors placeholder:text-muted focus:border-dark/20 focus:ring-1 focus:ring-dark/10"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-[0.15em] text-dark/60"
        >
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update}
          placeholder="Tell us about your business and what you need..."
          className="mt-2 w-full resize-none rounded-xl border border-dark/[0.08] bg-paper px-4 py-3 text-sm leading-relaxed text-dark outline-none transition-colors placeholder:text-muted focus:border-dark/20 focus:ring-1 focus:ring-dark/10"
        />
      </div>

      {/* Consent checkbox */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-dark/20 accent-dark"
        />
        <span className="text-xs leading-relaxed text-slate">
          I agree to Nettsaga collecting and storing my information to respond to
          this inquiry. Your data will not be shared with third parties.
        </span>
      </label>

      <button
        type="submit"
        disabled={!consent}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-dark px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-dark/90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Send className="h-4 w-4" />
        Send message
      </button>
    </form>
  );
}
