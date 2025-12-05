import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 font-sans text-slate-900 dark:text-zinc-100">
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-black text-xl tracking-tight hover:opacity-80 transition-opacity"
          >
            Vaute
          </Link>
          <Link
            href="/"
            className="text-sm font-bold text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black mb-2">Terms of Service</h1>
        <p className="text-slate-500 dark:text-zinc-400 mb-8">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Vaute ("the Service"), you agree to be bound
              by these Terms. If you disagree with any part of the terms, you
              may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Merchant of Record</h2>
            <p>
              Our order process is conducted by our online reseller,{" "}
              <strong>Lemon Squeezy</strong>. Lemon Squeezy is the Merchant of
              Record for all our orders. They handle all payment security, tax
              compliance, and receipt issuance.
            </p>
            <p className="mt-2">
              Refunds and payment disputes are subject to Lemon Squeezy's Terms
              of Service, though we generally approve refund requests made
              within 30 days of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Data Loss & Backups</h2>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900 rounded-xl">
              <p className="font-bold text-amber-800 dark:text-amber-200 mb-2">
                CRITICAL NOTICE regarding Data Backups:
              </p>
              <p className="text-amber-900/80 dark:text-amber-100/80 text-sm">
                Vaute stores data exclusively on your local device (browser
                IndexedDB). We do not keep a cloud backup of your data.
                <strong>
                  You are solely responsible for backing up your data.
                </strong>{" "}
                We are not liable for any data loss caused by browser cache
                clearing, device theft, hard drive failure, or accidental
                deletion.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              4. Use License & Education
            </h2>
            <p>
              Permission is granted to use Vaute for personal or professional
              educational purposes. This is the grant of a license, not a
              transfer of title.
            </p>
            <p className="mt-2">
              This tool is intended to aid special education professionals. It
              does not replace official legal documentation systems. Users are
              responsible for ensuring their use of this tool complies with
              their local district or school policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Disclaimer</h2>
            <p>
              The materials on Vaute are provided on an 'as is' basis. Vaute
              makes no warranties, expressed or implied, and hereby disclaims
              and negates all other warranties including, without limitation,
              implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Termination</h2>
            <p>
              You may terminate this agreement at any time by deleting the
              Application and all local data from your device. We may terminate
              your license if you violate any of these terms.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
