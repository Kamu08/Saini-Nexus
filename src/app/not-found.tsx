import React from "react";
import Link from "next/link";
import { Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white border border-slate-200/90 p-8 sm:p-10 rounded-3xl shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mx-auto font-mono text-2xl font-bold">
          404
        </div>

        <h1 className="text-3xl font-bold text-slate-900">
          Page Not Found
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          The B2B resource or route you are looking for has been relocated or does not exist in our system.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="neo-btn-blue w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-wider"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/solutions"
            className="neo-btn-white w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-wider"
          >
            <span>Explore Solutions</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
