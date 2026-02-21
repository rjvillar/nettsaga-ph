import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — Nettsaga",
  description:
    "Get in touch with Nettsaga. We'd love to hear about your project.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center bg-paper pt-20">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-dark">
            Contact us
          </h1>
          <p className="mt-4 text-lg text-slate">
            This page is coming soon. In the meantime, reach us at{" "}
            <a
              href="mailto:support@nettsaga.com"
              className="font-medium text-dark underline underline-offset-4"
            >
              support@nettsaga.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
