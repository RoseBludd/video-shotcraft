# V2 EFFECTS CATALOG — ≥100 discrete motion instances

**Film:** RooferzsPromo · 1800f @ 30fps · V2 rewrite 2026-10-06 CT  
**Law:** stack motion per shot (not one LEAD). Each row = one named instance pinned to a shot id.  
**Status:** `SCAFFOLD` = already in Shotcraft / Remotion template · `DEVVY` = Devvy must add or wire · `FILM` = film-GFX overlay only · `CAPTURE` = needs live recapture / seed (not code)

**Total named instances: 143**

---

## Legend

| Tag | Meaning |
|---|---|
| spring | Remotion `spring()` |
| interp | Remotion `interpolate()` |
| TS | `TransitionSeries` (fade / slide / wipe) |
| PC | PageCam 2.5D |
| GFX | Film-built overlay |

---

## S01 · kinetic-hook (GFX) — 8

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 1 | `S01.kinetic-stamp-STORM` | spring + letterspace | Word stamps 1.4→1.0; tracking −0.08→−0.02 | DEVVY |
| 2 | `S01.kinetic-stamp-DOOR` | spring | Cascade beat 2; prior word opacity→0.25 | DEVVY |
| 3 | `S01.kinetic-stamp-JOB` | spring | Cascade beat 3 | DEVVY |
| 4 | `S01.kinetic-stamp-MARGIN` | spring + sky fill | Cascade beat 4; sky-400 fill flash | DEVVY |
| 5 | `S01.hook-lock-line` | letterspace-materialize | **"Storm to nail. One agent."** locks | DEVVY (adapt brand letterspace) |
| 6 | `S01.near-black-vignette` | interp vignette | Edge falloff 0→0.55 on gray-950 | SCAFFOLD / DEVVY wire |
| 7 | `S01.micro-grain-drift` | interp opacity | Soft grain 4% (no rain, no clock) | DEVVY |
| 8 | `S01.hard-cut-out` | hard cut | Downbeat → S02 | SCAFFOLD |

## S02 · brand-claim (GFX) — 6

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 9 | `S02.wordmark-letterspace` | letterspace-materialize | roof·erzs·. draw + hold ≥36f | SCAFFOLD |
| 10 | `S02.subline-fade` | interp opacity | **"The Agentic Roofing CRM"** (replaces Saturday tagline) | DEVVY |
| 11 | `S02.sky-dot-glint` | spring | Single glint on "erzs" | DEVVY |
| 12 | `S02.dark-tunnel-out` | TS B dark-tunnel | Push 10f → dark 6f → product rises 12f | SCAFFOLD |
| 13 | `S02.scale-blur-rise` | PC + blur | Shell 0.6→1.0 + blur 12→0 | SCAFFOLD |
| 14 | `S02.caption-burn` | kinetic type | Caption: STORM TO NAIL · ONE AGENT | DEVVY |

## S03 · rail-hero (AG) — 9

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 15 | `S03.pagecam-drift-idle` | PC drift | Slow XY ±8px | SCAFFOLD |
| 16 | `S03.spotlight-rail` | spotlight-hero-card | Lock AGENTIC ROOFING rail | SCAFFOLD |
| 17 | `S03.dof-blur-chat` | DOF blur | Blur empty chat; rail sharp | DEVVY |
| 18 | `S03.card-cascade-8` | spring stagger | 8 cards light top→bottom @ 3f | SCAFFOLD / DEVVY densify |
| 19 | `S03.cursor-bezier-storm` | cursor bezier | Arc to Storm Bot | DEVVY |
| 20 | `S03.cursor-tap-ripple` | chip ripple | Tap on Storm card | DEVVY |
| 21 | `S03.punch-in-storm-card` | PC punch-in | Sharp 1.00→1.18 | DEVVY |
| 22 | `S03.callout-8-bots` | lower-third | "8 BOTS · ONE AGENT" | DEVVY |
| 23 | `S03.identity-chip-hold` | vignette crop | JH Jordan Hale footer sharp | FILM |

## S04 · storm-map (AG) — 8

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 24 | `S04.in-camera-glide` | PC glide | Rail → Storm channel | SCAFFOLD |
| 25 | `S04.crane-rise-map` | crane-rise-reveal | Rise off bubble → full map | SCAFFOLD |
| 26 | `S04.polygon-draw-trace` | interp stroke | Severity polygon edge trace | DEVVY |
| 27 | `S04.region-zoom-ndallas` | PC punch-in | North Dallas metro (not continental) | DEVVY + CAPTURE |
| 28 | `S04.row-embed-crew` | spring | Crew Alpha chip embeds | SCAFFOLD |
| 29 | `S04.callout-score-5` | callout label | "Hail — Severe · score 5" | DEVVY |
| 30 | `S04.dof-blur-composer` | DOF | Soften composer; map sharp | DEVVY |
| 31 | `S04.fade-black-out` | TS D fade | 8f → promise card | SCAFFOLD |

## S05 · kc-storm-doors (GFX) — 5 · REPLACES clock TC

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 32 | `S05.promise-stamp-STORM` | kinetic stamp | Left word | DEVVY |
| 33 | `S05.arrow-morph` | spring + interp | Sky arrow STORM→DOORS | DEVVY |
| 34 | `S05.promise-stamp-DOORS` | kinetic stamp | Right word locks | DEVVY |
| 35 | `S05.rule-converge` | interp width | Hairline under pair | SCAFFOLD |
| 36 | `S05.fade-pair` | TS D | In/out fades 8f | SCAFFOLD |

## S06 · door-knock (AG) — 10 · ★ GATE L4b

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 37 | `S06.seat-cue-canvass` | spotlight micro | Canvassing Bot flash | SCAFFOLD |
| 38 | `S06.pagecam-drift-map` | PC drift | Neighborhood idle drift | SCAFFOLD |
| 39 | `S06.street-zoom-lock` | crash zoom / punch | Lock North Dallas neighborhood — **FAIL if continental US** | DEVVY + CAPTURE |
| 40 | `S06.pin-pop-mockingbird` | spring | 4121 Mockingbird Ln | DEVVY + CAPTURE |
| 41 | `S06.pin-pop-preston` | spring | Preston Rd pin | DEVVY + CAPTURE |
| 42 | `S06.pin-pop-coit` | spring | Coit Rd pin | DEVVY + CAPTURE |
| 43 | `S06.pin-pop-legacy` | spring | 5400 Legacy Dr | DEVVY + CAPTURE |
| 44 | `S06.cursor-flyover-pins` | cursor-flyover | Fly pin→pin; taps | SCAFFOLD |
| 45 | `S06.counter-tick-open-pinned` | odometer / count-up | Open vs pinned legend | DEVVY |
| 46 | `S06.whip-pan-out` | TS E whip + CameraMotionBlur | 8f → Prospecting | SCAFFOLD |

## S07 · prospect-call (AG) — 7

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 47 | `S07.whip-pan-in` | TS E | From S06 | SCAFFOLD |
| 48 | `S07.phone-chip-pulse` | spring | (972) 555-xxxx pulse | DEVVY |
| 49 | `S07.radial-ripple-agents` | radial-ripple-phone-chips | → Agent 1–4 | SCAFFOLD |
| 50 | `S07.campaign-card-slide` | TS slide | Callerzs preview docks | DEVVY |
| 51 | `S07.callout-preview-only` | callout | "not deployed · preview only" | DEVVY |
| 52 | `S07.dof-blur-rail` | DOF | Rail soft; reply sharp | DEVVY |
| 53 | `S07.line-carry-out` | line-carry-transition | Call-window bar carries right | SCAFFOLD |

## S08 · email-drafts (AG) — 7

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 54 | `S08.table-row-stagger` | spring stagger | 9 draft rows | DEVVY |
| 55 | `S08.chip-lift-row` | chip-lift-to-user-pill | Post-inspection row lifts | SCAFFOLD |
| 56 | `S08.punch-in-draft` | PC punch-in | Into draft body | DEVVY |
| 57 | `S08.flash-cut-hit1` | FlashCut white-flash | **FULL-FRAME HIT #1** @ local f45 | SCAFFOLD |
| 58 | `S08.draft-body-hold` | vignette | Readable 30f hold | FILM |
| 59 | `S08.callout-nothing-sends` | lower-third | "NOTHING SENDS WITHOUT YOU" | DEVVY |
| 60 | `S08.hard-cut-out` | hard cut | → promise card | SCAFFOLD |

## S09 · kc-proof-job (GFX) — 5 · REPLACES clock TC

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 61 | `S09.promise-stamp-PROOF` | kinetic stamp | Left | DEVVY |
| 62 | `S09.glyph-packet-to-record` | spring morph | Packet glyph → job glyph | DEVVY |
| 63 | `S09.promise-stamp-JOB` | kinetic stamp | Right | DEVVY |
| 64 | `S09.letterspace-tighten` | letterspace | Tracking settle | SCAFFOLD |
| 65 | `S09.rule-collapse-out` | interp | Rule collapses → cut | SCAFFOLD |

## S10 · photos-proof (APP) — 7 · ★ GATE L10 Gallery

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 66 | `S10.gallery-fill-stagger` | spring stagger | Seeded photos populate | DEVVY + CAPTURE |
| 67 | `S10.l-brackets-land` | L-brackets | Corners on packet | SCAFFOLD |
| 68 | `S10.scan-line-sweep` | scan-bracket-sweep | 3 passes | SCAFFOLD |
| 69 | `S10.punch-in-first-tile` | PC punch-in | First tagged photo | DEVVY |
| 70 | `S10.callout-adjuster-packet` | callout | "ADJUSTER PACKET" | DEVVY |
| 71 | `S10.dof-blur-sidebar` | DOF | App chrome soft | DEVVY |
| 72 | `S10.card-flip-out` | card-flip-reveal | 180° Y → EMB | SCAFFOLD |

## S11 · cadis-embed (EMB) — 8 · ★ GATE L9

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 73 | `S11.panel-slide-in` | TS slide | AGENT panel opens | SCAFFOLD |
| 74 | `S11.kpi-scrim-nonzero` | vignette + opacity | Key Metrics **non-zero** behind scrim | DEVVY + CAPTURE |
| 75 | `S11.keyboard-type-prompt` | typewriter | "Ask anything" types | SCAFFOLD |
| 76 | `S11.tool-card-stream` | ai-stream-response | Plain-label cards ✓ | SCAFFOLD |
| 77 | `S11.cursor-approve-tap` | cursor bezier + ripple | Approve click | DEVVY |
| 78 | `S11.emerald-check-pop` | spring | Success check | DEVVY |
| 79 | `S11.callout-every-write` | lower-third | "EVERY WRITE WAITS" | DEVVY |
| 80 | `S11.mask-wipe-out` | TS F mask-wipe | Reply → APP job | SCAFFOLD |

## S12 · job-record (APP) — 6 · ★ GATE L10

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 81 | `S12.mask-wipe-in` | TS F | From S11 | SCAFFOLD |
| 82 | `S12.segmented-thumb` | segmented-thumb-hero | Tabs Overview→Docs→Estimating→Schedule | SCAFFOLD |
| 83 | `S12.pagecam-drift` | PC drift | Master record idle | SCAFFOLD |
| 84 | `S12.punch-in-tab-bar` | PC punch-in | Tab bar hero | DEVVY |
| 85 | `S12.callout-one-record` | callout | "ONE MASTER JOB RECORD" | DEVVY |
| 86 | `S12.focus-handoff-out` | focus hand-off | Blur job → Config Bot sharp | SCAFFOLD |

## S13 · roles-config (AG) — 5

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 87 | `S13.list-stack-press` | list-stack-press | Role cards stack | SCAFFOLD |
| 88 | `S13.scope-chip-ripple` | chip ripple | Permission chips | DEVVY |
| 89 | `S13.proof-chip-8-tools` | spring | "8 tools for your role" crop | DEVVY |
| 90 | `S13.callout-margins-private` | callout | Margin privacy | DEVVY |
| 91 | `S13.fade-black-out` | TS D | → promise card | SCAFFOLD |

## S14 · kc-scope-margin (GFX) — 5 · REPLACES clock TC

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 92 | `S14.promise-stamp-SCOPE` | kinetic stamp | Left | DEVVY |
| 93 | `S14.percent-stamp-impact` | stamp | `%` impact between words | DEVVY |
| 94 | `S14.promise-stamp-MARGIN` | kinetic stamp | Right | DEVVY |
| 95 | `S14.sky-flash-micro` | flash micro | 2f sky flash (not full-frame hit) | DEVVY |
| 96 | `S14.fade-pair` | TS D | In/out | SCAFFOLD |

## S15 · portal-update (APP) — 6 · ★ GATE L10 portal

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 97 | `S15.milestone-check-stagger` | spring stagger | Milestones check off | DEVVY + CAPTURE |
| 98 | `S15.cursor-sign-tap` | cursor-performance | Approve/sign tap | SCAFFOLD |
| 99 | `S15.emerald-sign-pop` | spring | Signed state | DEVVY |
| 100 | `S15.callout-no-login` | callout | "ONE LINK · NO LOGIN" | DEVVY |
| 101 | `S15.pagecam-drift` | PC drift | Portal hold | SCAFFOLD |
| 102 | `S15.mask-wipe-out` | TS F / hard cut | **Replaces clock-wipe** (day-spine killed) | DEVVY seam swap |

## S16 · isol-upload (AG) — 5

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 103 | `S16.paperclip-attach` | spring | ISOL PDF attach | DEVVY |
| 104 | `S16.typewriter-line-items` | document-typewriter-reveal | Editable rows write in | SCAFFOLD |
| 105 | `S16.punch-in-first-rows` | PC punch-in | First 3 line items | DEVVY |
| 106 | `S16.callout-drop-isol` | callout | "DROP THE ISOL" | DEVVY |
| 107 | `S16.pagecam-glide-out` | PC continuous | Into Display tiles | SCAFFOLD |

## S17 · jbc-numbers (AG) — 5 · ★ GATE L10 Estimating

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 108 | `S17.odometer-rcv` | odometer-digit-roll | RCV ‹RCV› | SCAFFOLD |
| 109 | `S17.odometer-acv` | odometer-digit-roll | ACV ‹ACV› | SCAFFOLD |
| 110 | `S17.depreciation-tile-fade` | interp | Depreciation if live | DEVVY |
| 111 | `S17.callout-no-reentry` | callout | "NO RE-ENTRY" | DEVVY |
| 112 | `S17.focus-handoff-margin` | focus hand-off | Into APP margin | SCAFFOLD |

## S18 · margin-punch (APP) — 4 · ★ GATE L10 margin · HIT #2

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 113 | `S18.crash-zoom-punch` | crash-zoom-punch | 6f punch + 24f hold on ‹MARGIN› | SCAFFOLD |
| 114 | `S18.number-overshoot` | spring | 2% overshoot on digit | DEVVY |
| 115 | `S18.vignette-crush` | vignette | Edges crush during punch | SCAFFOLD |
| 116 | `S18.ease-back-out` | PC ease | Into S19 slow push | SCAFFOLD |

## S19 · pm-approve (APP) — 5

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 117 | `S19.slow-push-in` | tension C slow-push | 1.00→1.12 + vignette 0→0.5 | SCAFFOLD |
| 118 | `S19.cursor-approve-apex` | cursor bezier | Click at apex | DEVVY |
| 119 | `S19.silence-window` | audio gate | 12f total silence pre-cut | FILM |
| 120 | `S19.hard-cut-release` | hard cut | Tension release → schedule | SCAFFOLD |
| 121 | `S19.callout-pm-approves` | lower-third | "PM APPROVES" | DEVVY |

## S20 · pm-schedule (AG) — 5

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 122 | `S20.timeline-travel` | timeline-travel | Week-axis camera travel | SCAFFOLD |
| 123 | `S20.bar-pop-stagger` | spring stagger | Crew / material / dumpster bars | DEVVY |
| 124 | `S20.pagecam-drift-gantt` | PC drift | Settle on week | SCAFFOLD |
| 125 | `S20.callout-next-am` | callout | "NEXT AM · SCHEDULED" | DEVVY |
| 126 | `S20.hub-flip-out` | page flip 180° | Into integrations hub | SCAFFOLD |

## S21 · integrations (AG) — 4

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 127 | `S21.integration-hub-map` | integration-hub-map | Integration Bot at center | SCAFFOLD |
| 128 | `S21.connector-chip-pop` | spring stagger | Live connector chips | DEVVY |
| 129 | `S21.callout-your-stack` | callout | "WORKS WITH YOUR STACK" | DEVVY |
| 130 | `S21.focus-handoff-out` | focus hand-off | → trial GFX | SCAFFOLD |

## S22 · pricing-trial (GFX) — 5

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 131 | `S22.counter-14` | counter-confetti / count-up | 0→14 | SCAFFOLD |
| 132 | `S22.confetti-burst` | confetti | One sky+amber+white burst | SCAFFOLD |
| 133 | `S22.plan-row-stagger` | spring stagger | Growth · Storm Team · Enterprise | DEVVY |
| 134 | `S22.most-popular-chip` | chip ripple | "Most popular" on Storm Team | DEVVY |
| 135 | `S22.lights-down-out` | interp | Into outro stage | SCAFFOLD |

## S23 · outro-cta (GFX) — 8 · HIT #3 · ≥3s CTA

| # | Instance id | Primitive | Notes | Status |
|---|---|---|---|---|
| 136 | `S23.crop-fan-in` | outro-group-photo-launch | Live crops fan around wordmark | SCAFFOLD |
| 137 | `S23.crane-down-stage` | PC crane | Stage light settle | SCAFFOLD |
| 138 | `S23.particle-sky-amber` | interp particles | Sparse sky/amber only | DEVVY |
| 139 | `S23.wordmark-stamp-hit3` | stamp impact | **FULL-FRAME HIT #3** @ local f75 | SCAFFOLD |
| 140 | `S23.cta-oversized-rise` | spring + letterspace | **rooferzs.com** ≥72 px effective | DEVVY |
| 141 | `S23.cta-get-started` | kinetic type | "Get started free" under URL | DEVVY |
| 142 | `S23.hold-lock-60f` | hold | f1740–1800 (≥3s CTA on screen) | SCAFFOLD |
| 143 | `S23.built-on-genius-whisper` | interp opacity | Soft footer line | FILM |

---

## Totals

| Metric | Count |
|---|---:|
| **Named motion instances** | **143** (well above ≥100) |
| Per-shot stack range | 4–10 |
| SCAFFOLD (reuse / already present) | ~55 |
| DEVVY (add / wire / copy-swap) | ~75 |
| FILM / CAPTURE-dependent | ~13 |
| Full-frame hits (cap ≤3) | 3 (`S08.flash-cut-hit1`, `S18.crash-zoom-punch`, `S23.wordmark-stamp-hit3`) |
| Promise kinetic cards (clock replacements) | S05, S09, S14 |
| Seams killed | clock-wipe (S15→S16) → mask-wipe / hard cut |

## Devvy priority queue (scaffold work)

1. **KineticPromiseCard** component (S01 cascade + S05/S09/S14) — kills PaperTitleCard clock copy.
2. **DOF / inactive blur** helper on CaptureShot.
3. **Callout / lower-third** overlay primitive (reused ~20×).
4. **Cursor bezier + tap ripple** (S03, S07, S11, S15, S19).
5. **Pin-pop stagger** wired to S06 (needs L4b capture plates).
6. Copy swaps: S02 subline, captions, VO open — no Saturday language.
7. Seam: S15→S16 clock-wipe → mask-wipe.
8. CTA type scale on S23 (≥72 px URL).

Orchestrator does **not** edit `/opt/video-shotcraft`. Devvy owns implementation + seed.
