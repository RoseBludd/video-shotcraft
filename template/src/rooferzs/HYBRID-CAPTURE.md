# HYBRID CAPTURE — locked SoT (Juelzs 2026-10-06 CT)

**Status:** LOCKED · mixture approach optimal  
**Companions:** `V2-CAPTURE-GATES.md` (§7 L14) · `preview/V2-PLAN.md` · `V2-MOTION-DIRECTION.md` (§9 Source media)

## Decision

Use a **hybrid** of:

1. **Short live screen recordings** (webm/mp4) for the three beats where the viewer must see action happen.
2. **High-res stills** for everything else.
3. **Remotion / Shotcraft** kinetic type, transitions, punch-ins, DOF, callouts composited **on top of both**.

Do **not** invent product UI with generative AI video (Runway / Kling / similar). Product must stay real.

## Why

Premium SaaS launch grammar (Linear / Stripe / Notion / Raycast) sells **real product proof** with motion that *annotates*, not fabricates. Frozen stills read as slides for action beats (typing, numbers filling, pins landing). Full-length raw screen shares feel amateur without grade. Hybrid = real live motion where it matters + crisp stills elsewhere + Remotion polish on both.

## Required clips (L14)

| Filename | Role walk | Shot | What must be visible |
|---|---|---|---|
| `seed-proof/clips/clip-chat-type.webm` | **Admin / JH** (OpenBot or CADIS) | S11 | User/agent text appearing character-by-character or clear typing into chat |
| `seed-proof/clips/clip-estimate-amount.webm` | **Estimator** (Derek Walsh) | S17 (+ related S12/S18 punch-ins) | RCV/ACV/line items filling in / amount updating live |
| `seed-proof/clips/clip-door-pin-drop.webm` | **Sales** (Maya Chen) | S06 | Pin(s) dropping/appearing on North Dallas street-level map (click→pin or pin-drop animation) — not a frozen map with pins already there |

**Path convention:** write under `seed-proof/clips/` during roleE2E. Stage 4 may mirror same basenames to `captures/clips/`. Prefer `.webm`; `.mp4` OK at 1080p. **Trim to beat** — keep 1800f timing table; do not expand durations unless forced (soft note only).

## Stills (still required)

L3 / L4b / L9 / L10 / L12 / L13 **still block re-render** when red. High-res stills remain for:

- Rail (S03) · storm map overview (S04) · gallery (S10) · roles (S13) · portal (S15) · schedule (S20) · integrations (S21) · CTA / trial (S22–S23)
- Kinetic GFX cards (S01 / S02 / S05 / S09 / S14)
- L4b still: ≥4 street pins **visible**; pin-drop clip is the **motion** proof of how a pin lands

## Remotion role

Composites kinetic type, transitions, punch-ins, DOF, callouts, odometers, cursor trails **on top of** both stills and clips. Remotion does not replace missing live action for the three hero clips.

## CLIP vs STILL (shot map)

| Shot | Source |
|---|---|
| S01, S02, S05, S09, S14 | **GFX** (kinetic) |
| S06 | **LIVE CLIP** (`clip-door-pin-drop.webm`) |
| S11 | **LIVE CLIP** (`clip-chat-type.webm`) |
| S17 | **LIVE CLIP** (`clip-estimate-amount.webm`) |
| S03, S04, S07, S08, S10, S12, S13, S15, S16, S18, S19, S20, S21, S22, S23 | **STILL** + Remotion FX |

## Anti-patterns (FAIL)

- AI-invented UI (generative video that draws fake product chrome)
- Full-length screen share with no grade / no trim used as the hero plate
- **Still-only** for chat type, estimate amount, or door pin-drop action beats
- Claiming picture lock while any of the three named clips is missing

## Gate

**L14 RED** → do not picture-lock / re-render S06, S11, S17. See `V2-CAPTURE-GATES.md` §7.
