import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 font-sans text-slate-900 dark:text-zinc-100">
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-black text-xl tracking-tight hover:opacity-80 transition-opacity"
          >
            Goal Master
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
        <h1 className="text-4xl font-black mb-2">Privacy Policy</h1>
        <p className="text-slate-500 dark:text-zinc-400 mb-8">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              1. Local-First Architecture
            </h2>
            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900 rounded-xl">
              <p className="font-medium text-emerald-800 dark:text-emerald-200">
                Goal Master is a <strong>Local-First Application</strong>. We
                use an in-browser database technology called PGlite (PostgreSQL
                in WASM). All student names, IEP dates, and tracking logs are
                stored <strong>exclusively</strong> on your device's hard drive.
                We do not possess a cloud database for student records, meaning
                we physically cannot see, sell, or lose your student data.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              2. Data We Do Not Collect
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Student PII:</strong> We never transmit student names or
                IDs to our servers.
              </li>
              <li>
                <strong>IEP Goals:</strong> Your custom goals and templates
                remain on your device.
              </li>
              <li>
                <strong>Audio Recordings:</strong> Voice notes are processed by
                your device's browser and are not stored by us.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              3. Compliance (FERPA/COPPA)
            </h2>
            <p>
              Because Goal Master does not transmit or store Personally
              Identifiable Information (PII) on our servers, the usage of this
              tool falls under the direct control of the educational agency or
              institution. We act as a tool provider, similar to a locally
              installed word processor. The responsibility for securing the
              physical device lies with the user.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
            <p className="mb-4">
              While we do not store student data, we use the following
              third-party services for app functionality:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Lemon Squeezy:</strong> Used for license verification.
                When you activate a Pro license, we send your License Key and a
                unique device ID to Lemon Squeezy to validate it. We do{" "}
                <strong>not</strong> send student data with this request.
              </li>
              <li>
                <strong>Browser Speech API:</strong> If you use the "Voice Note"
                feature, your audio is processed by your web browser's native
                speech engine (e.g., Apple or Google).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Goal Wizard "AI"</h2>
            <p>
              The "Smart Goal Generator" runs entirely offline using a local
              library of pre-written goals. Unlike other "AI" tools,{" "}
              <strong>
                we do not send your student's name or subject data
              </strong>{" "}
              to OpenAI, Anthropic, or any other LLM provider. The logic happens
              100% on your computer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Data Deletion</h2>
            <p>
              You have complete control over your data. You can permanently
              delete all records by:
            </p>
            <ol className="list-decimal pl-5 space-y-1 mt-2">
              <li>
                Going to{" "}
                <em>
                  Settings {">"} Danger Zone {">"} Wipe Data
                </em>{" "}
                within the app.
              </li>
              <li>Clearing your browser's cache/site data.</li>
            </ol>
            <p className="mt-2 text-sm text-slate-500">
              Note: Once data is wiped from your device, we cannot recover it,
              as we do not hold a backup.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
