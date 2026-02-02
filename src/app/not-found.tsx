'use client';

import Error from 'next/error';

// Render the default Next.js 404 page content.
// It will be wrapped by src/app/layout.tsx, so no html/body needed here.

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
       <div className="text-center">
         <h1 className="text-4xl font-bold">404</h1>
         <p className="text-lg text-gray-600 mt-2">This page could not be found.</p>
       </div>
    </div>
  );
}
