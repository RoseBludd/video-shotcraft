# Single source of truth for frame math (30fps). Beats at placeholder 120 BPM => 15f/beat.
# V2 REWRITE 2026-10-06 (CT): Linear/Stripe/Notion/Raycast launch grammar.
# KILLS: Saturday day-clock open, "Same storm. Different Saturday." as open, time-of-day paper title cards,
#        LEAD-once-per-shot restraint, HUD Saturday clock, clock-wipe seam.
# KEEP: 1800f @ 30fps, AG/EMB/APP/GFX sources only, tenant bluebonnetpeakroofing / Jordan Hale.
# Companion: V2-MOTION-DIRECTION.md · V2-EFFECTS-CATALOG.md (≥100 stacked motions) · V2-CAPTURE-GATES.md
FPS=30; BEAT=15
# Footage source codes (column 8):
#   AG  = agent.rooferzs.com standalone OpenBot (Full launch), AGENTIC ROOFING 8-bot rail, chrome "JH Jordan Hale"
#   EMB = app.rooferzs.com/dashboard/dynamic -> AGENT side tab -> embed panel "Agent · roofing · OpenBot · 8 tools for your role"
#   APP = app.rooferzs.com signed-in product surface (Bluebonnet Peak Roofing), route confirmed at Stage 4 discovery
#   GFX = film-built motion graphic / title card in brand tokens (no product footage, no marketing screenshot)
ALLOWED_SRC={"AG","EMB","APP","GFX"}
SHOTS = [
 # id, slug, beats, segment, content, camera/transition, VO cue, source
 ("S01","kinetic-hook",4,"① Hook","Near-black gray-950; kinetic type cascade STORM → DOOR → JOB → MARGIN (sky accent on active word); locks to hook line ‘Storm to nail. One agent.’ — NO clock, NO Saturday, NO rain-diary","STACK kinetic-stamp×4 · letterspace-lock · near-black-vignette · micro-grain · OUT hard-cut","V1 0.3–1.6s “Storm to nail.”","GFX"),
 ("S02","brand-claim",6,"① Hook","Wordmark “roof·erzs·.” materializes on gray-950 + subline ‘The Agentic Roofing CRM’ — hold ≥36f. Tagline ‘Same storm. Different Saturday.’ RETIRED from open","STACK letterspace-materialize · subline-fade · sky-dot-glint · OUT shot-transitions B dark-tunnel (push 10f → dark 6f → live agent shell rises 12f)","V2 2.2–4.4s “One agent. Eight bots.”","GFX"),
 ("S03","rail-hero",5,"② Proof","LIVE agent.rooferzs.com (tenant bluebonnetpeakroofing): PageCam drift + spotlight locks AGENTIC ROOFING rail; DOF blurs empty chat; 8 bot cards cascade top→bottom; cursor bezier taps Storm Bot → punch-in; callout ‘8 BOTS · ONE AGENT’; footer ‘JH Jordan Hale’ sharp","STACK spotlight-hero-card · PC-drift · DOF · cascade-8 · cursor-bezier · tap-ripple · punch-in · callout · IN dark-tunnel · OUT in-camera glide right into Storm channel","V3 starts 5.0s “Rooferzs maps the impact zone live —”","AG"),
 ("S04","storm-map",8,"② Proof","Storm Bot channel: inline live map — severity polygon over North Dallas metro (region-zoom, NOT continental); storm row ‘DFW Hail Cell — North Dallas · Hail — Severe · score 5’; crane-rise off chat bubble; Crew Alpha chip row-embed; callout score; DOF on composer; 15f rest","STACK crane-rise-reveal · polygon-trace · region-zoom-ndallas · row-embed · callout · DOF · IN glide · OUT TS D black fade 8f","V3 …9.4s “— and tags every lead inside it.” (LIVE-CHECK L3)","AG"),
 ("S05","kc-storm-doors",3,"② Proof","PROMISE kinetic card (NOT a clock): ‘STORM → DOORS’ on near-black; sky arrow morph; rule converge — REPLACES ‘7:30 AM — Crews roll…’","STACK promise-stamp-STORM · arrow-morph · promise-stamp-DOORS · rule-converge · IN/OUT D fades 8f","— no VO (promise breath)","GFX"),
 ("S06","door-knock",7,"② Proof","Canvassing Bot: inline door-pin map ZOOMED TO North Dallas neighborhood / street level with ≥4 visually distinct pins at Mockingbird, Preston, Coit, Legacy (continental US zoom = FAIL / L4b); cursor flyover pin→pin; open/pinned counter ticks; pin markers sized for 1080p contrast","STACK seat-cue · PC-drift · street-zoom-lock · pin-pop×4 · cursor-flyover · counter-tick · IN D fade-in · OUT TS E whip-pan 8f CameraMotionBlur","V4 13.0–15.8s “Reps log every door the second they knock.”","AG"),
 ("S07","prospect-call",6,"② Proof","Prospecting Bot → seeded contact + (972) 555-xxxx phone chip pulse → radial ripple into Rooferzs Agent 1–4 → Callerzs campaign preview ‘Rooferzs Door Knock Follow-up · 9 AM–4 PM Central · not deployed — preview only, no live calls’; callout preview-only; DOF on rail","STACK phone-pulse · radial-ripple-phone-chips · campaign-slide · callout · DOF · IN whip-pan · OUT line-carry-transition","V5 16.4–17.8s “AI voices work the call list.” + 17.8–19.1s narrator silent (ripple on music; no voice sample)","AG"),
 ("S08","email-drafts",6,"② Proof","Integration Bot → tool card ‘Checked email workflows’ → 9 ‘Roofing follow-up: …’ rows all draft (stagger); chip-lift ‘Post-inspection, no action’ → punch-in + FULL-FRAME HIT #1 white-flash → draft body read-only; callout ‘NOTHING SENDS WITHOUT YOU’ — no activate/enroll/send","STACK row-stagger · chip-lift-to-user-pill · punch-in · FlashCut HIT#1 · vignette-hold · callout · OUT hard-cut","V6 19.6–21.7s “Follow-ups, drafted for your review.”","AG"),
 ("S09","kc-proof-job",3,"② Proof","PROMISE kinetic card (NOT a clock): ‘PROOF → JOB’; packet glyph morphs to job-record glyph — REPLACES ‘11:00 AM — Proof before the ladder…’","STACK promise-stamp-PROOF · glyph-morph · promise-stamp-JOB · letterspace · rule-collapse-out","— no VO (promise breath)","GFX"),
 ("S10","photos-proof",6,"② Proof","APP seeded job ‹JOB› Gallery/Documents: non-empty inspection photos stagger-fill; adjuster packet pops center, L-brackets, scan sweeps; punch-in first tile; callout; DOF on sidebar (LIVE-CHECK L10 Gallery — no landing photo sim)","STACK gallery-stagger · L-brackets · scan-bracket-sweep · punch-in · callout · DOF · OUT card-flip-reveal","V7 24.5–27.1s “Photos sort themselves into an adjuster packet.”","APP"),
 ("S11","cadis-embed",7,"② Proof","EMB: Dynamic Dashboard with Key Metrics NON-ZERO behind scrim (L9: Alerts, Leads, Pipeline, Jobs In Progress, Active Jobs all >0); AGENT panel ‘8 tools for your role’; prompt types → tool cards stream ✓ → approval card → cursor Approve → emerald check; callout ‘EVERY WRITE WAITS’; ≥15f still","STACK panel-slide · kpi-scrim-nonzero · typewriter · ai-stream-response · cursor-approve · emerald-pop · callout · IN card-flip · OUT TS F mask-wipe","V8 27.6–30.4s “Ask CADIS. Every write waits for your approval.”","EMB"),
 ("S12","job-record",6,"② Proof","APP openable seeded job ‹JOB› — segmented thumb glides Overview → Documents → Estimating → Schedule; PageCam drift + punch-in on tab bar; callout ‘ONE MASTER JOB RECORD’ (L10)","STACK segmented-thumb-hero · PC-drift · punch-in · callout · IN mask-wipe · OUT focus hand-off (Config Bot)","V9 30.9–34.6s “One job record for every team — and margins stay private.”","APP"),
 ("S13","roles-config",4,"② Proof","Config Bot → role cards stack (Admin · Manager · Sales rep · Technician) with scope chips ripple; proof chip ‘8 tools for your role’; callout margins-private","STACK list-stack-press · chip-ripple · proof-chip · callout · IN focus hand-off · OUT D black fade 8f","(V9 tail — margin privacy L10g)","AG"),
 ("S14","kc-scope-margin",3,"② Proof","PROMISE kinetic card (NOT a clock): ‘SCOPE → MARGIN’ with % stamp impact between words — REPLACES ‘5:00 PM — One link. One tap.’","STACK promise-stamp-SCOPE · percent-stamp · promise-stamp-MARGIN · sky-flash-micro · IN/OUT D fades","— no VO (promise breath)","GFX"),
 ("S15","portal-update",6,"② Proof","APP client portal / link for ‹JOB› (L10): milestones check stagger → cursor sign tap → emerald signed; callout ‘ONE LINK · NO LOGIN’; else PM Bot draft update (not sent). Seam OUT = mask-wipe/hard-cut (clock-wipe RETIRED)","STACK milestone-stagger · cursor-performance · emerald-pop · callout · PC-drift · OUT mask-wipe (no clock-wipe)","V10 37.0–39.6s “Clients sign from one link. No login.”","APP"),
 ("S16","isol-upload",5,"② Proof","Budget Bot → seeded ISOL PDF attaches → line items typewriter as editable rows (Estimating/JBC); punch-in first rows; callout ‘DROP THE ISOL’","STACK paperclip-attach · document-typewriter-reveal · punch-in · callout · IN mask-wipe · OUT continuous PageCam glide","V11 40.0–41.8s “Drop the carrier scope.”","AG"),
 ("S17","jbc-numbers",4,"② Proof","Display Bot / APP Estimating: RCV ‹RCV› + ACV ‹ACV› odometer rolls (non-zero seeded $); depreciation tile if live; callout ‘NO RE-ENTRY’","STACK odometer-rcv · odometer-acv · depreciation-fade · callout · OUT focus hand-off into margin","V12 42.4–44.1s “R-C-V and A-C-V, instantly.”","AG"),
 ("S18","margin-punch",2,"② Proof","LIVE non-zero margin ‹MARGIN› for ‹JOB› — crash-zoom-punch FULL-FRAME HIT #2 (6f punch + 24f hold) + number overshoot + vignette crush","STACK crash-zoom-punch HIT#2 · number-overshoot · vignette-crush · OUT ease-back","V13 44.4–45.7s “‹MARGIN› percent margin.” (spoken = live value)","APP"),
 ("S19","pm-approve",5,"② Proof","APP Estimating/JBC ‘Awaiting PM approval’ → slow-push-in 1.00→1.12 + vignette; cursor Approve at apex (seeded write); 12f silence; HARD CUT release","STACK tension-C slow-push · cursor-approve · silence-window · callout · OUT zero-transition HARD CUT","V14 46.1–47.2s “PM approves.” → silence 47.4–48.0s","APP"),
 ("S20","pm-schedule",6,"② Proof","Project Management Bot / APP Gantt: timeline-travel week axis; bars pop (Crew Alpha tear-off, material, dumpster — LIVE labels); callout ‘NEXT AM · SCHEDULED’","STACK timeline-travel · bar-pop-stagger · PC-drift · callout · IN hard cut · OUT hub page-flip","V15 48.0–50.4s “Next morning, production's already scheduled.”","AG"),
 ("S21","integrations",4,"③ Outcome","Page flips 180° → Integration Bot hub; live connector chips pop (Email · connected via Emailzs + APP integrations); callout ‘WORKS WITH YOUR STACK’","STACK integration-hub-map · connector-chip-pop · callout · OUT focus hand-off","V16 50.9–52.4s “Works with your stack.”","AG"),
 ("S22","pricing-trial",5,"③ Outcome","‘14’ counts up → ‘-day free trial’ + confetti; plan row Growth · Storm Team (Most popular) · Enterprise — typographic GFX only","STACK counter-14 · confetti-burst · plan-row-stagger · most-popular-chip · OUT lights-down","V17 52.9–55.0s “Fourteen days free. No credit card.”","GFX"),
 ("S23","outro-cta",9,"③ Outcome","LIVE crops fan around wordmark; crane + stage light; wordmark stamp FULL-FRAME HIT #3 (local f75); OVERSIZED CTA ‘rooferzs.com’ ≥72px + ‘Get started free’ — hold ≥60f (≥3s on CTA); soft ‘Built on Genius.’","STACK outro-group-photo · crane · particles · stamp HIT#3 · cta-oversized-rise · cta-get-started · hold-60f","V18 55.8–57.3s “Rooferzs. Storm to nail.” → silence/music tail","GFX"),
]
def build():
    rows=[]; f=0
    for s in SHOTS:
        assert s[7] in ALLOWED_SRC, (s[0], s[7])
        d=s[2]*BEAT; rows.append((s,f,d)); f+=d
    assert f==1800, f
    assert sum(s[2] for s in SHOTS)==120
    return rows
if __name__=="__main__":
    rows=build()
    out=[]
    out.append("# Rooferzs promo — timing skeleton V2 (PRIMARY 60.0s · 1800f @ 30fps · 1920×1080)\n")
    out.append("Generated 2026-10-06 from `.shots.py` **V2 REWRITE** (single source of truth; sum asserted = 1800f). "
               "**Footage source = LIVE agentic surface**: agent.rooferzs.com (OpenBot, AGENTIC ROOFING 8-bot rail) + app.rooferzs.com signed-in product, tenant `bluebonnetpeakroofing` (Bluebonnet Peak Roofing, tenant 203) as **Jordan Hale**. No rooferzs.com marketing-demo textures. "
               "**V2 grammar:** Linear/Stripe kinetic hook — NOT Saturday day-clock. Promise cards STORM→DOORS / PROOF→JOB / SCOPE→MARGIN replace time-of-day title cards. Dense stacked motion (≥100 instances — see `V2-EFFECTS-CATALOG.md`). "
               "Planning grid = **placeholder 120 BPM → 1 beat = 15f, 1 bar = 60f, 1 phrase (8 beats) = 120f**. "
               "Every cut sits on a beat of that grid; after the real BGM is analysed (Stage 6, librosa, `music-beat-sync.md`) the table is rewritten in `beatF(n)` and SFX re-pinned (S3).\n")
    out.append("Legend: `STACK` = dense Remotion motion instances on the shot (see V2-EFFECTS-CATALOG; LEAD-once law RETIRED). `CAM` = camera grammar. IN/OUT = seam form. Transition frames are carved out of adjacent shots' budgets, not added. "
               "**src**: `AG` agent.rooferzs.com standalone · `EMB` app.rooferzs.com AGENT embed panel · `APP` app.rooferzs.com product surface · `GFX` film-built graphic (no product footage). "
               "`‹JOB›/‹RCV›/‹ACV›/‹MARGIN›` = values bound from the seeded Bluebonnet job at Stage 4 discovery (never landing numbers). "
               "**Killed in V2 open:** SAT·6:00 AM clock, ‘Same storm. Different Saturday.’, HUD Saturday clock, time-of-day paper cards, clock-wipe seam.\n")
    out.append("| shot | src | from_frame | duration_frames | duration_s | content | camera/transition | VO cue |")
    out.append("|---|---|---:|---:|---:|---|---|---|")
    for s,f0,d in rows:
        out.append(f"| {s[0]} `{s[1]}` | {s[7]} | {f0} | {d} | {d/FPS:.2f} | {s[4]} | {s[5]} | {s[6]} |")
    src={}
    for s,_,d in rows: src[s[7]]=src.get(s[7],0)+d
    out.append(f"| **TOTAL** | — | — | **{sum(d for _,_,d in rows)}** | **{sum(d for _,_,d in rows)/FPS:.2f}** | 23 shots · 3 promise kinetic cards (no clocks) · dense STACK motion · 3 full-frame hits · all 8 rail bots on screen | | ~100 VO words (18 lines) |\n")
    out.append("## Footage-source budget\n")
    out.append("| src | frames | seconds | share |")
    out.append("|---|---:|---:|---:|")
    for k in ["AG","EMB","APP","GFX"]:
        out.append(f"| {k} | {src.get(k,0)} | {src.get(k,0)/FPS:.1f} | {100*src.get(k,0)/1800:.1f}% |")
    out.append("\nAll product frames (AG + EMB + APP) are live captures; GFX = kinetic hook, brand claim, 3 promise cards, trial card, outro CTA stage (outro elements are live crops).\n")
    # segment summary
    seg={}
    for s,f0,d in rows: seg.setdefault(s[3],[f0,0]); seg[s[3]][1]+=d
    out.append("## Segment budget (V2 SaaS launch arc)\n")
    out.append("| segment | frames | from–to | seconds | share | arc target |")
    out.append("|---|---:|---|---:|---:|---|")
    tgt={"① Hook":"6–10% kinetic+brand, no UI","② Proof":"70–80% evidence ladder","③ Outcome":"12–16% stack+trial+CTA≥3s"}
    for k,(f0,d) in seg.items():
        out.append(f"| {k} | {d} | {f0}–{f0+d} | {d/FPS:.1f} | {100*d/1800:.1f}% | {tgt.get(k,'—')} |")
    out.append("\nV2 note: ① Hook replaces V1 Brand open (clock killed). ② Proof absorbs former Climb + Hero. ③ Outcome = Launch with oversized CTA hold.\n")
    out.append("## Beat-hit & key cue frames (absolute)\n")
    out.append("| cue | abs frame | time | beat # (120 BPM grid) | note |")
    out.append("|---|---:|---:|---:|---|")
    cues=[("Hook lock ‘Storm to nail. One agent.’",42,"kinetic cascade settles"),
          ("Brand wordmark lands (element-level)",96,"hold 96–150 (54f ≥ 36f)"),
          ("Dark-tunnel → live agent shell + 8-bot rail arrives",150,"B-form arrival into rail hero"),
          ("Storm Bot card tap → glide into live map",225,"element-level click into live map"),
          ("Promise card STORM → DOORS",345,"replaces 7:30 AM clock card"),
          ("L4b street-level pin lock (S06)",390,"North Dallas neighborhood; ≥4 pins"),
          ("HIT #1 white-flash (S08 open draft — read-only)",630,"FlashCut from=625, 5f each side"),
          ("Promise card PROOF → JOB",675,"replaces 11:00 AM clock card"),
          ("Promise card SCOPE → MARGIN",1065,"replaces 5:00 PM clock card"),
          ("HIT #2 crash-zoom-punch ‹MARGIN›",1335,"6f punch; strongest-hit candidate"),
          ("Silence window (pre-cut)",1428,"1428–1440 total silence"),
          ("Hard cut release → PM schedule",1440,"bar boundary"),
          ("Outro riser start",1665,"riser → impact → sparkle closing phrase"),
          ("HIT #3 wordmark stamp + CTA oversized",1740,"impact-deep-whoosh; hold 1740–1800 (60f ≥3s CTA)")]
    for n,fr,note in cues:
        out.append(f"| {n} | {fr} | {fr/FPS:.2f}s | {fr/BEAT:.0f} | {note} |")
    out.append("\nHit spacing: #1→#2 = 705f (47 beats), #2→#3 = 405f (27 beats) — both ≥16 beats (aesthetic-rules R4).\n")
    out.append("## Rail seat cue per shot (8-bot coverage)\n")
    out.append("| bot (rail order) | seat id | primary shot(s) | also on screen |")
    out.append("|---|---|---|---|")
    for b,sid,p,a in [("Integration Bot","rooferzs-integration","S08 email drafts · S21 stack","S03, S23"),
                      ("Config Bot","rooferzs-config","S13 roles & permissions","S03, S23"),
                      ("Storm Bot","rooferzs-storm","S03 tap target · S04 live map","S23"),
                      ("Canvassing Bot","rooferzs-canvassing","S06 door pins (L4b street-level)","S03, S23"),
                      ("Prospecting Bot","rooferzs-prospecting","S07 contact → call list","S03, S23"),
                      ("Budget Bot","rooferzs-budget","S16 ISOL import (→ S18/S19 APP budget)","S03, S23"),
                      ("Project Management Bot","rooferzs-project","S20 schedule · S15 fallback client update","S03, S23"),
                      ("Display Bot","rooferzs-display","S17 inline stat tiles","S03, S04 inline map render, S23")]:
        out.append(f"| {b} | `{sid}` | {p} | {a} |")
    out.append("\n## V2 kill list (do not reintroduce)\n")
    out.append("- SAT · 6:00 AM / Monday–Saturday day-clock open\n")
    out.append("- ‘Same storm. Different Saturday.’ as S02 / VO open\n")
    out.append("- Paper title cards that are only times of day (7:30 AM / 11:00 AM / 5:00 PM)\n")
    out.append("- HUD Saturday clock device\n")
    out.append("- clock-wipe seam (S15→S16)\n")
    out.append("- LEAD-once-per-shot as house law (use STACK)\n")
    print("\n".join(out))
