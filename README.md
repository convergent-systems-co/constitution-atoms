# constitution-atoms

> Organizational constitutions canonicalized — bylaws, charters, mission statements, principle hierarchies, value declarations — composed into typed governance corpora.

`constitution-atoms` is a `*-Atoms` catalog in the [Convergent Systems](https://convergent-systems.co) ecosystem. It defines what exists in its domain — typed, versioned, machine-readable, composable, and open — so runtimes (and humans) can stand on shared infrastructure instead of reinventing it.

Downstream catalogs such as [`policy-atoms`](https://github.com/convergent-systems-co/policy-atoms) and [`compliance-atoms`](https://github.com/convergent-systems-co/compliance-atoms) reference constitution atoms as their grounding authority — a charter declares *what an organization is*, policies declare *how it behaves*, and compliance rules declare *how that behavior is verified*.

Per [Atom Spec v1.1.0 Part XIII](https://github.com/convergent-systems-co/atoms-spec), `constitution-atoms` is one of the catalogs slated for Docker-image distribution, supporting private deployments by organizations adopting the spec for internal governance who want their constitution atoms private.

## Structure

```
constitution-atoms/
├── ATOMS.yml              # Catalog manifest (atoms-spec/v1.1.0)
├── atoms/                 # Reusable building blocks
├── constitutions/         # Compositions assembled from atoms
├── governance/            # Reserved namespace (atoms-spec/v1.1.0 Part II)
├── keys/                  # Reserved namespace (atoms-spec/v1.1.0 Part II)
├── schemas/               # Catalog-specific JSON Schemas
├── exports/               # CI-generated machine-readable exports
└── docs/                  # Human-readable documentation
```

### Atom types

- `charter` — Foundational constitutive document declaring the organization's existence, authority, and scope.
- `bylaw` — Specific rule governing internal operations.
- `principle` — A named principle in a principle hierarchy.
- `mission-statement` — Declared purpose of the organization.
- `value-declaration` — A declared organizational value.

### Runtime consumers

`aish`, `olympus`

## How to consume

Machine-readable exports are published in [`exports/`](./exports/) on every release:

- `exports/manifest.json` — lightweight discovery (name, version, counts)
- `exports/catalog.json` — full catalog dump (every atom, composition, rule)

Exports are deterministic, signed, and versioned. See [`ATOMS.yml`](./ATOMS.yml) for the manifest and the conformance spec.

## How to contribute

1. Read [`ATOMS.yml`](./ATOMS.yml) to understand the catalog's atom types and compositions.
2. Add a new atom under `atoms/<type>/` or a composition under `constitutions/<name>/`.
3. Open a PR. CI validates the schema, references, and exports.
4. Larger structural changes go through the [XAIP process](https://github.com/convergent-systems-co/xaips).

## Ecosystem

- **Federation:** [convergent-systems.co](https://convergent-systems.co) · [github.com/convergent-systems-co](https://github.com/convergent-systems-co)
- **Spec:** [github.com/convergent-systems-co/atoms-spec](https://github.com/convergent-systems-co/atoms-spec)
- **Tools:** [github.com/convergent-systems-co/atoms-tools](https://github.com/convergent-systems-co/atoms-tools)
- **Umbrella:** [github.com/convergent-systems-co/atoms](https://github.com/convergent-systems-co/atoms) — all catalogs as submodules

## License

Dual-licensed per [Atom Spec v1.1.0 Part VII](https://github.com/convergent-systems-co/atoms-spec):

- **Code** — [Apache-2.0](./LICENSE)
- **Data** — [CC-BY-4.0](./LICENSE-data)
