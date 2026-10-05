# Single source of truth for frame math (30fps). Beats at placeholder 120 BPM => 15f/beat.
# REWRITE 2026-10-05 (CT): footage source = LIVE agentic surface (agent.rooferzs.com + app.rooferzs.com),
# tenant bluebonnetpeakroofing / Jordan Hale chrome. No rooferzs.com marketing-demo textures.
FPS=30; BEAT=15
# Footage source codes (column 8):
#   AG  = agent.rooferzs.com standalone OpenBot (Full launch), AGENTIC ROOFING 8-bot rail, chrome "JH Jordan Hale"
#   EMB = app.rooferzs.com/dashboard/dynamic -> AGENT side tab -> embed panel "Agent · roofing · OpenBot · 8 tools for your role"
#   APP = app.rooferzs.com signed-in product surface (Bluebonnet Peak Roofing), route confirmed at Stage 4 discovery
#   GFX = film-built motion graphic / title card in brand tokens (no product footage, no marketing screenshot)
ALLOWED_SRC={"AG","EMB","APP","GFX"}
SHOTS = [
 # id, slug, beats, segment, content, camera/transition, VO cue, source
 ("S01","cold-open",4,"① Brand open","Dark field, rain streaks; split-flap clock flips to SAT · 6:00 AM; sub: HAIL · NORTH DALLAS, TX (matches seeded tenant storm ‘DFW Hail Cell — North Dallas’)","LEAD split-flap-title · CAM tension B dutch-roll-to-level (−10° hold → rolls level on beat 4) · OUT in-camera roll + cut on downbeat","V1 0.3–1.9s “Six a.m. Hail overnight.”","GFX"),
 ("S02","brand",6,"① Brand open","Wordmark “roof·erzs·.” materializes on gray-950 field + tagline ‘Same storm. Different Saturday.’ — hold ≥36f","LEAD letterspace-materialize · OUT shot-transitions B dark-tunnel (push out 10f → dark glide 6f → live agent shell rises from depth 12f)","V2 2.4–4.6s “Same storm. Different Saturday.”","GFX"),
 ("S03","rail-hero",5,"② Hero","LIVE agent.rooferzs.com (tenant bluebonnetpeakroofing): spotlight locks the AGENTIC ROOFING rail with extra hold; 8 bot cards light top→bottom (Integration · Config · Storm · Canvassing · Prospecting · Budget · Project Management · Display); cursor taps Storm Bot → helper line flips ‘Active seat: rooferzs-storm’; footer chip ‘JH Jordan Hale’ in frame","LEAD spotlight-hero-card (PageCam 2.5D, protagonist = 8-bot rail) · IN dark-tunnel · OUT in-camera glide right into the Storm Bot channel (same page)","V3 starts 5.2s “Rooferzs maps the impact zone live —”","AG"),
 ("S04","storm-map",8,"② Hero","Storm Bot channel: inline live map card renders (seeded demo data) — severity polygon over North Dallas; storm row ‘DFW Hail Cell — North Dallas · Hail — Severe · score 5’; camera rises off the chat bubble to reveal full map; reply rows embed with crew chip ‘Crew Alpha — North Dallas’ (row-embed supporting); 15f rest","LEAD crane-rise-reveal · IN in-camera glide from rail · OUT shot-transitions D black (fade 8f)","V3 …9.6s “— and tags every lead inside it.” (LIVE-CHECK L3; alt V3b)","AG"),
 ("S05","tc1-crews",3,"③ Climb","BLACK title card #1: ‘7:30 AM — Crews roll with the *route*.’","LEAD paper-title-card (D black variant) · IN/OUT D fades 8f","— no VO (card breath)","GFX"),
 ("S06","door-knock",7,"③ Climb","Canvassing Bot active on rail → channel ‘Canvassing Bot’: inline door-pin map (open vs pinned) for Crew Alpha; camera flies pin→pin to 3 seeded doors (e.g. 4121 Mockingbird Ln, 2201 Colt Rd, 5400 Legacy Dr); cursor taps each; pin status chips read from LIVE legend; open/pinned counter ticks; optional APP canvass tap if tenant surface exists","LEAD cursor-flyover · IN D fade-in · OUT shot-transitions E whip-pan (basic, 8f, CameraMotionBlur)","V4 13.2–16.0s “Reps log every door the second they knock.”","AG"),
 ("S07","prospect-call",6,"③ Climb","Prospecting Bot seat → reply row with seeded demo contact + (972) 555-xxxx phone chip inline (no call placed) → phone chip ripples out into 4 rep chips ‘Rooferzs Agent 1–4’ → Callerzs campaign preview card ‘Rooferzs Door Knock Follow-up · 9 AM–4 PM Central · not deployed — preview only, no live calls’","LEAD radial-ripple-phone-chips · IN whip-pan · OUT line-carry-transition (campaign window bar carries camera right)","V5 16.6–18.0s “AI voices work the call list.” + 18.0–19.3s narrator silent (ripple on music; no voice sample)","AG"),
 ("S08","email-drafts",6,"③ Climb","Integration Bot seat → tool card ‘Checked email workflows’ → LIVE Emailzs table: 9 rows ‘Roofing follow-up: …’ all status ‘draft’; row ‘Roofing follow-up: Post-inspection, no action’ lifts to pill → click opens the draft body (read-only) — no activate / enroll / send / preview-send","LEAD chip-lift-to-user-pill · FULL-FRAME HIT #1 = shot-transitions A white-flash (FlashCut, cut at local f45 on draft open) · OUT cut on downbeat to paper card","V6 19.8–21.9s “Follow-ups, drafted for your review.” (replaces landing line; G0)","AG"),
 ("S09","tc2-proof",3,"③ Climb","LIGHT paper title card #2: ‘11:00 AM — Proof before the *ladder* comes down.’","LEAD paper-title-card (light paper) · OUT rule collapse → cut on beat","— no VO (card breath)","GFX"),
 ("S10","photos-proof",6,"③ Climb","APP job record ‹JOB› (seeded Bluebonnet job) Gallery/Documents: seeded inspection photos fill; adjuster packet / photo report pops center, L-brackets, scan passes; damage tags exactly as LIVE renders them (LIVE-CHECK L10e — no landing photo sim)","LEAD scan-bracket-sweep · OUT card-flip-reveal (packet flips 180° Y → embed AGENT panel)","V7 24.7–27.3s “Photos sort themselves into an adjuster packet.” (LIVE-CHECK; alt V7b)","APP"),
 ("S11","cadis-embed",7,"③ Climb","EMB: app.rooferzs.com Dynamic Dashboard → AGENT side tab → panel ‘Agent · roofing · OpenBot · 8 tools for your role’; prompt typed in ‘Ask anything’ → plain-label tool cards stream ✓ → approval-gated write card (e.g. pin DFW Hail Cell → Crew Alpha) → cursor Approve (seeded demo write, G1-approved) → ≥15f completion still","LEAD ai-stream-response · IN card-flip-reveal · OUT shot-transitions F mask-wipe (reply row ‹JOB› grows into APP job record)","V8 27.8–30.6s “Ask CADIS. Every write waits for your approval.”","EMB"),
 ("S12","job-record",6,"③ Climb","APP master job record ‹JOB› — segmented thumb glides across the LIVE tab bar (tab names read at discovery; e.g. Overview → Documents → Estimating → Schedule); more air so the master record reads as the CRM hero","LEAD segmented-thumb-hero · IN mask-wipe · OUT focus hand-off (rail: Config Bot card)","V9 31.1–34.8s “One job record for every team — and margins stay private.”","APP"),
 ("S13","roles-config",4,"③ Climb","Config Bot seat (‘Branding, roles, permissions, tool selection’) → reply role cards stack (LIVE role labels, e.g. Admin · Manager · Sales rep · Technician) with tool/permission scope; embed header ‘8 tools for your role’ as proof chip","LEAD list-stack-press · IN focus hand-off · OUT D black (fade 8f)","(V9 tail — margin privacy LIVE-CHECK L10g)","AG"),
 ("S14","tc3-sign",3,"③ Climb","BLACK title card #2: ‘5:00 PM — One link. One *tap*.’","LEAD paper-title-card (D black variant) · IN/OUT D fades 8f","— no VO (card breath)","GFX"),
 ("S15","portal-update",6,"③ Climb","APP client portal / client link for ‹JOB› if live (milestones + approve/sign tap); else Project Management Bot (‘client updates’) drafts the homeowner update with milestone list inline — draft only, not sent","LEAD input-trigger-moves · cursor-performance · OUT wipe-transitions · clock-wipe (5:00 → 5:30)","V10 37.2–39.8s “Clients sign from one link. No login.” (LIVE-CHECK L10f; alt V10b)","APP"),
 ("S16","isol-upload",5,"③ Climb","Budget Bot seat (‘Scan and import ISOL; display editable numbers’) → seeded demo ISOL PDF for ‹JOB› attaches via composer paperclip → line items write in as editable rows (APP Estimating / JBC sheet if that is where they land)","LEAD document-typewriter-reveal · IN clock-wipe · OUT continuous PageCam glide (same page)","V11 40.2–42.0s “Drop the carrier scope.”","AG"),
 ("S17","jbc-numbers",4,"③ Climb","Display Bot inline stat tiles (or APP Estimating / JBC header): RCV ‹RCV› · ACV ‹ACV› · depreciation tile — LIVE values from ‹JOB›, rolled in","LEAD odometer-digit-roll · OUT in-camera into crash zoom","V12 42.6–44.3s “R-C-V and A-C-V, instantly.”","AG"),
 ("S18","margin-punch",2,"③ Climb","LIVE margin field for ‹JOB› (‹MARGIN›) punched to frame-filling close-up","LEAD crash-zoom-punch = FULL-FRAME HIT #2 (6f punch + 24f hold) · OUT in-camera ease-back into slow push","V13 44.6–45.9s “‹MARGIN› percent margin.” (spoken = live value)","APP"),
 ("S19","pm-approve",5,"③ Climb","APP Estimating / JBC approval state for ‹JOB› (LIVE label, e.g. ‘Awaiting PM approval’) → slow push toward the LIVE approve control; cursor clicks at apex (seeded demo write, G1-approved)","CAM tension C slow-push-in (1.00→1.12, Easing.in quad + vignette) · OUT zero-transition HARD CUT (release)","V14 46.3–47.4s “PM approves.” → total silence 47.6–48.0s","APP"),
 ("S20","pm-schedule",6,"③ Climb","Project Management Bot seat (‘Crew scheduling, client updates, materials’) → crew/material schedule inline, or APP PM schedule/Gantt; camera travels the week axis; bars pop (Crew Alpha tear-off, material delivery, dumpster — LIVE labels)","LEAD timeline-travel · IN hard cut · OUT (integration-hub-map flip is S21's entry)","V15 48.2–50.6s “Next morning, production's already scheduled.”","AG"),
 ("S21","integrations",4,"④ Launch","Page flips 180° → Integration Bot card at hub center; chips = connectors the LIVE tenant lists (Email · connected via Emailzs, + others shown in APP integrations settings); text chips only","LEAD integration-hub-map · OUT focus hand-off","V16 51.1–52.6s “Works with your stack.”","AG"),
 ("S22","pricing-trial",5,"④ Launch","‘14’ counts up → ‘-day free trial’ + confetti; plan row Growth · Storm Team (Most popular) · Enterprise — typographic GFX, no pricing-page screenshot","LEAD counter-confetti · OUT lights-down into outro stage","V17 53.1–55.2s “Fourteen days free. No credit card.”","GFX"),
 ("S23","outro",9,"④ Launch","LIVE crops fly in around wordmark: 8 rail cards (fan), storm polygon, door pin, Agent 1–4 chip, ‘draft’ follow-up row, Approve chip, job tab bar, role card, ‹RCV› tile, schedule bar, ‘Email · connected’ chip; crane + stage light; wordmark stamp (local f75) + CTA rooferzs.com · Get started free; hold ≥60f","LEAD outro-group-photo-launch · FULL-FRAME HIT #3 = wordmark stamp impact","V18 56.0–57.5s “Rooferzs. Storm to nail.” → silence/ music tail on hold","GFX"),
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
    out.append("# Rooferzs promo — timing skeleton (PRIMARY 60.0s · 1800f @ 30fps · 1920×1080)\n")
    out.append("Generated 2026-10-05 from `.shots.py` (single source of truth; sum asserted = 1800f). "
               "**Footage source = LIVE agentic surface**: agent.rooferzs.com (OpenBot, AGENTIC ROOFING 8-bot rail) + app.rooferzs.com signed-in product, tenant `bluebonnetpeakroofing` (Bluebonnet Peak Roofing, tenant 203) as **Jordan Hale**. No rooferzs.com marketing-demo textures. "
               "Planning grid = **placeholder 120 BPM → 1 beat = 15f, 1 bar = 60f, 1 phrase (8 beats) = 120f**. "
               "Every cut sits on a beat of that grid; after the real BGM is analysed (Stage 6, librosa, `music-beat-sync.md`) the table is rewritten in `beatF(n)` and SFX re-pinned (S3).\n")
    out.append("Legend: `LEAD` = the one motion technique that owns the shot (each used once as lead). `CAM` = camera grammar. IN/OUT = seam form (shot-transitions A–F / transition-travel / named cards). Transition frames are carved out of the adjacent shots' budgets, not added. "
               "**src**: `AG` agent.rooferzs.com standalone · `EMB` app.rooferzs.com AGENT embed panel · `APP` app.rooferzs.com product surface · `GFX` film-built graphic (no product footage). "
               "`‹JOB›/‹RCV›/‹ACV›/‹MARGIN›` = values bound from the seeded Bluebonnet job at Stage 4 discovery (never landing numbers).\n")
    out.append("| shot | src | from_frame | duration_frames | duration_s | content | camera/transition | VO cue |")
    out.append("|---|---|---:|---:|---:|---|---|---|")
    for s,f0,d in rows:
        out.append(f"| {s[0]} `{s[1]}` | {s[7]} | {f0} | {d} | {d/FPS:.2f} | {s[4]} | {s[5]} | {s[6]} |")
    src={}
    for s,_,d in rows: src[s[7]]=src.get(s[7],0)+d
    out.append(f"| **TOTAL** | — | — | **{sum(d for _,_,d in rows)}** | **{sum(d for _,_,d in rows)/FPS:.2f}** | 23 shots · 3 title cards (2 black) · 2 tension cams · 3 full-frame hits · all 8 rail bots on screen | | ~103 VO words (18 lines) |\n")
    out.append("## Footage-source budget\n")
    out.append("| src | frames | seconds | share |")
    out.append("|---|---:|---:|---:|")
    for k in ["AG","EMB","APP","GFX"]:
        out.append(f"| {k} | {src.get(k,0)} | {src.get(k,0)/FPS:.1f} | {100*src.get(k,0)/1800:.1f}% |")
    out.append("\nAll product frames (AG + EMB + APP) are live captures; GFX = brand open, 3 title cards, trial card, outro stage (outro elements are live crops).\n")
    # segment summary
    seg={}
    for s,f0,d in rows: seg.setdefault(s[3],[f0,0]); seg[s[3]][1]+=d
    out.append("## Segment budget (promo-energy-arc)\n")
    out.append("| segment | frames | from–to | seconds | share | arc target |")
    out.append("|---|---:|---|---:|---:|---|")
    tgt={"① Brand open":"8–12%","② Hero":"12–15%","③ Climb":"55–65%","④ Launch":"13–16%"}
    for k,(f0,d) in seg.items():
        out.append(f"| {k} | {d} | {f0}–{f0+d} | {d/FPS:.1f} | {100*d/1800:.1f}% | {tgt[k]} |")
    out.append("\nDeviation note: ③ runs ~67% (vs 55–65%) and ② ~10% because the brief requires all 12 features plus the 8-bot rail; logged in manifest §5.4.\n")
    out.append("## Beat-hit & key cue frames (absolute)\n")
    out.append("| cue | abs frame | time | beat # (120 BPM grid) | note |")
    out.append("|---|---:|---:|---:|---|")
    cues=[("Brand wordmark lands (element-level)",96,"hold 96–150 (54f ≥ 36f)"),
          ("Dark-tunnel → live agent shell + 8-bot rail arrives",150,"B-form arrival into rail hero"),
          ("Storm Bot card tap → glide into live map",225,"element-level click into live map"),
          ("HIT #1 white-flash (S08 open draft — read-only)",630,"FlashCut from=625, 5f each side"),
          ("HIT #2 crash-zoom-punch ‹MARGIN›",1335,"6f punch; strongest-hit candidate"),
          ("Silence window (pre-cut)",1428,"1428–1440 total silence"),
          ("Hard cut release → PM schedule",1440,"bar boundary"),
          ("Outro riser start",1665,"riser → impact → sparkle closing phrase"),
          ("HIT #3 wordmark stamp",1740,"impact-deep-whoosh; hold 1740–1800 (60f)")]
    for n,fr,note in cues:
        out.append(f"| {n} | {fr} | {fr/FPS:.2f}s | {fr/BEAT:.0f} | {note} |")
    out.append("\nHit spacing: #1→#2 = 705f (47 beats), #2→#3 = 405f (27 beats) — both ≥16 beats (aesthetic-rules R4).\n")
    out.append("## Rail seat cue per shot (8-bot coverage)\n")
    out.append("| bot (rail order) | seat id | primary shot(s) | also on screen |")
    out.append("|---|---|---|---|")
    for b,sid,p,a in [("Integration Bot","rooferzs-integration","S08 email drafts · S21 stack","S03, S23"),
                      ("Config Bot","rooferzs-config","S13 roles & permissions","S03, S23"),
                      ("Storm Bot","rooferzs-storm","S03 tap target · S04 live map","S23"),
                      ("Canvassing Bot","rooferzs-canvassing","S06 door pins","S03, S23"),
                      ("Prospecting Bot","rooferzs-prospecting","S07 contact → call list","S03, S23"),
                      ("Budget Bot","rooferzs-budget","S16 ISOL import (→ S18/S19 APP budget)","S03, S23"),
                      ("Project Management Bot","rooferzs-project","S20 schedule · S15 fallback client update","S03, S23"),
                      ("Display Bot","rooferzs-display","S17 inline stat tiles","S03, S04 inline map render, S23")]:
        out.append(f"| {b} | `{sid}` | {p} | {a} |")
    print("\n".join(out))
