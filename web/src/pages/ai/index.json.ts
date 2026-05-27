import type { APIRoute } from 'astro';
import catalog from '../../../public/exports/catalog.json';

export const GET: APIRoute = () => {
  const atomTypes: Record<string, number> = {};
  for (const atom of (catalog.atoms as any[])) {
    const t = atom.type || 'unknown';
    atomTypes[t] = (atomTypes[t] || 0) + 1;
  }

  const payload = {
    version: '1',
    spec_version: 'atoms-spec/v1.1.0',
    name: 'constitution-atoms',
    description: 'Organizational constitutions canonicalized — bylaws, charters, mission statements, principle hierarchies, value declarations.',
    site: 'https://constitution-atoms.com',
    federation: 'convergent-systems.co',
    catalog: {
      total_atoms: (catalog.atoms as any[]).length,
      total_compositions: (catalog.compositions as any[]).length,
      atom_types: atomTypes,
      exports_url: 'https://constitution-atoms.com/exports/catalog.json',
    },
    endpoints: {
      atoms: 'https://constitution-atoms.com/atoms/',
      exports: 'https://constitution-atoms.com/exports/catalog.json',
      ai_discovery: 'https://constitution-atoms.com/ai/index.json',
    },
    workflow: [
      '1. Fetch /ai/index.json to discover catalog structure and atom types.',
      '2. Browse /atoms/ to explore atoms grouped by type.',
      '3. Fetch /exports/catalog.json for the full machine-readable catalog.',
    ],
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
};
