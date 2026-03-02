"use client";

import { useState, useEffect } from "react";
import { Send, Check, X } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

type ToastState = null | "success" | "error";

export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(id);
  }, [toast]);

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setToast(null);

    try {
      const body = new FormData();
      body.append("name", form.name);
      body.append("email", form.email);
      body.append("phone", form.phone);
      body.append("message", form.message);
      body.append("_captcha", "false");

      await fetch("https://formsubmit.co/ajax/support@nettsaga.com", {
        method: "POST",
        body,
      });

      setToast("success");
      setForm({ name: "", email: "", phone: "", message: "" });
      setConsent(false);
    } catch {
      setToast("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="text" name="_honey" className="hidden" />

        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-[0.15em] text-dark/60"
          >
            {t.contact.form.name} <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={update}
            placeholder={t.contact.form.placeholders.name}
            className="mt-2 w-full rounded-md border border-dark/[0.08] bg-paper px-4 py-3 text-sm text-dark outline-none transition-colors placeholder:text-muted focus:border-dark/20 focus:ring-1 focus:ring-dark/10"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-[0.15em] text-dark/60"
          >
            {t.contact.form.email} <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={update}
            placeholder={t.contact.form.placeholders.email}
            className="mt-2 w-full rounded-md border border-dark/[0.08] bg-paper px-4 py-3 text-sm text-dark outline-none transition-colors placeholder:text-muted focus:border-dark/20 focus:ring-1 focus:ring-dark/10"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-[0.15em] text-dark/60"
          >
            {t.contact.form.phone}{" "}
            <span className="text-xs font-normal normal-case tracking-normal text-muted">
              {t.contact.form.phoneOptional}
            </span>
          </label>
          <div className="mt-2 flex">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-dark/[0.08] bg-dark/[0.04] px-3 text-sm text-slate">
              +63
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={update}
              placeholder={t.contact.form.placeholders.phone}
              className="w-full rounded-r-md border border-dark/[0.08] bg-paper px-4 py-3 text-sm text-dark outline-none transition-colors placeholder:text-muted focus:border-dark/20 focus:ring-1 focus:ring-dark/10"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-[0.15em] text-dark/60"
          >
            {t.contact.form.message} <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={update}
            placeholder={t.contact.form.placeholders.message}
            className="mt-2 w-full resize-none rounded-md border border-dark/[0.08] bg-paper px-4 py-3 text-sm leading-relaxed text-dark outline-none transition-colors placeholder:text-muted focus:border-dark/20 focus:ring-1 focus:ring-dark/10"
          />
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-dark/20 accent-dark"
          />
          <span className="text-xs leading-relaxed text-slate">
            {t.contact.form.consent}
          </span>
        </label>

        <button
          type="submit"
          disabled={!consent || sending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-dark px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-dark/90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {sending ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              {t.contact.form.sending}
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {t.contact.form.submit}
            </>
          )}
        </button>
      </form>

      {/* Toast */}
      <div
        className={`fixed bottom-6 right-6 z-[100] flex max-w-sm items-start gap-3 rounded-xl border px-5 py-4 shadow-lg transition-all duration-300 ${
          toast
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        } ${
          toast === "success"
            ? "border-dark/[0.08] bg-dark text-white"
            : "border-red-200 bg-red-50 text-dark"
        }`}
      >
        {toast === "success" ? (
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/20">
            <Check className="h-3.5 w-3.5 text-green-400" />
          </div>
        ) : toast === "error" ? (
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20">
            <X className="h-3.5 w-3.5 text-red-500" />
          </div>
        ) : null}
        <div className="min-w-0">
          <p className="text-sm font-semibold">
            {toast === "success"
              ? t.contact.form.successTitle
              : t.contact.form.errorTitle}
          </p>
          <p className={`mt-0.5 text-xs ${toast === "success" ? "text-white/50" : "text-dark/50"}`}>
            {toast === "success"
              ? t.contact.form.successBody
              : t.contact.form.errorBody}
          </p>
        </div>
        <button
          onClick={() => setToast(null)}
          className={`shrink-0 ${toast === "success" ? "text-white/40 hover:text-white" : "text-dark/40 hover:text-dark"}`}
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </>
  );
}
