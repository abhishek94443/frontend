import { getVendorConfig } from "@/lib/api";
import { Renderer } from "@/core/renderer";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ vendorSlug: string }>;
}

import { logToFile } from '@/lib/logger';

export default async function VendorPage({ params }: PageProps) {
  const { vendorSlug } = await params;
  
  const config = await getVendorConfig(vendorSlug);
  logToFile(`VendorPage [${vendorSlug}] config:`, config);

  if (!config) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-lg text-gray-700">Vendor not found or API unavailable.</p>
        <p className="text-sm text-gray-500 mt-2">Slug: {vendorSlug}</p>
      </div>
    );
  }

  // If config exists but no tree, we might want to show a "Under Construction" or similar
  if (!config.websiteConfig?.tree) {
     return (
        <div className="flex flex-col items-center justify-center min-h-screen p-10">
           <h1 className="text-2xl font-bold">Welcome to {config.name}</h1>
           <p>This site is currently being built.</p>
           <pre className="mt-10 bg-gray-100 p-4 rounded text-xs max-w-full overflow-auto">
             {JSON.stringify(config, null, 2)}
           </pre>
        </div>
     )
  }

  return (
    <main>
      <Renderer nodeTree={config.websiteConfig.tree} />
    </main>
  );
}
