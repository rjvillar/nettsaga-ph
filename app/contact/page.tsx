import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact — Nettsaga",
  description:
    "Get in touch with Nettsaga. We'd love to hear about your project.",
};

export default function ContactPage() {
  return (
    <>
      <Header solid />
      <main className="bg-grain relative bg-paper pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="relative mx-auto max-w-6xl px-6">
          {/* Page heading */}
          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-dark sm:text-[40px]">
              Get in touch
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate sm:text-[22px]">
              Have a project in mind? We&apos;d love to hear about it.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12">
            {/* Left — Contact information */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-dark/[0.06] bg-white p-6 sm:p-8">
                <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Contact information
                </p>
                <h2 className="mt-3 font-heading text-xl font-bold tracking-tight text-dark sm:text-2xl">
                  Let&apos;s start a conversation.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  Reach out through any of these channels or fill out the form
                  and we&apos;ll get back to you within the day.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-dark/[0.06] bg-paper">
                      <Mail className="h-4 w-4 text-dark/50" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-dark/40">
                        Email
                      </p>
                      <a
                        href="mailto:support@nettsaga.com"
                        className="mt-0.5 text-sm font-medium text-dark transition-colors hover:text-dark/70"
                      >
                        support@nettsaga.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-dark/[0.06] bg-paper">
                      <MapPin className="h-4 w-4 text-dark/50" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-dark/40">
                        Office
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-dark">
                        Burgundy Corporate Tower, 252 Sen. Gil J. Puyat Ave,
                        Makati City, 1200 Metro Manila
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-dark/[0.06] bg-paper">
                      <Clock className="h-4 w-4 text-dark/50" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-dark/40">
                        Response time
                      </p>
                      <p className="mt-0.5 text-sm text-dark">
                        Within the day, Mon — Fri
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Contact form card */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-dark/[0.06] bg-white p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
