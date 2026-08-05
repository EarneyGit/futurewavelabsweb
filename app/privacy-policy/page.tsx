import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Future Wave Labs",
  description:
    "Read the Future Wave Labs privacy policy for our website, contact forms, and digital service interactions.",
  alternates: {
    canonical: "https://www.futurewavelabs.in/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-red-400">Future Wave Labs</p>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-white/70">
            This policy explains how Future Wave Labs handles information submitted through this website,
            including enquiries about AI automation, website development, mobile apps, software, and digital services.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Information we collect</h2>
          <p className="text-white/70">
            We may collect information you submit voluntarily, such as your name, email address, phone number,
            company details, service interests, and message content.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">How we use information</h2>
          <p className="text-white/70">
            We use submitted information to respond to enquiries, evaluate project fit, communicate about services,
            and improve our website and client experience.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Data sharing</h2>
          <p className="text-white/70">
            We do not sell personal information. We may share information with trusted service providers only when
            required to operate the website, communicate with you, or deliver requested services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-white/70">
            For privacy-related questions, contact Future Wave Labs at hello@futurewavelabs.in.
          </p>
        </section>
      </div>
    </main>
  );
}
