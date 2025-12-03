import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

// --- ICONS ---
const ShieldCheckIcon = () => (
  <svg
    className="w-6 h-6 text-emerald-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const WifiIcon = () => (
  <svg
    className="w-6 h-6 text-indigo-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
    />
  </svg>
);
const ChartIcon = () => (
  <svg
    className="w-6 h-6 text-purple-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-emerald-500 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const LogoIcon = () => (
  <svg
    className="w-6 h-6 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l9-5-9-5-9 5 9 5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
    />
  </svg>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 font-sans text-slate-900 dark:text-zinc-100 selection:bg-indigo-100 dark:selection:bg-indigo-900/30">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-xl tracking-tight text-slate-900 dark:text-white">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md shadow-indigo-500/20">
              <LogoIcon />
            </div>
            Goal Master
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="https://app.goalmaster.com"
              className="px-5 py-2 text-sm font-bold bg-slate-900 text-white rounded-full hover:bg-slate-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-transform hover:scale-105 shadow-lg"
            >
              Launch App
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="pt-20 pb-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:border-indigo-800 dark:text-indigo-300 text-xs font-bold uppercase tracking-wide animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            New: AI-Powered Goal Wizard
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            IEP Tracking, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Unleashed.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            The offline-first, privacy-focused data tracker for special
            education professionals. Zero cloud storage means{" "}
            <strong>zero data breaches.</strong>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="https://app.goalmaster.com"
              className="px-8 py-4 bg-indigo-600 text-white text-lg font-bold rounded-xl shadow-xl shadow-indigo-500/30 hover:bg-indigo-700 transition-all hover:-translate-y-1"
            >
              Start Tracking for Free
            </Link>
            <a
              href="#pricing"
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-800 text-lg font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>

        {/* APP PREVIEW MOCKUP */}
        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30 dark:opacity-50"></div>
          <div className="relative bg-slate-900 rounded-2xl p-2 ring-1 ring-slate-900/10 shadow-2xl">
            <img
              src="/screenshot-desktop.png"
              alt="App Dashboard"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </header>

      {/* FEATURES GRID */}
      <section className="py-24 bg-white dark:bg-zinc-900 border-y border-slate-100 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Everything you need. Nothing you don't.
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 max-w-xl mx-auto">
              We stripped away the bloat and built a tool that works as fast as
              you do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-700 hover:border-emerald-200 dark:hover:border-emerald-900 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheckIcon />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Privacy First
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                Your data is stored <strong>locally</strong> on your device. We
                don't have servers, so we can't see, sell, or lose your student
                records. FERPA friendly by design.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-700 hover:border-indigo-200 dark:hover:border-indigo-900 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <WifiIcon />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Works Offline
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                No Wi-Fi? No problem. Goal Master works perfectly offline. It
                syncs to your hard drive automatically when you're back online.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-700 hover:border-purple-200 dark:hover:border-purple-900 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartIcon />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Instant Reports
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                Turn raw data into beautiful PDF progress reports with one
                click. Perfect for IEP meetings and parent updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 px-6 bg-slate-50 dark:bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
              Simple, Honest Pricing.
            </h2>
            <p className="text-lg text-slate-500 dark:text-zinc-400">
              No monthly subscriptions. No hidden fees. Pay once, own it
              forever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* FREE PLAN */}
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Starter
              </h3>
              <div className="mt-4 mb-6">
                <span className="text-5xl font-black text-slate-900 dark:text-white">
                  $0
                </span>
                <span className="text-slate-500 dark:text-zinc-500 ml-2">
                  / forever
                </span>
              </div>
              <p className="text-slate-600 dark:text-zinc-400 mb-8">
                Perfect for testing the waters or managing a small caseload.
              </p>

              <ul className="space-y-4 mb-8 text-slate-700 dark:text-zinc-300">
                <li className="flex items-center">
                  <CheckIcon /> <strong>3 Students</strong>
                </li>
                <li className="flex items-center">
                  <CheckIcon /> <strong>5 Active Goals</strong>
                </li>
                <li className="flex items-center">
                  <CheckIcon /> Screen-View Charts
                </li>
                <li className="flex items-center">
                  <CheckIcon /> Local-Only Storage
                </li>
              </ul>

              <Link
                href="https://app.goalmaster.com"
                className="block w-full py-4 text-center font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-300 dark:hover:bg-indigo-900/40 rounded-xl transition-colors"
              >
                Start for Free
              </Link>
            </div>

            {/* PRO PLAN (Aligned Version) */}
            <div className="p-8 rounded-3xl border-2 border-indigo-600 bg-slate-900 dark:bg-black text-white relative shadow-2xl transition-transform duration-300 hover:-translate-y-4">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl uppercase tracking-wide">
                Best Value
              </div>
              <h3 className="text-2xl font-bold text-white">Lifetime Pro</h3>
              <div className="mt-4 mb-6">
                <span className="text-5xl font-black text-white">$29</span>
                <span className="text-indigo-300 ml-2">/ one-time</span>
              </div>
              <p className="text-indigo-200 mb-8">
                For the serious professional who wants to save hours every week.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-white">
                  <CheckIcon /> <strong>Unlimited Students</strong>
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon /> <strong>Unlimited Goals</strong>
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon /> <strong>PDF Report Exports</strong>
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon /> <strong>AI Goal Wizard</strong>
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon /> <strong>Voice Dictation</strong>
                </li>
              </ul>

              <Link
                href="https://app.goalmaster.com/settings"
                className="block w-full py-4 text-center font-bold bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl transition-colors shadow-lg shadow-indigo-500/50"
              >
                Get Lifetime Access
              </Link>
              <p className="text-center text-xs text-indigo-300 mt-3">
                30-day money-back guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                Where is my student data stored?
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                100% of your data is stored on your own device's hard drive
                (using browser technology called IndexedDB). We do not have a
                database. We cannot see, sell, or lose your data.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                Can I use this on multiple computers?
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                Because data is local, it doesn't automatically sync between
                computers. However, you can use the "Export Backup" feature in
                Settings to move your data from your work laptop to your home
                iPad.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                What happens if I clear my browser cache?
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                Clearing your cache will delete your data. That's why we built
                the <strong>Auto-Save</strong> feature. Connect it once, and we
                will save a backup file to your "Documents" folder every time
                you make a change.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                Do you offer school district pricing?
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                Yes! We offer bulk license discounts for schools. Contact us for
                a quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-zinc-900 border-t border-slate-200 dark:border-zinc-800 py-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="font-black text-2xl text-slate-900 dark:text-white mb-4 flex items-center justify-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center shadow-sm">
              <LogoIcon />
            </div>
            Goal Master
          </div>
          <div className="flex justify-center gap-6 mb-8 text-sm text-slate-500 dark:text-zinc-500">
            <a
              href="/privacy"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Terms of Service
            </a>
            <a
              href="mailto:support@goalmaster.com"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Contact Support
            </a>
          </div>
          <p className="text-slate-400 dark:text-zinc-600 text-sm">
            © {new Date().getFullYear()} Goal Master. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
