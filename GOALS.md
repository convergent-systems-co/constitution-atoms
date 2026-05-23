# constitution-atoms — Goals

> Organizational constitutions canonicalized — bylaws, charters, mission statements, principle hierarchies, value declarations — composed into typed governance corpora that downstream policy-atoms and compliance-atoms reference.

*This document is derived from the constitutive role this catalog plays in the convergent-systems.co ecosystem and from [Atom Spec v1.1.0](https://github.com/convergent-systems-co/atoms-spec). Sections marked **Generated** are pattern-based and are intended as a starting point for revision, not as decided plan.*

---

## What this catalog makes civilization-grade

Constitutions, bylaws, and principles live today in PDFs, wiki pages, and tribal knowledge. They are referenced by policy and compliance work but rarely linked back to as authoritative artifacts. There is no shared vocabulary for "this policy is grounded in *this clause* of *this charter*."

By cataloging the foundational documents of an organization as typed, versioned, machine-readable atoms, `constitution-atoms` provides the grounding that `policy-atoms` and `compliance-atoms` need. A policy can declare which principle it implements; a compliance rule can declare which bylaw it enforces; an auditor can trace a control back to the constitutive document that authorized it.

## What it catalogs

### Atom types

- **`charter`** — Foundational constitutive document declaring the organization's existence, authority, and scope.
- **`bylaw`** — Specific rule governing internal operations (board composition, decision processes, role definitions).
- **`principle`** — A named principle in a principle hierarchy; the durable values that decisions are tested against.
- **`mission-statement`** — Declared purpose of the organization, intentionally separate from charter (charters bestow authority; missions declare intent).
- **`value-declaration`** — A declared organizational value, attached to evidence of how it is operationalized.

### Compositions: `constitutions/`

A constitution composition assembles a charter + bylaws + principles + mission + value declarations into a complete organizational constitution. Multi-entity compositions (federations, holding companies, subsidiary hierarchies) compose individual constitutions with delegation patterns.

## Runtime consumers

- **aish** — agent-shell governance loads constitution atoms when asserting that automation acts within an organization's declared principles.
- **olympus** — Pantheon Modules consume constitution atoms when their actions require justification against the principal's chartered values.

## Status & priority

**Current status:** `bootstrap` (per atoms-spec/v1.1.0 Part XII Phase 1)

**Priority tier:** Tier 1 — Foundational. policy-atoms and compliance-atoms need this catalog as their grounding authority.

**Trigger / activation condition:** convergent-systems-co's own constitution is the first composition. Pilot organizations adopting the spec for internal governance follow.

## Roadmap *(Generated)*

### v0.1 — Bootstrap & spec acceptance

**Goal:** Schemas accepted. convergent-systems-co's own constitution expressed entirely via constitution-atoms.

**Success criterion:** One full constitution composition published. policy-atoms references at least one principle from this catalog.

**Kill criterion:** Charter / bylaw / principle distinctions collapse in practice — pivot to a single `governing-document` type.

**Work:**

- [ ] Define 5 atom type schemas
- [ ] Express convergent-systems-co's constitution as a constitution composition
- [ ] policy-atoms reference resolution against a constitution principle
- [ ] Docker image for private deployments (per atoms-spec/v1.1.0 Part XIII)

### v0.2 — Adoption & expansion

**Goal:** Pilot organizations express their constitutions privately.

**Work:**

- [ ] Docker image distribution pipeline
- [ ] Multi-entity composition schema (federations, subsidiaries)
- [ ] Reference 'minimum-viable-constitution' template

### v1.0 — Operational

**Goal:** Default vocabulary for organizational governance grounding across the ecosystem.

## Civilization-grade property checklist

| Property | Mechanism in this catalog |
|---|---|
| Typed | JSON Schema in `schemas/` validates every atom, composition |
| Versioned | Every atom has a SemVer `version` field; compositions reference atoms by version-pinned ID; spec conformance is atoms-spec/v1.1.0 |
| Signed | ML-DSA-65 baseline per atoms-spec/v1.1.0 Part IV |
| Machine-readable | `exports/catalog.json` published on every release |
| Composable | Compositions reference atoms by ID; CI verifies references resolve |
| Open | Dual-licensed (Apache-2.0 code / CC-BY-4.0 data) per atoms-spec/v1.1.0 Part VII |
| Durable | Content-addressable (`content_hash` on every atom); conforming-mirror contract published |

## Related

- **Spec:** [atoms-spec](https://github.com/convergent-systems-co/atoms-spec) — the canonical structure every catalog conforms to
- **Tools:** [atoms-tools](https://github.com/convergent-systems-co/atoms-tools) — CLI for validate / export / bootstrap / resolve
- **Umbrella:** [atoms](https://github.com/convergent-systems-co/atoms) — every catalog as a git submodule
- **Manifest:** [`ATOMS.yml`](./ATOMS.yml) — this catalog's machine-readable manifest
- **Downstream consumers:** [policy-atoms](https://github.com/convergent-systems-co/policy-atoms), [compliance-atoms](https://github.com/convergent-systems-co/compliance-atoms)
