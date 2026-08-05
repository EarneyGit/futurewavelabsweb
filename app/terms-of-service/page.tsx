import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Future Wave Labs",
  description:
    "Read the Future Wave Labs terms governing use of our website and digital service enquiries.",
  alternates: {
    canonical: "https://www.futurewavelabs.in/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-red-400">Future Wave Labs</p>
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-white/70">
            These terms govern use of the Future Wave Labs website and initial enquiries related to AI automation,
            website development, mobile apps, software solutions, and digital growth services.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Website use</h2>
          <p className="text-white/70">
            You may browse this website and contact us for legitimate business enquiries. You must not misuse,
            disrupt, or attempt unauthorized access to the website or its underlying systems.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Service information</h2>
          <p className="text-white/70">
            Information presented on this website is for general business and informational purposes. Specific
            service scope, timelines, pricing, and delivery commitments are defined separately during project discussions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Intellectual property</h2>
          <p className="text-white/70">
            Website content, branding, and original materials published by Future Wave Labs remain the property of
            Future Wave Labs unless otherwise stated.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-white/70">
            For terms-related questions, contact hello@futurewavelabs.in.
          </p>
        </section>
      </div>
    </main>
  );
}
