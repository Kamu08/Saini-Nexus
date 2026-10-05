'use client';

import React from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-[#FAFCFF] p-6 font-sans">
        <div className="max-w-md w-full text-center space-y-6 bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">Application Error</h1>
          <p className="text-sm text-slate-600">
            A critical system error occurred. Please refresh or return to safety.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => reset()}
              className="px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#0072F5] hover:bg-[#005ecb]"
            >
              Reload
            </button>
            <Link
              href="/"
              className="px-5 py-2.5 rounded-lg text-xs text-slate-700 bg-white border border-slate-200"
            >
              Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
