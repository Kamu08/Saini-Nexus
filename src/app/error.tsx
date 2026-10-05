'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white border-2 border-black p-8 sm:p-10 rounded-3xl shadow-[6px_6px_0px_#000000]">
        <div className="w-16 h-16 rounded-2xl bg-amber-200 border-2 border-black text-black flex items-center justify-center mx-auto shadow-[3px_3px_0px_#000000]">
          <AlertTriangle className="w-8 h-8 text-black" />
        </div>

        <h1 className="text-3xl font-serif font-bold text-black">
          Something went wrong
        </h1>

        <p className="text-xs sm:text-sm text-black/80 leading-relaxed font-sans">
          An unexpected error occurred while processing this pipeline view. Please try resetting or return to the main dashboard.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="neo-btn-blue w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-wider cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="neo-btn-white w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-wider"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
