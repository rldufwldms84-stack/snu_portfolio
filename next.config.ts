import type { NextConfig } from 'next';

// This portfolio has no server-only routes or runtime data dependencies.
// Emit static HTML so it can run on Vercel's static hosting as well as Sites.
const nextConfig: NextConfig = { output: 'export' };

export default nextConfig;
