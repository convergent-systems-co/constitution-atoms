# infra/cloudflare/pages-project

Terraform module that creates the Cloudflare Pages project `constitution-atoms` deploys to.

## Audience

Contributor bootstrapping constitution-atoms in a fresh Cloudflare account, or recovering the project after deletion.

## What this creates

A single `cloudflare_pages_project` named `constitution-atoms` with production branch `main`. Deployments arrive via `wrangler pages deploy` from `.github/workflows/deploy.yml` — no Git-source binding here.

## Prerequisites

- OpenTofu or Terraform `>= 1.6.0`.
- AWS-compatible credentials for the `cs-tfstate` R2 backend. Use `~/.env/convergent-systems.co/.env` via `eval "$(cat …)"` (the `. file` source pattern doesn't work on a FIFO — see prompt-atoms PR #14 for the diagnostic).
- `CLOUDFLARE_API_TOKEN` exported with `Cloudflare Pages — Edit` scope.
- The convergent-systems-co Cloudflare account ID (in the FIFO as `CLOUDFLARE_ACCOUNT_ID`).

## Apply

```bash
cd infra/cloudflare/pages-project

# Load CS env from 1Password FIFO
set -a
eval "$(cat ~/.env/convergent-systems.co/.env)"
set +a
export CLOUDFLARE_API_TOKEN="$CLOUDFLARE_ACCOUNT_TOKEN"
export TF_VAR_cloudflare_account_id="$CLOUDFLARE_ACCOUNT_ID"

tofu init
tofu plan
tofu apply -auto-approve
```

After apply, the project is live at `https://constitution-atoms.pages.dev`. Custom domain `constitution-atoms.com` is attached out-of-band in the Cloudflare dashboard.

## State

```
s3://cs-tfstate/state-bucket/convergent-systems-co/constitution-atoms/pages-project.tfstate
```

## Destroy

```bash
tofu destroy
```
