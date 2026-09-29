"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary-500 font-heading text-lg font-bold text-primary-800">
            B
          </div>
          <span className="font-heading text-xl font-semibold text-neutral-800">
            ByteSpace
          </span>
        </div>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="font-body text-label-m font-medium text-primary-600">
            Home
          </a>
          <a href="#" className="font-body text-label-m font-medium text-neutral-600 hover:text-primary-600">
            Courses
          </a>
          <a href="#" className="font-body text-label-m font-medium text-neutral-600 hover:text-primary-600">
            Creators
          </a>
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-6 md:flex">
          <a href="/login" className="font-body text-label-m text-neutral-700">
            Sign In
          </a>
          <a href="/signup" className="font-body text-label-m text-neutral-700">
            Join Us
          </a>
          <button aria-label="Cart" className="text-neutral-700">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-neutral-700 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-neutral-100 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <a href="#" className="font-body text-label-m font-medium text-primary-600">
              Home
            </a>
            <a href="#" className="font-body text-label-m font-medium text-neutral-600">
              Courses
            </a>
            <a href="#" className="font-body text-label-m font-medium text-neutral-600">
              Creators
            </a>
            <div className="mt-2 flex flex-col gap-3 border-t border-neutral-100 pt-4">
              <a href="/login" className="font-body text-label-m text-neutral-700">
                Sign In
              </a>
              <a href="/signup" className="font-body text-label-m text-neutral-700">
                Join Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}