# Rooferzs promo — timing skeleton V2 (PRIMARY 60.0s · 1800f @ 30fps · 1920×1080)

Generated 2026-10-06 from `.shots.py` **V2 REWRITE** (single source of truth; sum asserted = 1800f). **Footage source = LIVE agentic surface**: agent.rooferzs.com (OpenBot, AGENTIC ROOFING 8-bot rail) + app.rooferzs.com signed-in product, tenant `bluebonnetpeakroofing` (Bluebonnet Peak Roofing, tenant 203) as **Jordan Hale**. No rooferzs.com marketing-demo textures. **V2 grammar:** Linear/Stripe kinetic hook — NOT Saturday day-clock. Promise cards STORM→DOORS / PROOF→JOB / SCOPE→MARGIN replace time-of-day title cards. Dense stacked motion (≥100 instances — see `V2-EFFECTS-CATALOG.md`). Planning grid = **placeholder 120 BPM → 1 beat = 15f, 1 bar = 60f, 1 phrase (8 beats) = 120f**. Every cut sits on a beat of that grid; after the real BGM is analysed (Stage 6, librosa, `music-beat-sync.md`) the table is rewritten in `beatF(n)` and SFX re-pinned (S3).

Legend: `STACK` = dense Remotion motion instances on the shot (see V2-EFFECTS-CATALOG; LEAD-once law RETIRED). `CAM` = camera grammar. IN/OUT = seam form. Transition frames are carved out of adjacent shots' budgets, not added. **src**: `AG` agent.rooferzs.com standalone · `EMB` app.rooferzs.com AGENT embed panel · `APP` app.rooferzs.com product surface · `GFX` film-built graphic (no product footage). `‹JOB›/‹RCV›/‹ACV›/‹MARGIN›` = values bound from the seeded Bluebonnet job at Stage 4 discovery (never landing numbers). **Killed in V2 open:** SAT·6:00 AM clock, ‘Same storm. Different Saturday.’, HUD Saturday clock, time-of-day paper cards, clock-wipe seam.

| shot | src | from_frame | duration_frames | duration_s | content | camera/transition | VO cue |
|---|---|---:|---:|---:|---|---|---|
| S01 `kinetic-hook` | GFX | 0 | 60 | 2.00 | Near-black gray-950; kinetic type cascade STORM → DOOR → JOB → MARGIN (sky accent on active word); locks to hook line ‘Storm to nail. One agent.’ — NO clock, NO Saturday, NO rain-diary | STACK kinetic-stamp×4 · letterspace-lock · near-black-vignette · micro-grain · OUT hard-cut | V1 0.3–1.6s “Storm to nail.” |
| S02 `brand-claim` | GFX | 60 | 90 | 3.00 | Wordmark “roof·erzs·.” materializes on gray-950 + subline ‘The Agentic Roofing CRM’ — hold ≥36f. Tagline ‘Same storm. Different Saturday.’ RETIRED from open | STACK letterspace-materialize · subline-fade · sky-dot-glint · OUT shot-transitions B dark-tunnel (push 10f → dark 6f → live agent shell rises 12f) | V2 2.2–4.4s “One agent. Eight bots.” |
| S03 `rail-hero` | AG | 150 | 75 | 2.50 | LIVE agent.rooferzs.com (tenant bluebonnetpeakroofing): PageCam drift + spotlight locks AGENTIC ROOFING rail; DOF blurs empty chat; 8 bot cards cascade top→bottom; cursor bezier taps Storm Bot → punch-in; callout ‘8 BOTS · ONE AGENT’; footer ‘JH Jordan Hale’ sharp | STACK spotlight-hero-card · PC-drift · DOF · cascade-8 · cursor-bezier · tap-ripple · punch-in · callout · IN dark-tunnel · OUT in-camera glide right into Storm channel | V3 starts 5.0s “Rooferzs maps the impact zone live —” |
| S04 `storm-map` | AG | 225 | 120 | 4.00 | Storm Bot channel: inline live map — severity polygon over North Dallas metro (region-zoom, NOT continental); storm row ‘DFW Hail Cell — North Dallas · Hail — Severe · score 5’; crane-rise off chat bubble; Crew Alpha chip row-embed; callout score; DOF on composer; 15f rest | STACK crane-rise-reveal · polygon-trace · region-zoom-ndallas · row-embed · callout · DOF · IN glide · OUT TS D black fade 8f | V3 …9.4s “— and tags every lead inside it.” (LIVE-CHECK L3) |
| S05 `kc-storm-doors` | GFX | 345 | 45 | 1.50 | PROMISE kinetic card (NOT a clock): ‘STORM → DOORS’ on near-black; sky arrow morph; rule converge — REPLACES ‘7:30 AM — Crews roll…’ | STACK promise-stamp-STORM · arrow-morph · promise-stamp-DOORS · rule-converge · IN/OUT D fades 8f | — no VO (promise breath) |
| S06 `door-knock` | AG | 390 | 105 | 3.50 | Canvassing Bot: inline door-pin map ZOOMED TO North Dallas neighborhood / street level with ≥4 visually distinct pins at Mockingbird, Preston, Coit, Legacy (continental US zoom = FAIL / L4b); cursor flyover pin→pin; open/pinned counter ticks; pin markers sized for 1080p contrast | STACK seat-cue · PC-drift · street-zoom-lock · pin-pop×4 · cursor-flyover · counter-tick · IN D fade-in · OUT TS E whip-pan 8f CameraMotionBlur | V4 13.0–15.8s “Reps log every door the second they knock.” |
| S07 `prospect-call` | AG | 495 | 90 | 3.00 | Prospecting Bot → seeded contact + (972) 555-xxxx phone chip pulse → radial ripple into Rooferzs Agent 1–4 → Callerzs campaign preview ‘Rooferzs Door Knock Follow-up · 9 AM–4 PM Central · not deployed — preview only, no live calls’; callout preview-only; DOF on rail | STACK phone-pulse · radial-ripple-phone-chips · campaign-slide · callout · DOF · IN whip-pan · OUT line-carry-transition | V5 16.4–17.8s “AI voices work the call list.” + 17.8–19.1s narrator silent (ripple on music; no voice sample) |
| S08 `email-drafts` | AG | 585 | 90 | 3.00 | Integration Bot → tool card ‘Checked email workflows’ → 9 ‘Roofing follow-up: …’ rows all draft (stagger); chip-lift ‘Post-inspection, no action’ → punch-in + FULL-FRAME HIT #1 white-flash → draft body read-only; callout ‘NOTHING SENDS WITHOUT YOU’ — no activate/enroll/send | STACK row-stagger · chip-lift-to-user-pill · punch-in · FlashCut HIT#1 · vignette-hold · callout · OUT hard-cut | V6 19.6–21.7s “Follow-ups, drafted for your review.” |
| S09 `kc-proof-job` | GFX | 675 | 45 | 1.50 | PROMISE kinetic card (NOT a clock): ‘PROOF → JOB’; packet glyph morphs to job-record glyph — REPLACES ‘11:00 AM — Proof before the ladder…’ | STACK promise-stamp-PROOF · glyph-morph · promise-stamp-JOB · letterspace · rule-collapse-out | — no VO (promise breath) |
| S10 `photos-proof` | APP | 720 | 90 | 3.00 | APP seeded job ‹JOB› Gallery/Documents: non-empty inspection photos stagger-fill; adjuster packet pops center, L-brackets, scan sweeps; punch-in first tile; callout; DOF on sidebar (LIVE-CHECK L10 Gallery — no landing photo sim) | STACK gallery-stagger · L-brackets · scan-bracket-sweep · punch-in · callout · DOF · OUT card-flip-reveal | V7 24.5–27.1s “Photos sort themselves into an adjuster packet.” |
| S11 `cadis-embed` | EMB | 810 | 105 | 3.50 | EMB: Dynamic Dashboard with Key Metrics NON-ZERO behind scrim (L9: Alerts, Leads, Pipeline, Jobs In Progress, Active Jobs all >0); AGENT panel ‘8 tools for your role’; prompt types → tool cards stream ✓ → approval card → cursor Approve → emerald check; callout ‘EVERY WRITE WAITS’; ≥15f still | STACK panel-slide · kpi-scrim-nonzero · typewriter · ai-stream-response · cursor-approve · emerald-pop · callout · IN card-flip · OUT TS F mask-wipe | V8 27.6–30.4s “Ask CADIS. Every write waits for your approval.” |
| S12 `job-record` | APP | 915 | 90 | 3.00 | APP openable seeded job ‹JOB› — segmented thumb glides Overview → Documents → Estimating → Schedule; PageCam drift + punch-in on tab bar; callout ‘ONE MASTER JOB RECORD’ (L10) | STACK segmented-thumb-hero · PC-drift · punch-in · callout · IN mask-wipe · OUT focus hand-off (Config Bot) | V9 30.9–34.6s “One job record for every team — and margins stay private.” |
| S13 `roles-config` | AG | 1005 | 60 | 2.00 | Config Bot → role cards stack (Admin · Manager · Sales rep · Technician) with scope chips ripple; proof chip ‘8 tools for your role’; callout margins-private | STACK list-stack-press · chip-ripple · proof-chip · callout · IN focus hand-off · OUT D black fade 8f | (V9 tail — margin privacy L10g) |
| S14 `kc-scope-margin` | GFX | 1065 | 45 | 1.50 | PROMISE kinetic card (NOT a clock): ‘SCOPE → MARGIN’ with % stamp impact between words — REPLACES ‘5:00 PM — One link. One tap.’ | STACK promise-stamp-SCOPE · percent-stamp · promise-stamp-MARGIN · sky-flash-micro · IN/OUT D fades | — no VO (promise breath) |
| S15 `portal-update` | APP | 1110 | 90 | 3.00 | APP client portal / link for ‹JOB› (L10): milestones check stagger → cursor sign tap → emerald signed; callout ‘ONE LINK · NO LOGIN’; else PM Bot draft update (not sent). Seam OUT = mask-wipe/hard-cut (clock-wipe RETIRED) | STACK milestone-stagger · cursor-performance · emerald-pop · callout · PC-drift · OUT mask-wipe (no clock-wipe) | V10 37.0–39.6s “Clients sign from one link. No login.” |
| S16 `isol-upload` | AG | 1200 | 75 | 2.50 | Budget Bot → seeded ISOL PDF attaches → line items typewriter as editable rows (Estimating/JBC); punch-in first rows; callout ‘DROP THE ISOL’ | STACK paperclip-attach · document-typewriter-reveal · punch-in · callout · IN mask-wipe · OUT continuous PageCam glide | V11 40.0–41.8s “Drop the carrier scope.” |
| S17 `jbc-numbers` | AG | 1275 | 60 | 2.00 | Display Bot / APP Estimating: RCV ‹RCV› + ACV ‹ACV› odometer rolls (non-zero seeded $); depreciation tile if live; callout ‘NO RE-ENTRY’ | STACK odometer-rcv · odometer-acv · depreciation-fade · callout · OUT focus hand-off into margin | V12 42.4–44.1s “R-C-V and A-C-V, instantly.” |
| S18 `margin-punch` | APP | 1335 | 30 | 1.00 | LIVE non-zero margin ‹MARGIN› for ‹JOB› — crash-zoom-punch FULL-FRAME HIT #2 (6f punch + 24f hold) + number overshoot + vignette crush | STACK crash-zoom-punch HIT#2 · number-overshoot · vignette-crush · OUT ease-back | V13 44.4–45.7s “‹MARGIN› percent margin.” (spoken = live value) |
| S19 `pm-approve` | APP | 1365 | 75 | 2.50 | APP Estimating/JBC ‘Awaiting PM approval’ → slow-push-in 1.00→1.12 + vignette; cursor Approve at apex (seeded write); 12f silence; HARD CUT release | STACK tension-C slow-push · cursor-approve · silence-window · callout · OUT zero-transition HARD CUT | V14 46.1–47.2s “PM approves.” → silence 47.4–48.0s |
| S20 `pm-schedule` | AG | 1440 | 90 | 3.00 | Project Management Bot / APP Gantt: timeline-travel week axis; bars pop (Crew Alpha tear-off, material, dumpster — LIVE labels); callout ‘NEXT AM · SCHEDULED’ | STACK timeline-travel · bar-pop-stagger · PC-drift · callout · IN hard cut · OUT hub page-flip | V15 48.0–50.4s “Next morning, production's already scheduled.” |
| S21 `integrations` | AG | 1530 | 60 | 2.00 | Page flips 180° → Integration Bot hub; live connector chips pop (Email · connected via Emailzs + APP integrations); callout ‘WORKS WITH YOUR STACK’ | STACK integration-hub-map · connector-chip-pop · callout · OUT focus hand-off | V16 50.9–52.4s “Works with your stack.” |
| S22 `pricing-trial` | GFX | 1590 | 75 | 2.50 | ‘14’ counts up → ‘-day free trial’ + confetti; plan row Growth · Storm Team (Most popular) · Enterprise — typographic GFX only | STACK counter-14 · confetti-burst · plan-row-stagger · most-popular-chip · OUT lights-down | V17 52.9–55.0s “Fourteen days free. No credit card.” |
| S23 `outro-cta` | GFX | 1665 | 135 | 4.50 | LIVE crops fan around wordmark; crane + stage light; wordmark stamp FULL-FRAME HIT #3 (local f75); OVERSIZED CTA ‘rooferzs.com’ ≥72px + ‘Get started free’ — hold ≥60f (≥3s on CTA); soft ‘Built on Genius.’ | STACK outro-group-photo · crane · particles · stamp HIT#3 · cta-oversized-rise · cta-get-started · hold-60f | V18 55.8–57.3s “Rooferzs. Storm to nail.” → silence/music tail |
| **TOTAL** | — | — | **1800** | **60.00** | 23 shots · 3 promise kinetic cards (no clocks) · dense STACK motion · 3 full-frame hits · all 8 rail bots on screen | | ~100 VO words (18 lines) |

## Footage-source budget

| src | frames | seconds | share |
|---|---:|---:|---:|
| AG | 825 | 27.5 | 45.8% |
| EMB | 105 | 3.5 | 5.8% |
| APP | 375 | 12.5 | 20.8% |
| GFX | 495 | 16.5 | 27.5% |

All product frames (AG + EMB + APP) are live captures; GFX = kinetic hook, brand claim, 3 promise cards, trial card, outro CTA stage (outro elements are live crops).

## Segment budget (V2 SaaS launch arc)

| segment | frames | from–to | seconds | share | arc target |
|---|---:|---|---:|---:|---|
| ① Hook | 150 | 0–150 | 5.0 | 8.3% | 6–10% kinetic+brand, no UI |
| ② Proof | 1380 | 150–1530 | 46.0 | 76.7% | 70–80% evidence ladder |
| ③ Outcome | 270 | 1530–1800 | 9.0 | 15.0% | 12–16% stack+trial+CTA≥3s |

V2 note: ① Hook replaces V1 Brand open (clock killed). ② Proof absorbs former Climb + Hero. ③ Outcome = Launch with oversized CTA hold.

## Beat-hit & key cue frames (absolute)

| cue | abs frame | time | beat # (120 BPM grid) | note |
|---|---:|---:|---:|---|
| Hook lock ‘Storm to nail. One agent.’ | 42 | 1.40s | 3 | kinetic cascade settles |
| Brand wordmark lands (element-level) | 96 | 3.20s | 6 | hold 96–150 (54f ≥ 36f) |
| Dark-tunnel → live agent shell + 8-bot rail arrives | 150 | 5.00s | 10 | B-form arrival into rail hero |
| Storm Bot card tap → glide into live map | 225 | 7.50s | 15 | element-level click into live map |
| Promise card STORM → DOORS | 345 | 11.50s | 23 | replaces 7:30 AM clock card |
| L4b street-level pin lock (S06) | 390 | 13.00s | 26 | North Dallas neighborhood; ≥4 pins |
| HIT #1 white-flash (S08 open draft — read-only) | 630 | 21.00s | 42 | FlashCut from=625, 5f each side |
| Promise card PROOF → JOB | 675 | 22.50s | 45 | replaces 11:00 AM clock card |
| Promise card SCOPE → MARGIN | 1065 | 35.50s | 71 | replaces 5:00 PM clock card |
| HIT #2 crash-zoom-punch ‹MARGIN› | 1335 | 44.50s | 89 | 6f punch; strongest-hit candidate |
| Silence window (pre-cut) | 1428 | 47.60s | 95 | 1428–1440 total silence |
| Hard cut release → PM schedule | 1440 | 48.00s | 96 | bar boundary |
| Outro riser start | 1665 | 55.50s | 111 | riser → impact → sparkle closing phrase |
| HIT #3 wordmark stamp + CTA oversized | 1740 | 58.00s | 116 | impact-deep-whoosh; hold 1740–1800 (60f ≥3s CTA) |

Hit spacing: #1→#2 = 705f (47 beats), #2→#3 = 405f (27 beats) — both ≥16 beats (aesthetic-rules R4).

## Rail seat cue per shot (8-bot coverage)

| bot (rail order) | seat id | primary shot(s) | also on screen |
|---|---|---|---|
| Integration Bot | `rooferzs-integration` | S08 email drafts · S21 stack | S03, S23 |
| Config Bot | `rooferzs-config` | S13 roles & permissions | S03, S23 |
| Storm Bot | `rooferzs-storm` | S03 tap target · S04 live map | S23 |
| Canvassing Bot | `rooferzs-canvassing` | S06 door pins (L4b street-level) | S03, S23 |
| Prospecting Bot | `rooferzs-prospecting` | S07 contact → call list | S03, S23 |
| Budget Bot | `rooferzs-budget` | S16 ISOL import (→ S18/S19 APP budget) | S03, S23 |
| Project Management Bot | `rooferzs-project` | S20 schedule · S15 fallback client update | S03, S23 |
| Display Bot | `rooferzs-display` | S17 inline stat tiles | S03, S04 inline map render, S23 |

## V2 kill list (do not reintroduce)

- SAT · 6:00 AM / Monday–Saturday day-clock open

- ‘Same storm. Different Saturday.’ as S02 / VO open

- Paper title cards that are only times of day (7:30 AM / 11:00 AM / 5:00 PM)

- HUD Saturday clock device

- clock-wipe seam (S15→S16)

- LEAD-once-per-shot as house law (use STACK)

