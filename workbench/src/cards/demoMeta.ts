// Auto-generated, do not hand-edit: node scripts/gen-index.mjs
// demo component name → display name / shot card / gallery category / preview video (when gallery/media is fetched locally) / one-line summary
export type DemoMeta = { name: string; card: string; category: string; categoryKey: string; styleKey?: string; preview?: string; summary?: string };
export const DEMO_META: Record<string, DemoMeta> = {
  "Basic3DScene": {
    "name": "Spatial Step Demo",
    "card": "Spatial Step Demo",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "styleKey": "basic-3d-scene",
    "summary": "impress.js-style spatial demo: cards scatter through 3D space at different positions/rotations/scales; the camera flies to the inverse of each step's pose in sequence, then pulls out to the OVERVIEW on the last step"
  },
  "CrashImpactReal": {
    "name": "Crash Zoom · CrashImpactReal",
    "card": "Crash Zoom",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "summary": "One-beat crash push from wide shot to target close-up (6f); landing is either overshoot rebound (elastic) or crash-stop with screen shake (weight)"
  },
  "CrashZoomReal": {
    "name": "Crash Zoom · CrashZoomReal",
    "card": "Crash Zoom",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "summary": "One-beat crash push from wide shot to target close-up (6f); landing is either overshoot rebound (elastic) or crash-stop with screen shake (weight)"
  },
  "CursorFlyover": {
    "name": "Four-Corner Cursor Tour",
    "card": "Four-Corner Cursor Tour",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "styleKey": "cursor-flyover",
    "summary": "After a top-down fade-in, the camera flies to each of the four corners for zoom-in close-ups; an SVG cursor follows along, points on arrival, and leaves click ripples"
  },
  "DollyZoomReal": {
    "name": "Depth-Layer Moves · DollyZoomReal",
    "card": "Depth-Layer Camera Moves",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "summary": "Two depth-layer moves — multiplane parallax slide (3 layers at graded speeds sliding laterally out of depth) and pseudo dolly-zoom (subject pinned, background swelling in)"
  },
  "MultiplaneReal": {
    "name": "Depth-Layer Moves · MultiplaneReal",
    "card": "Depth-Layer Camera Moves",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "summary": "Two depth-layer moves — multiplane parallax slide (3 layers at graded speeds sliding laterally out of depth) and pseudo dolly-zoom (subject pinned, background swelling in)"
  },
  "GrazeFaceTour": {
    "name": "Graze-Face Glide",
    "card": "Graze-Face Glide",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "styleKey": "graze-face-tour",
    "summary": "Steep-angle graze-face close-up — the camera skims low over the UI surface (sidebar tree / top bar / lists as terrain); page text starts floating above the interface with matching soft shadows, then accelerates down onto the surface in sequence as the camera passes"
  },
  "OverheadTabletopDrop": {
    "name": "Overhead Tabletop Drop",
    "card": "Overhead Camera Moves",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "styleKey": "overhead-tabletop-drop",
    "summary": "Card array lying flat at rotateX 62°; the pan segment only slides translateX across, the drop segment runs angle/scale/offset together to plunge into the layout"
  },
  "TiltReveal": {
    "name": "Tilt Reveal",
    "card": "Overhead Camera Moves",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "styleKey": "tilt-reveal",
    "summary": "Whole page lies flat at rotateX -80° inside a perspective container and rights itself over ~43f; rotateX/scale/translateY share one out-cubic with a slight end overshoot"
  },
  "DroneDiveLanding": {
    "name": "Drone Dive Landing",
    "card": "Space Camera Moves",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "styleKey": "drone-dive-landing",
    "summary": "Near-vertical overhead hover → steep dive → cushion-braked stop on the hero card close-up"
  },
  "ExplodedView": {
    "name": "Exploded View",
    "card": "Space Camera Moves",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "styleKey": "exploded-view",
    "summary": "After tilting the page in 3D, components burst apart along Z in staggered order and hover; a beat later they reassemble in reverse with a screen shake to close"
  },
  "SteepTiltGlide": {
    "name": "Steep Tilt Glide",
    "card": "Steep Tilt Glide",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "styleKey": "steep-tilt-glide",
    "summary": "Fixed camera; the upright page stands at a 60° strong-perspective tilt (near right, far left) and slides along its own 3D lateral axis past the lens (object moves, camera doesn't) — motion-trail ghosting on the slide, text components floating then settling, revealed from dark to light"
  },
  "BulletTimeFreezeOrbit": {
    "name": "Freeze Orbit",
    "card": "Tension Camera Moves",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "styleKey": "bullet-time-freeze-orbit",
    "summary": "The chart freezes mid-growth; the camera orbits the suspended UI plane 55° on rotateY and back, then time resumes and it finishes growing"
  },
  "DutchRollToLevel": {
    "name": "Dutch Roll to Level",
    "card": "Tension Camera Moves",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "styleKey": "dutch-roll-to-level",
    "summary": "The pain-point section holds a full-frame -10° dutch tilt (with slight drift); the solution beat rolls back to level with a single overshoot"
  },
  "PullBackIsolation": {
    "name": "Pull-Back Isolation",
    "card": "Tension Camera Moves",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "styleKey": "pull-back-isolation",
    "summary": "Pull back from the glowing hero card close-up; sibling cards fade out staggered by distance, the background sinks to black, and the lone card hangs in the dark center"
  },
  "SlowPushIn": {
    "name": "Slow Push-In",
    "card": "Tension Camera Moves",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "styleKey": "slow-push-in",
    "summary": "4s uniformly accelerating push-in 1.00→1.14 with a deepening vignette; at peak tension, a hard cut with no transition to the bright scene"
  },
  "Terminal3D": {
    "name": "Terminal 3D Flight",
    "card": "Terminal 3D Flight",
    "category": "Camera & Space",
    "categoryKey": "camera",
    "styleKey": "terminal-3d",
    "summary": "Three terminal windows scattered in 3D space; the camera flies between them with a sinusoidal pull-back en route, typing out commands at each window while results slide in line by line — command execution as spatial storytelling"
  },
  "AvatarGridRadialBuildColorize": {
    "name": "Radial Build & Colorize",
    "card": "Radial Build & Colorize",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "styleKey": "avatar-grid-radial-build-colorize",
    "summary": "An 8×7 grid of small cards grows outward from center ring by ring (content mixes initials/icons/image placeholders); ~15% of the cards then tint red at random moments to flag anomalies, with the title legend resident at center"
  },
  "BeforeAfterSliderScrub": {
    "name": "Before/After Slider",
    "card": "Before/After Slider",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "styleKey": "before-after-slider-scrub",
    "summary": "Before/after slider — the \"before/after\" versions stacked; the divider first snaps then slow-scrubs, and the new version \"develops\" wherever the divider passes"
  },
  "AxisRescaleShockV2": {
    "name": "Living Charts · AxisRescaleShockV2",
    "card": "Living Charts",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "summary": "Three living-chart moves — oscilloscope-stream (curve writes in real time at its right edge + sudden spikes), unit-dot-swarm-regroup (dot swarm migrates in three acts into digits), axis-rescale-shock (a new value blasts past the frame and forces a y-axis rescale)"
  },
  "OscilloscopeStreamV2": {
    "name": "Living Charts · OscilloscopeStreamV2",
    "card": "Living Charts",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "summary": "Three living-chart moves — oscilloscope-stream (curve writes in real time at its right edge + sudden spikes), unit-dot-swarm-regroup (dot swarm migrates in three acts into digits), axis-rescale-shock (a new value blasts past the frame and forces a y-axis rescale)"
  },
  "UnitDotSwarmRegroupV2": {
    "name": "Living Charts · UnitDotSwarmRegroupV2",
    "card": "Living Charts",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "summary": "Three living-chart moves — oscilloscope-stream (curve writes in real time at its right edge + sudden spikes), unit-dot-swarm-regroup (dot swarm migrates in three acts into digits), axis-rescale-shock (a new value blasts past the frame and forces a y-axis rescale)"
  },
  "CounterConfetti": {
    "name": "Counter Confetti Sprint",
    "card": "Counter Confetti Sprint",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "styleKey": "counter-confetti",
    "summary": "Big number sprint-counts on easeOutQuart with a scale overshoot; one beat before landing, 52 confetti pieces blast in on parabolic arcs from both sides; an impact ring spreads and label letter-spacing tightens to close"
  },
  "CycleGlassNodeMorph": {
    "name": "Glass Node Takeover Cycle",
    "card": "Glass Node Takeover Cycle",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "styleKey": "cycle-glass-node-morph",
    "summary": "A single subject shrinks into a mechanism diagram during a diagonal wipe; three loop labels build in sequence along arcs, then on a continuous push-in three glass nodes rise from below and take over the original labels, ending with diagnostic markers pinning system status staggered"
  },
  "NeedleSweepSelftest": {
    "name": "Full-Arc Needle Self-Test",
    "card": "Gauge Readout Moves",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "styleKey": "needle-sweep-selftest",
    "summary": "The needle swings a full arc out in ~12f on ease-out, returns over ~20f with a 5-8° overshoot before settling on the true value; multiple gauges staggered 3-5f; the value pops up beneath the dial on the settle frame"
  },
  "TapeScrollFixedPointer": {
    "name": "Tape Scroll, Fixed Pointer",
    "card": "Gauge Readout Moves",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "styleKey": "tape-scroll-fixed-pointer",
    "summary": "Long graduated tape moves by translate: slow crawl → 45px/f sprint for ~25f → spring brake with overshoot swing before stopping; the reading in the window refreshes in sync"
  },
  "HatchDepth": {
    "name": "Hatch to Solid Bars",
    "card": "Hatch to Solid Bars",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "styleKey": "hatch-depth",
    "summary": "Hatched placeholder bars wipe longer one by one; the hatching fades out, an accent-colored solid layer fades in and pops the value — the placeholder matures into a real bar chart"
  },
  "OdometerDigitRoll": {
    "name": "Odometer Digit Roll",
    "card": "Odometer Digit Roll",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "styleKey": "odometer-digit-roll",
    "summary": "Odometer roll at poster scale — every digit of a full-screen giant metric spins vertically like a slot reel with ghosting; digits settle left to right each with overshoot, and the whole figure pulses darker the instant all lock"
  },
  "ConfettiCrossfire": {
    "name": "Dual-Side Confetti Salute",
    "card": "Particle Celebrate Hits",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "styleKey": "confetti-crossfire",
    "summary": "Two cannons, 50 rectangular confetti each: muzzle velocity 90-150px/f (with decay 0.9 that's ~900-1500px of travel to cross the midline), 55° spread, 8-15° tumble per frame; conditional unmount after ~90f once everything is off-screen"
  },
  "CounterTickSparks": {
    "name": "Counter Tick Sparks",
    "card": "Particle Celebrate Hits",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "styleKey": "counter-tick-sparks",
    "summary": "Tick frames derive from the counter's own interpolate; each tick throws 6-10 2px sparks (initial upward velocity 4-6px/f, gravity snuffing them in 12-18f); at the final value it jumps to double — 20 sparks plus the number popping 1.1x"
  },
  "ParticleSandFill": {
    "name": "Particle Sand-Fill Bars",
    "card": "Particle Sand-Fill Bars",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "styleKey": "particle-sand-fill",
    "summary": "Particles pour into bars — the bar chart doesn't grow, it \"rains into place\": square-dot particles fall one by one and pile into columns; once full they solidify and the value pops out"
  },
  "RingDiagramAnnotationReveal": {
    "name": "Ring Diagram Annotation Reveal",
    "card": "Ring Diagram Annotation",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "styleKey": "ring-diagram-annotation-reveal",
    "summary": "The full-screen subject is pulled into a concentric ring diagram through a circular window; segmented outer rings and 12 centripetal arrows establish the mechanism, then the whole group shifts left and shrinks to make room for four titles and two annotation tiers in the right column"
  },
  "BrakeReticleLock": {
    "name": "Brake Reticle Lock",
    "card": "Scroll Brake Moves",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "styleKey": "brake-reticle-lock",
    "summary": "Scroll in three phases: sin-in acceleration → violent cubic-out deceleration overshooting +30px → rebound to rest; blur = v×0.12 capped at 24px; corner brackets fly in from ±620/±320 off-screen on Easing.back(2.4) to lock, highlight completes within 6f and the label pops on back(2.6)"
  },
  "ChangelogScrollBrake": {
    "name": "Changelog Scroll Brake",
    "card": "Scroll Brake Moves",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "styleKey": "changelog-scroll-brake",
    "summary": "translateY sweep of ~2400px (~50f exponential decel); blur driven by frame-to-frame displacement deltas (0-6px, auto-zeroing); at the stop the row lifts on scale 1.03 with shadow + 3px outline while the rest fade to 0.38"
  },
  "TimelineTravel": {
    "name": "Timeline Travel",
    "card": "Timeline Travel",
    "category": "Data & Metrics",
    "categoryKey": "data",
    "styleKey": "timeline-travel",
    "summary": "Timeline lateral travel — the camera accelerates along the horizontal version scale; a card pops up for a brief pause at each tick, ending with a hard stop and push-in on the final mark"
  },
  "AssembleThenTypeFlyin": {
    "name": "Assemble, Then Type Fly-In",
    "card": "Assemble Then Type Fly-In",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "assemble-then-type-flyin",
    "summary": "On an empty dark grid, textless component skeletons fly in from all directions and dock; then copy flies in character by character from 3D space, rotating into place — headlines first, captions after — until the page takes shape"
  },
  "AuroraBloomBgFlip": {
    "name": "Aurora Bloom, Flip to Dark",
    "card": "Aurora Bloom BG Flip",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "aurora-bloom-bg-flip",
    "summary": "Purple-orange soft-focus blobs rise from the bottom of a light-gray base; the whole background then darkens to near-black in ~0.36s while the blobs compress to afterglow; copy swaps with blur-out/blur-in (a gap between lines, no cross-fade)"
  },
  "BrandFrameSnap": {
    "name": "Brand Frame Snap",
    "card": "Brand Frame Snap",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "brand-frame-snap",
    "summary": "Brand-frame grammar — a thick solid frame grows around the full screen ahead of the content and the screen-recording window lands inside it; on mode switch the frame hard-flips color on the same frame and the in-window layout swaps with it — one borderColor handles chapter navigation, status signaling, and brand presence"
  },
  "DashboardGlowHighlightPill": {
    "name": "Golden Pill Guide",
    "card": "Golden Pill Guide",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "dashboard-glow-highlight-pill",
    "summary": "Golden type hangs on a black field while a data dashboard rises in with perspective from below and keeps drifting in 3D; a golden glow tours from the right down to the bottom and stretches into a pill, then traces the popover's glowing outline from there"
  },
  "LineUnfoldPanel": {
    "name": "Line Unfold Panel",
    "card": "FUI HUD Moves",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "line-unfold-panel",
    "summary": "scaleX 0→1 (snapped out in 5f on out-poly4) then scaleY 3px→full height (9f out-cubic), with content fading in a beat early; exit mirrors the order in reverse"
  },
  "ReticleLockOn": {
    "name": "Reticle Lock-On",
    "card": "FUI HUD Moves",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "reticle-lock-on",
    "summary": "Four L corners = four mirrors of one rectangle pair; fly-in (10f out-cubic) and shrink (2.2×→0.94×→1 overshoot rebound) are decoupled; on the lock frame the target glints and the label pops on back()"
  },
  "FlylineArc": {
    "name": "Flyline Arc",
    "card": "Glow & Flyline",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "flyline-arc",
    "summary": "Hand-drawn bezier sampled into 100 segments growing over 22f out-cubic; the glowing head mounts conditionally to lead, segment opacity fading with distance from the head; stroke pulse at the landing point, ready to relay"
  },
  "GlowOrbAmbient": {
    "name": "Glow Orb Ambient",
    "card": "Glow & Flyline",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "glow-orb-ambient",
    "summary": "Three 500-700px radial glow orbs with blur(100px) drifting on dual sines; card-edge glow driven by the max of distance-weighted [180,720]px→[1,0] falloffs"
  },
  "OrbFlylineRelay": {
    "name": "Orb Flyline Relay",
    "card": "Glow & Flyline",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "orb-flyline-relay",
    "summary": "A+B welded: the orb surge and card pulse share the landing frame, brightening 1+1.6×surge, rising in 5f and dissipating over 15f"
  },
  "AttentionBounce": {
    "name": "Attention Bounce",
    "card": "Icon Performance Moves",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "attention-bounce",
    "summary": "Bouncing translateY with easing build-up plus landing-frame scaleX/Y squash and dust particles; on the peak frame the camera pushes to 1.08, and settling triggers a panel card pop-out"
  },
  "PopBurstConfirm": {
    "name": "Pop Burst Confirm",
    "card": "Icon Performance Moves",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "pop-burst-confirm",
    "summary": "Scale wind-up–overshoot–settle spring plus N radial lines on translate and a ring on scale/opacity, ~20f total, then the label pops out"
  },
  "AnimeImpact": {
    "name": "Anime Impact Frame",
    "card": "Impact Feedback",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "anime-impact",
    "summary": "On the crash-zoom impact stop: 3f of full-frame negative invert + radial concentration lines + red/cyan chromatic split, all cleared on frame 4"
  },
  "HitCounter": {
    "name": "Hit Counter",
    "card": "Impact Feedback",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "hit-counter",
    "summary": "Three cards slam in sequence; each hit = 2f hit-stop + damage number float-up + the ×N counter jumping higher each time"
  },
  "HalationBloom": {
    "name": "Halation Bloom",
    "card": "Light Play",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "halation-bloom",
    "summary": "A copy of the text sits beneath as a blur+brightness halo layer; from the impact-stop frame it flares out one ring then settles into steady soft glow"
  },
  "SheenSweepRetry": {
    "name": "Light Play · SheenSweepRetry",
    "card": "Light Play",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "summary": "Three light moves — spotlight-sweep (a spotlight sweeping the copy), sheen (single-point glint), halation-bloom (impact-stop halo bleed)"
  },
  "SpotlightSweepReveal": {
    "name": "Light Play · SpotlightSweepReveal",
    "card": "Light Play",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "summary": "Three light moves — spotlight-sweep (a spotlight sweeping the copy), sheen (single-point glint), halation-bloom (impact-stop halo bleed)"
  },
  "LineBoil": {
    "name": "Line Boil",
    "card": "Line Boil",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "line-boil",
    "summary": "Line boil — during holds, text/stroke outlines twitch slightly every 3 frames like hand-inked redraws, keeping the still frame feeling alive"
  },
  "RadialRipplePhoneChips": {
    "name": "Radial Ripple Phone Chips",
    "card": "Radial Ripple Phone Chips",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "radial-ripple-phone-chips",
    "summary": "Four concentric rings breathe out of phase like water ripples on a light-gray base; inside the centered phone mockup the feed slow-scrolls on its own while white chips spring-pop in on both sides and float"
  },
  "RisoBeatPump": {
    "name": "Riso Print Hits · RisoBeatPump",
    "card": "Riso Print Hits",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "summary": "Two misregistration moves — riso-misregistration-hit (single impact frame: on the crash-stop the two-color plates split and shake twice into register) and riso-beat-pump (beat pump: a size jump per beat with the misregistration escalating)"
  },
  "RisoMisregistrationHit": {
    "name": "Riso Print Hits · RisoMisregistrationHit",
    "card": "Riso Print Hits",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "summary": "Two misregistration moves — riso-misregistration-hit (single impact frame: on the crash-stop the two-color plates split and shake twice into register) and riso-beat-pump (beat pump: a size jump per beat with the misregistration escalating)"
  },
  "ScanBracketSweep": {
    "name": "Scan Bracket Sweep",
    "card": "Scan Bracket Sweep",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "scan-bracket-sweep",
    "summary": "A skeleton document pops to center, L-shaped viewfinder brackets drop into the four corners, and a 2.5px solid line with a gradient tail sweeps the document 5 times — the document never moves; only the light reads it"
  },
  "ScanlineAnnotateFocus": {
    "name": "Scanline Annotate Focus",
    "card": "Scanline Annotate Focus",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "scanline-annotate-focus",
    "summary": "A bright scanline sweeps down the page; where it passes, camera viewfinder brackets pop in order (1.75× converge-to-focus + slight overshoot), then mono micro-captions type out beside them while the top status line counts 00/06→06/06 in sync"
  },
  "ScanlineAssembleFlyin": {
    "name": "Scanline Assemble Fly-In",
    "card": "Scanline Assemble Fly-In",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "scanline-assemble-flyin",
    "summary": "The page opens as an empty dark grid with a bright scanline sweeping down; at each block's landing spot its component flies in from off-screen to dock, with motion-blur ghosting and a settle flash — the scan ends exactly as the page finishes assembling"
  },
  "ImpactBurstKit": {
    "name": "Impact Burst Kit",
    "card": "Slam Entrance Moves",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "impact-burst-kit",
    "summary": "B's three-piece kit plus a shockwave front that scans neighboring cards on precisely computed radius-distance frames; neighbors kick out 30px + rotate ±3° and spring back damped"
  },
  "KanadaPerspectiveSnap": {
    "name": "Kanada Perspective Snap",
    "card": "Slam Entrance Moves",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "kanada-perspective-snap",
    "summary": "Slams in over 18f via perspective 300→1500px + rotate3d 58°→0 + scale 1.7→1; the last 4f overshoot +5° then flatten, the long diagonal shadow squaring off"
  },
  "ScoreSlam": {
    "name": "Score Slam",
    "card": "Slam Entrance Moves",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "score-slam",
    "summary": "The card slams down from scale 2.5/rotate 5° over six frames on Easing.in(quad); on the landing frame a ring spreads, dust scatters, and the screen shakes — all in the same frame"
  },
  "CornerSpotlightReveal": {
    "name": "Corner Spotlight Develop",
    "card": "Spotlight Sweep Moves",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "corner-spotlight-reveal",
    "summary": "Corner constant-speed develop: a radial spotlight from the top-left expands at a strictly linear radius; what it touches develops, what it misses stays black, until the full screen lights up — light as the transition"
  },
  "GlowWakeSleepPanel": {
    "name": "Wake/Sleep Glow Sweep",
    "card": "Spotlight Sweep Moves",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "glow-wake-sleep-panel",
    "summary": "Wake/sleep sweep: a radial develop mask tracks the light head left to right at constant speed with a three-layer purple edge glow hugging the top edge; it outlines the logo passing, lights a vertical afterglow at the right edge, and the panel sinks back into darkness in the tail"
  },
  "SlideSpotlightPan": {
    "name": "Edge Glow Pan",
    "card": "Spotlight Sweep Moves",
    "category": "Light & Emphasis",
    "categoryKey": "effects",
    "styleKey": "slide-spotlight-pan",
    "summary": "Edge-glow pan: the light wraps the top-left vertical edge, turns the corner, then travels along the top edge with purple glow bleeding into the UI's upper inside; the spotlight head develops while moving right at constant speed + the panel slides left at constant speed = the feel of a camera pan right"
  },
  "StreamResponse": {
    "name": "AI Response Stream-In",
    "card": "AI Response Stream-In",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "styleKey": "ai-stream-response",
    "summary": "The AI response panel first lands one readable summary line, then evidence rows with status icons stream in one by one, finally converging into a completed state"
  },
  "AutolayoutGapDial": {
    "name": "Autolayout Gap Dial",
    "card": "Autolayout Gap Dial",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "styleKey": "autolayout-gap-dial",
    "summary": "Gap dial drives the layout — a row of link blocks with selection outlines + gap annotations; badge digits tick per step, blocks get pushed apart live by the parameter and spring back into place — a visualization of \"parameter-driven layout\""
  },
  "DiagramCascadeBuild": {
    "name": "Canvas Materialize · DiagramCascadeBuild",
    "card": "Canvas Materialize Moves",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "summary": "Two \"materialize onto canvas\" moves — panel-to-canvas row-flip cards (table rows arc out of the panel and morph across containers into canvas cards) and diagram-cascade (after the prompt types, nodes pop in tier by tier with connectors growing ahead of the nodes)"
  },
  "PanelToCanvasMaterialize": {
    "name": "Canvas Materialize · PanelToCanvasMaterialize",
    "card": "Canvas Materialize Moves",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "summary": "Two \"materialize onto canvas\" moves — panel-to-canvas row-flip cards (table rows arc out of the panel and morph across containers into canvas cards) and diagram-cascade (after the prompt types, nodes pop in tier by tier with connectors growing ahead of the nodes)"
  },
  "ChipGridSingleSelectBlackout": {
    "name": "Chip Grid Blackout",
    "card": "Chip Grid Blackout",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "styleKey": "chip-grid-single-select-blackout",
    "summary": "Five option chips fade in centered 3+2; on select, one frame of a gray pressed block inserts first, then within a few frames the fill goes pure black and the text white with a 1→1.04→1 micro-rebound while the rest fade to 18% but stay locked in place; remaining items then zero out, the black chip lifts and narrows, and a formula row surfaces beneath"
  },
  "ChipLiftToUserPill": {
    "name": "Chip Lift to User Pill",
    "card": "Chip Lift to User Pill",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "styleKey": "chip-lift-to-user-pill",
    "summary": "The target chip in the grid hard-inverts to black-on-white for 3f while the rest fade and shrink staggered by Manhattan distance; the black chip grows rightward into a pill anchored at its left edge, types the name character by character with a green dot lighting up, then stretches a 1px connector to a circular badge"
  },
  "CursorCastEnsemble": {
    "name": "Collab Cursor Cast · CursorCastEnsemble",
    "card": "Collab Cursor Moves",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "summary": "Two moves casting cursors as actors — dialogue-duet (two cursors duetting in the dark: approach, orbit, light handoff, swelling into the transition) and cast-ensemble (five cursors as an ensemble atmosphere layer: staggered fly-ins + sine drift + typing cameo + gathering to watch)"
  },
  "CursorDialogueDuet": {
    "name": "Collab Cursor Cast · CursorDialogueDuet",
    "card": "Collab Cursor Moves",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "summary": "Two moves casting cursors as actors — dialogue-duet (two cursors duetting in the dark: approach, orbit, light handoff, swelling into the transition) and cast-ensemble (five cursors as an ensemble atmosphere layer: staggered fly-ins + sine drift + typing cameo + gathering to watch)"
  },
  "CommandPaletteSummon": {
    "name": "Command Palette Summon",
    "card": "Command Palette Summon",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "styleKey": "command-palette-summon",
    "summary": "Command palette arrival — the whole screen dims and blurs, the ⌘K panel drops in with an overshoot bounce, candidate rows surface staggered, and the list narrows live as you type"
  },
  "GlassPillDictationTyping": {
    "name": "Glass Pill Dictation",
    "card": "Glass Pill Dictation",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "styleKey": "glass-pill-dictation-typing",
    "summary": "On pure black, a fixed-width glass pill pops in ~1.25× oversized and settles into place with an accent light laid from dim-left to bright-right inside; the cursor leads, a placeholder sentence types in, the light dims with typing progress, ending as a neutral dark glass strip"
  },
  "HashtagToPillMaterialize": {
    "name": "Hashtag to Pill",
    "card": "Hashtag Materialize",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "styleKey": "hashtag-to-pill-materialize",
    "summary": "Hashtag types into matter — \"#word\" types out centered (solid red cursor constant), a 1-frame hard cut turns it into a wide pill tag; after a hold it shrinks and slides left into the page's tag slot, then another 1-frame hard cut reveals the finished page; a \"two hard cuts, one slide\" rhythm skeleton"
  },
  "CursorPerformancePunchIn": {
    "name": "Input Trigger Moves · CursorPerformancePunchIn",
    "card": "Input Trigger Moves",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "summary": "Two input-trigger moves — cursor-performance (a performative cursor click with push-in) and keycap-smash-cut (a keycap fuse igniting into a violent cut)"
  },
  "KeycapSmashCut": {
    "name": "Keycap Smash Cut",
    "card": "Input Trigger Moves",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "styleKey": "keycap-smash-cut",
    "summary": "Keycap bobs in a breathing hover → 3f flatten + bright-ring fuse + 30f of cards charging the lens from four sides in an accelerating roar + hard cut on the most violent frame to a still panorama with the keycap seated in the top bar"
  },
  "PickerCarouselFeatureCycle": {
    "name": "Picker Carousel Snap",
    "card": "Picker Carousel Snap",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "styleKey": "picker-carousel-feature-cycle",
    "summary": "Mobile-style vertical picker — the focus pill stays put while content passes through it; each item decelerates on a pronounced outQuint snap to a full stop, with opacity/size/gray layered by distance to center, and the pill does a barely-there scaleY breath on settle"
  },
  "SegmentedThumbHero": {
    "name": "Segmented Thumb Hero",
    "card": "Segmented Thumb Hero",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "styleKey": "segmented-thumb-hero",
    "summary": "The segmented control's thumb slide as hero close-up — an oversized pill segmented control floats in on a spring, an outlined arrow cursor slides in from off-screen and presses, the white thumb glides 8f ease-out to the other segment, and on arrival the new icon spring-pops while the old one retracts"
  },
  "PaletteThemeRipple": {
    "name": "Palette Theme Ripple",
    "card": "Theme Switch Moves",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "styleKey": "palette-theme-ripple",
    "summary": "Panel drops in on back(1.9) → types character by character → on Enter the panel ease-in collapses to 0 with a white highlight core pinning its spot → a circular clip ripples 12→1250px on cubic-out with a 5px white ring glowing both ways at the edge"
  },
  "ThemeSweepToggle": {
    "name": "Theme Sweep Toggle",
    "card": "Theme Switch Moves",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "styleKey": "theme-sweep-toggle",
    "summary": "Dark theme: a clip-path polygon with a 15° beveled edge sweeps the field (~38f out-poly3, fast then slow) with a 4px bright white edge + 18px glow, fading out 2f after the sweep; the dark version seats itself scale 1→0.995→1"
  },
  "TypeAndFilter": {
    "name": "Type & Filter",
    "card": "Type & Filter",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "styleKey": "type-and-filter",
    "summary": "Type a search on the real UI, the grid folds itself into a single card, click through into the detail page"
  },
  "VoiceWaveformLive": {
    "name": "Live Voice Waveform",
    "card": "Live Voice Waveform",
    "category": "Interaction & Feature Demos",
    "categoryKey": "interaction",
    "styleKey": "voice-waveform-live",
    "summary": "Live voiceprint in a record pill — 64 thin bars rise and fall with \"speech\", towering mid-band while talking and collapsing to a dotted line on pauses, the waveform rolling right-to-left; the full performance of speak → pause → speak → submit collapse"
  },
  "CraneRiseReveal": {
    "name": "Crane Rise Reveal",
    "card": "Crane Rise Reveal",
    "category": "Openers & Brand",
    "categoryKey": "opening",
    "styleKey": "crane-rise-reveal",
    "summary": "Crane-rise reveal — opens jammed on a close-up of one data row; the camera decelerates upward and back along Y as rows pour in until the whole dashboard fills the frame"
  },
  "DatavizLandscapeOpen": {
    "name": "Dataviz Landscape Open",
    "card": "Dataviz Landscape Open",
    "category": "Openers & Brand",
    "categoryKey": "opening",
    "styleKey": "dataviz-landscape-open",
    "summary": "Dark-field tributary-stream landscape opener — multiple flow lines converge into a trunk, fictional ID labels float on the lines, and the camera flies over low and slow with deep focus"
  },
  "Fracture": {
    "name": "Fracture Assemble & Scatter",
    "card": "Fracture",
    "category": "Openers & Brand",
    "categoryKey": "opening",
    "styleKey": "fracture",
    "summary": "5×5 tiles assemble from 3D shard state into a full poster ring by ring from center; hold a beat on the headline, then every shard accelerates away spinning, outward from center, off-screen"
  },
  "IconFieldColorize": {
    "name": "Icon Field Colorize",
    "card": "Icon Field Colorize",
    "category": "Openers & Brand",
    "categoryKey": "opening",
    "styleKey": "icon-field-colorize",
    "summary": "A matrix of grayscale mini-icons surfaces staggered to fill the screen; after a beat, multiple brand-colored horizontal wave bands sweep down ultra-fast and flip the whole field — the \"show the full feature landscape first, ignite the brand in an instant\" opener/closer card"
  },
  "LetterspaceMaterialize": {
    "name": "Letterspace Crystallize",
    "card": "Letterspace Materialize",
    "category": "Openers & Brand",
    "categoryKey": "opening",
    "styleKey": "letterspace-materialize",
    "summary": "Wide-tracked wordmark crystallizes via parallel continuous drawing — every letter starts its stroke on the same frame, strokes grow continuously like handwriting, and all close into the word on the same frame; the brand wordmark develops over an ambient backdrop"
  },
  "MagicianCardFlourish": {
    "name": "Magician Card Flourish",
    "card": "Magician Card Flourish",
    "category": "Openers & Brand",
    "categoryKey": "opening",
    "styleKey": "magician-card-flourish",
    "summary": "On pure black a blue star-flash ignites for 0.3s (X-shaped needle beams rotating 90° + a radial glow at center) and the card ejects from the flash point — an extreme-spin arc flying at the lens, spin decaying with proximity, snapping to a hard near-full-frame freeze, then a sheen sweep"
  },
  "OrbitRingTitleOpen": {
    "name": "Orbit Ring Title Open",
    "card": "Orbit Ring Title Open",
    "category": "Openers & Brand",
    "categoryKey": "opening",
    "styleKey": "orbit-ring-title-open",
    "summary": "Eight 16:9 content cards orbit evenly (45° apart) on a 700×375 ellipse at constant speed (cards never tilt; depth comes only from sin θ giving ±9% scale and z-order); card contents hold their first frame while the ring expands, all eight start playing together after f24; the centered title un-blurs word by word and sinks into place, a yellow marker block sweeps across from the left the instant the keyword lands, a mono subline floats up after, and the closing segment defocuses the line out while the ring keeps spinning into the next shot"
  },
  "SpotlightHeroCard": {
    "name": "Spotlight Hero Card",
    "card": "Spotlight Hero Card",
    "category": "Openers & Brand",
    "categoryKey": "opening",
    "styleKey": "spotlight-hero-card",
    "summary": "A spotlight sweeps the page and locks onto one card; after a 45° push-in the card pops up hovering, the beam traces its outline twice, then it settles back in place"
  },
  "StrokeSegmentBuild": {
    "name": "Stroke Segment Build",
    "card": "Stroke Segment Build",
    "category": "Openers & Brand",
    "categoryKey": "opening",
    "styleKey": "stroke-segment-build",
    "summary": "Broken strokes become the word — the title is split into a dozen-plus disconnected strokes that light up segment by segment out of order, unreadable for the first 70%; on the last segment's landing the meaning snaps into place"
  },
  "TextAsMask": {
    "name": "Text as Mask",
    "card": "Text as Mask",
    "category": "Openers & Brand",
    "categoryKey": "opening",
    "styleKey": "text-as-mask",
    "summary": "Text as video mask — the inside of the ultra-bold headline glyphs reveals a slowly panning product shot; at the end the glyphs scale 26× and overflow as the inner footage takes over the full screen"
  },
  "LogoStingButton": {
    "name": "Logo Sting Button",
    "card": "Edit Hook Moves",
    "category": "Outros",
    "categoryKey": "outro",
    "styleKey": "logo-sting-button",
    "summary": "logo-sting-button end-hook — after the outro logo locks, a 12f easter egg abruptly inserts then retracts; the trailer \"button ending\""
  },
  "GrainDissolve": {
    "name": "Grain Dissolve",
    "card": "Grain Dissolve",
    "category": "Outros",
    "categoryKey": "outro",
    "styleKey": "grain-dissolve",
    "summary": "The whole line bursts into boiling grain noise with a hatched selection frame surfacing; the noise cloud rapidly condenses into a larger glowing short wordmark, displacement decaying to zero for the freeze"
  },
  "LogoShrinkWordmarkLockup": {
    "name": "Logo Shrink Lockup",
    "card": "Logo Shrink Lockup",
    "category": "Outros",
    "categoryKey": "outro",
    "styleKey": "logo-shrink-wordmark-lockup",
    "summary": "A large neon-slit ring rapidly contracts into a solid small white O at center with an overshoot brake; the icon slides left to yield, letters glide in one by one to complete the lockup, and an accent-colored tagline closes"
  },
  "NeonTripleMarquee": {
    "name": "Neon Triple Marquee",
    "card": "Neon Triple Marquee",
    "category": "Outros",
    "categoryKey": "outro",
    "styleKey": "neon-triple-marquee",
    "summary": "Three opposing neon marquee rows recap — BETTER/FASTER/STRONGER as hollow outlined giant type stacked top/mid/bottom full-screen; odd/even rows scroll infinitely at constant speed in opposite directions, the three rows light up in 1/3-phase rotation, and the whole group fades at the end"
  },
  "OutroGroupPhotoLaunch": {
    "name": "Outro Group Photo Launch",
    "card": "Outro Group Photo Launch",
    "category": "Outros",
    "categoryKey": "outro",
    "styleKey": "outro-group-photo-launch",
    "summary": "Every element from across the piece flies in to surround the wordmark for a group photo; a crane-settle camera position + stage light + gold dust stage the launch-event close"
  },
  "UiStripAwayOutro": {
    "name": "UI Strip-Away Outro",
    "card": "UI Strip-Away Outro",
    "category": "Outros",
    "categoryKey": "outro",
    "styleKey": "ui-strip-away-outro",
    "summary": "Subtractive outro — after clicking Publish, the entire editor UI evaporates layer by layer from the edges inward with staggered timing; on black only the button remains, sliding to center and enlarging, then fading out to hand off to the wordmark title card"
  },
  "IconFlipBloomLogo": {
    "name": "UI to Brand · IconFlipBloomLogo",
    "card": "UI to Brand Morph",
    "category": "Outros",
    "categoryKey": "outro",
    "summary": "Two UI-to-brand morphs — icon-flip-bloom (the icon flips flat on Y into a vertical line that blooms into a flower mark + the wordmark settling letter by letter) and input-morph-assemble (the input field contracts into a pill while three primitives drop and gather into the logo's single petal)"
  },
  "InputMorphsIntoLogo": {
    "name": "UI to Brand · InputMorphsIntoLogo",
    "card": "UI to Brand Morph",
    "category": "Outros",
    "categoryKey": "outro",
    "summary": "Two UI-to-brand morphs — icon-flip-bloom (the icon flips flat on Y into a vertical line that blooms into a flower mark + the wordmark settling letter by letter) and input-morph-assemble (the input field contracts into a pill while three primitives drop and gather into the logo's single petal)"
  },
  "BeatCutAccelerando": {
    "name": "Beat Cut Accelerando",
    "card": "Beat Cut Moves",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "beat-cut-accelerando",
    "summary": "Six views hard-cut full-screen at halving intervals 16→12→8→6→4f, accelerating closer; the final cut freezes abruptly back to the main frame with a gentle push to close"
  },
  "PaparazziFlash": {
    "name": "Paparazzi Flash",
    "card": "Beat Cut Moves",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "paparazzi-flash",
    "summary": "Three white flashes each hard-cut to a different crop of the same footage (wide → card close-up → digit close-up) with shutter afterglow settling; the third flash lands on the digit finishing"
  },
  "BeatStepListThemeCycle": {
    "name": "Beat Step List Theme Cycle",
    "card": "Beat Step List Cycle",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "beat-step-list-theme-cycle",
    "summary": "Three-channel metronome — on a dark field the adjective list steps up one row per beat, a fixed pill at viewport center \"catches\" the next word and changes color, and the whole field's background swaps on the same beat; row, color, and field channels locked to one beat"
  },
  "DominoCascade": {
    "name": "Domino Cascade",
    "card": "Montage Rhythm",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "domino-cascade",
    "summary": "The title slams down → the shockwave pops up a row of cards → the last card crashes sideways into the sidebar entrance; momentum passes down the chain"
  },
  "DropBlackoutSlam": {
    "name": "Drop Blackout Slam",
    "card": "Montage Rhythm",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "drop-blackout-slam",
    "summary": "Mid-playback, one frame cuts to pure black silence for 12f, then the hero visual slams in with screen shake + a bright ring"
  },
  "WrightTripleCut": {
    "name": "Wright Triple Cut",
    "card": "Montage Rhythm",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "wright-triple-cut",
    "summary": "Three 10f ultra-tight close-ups hard-cut in a run (each \"hold 4 – move 3 – hold 3\"); the third whips back to a wide revealing the result"
  },
  "ComicPanelSplit": {
    "name": "Comic Panel Split",
    "card": "Panel Grid Moves",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "comic-panel-split",
    "summary": "Three panels, each a full-page clip-path 12° bevel crop + translate/scale camera setups (1x/1.9x/2.6x), popping in 2f apart; hold 18f with a slow push per panel to stay alive, the last panel's bevel expanding 12f out-cubic to swallow the screen"
  },
  "FlipGridReflow": {
    "name": "Flip Grid Reflow",
    "card": "Panel Grid Moves",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "flip-grid-reflow",
    "summary": "Two precomputed coordinate tables (row / 3×2 grid); each card flies 16f inOut-cubic with delay=i×1.5f and scale 1→1.28 with a 1.02 overshoot; after landing a 6f brightness 0.78 pulse washes the whole frame"
  },
  "GridFlashMosaic": {
    "name": "Grid Flash Mosaic",
    "card": "Panel Grid Moves",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "grid-flash-mosaic",
    "summary": "A 3×3 grid hard-mounts one cell every 2f in h(i) shuffled order (each cell enters 3f scale 1.18→1 + a 2f darkening pulse); the full wall breathes a beat, then the center cell swallows the screen at 3.28× over 14f on Easing.in(cubic)"
  },
  "QuadSplitParallelScenes": {
    "name": "Quad Split Parallel Scenes",
    "card": "Quad Split Scenes",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "quad-split-parallel-scenes",
    "summary": "The frame hard-cuts to a 2×2 quad grid with four quadrants running their own micro-scenes in parallel (typing, crash push, word-by-word, interaction chain), key beats offset 3-6 frames for information bombardment"
  },
  "JumpCutPunchIn": {
    "name": "Jump Cut Punch-In",
    "card": "Rhythm Interrupt Moves",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "jump-cut-punch-in",
    "summary": "transform-origin pinned to the target center; a three-step scale ladder jumps (zero tweening), each jump paired with a 2f darkening pulse as the tick"
  },
  "StrobeBlackFrames": {
    "name": "Strobe Black Frames",
    "card": "Rhythm Interrupt Moves",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "strobe-black-frames",
    "summary": "Full-screen black frames strobe per a hard-coded frame table (2f each, interval converging 8f→3f); the final flash lifts straight into a hard-cut zoom that lands"
  },
  "SakugaTimingShift": {
    "name": "Sakuga Timing Shift",
    "card": "Sakuga Timing Shift",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "sakuga-timing-shift",
    "summary": "Three-on-one-off beat — the element first moves in flipbook steps of 3 frames each, then at the climax snaps into per-frame silky sprint; the frame-rate quantization shift is itself the spectacle"
  },
  "SmearMultiples": {
    "name": "Smear Multiples",
    "card": "Smear Multiples",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "smear-multiples",
    "summary": "Afterimage multiples — while the card moves at speed it drags 4 clearly countable translucent copies that merge into one on landing; an animation-style stand-in for motion blur"
  },
  "SpectrumMorphUi": {
    "name": "Spectrum Morph UI",
    "card": "Spectrum Morph UI",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "spectrum-morph-ui",
    "summary": "Spectrum-morphed UI — the title's underline splits into a row of bars bouncing to the spectrum for two bars of music, then folds back into a straight line; music visualization growing on the UI"
  },
  "FreezeAnnotateReal": {
    "name": "Speed Ramp & Freeze · FreezeAnnotateReal",
    "card": "Speed Ramp & Freeze",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "summary": "Two rhythm techniques on non-linear frame remapping — speed ramp (fast → 0.2x stare → fast) and freeze-annotate (flow → freeze with a circling annotation → unfreeze)"
  },
  "SpeedRampReal": {
    "name": "Speed Ramp & Freeze · SpeedRampReal",
    "card": "Speed Ramp & Freeze",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "summary": "Two rhythm techniques on non-linear frame remapping — speed ramp (fast → 0.2x stare → fast) and freeze-annotate (flow → freeze with a circling annotation → unfreeze)"
  },
  "CardFootageCadence": {
    "name": "Card Footage Cadence",
    "card": "Trailer Grammar",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "card-footage-cadence",
    "summary": "Seven conditionally mounted segments (cut points 14/22/34/42/52/62): UI segments carry micro-motion (slow push / crop pan), title-card segments set black-background white type settling 1.05→1 with a micro-shrink"
  },
  "SmashCut": {
    "name": "Smash Cut",
    "card": "Trailer Grammar",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "smash-cut",
    "summary": "The roar section runs all Easing.in(quad): background push-in 1→1.55 + rotate 1.8°, five flying cards accelerating toward the lens staggered + velocity-gated blur; at 42f one frame hard-cuts to a still panorama with no animated properties"
  },
  "TrailerBumper": {
    "name": "Trailer Bumper",
    "card": "Trailer Grammar",
    "category": "Rhythm & Montage",
    "categoryKey": "rhythm",
    "styleKey": "trailer-bumper",
    "summary": "Three shots hard-cut at equal 9f lengths (0/9/18), each with an internal 1→1.04 micro-push to stay alive; 27-33f pure black silence, then from 33f the title fades in over 16f with a 44px out-cubic lift"
  },
  "BottomPushStackWipe": {
    "name": "Bottom Push Stack Wipe",
    "card": "Bottom Push Wipe",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "bottom-push-stack-wipe",
    "summary": "Bottom push chapter change — the new scene pushes up from the bottom edge with its full backdrop, physically shoving the old scene off-screen; several chapters push in a row, each with its own saturated base color, content pinned in its color-field coordinate system riding the backdrop"
  },
  "BubbleSwarmTakeover": {
    "name": "Bubble Swarm Takeover",
    "card": "Bubble Swarm Curtain",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "bubble-swarm-takeover",
    "summary": "Pearlescent bubble-swarm curtain transition — bubbles of mixed sizes drift in from off-screen swelling until they blanket the frame while the page \"washes out\" in sync; the cut hides at peak occlusion, and when the bubbles disperse outward the new scene is already there; an i18n text-pill variant can be mixed in"
  },
  "CardFlipReveal": {
    "name": "Card Flip Reveal",
    "card": "Card Flip Reveal",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "card-flip-reveal",
    "summary": "Feature card 3D flip reveal — cards flip 180° on the Y axis; as the front UI passes the thinnest edge point a highlight band glints across tracking the angle, the back reveals a large conclusion number, and the sweep runs across the row staggered"
  },
  "CardFlockTumble": {
    "name": "Card Flock Tumble",
    "card": "Card Flock Tumble",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "card-flock-tumble",
    "summary": "Three UI page cards tumble in from their thin side edges into a 3D stepped formation (crisp throughout, continuous silky splines); after settling they keep a slow rotation, then rapidly converge and get sucked into center, bursting a single turbulent smoke ring that spreads as giant type crosses to close"
  },
  "CircleMatchIris": {
    "name": "Circle Match Iris",
    "card": "Circle Match Iris",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "circle-match-iris",
    "summary": "Center-matched iris cut — the iris blasts open from the center of a circular element on the page, and the new page's circular chart connects on that same circle; the match cut gives the iris a semantic anchor"
  },
  "ColorBlockStepWipe": {
    "name": "Color Block Step Wipe",
    "card": "Color Block Step Wipe",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "color-block-step-wipe",
    "summary": "Two discrete color-block step wipes — A: a small center strip hard-jumps 3-5 steps into full screen (the badge pops in two jumps after takeover); B: a block eats the screen diagonally from a corner in 3 steps, carrying a page card that advances each jump"
  },
  "CubeNavigation": {
    "name": "Cube Navigation",
    "card": "Cube Navigation",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "cube-navigation",
    "summary": "Content wrapped across a 3D cube's six faces; the camera alternates front close-up → pull back to isometric to read the edges → turn a face and push in, stepping through, with per-face shading computed live from normal orientation"
  },
  "GradientTransition": {
    "name": "Gradient Transition",
    "card": "Gradient Transition",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "gradient-transition",
    "summary": "The background morphs smoothly across linear/radial/conic CSS gradients — angle, stops, center, and radius interpolated parameter by parameter, with cross-fades between segments to change type"
  },
  "LineCarryTransition": {
    "name": "Line Carry Transition",
    "card": "Line Carry Transition",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "line-carry-transition",
    "summary": "Line-carry lateral transition — scene A's progress bar extends off-frame, the camera tracks the line sideways, and the line corners mid-move to outline scene B's card frame, cut-free throughout"
  },
  "MosaicReframe": {
    "name": "Mosaic Reframe",
    "card": "Mosaic Reframe",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "mosaic-reframe",
    "summary": "12 tiles morph continuously across three layouts (regular grid / feature mosaic / diagonal waterfall chain), position and size interpolated independently with per-tile micro-stagger and holds between segments"
  },
  "BarnDoorSplit": {
    "name": "Barn Door Split",
    "card": "Page Turn Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "barn-door-split",
    "summary": "The old page's two 960px overflow containers fitted edge to edge slide outward off-screen together on Easing.in(cubic); a bright line + shadow inside the seam while the new page beneath meets them on scale 1.06→1"
  },
  "CubeRotate": {
    "name": "Cube Rotate",
    "card": "Page Turn Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "cube-rotate",
    "summary": "Two pages mounted on adjacent cube faces (rotateY 0/90° + translateZ W/2) with the scene layer turning -90°; the old face darkens as it turns out, the new brightens as it turns in, and at 45° the two faces pinch a dark ridge"
  },
  "PaperPlaneMessenger": {
    "name": "Paper Plane Messenger",
    "card": "Paper Plane Messenger",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "paper-plane-messenger",
    "summary": "Paper-plane messenger transition — after clicking \"send\", the camera pulls away from window A as a folded paper plane arcs out along a bezier (pitch following the tangent), the camera escorting it through multi-layer parallax props until it lands at window B's door and B scales up to take the screen"
  },
  "InkBleedReveal": {
    "name": "Ink Bleed Reveal",
    "card": "Print Texture Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "ink-bleed-reveal",
    "summary": "Print-texture transition — ink-bleed-reveal (filamented bleed edges soaking across to eat the old scene)"
  },
  "BlackCardTransition": {
    "name": "Shot Handoff · BlackCardTransition",
    "card": "Shot Handoff Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "summary": "Six shot-handoff moves — push-to-white, straight flight through black, focus handoff, black title card, whip-pan, and mask-wipe through a window (depth version included), selected by the energy gap"
  },
  "DarkTunnelTransition": {
    "name": "Shot Handoff · DarkTunnelTransition",
    "card": "Shot Handoff Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "summary": "Six shot-handoff moves — push-to-white, straight flight through black, focus handoff, black title card, whip-pan, and mask-wipe through a window (depth version included), selected by the energy gap"
  },
  "FocusHandoffTransition": {
    "name": "Shot Handoff · FocusHandoffTransition",
    "card": "Shot Handoff Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "summary": "Six shot-handoff moves — push-to-white, straight flight through black, focus handoff, black title card, whip-pan, and mask-wipe through a window (depth version included), selected by the energy gap"
  },
  "MaskWipeReal": {
    "name": "Shot Handoff · MaskWipeReal",
    "card": "Shot Handoff Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "summary": "Six shot-handoff moves — push-to-white, straight flight through black, focus handoff, black title card, whip-pan, and mask-wipe through a window (depth version included), selected by the energy gap"
  },
  "PortalWipeV2": {
    "name": "Shot Handoff · PortalWipeV2",
    "card": "Shot Handoff Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "summary": "Six shot-handoff moves — push-to-white, straight flight through black, focus handoff, black title card, whip-pan, and mask-wipe through a window (depth version included), selected by the energy gap"
  },
  "WhipBrakeReal": {
    "name": "Shot Handoff · WhipBrakeReal",
    "card": "Shot Handoff Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "summary": "Six shot-handoff moves — push-to-white, straight flight through black, focus handoff, black title card, whip-pan, and mask-wipe through a window (depth version included), selected by the energy gap"
  },
  "WhipPanReal": {
    "name": "Shot Handoff · WhipPanReal",
    "card": "Shot Handoff Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "summary": "Six shot-handoff moves — push-to-white, straight flight through black, focus handoff, black title card, whip-pan, and mask-wipe through a window (depth version included), selected by the energy gap"
  },
  "GlitchDisplace": {
    "name": "Glitch Displace",
    "card": "Tear Streak Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "glitch-displace",
    "summary": "Tear transition — glitch-displace noise tearing (hard cut amid 16 horizontally displaced jittering strips); strip-level tearing with digital-glitch semantics"
  },
  "InvisibleCut": {
    "name": "Invisible Cut",
    "card": "Hidden Cut Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "invisible-cut",
    "summary": "An ultra-widescreen card with heavy motion blur sweeps right past the lens; during the blur-packed occlusion frame the background hard-cuts A→B and the card flies out — the audience believes it was one shot"
  },
  "LightLeakBurn": {
    "name": "Light Leak Burn",
    "card": "Hidden Cut Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "light-leak-burn",
    "summary": "Three amber soft glows sweep diagonally; on the peak frame the light swallows ~70% of the old page, the cut lands, and by the time the light dissipates the new page is already in place"
  },
  "VersusSlam": {
    "name": "Versus Slam",
    "card": "Hidden Cut Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "versus-slam",
    "summary": "Two half-screens with beveled edges accelerate in from off-screen and collide; on the impact frame: white flash + screen shake + a VS stamp — the cut point is the collision itself"
  },
  "LetterformZoom": {
    "name": "Letterform Zoom",
    "card": "Travel-Through Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "letterform-zoom",
    "summary": "The giant headline's counter (an SVG-mask cutout) reveals the new page; an exponential push threads the hole, and the instant it fills the frame the new page takes over while leftover strokes fling off-screen"
  },
  "SharedElementMorph": {
    "name": "Shared Element Morph",
    "card": "Travel-Through Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "shared-element-morph",
    "summary": "The full-screen close-up card shrinks + moves + grows rounded corners, flying seamlessly into its slot in the dashboard grid with a 3% overshoot landing"
  },
  "WhiteFlashLogoSimplifyCut": {
    "name": "White Flash Simplify Cut",
    "card": "White Flash Simplify Cut",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "white-flash-logo-simplify-cut",
    "summary": "A liquid gradient wordmark rests with flowing light; one beat of white-out overexposure and the flat wordmark fades in on white and freezes — texture stripped in a single white flash"
  },
  "BlindsSlice": {
    "name": "Blinds Slice",
    "card": "Geometric Wipe Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "blinds-slice",
    "summary": "12 160px columns with overflow hidden + the inner full page aligned by negative margins; within each column A contracts scaleX(1-p) from the left edge and B expands scaleX(p) from the right, staggered delays forming a wave with a bright seam line sweeping along it"
  },
  "ClockWipe": {
    "name": "Clock Wipe",
    "card": "Geometric Wipe Transitions",
    "category": "Transitions",
    "categoryKey": "transition",
    "styleKey": "clock-wipe",
    "summary": "A fan-shaped clip-path polygon overlays page B; the hand sweeps clockwise 360° at constant speed from 12 o'clock at screen center, revealing B as it passes, with multi-layer bright lines along the sweep"
  },
  "BlurSlide": {
    "name": "Blur Slide",
    "card": "Blur Slide",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "blur-slide",
    "summary": "The title enters word by word: y 40→0 + blur 10→0 + opacity 0→1 on one shared outCubic converging in sync, words ~3.5f apart; the subtitle follows staggered before the title finishes"
  },
  "BraceExpand": {
    "name": "Brace Expand",
    "card": "Brace Expand",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "brace-expand",
    "summary": "A pair of braces first appears small at center, then slides out to ±148px with overshoot and scales up to title size; the text's clip width binds strictly to the brace gap, revealing like a curtain being drawn, with letter-spacing relaxing subtly after settling"
  },
  "BrandInkOpen": {
    "name": "Brand Ink Open",
    "card": "Brand Ink Open",
    "category": "Openers & Brand",
    "categoryKey": "opening",
    "styleKey": "brand-ink-open",
    "summary": "An ink crosshair draws → the wordmark stamps in letter by letter → typewriter subtitle → a full second of stillness, then it floats up and dissipates"
  },
  "CelFlashStomp": {
    "name": "Cel Flash Stomp",
    "card": "Cel Flash Stomp",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "cel-flash-stomp",
    "summary": "Background-flash word-stomp — big words stamp in askew one per beat; at each word's landing the background layer strobes between two solids for a few frames while the text doesn't move a pixel; the anime special-move title card translated to UI"
  },
  "CountdownArcScatter": {
    "name": "Countdown Arc Scatter",
    "card": "Countdown Arc",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "countdown-arc-scatter",
    "summary": "A white dial with 9 equal digits laid tangent along a large arc; the whole dial sweeps 96° and decelerates to a hard stop, \"5\" parking at the apex then translating into place as the title's first character while the rest scatter in place with blur; the title fades in word by word with the last word turning accent-colored"
  },
  "FlyingWords": {
    "name": "Flying Words",
    "card": "Flying Words",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "flying-words",
    "summary": "22 keywords laid on a flattened elliptical cross-section at golden angles, flying along z from -1750px to 800px in front of the camera and brushing past; opacity runs a [0,1,0.5,0.2,0] life curve over exactly 2 seamless revolutions"
  },
  "GlitchCycle": {
    "name": "Glitch Cycle",
    "card": "Glitch Cycle",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "glitch-cycle",
    "summary": "Four status phrases cycle through the same row of mono slots; each enters/exits fully scrambled on probability keyframes [1,0,0,0.1,0,0,1] with occasional single-character jitters mid-run, cuts layered with RGB split and whole-line offset; the last phrase's probability closes to 0 for a clean ending"
  },
  "GradientWordSweep": {
    "name": "Gradient Word Sweep",
    "card": "Gradient Word Sweep",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "gradient-word-sweep",
    "summary": "In a black slogan, keywords get \"charged\" by gradient light sweeping left to right — the wavefront characters glow strongest, decaying behind; once full, thin magenta lightning links the characters and the whole word breathes in steady glow"
  },
  "LeadWordZoomAssemble": {
    "name": "Lead Word Zoom Assemble",
    "card": "Lead Word Zoom",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "lead-word-zoom-assemble",
    "summary": "The lead word opens at 2.3× size center-frame, pushing in another 6% during the hold; one curve then both shrinks it back to final size and slides the whole line left into place while later words get pushed in from 0.5em right of their slots; the pivot pins horizontally to the lead word's center and vertically to the baseline (measured on mount), the subline floats out in the same window as the line rises, and after a beat the whole scene crash-zooms in and defocuses to hand off"
  },
  "MarkerUnderlineTitle": {
    "name": "Marker Underline Title",
    "card": "Marker Underline",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "marker-underline-title",
    "summary": "After the headline lands, a marker underline draws fast left-to-right beneath the keyword — variable-width stroke, rough edges, a slight upward slope following the italic slant, hugging the letter bottoms"
  },
  "OutlineWordFill": {
    "name": "Outline Word Fill",
    "card": "Outline Word Fill",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "outline-word-fill",
    "summary": "A hollow word (1px gray stroke, weight 500) contracts from 3.2× into place; a large dashed circle then closes in from 2.8× around the word and slowly rotates while horizontal dashed lines reach in from the frame edges; the stroke brightens slightly first, the solid white ignites within 0.6 of a frame, and one flash of glow freezes it"
  },
  "PaperTitleCard": {
    "name": "Paper Title Card",
    "card": "Paper Title Card",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "paper-title-card",
    "summary": "One sentence presses onto paper word by word, one word accented in colored italic, closing on a dash"
  },
  "PillChipSlotCycleHandled": {
    "name": "Pill Chip Slot Cycle",
    "card": "Pill Slot Squeeze",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "pill-chip-slot-cycle-handled",
    "summary": "In the white \"Your `chip` Handled\" pattern, the word inside the dark pill rolls vertically; the pill's width interpolates smoothly from pre-measured text widths, squeezing the flanking text naturally, with 13%-opacity gray ghost items peeking above and below"
  },
  "PillSlotCycle": {
    "name": "Pill Slot Cycle",
    "card": "Pill Slot Cycle",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "pill-slot-cycle",
    "summary": "In-sentence slot cycle — the fixed stem stays pinned while the trailing pill badge slot-rolls every ~0.7s (the old word exits upward accelerating, the new one slides in from below with blur); after N feature words it settles into the complete sentence"
  },
  "Scramble": {
    "name": "Scramble Lock",
    "card": "Scramble Lock",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "scramble",
    "summary": "The whole mono line first high-speed scrambles every 2 frames, then locks into real characters left to right, each lock flashing a blue-white highlight — seeded, reproducible decryption feel"
  },
  "SplitFlapFlip": {
    "name": "Split Flap Title",
    "card": "Split Flap Title",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "split-flap-title",
    "summary": "Airport split-flap title — each character is a two-half mechanical flap cell flipping through 2 scrambles before clicking onto its target letter, cascading left to right in a wave"
  },
  "TextColumnConverge": {
    "name": "Two-Word Converge",
    "card": "Two-Word Converge",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "text-column-converge",
    "summary": "Two words face off and converge — left \"NEW\" and a right feature word pinned at equal screen margins hard-cutting through rotations with zero shrink throughout; only on the last word do they make the single ease-in-out slide to center and bite into a phrase, with micro-copy surfacing near-instantly below; a reveal-style closer card"
  },
  "TitleDemoteToLabel": {
    "name": "Title to Label",
    "card": "Title Demote to Label",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "title-demote-to-label",
    "summary": "Two headline-demotion moves — A: the centered headline develops, holds a beat, then continuously shrinks 0.3× and translates to the top-left to become the section label as the content area grows beneath; B: the same routine but entering with a text-selection highlight block that sweeps in and is removed"
  },
  "LetterformDriftAssembly": {
    "name": "Type Assembly · LetterformDriftAssembly",
    "card": "Type Assembly",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "summary": "Four type-assembly moves — split-text-stagger (per-letter split-rise), letterform-drift-assembly (drift converge), tracking-expand-reveal (tracking breath), text-on-path (flow along a line)"
  },
  "SplitTextStagger": {
    "name": "Split Text Stagger",
    "card": "Type Assembly",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "split-text-stagger",
    "summary": "Each letter rises inside an overflow box translateY(115%→0) with a 10% overshoot, delay i×2f, baseline growing in sync"
  },
  "TextOnPath": {
    "name": "Text on Path",
    "card": "Type Assembly",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "text-on-path",
    "summary": "Characters file in along a bezier curve (rotated to the tangent angle), squaring level within 12f on arrival"
  },
  "TrackingExpandReveal": {
    "name": "Type Assembly · TrackingExpandReveal",
    "card": "Type Assembly",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "summary": "Four type-assembly moves — split-text-stagger (per-letter split-rise), letterform-drift-assembly (drift converge), tracking-expand-reveal (tracking breath), text-on-path (flow along a line)"
  },
  "LetterDropPhysics": {
    "name": "Letter Drop Physics",
    "card": "Type Entrance",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "letter-drop-physics",
    "summary": "Characters crash down staggered from above with gravity acceleration + two decaying bounces + tilted standing; on the final beat everyone squares up together"
  },
  "ScrambleDecode": {
    "name": "Scramble Decode",
    "card": "Type Entrance",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "scramble-decode",
    "summary": "All characters hold in a high-speed scramble, then lock into real ones left to right, each lock flashing a 2f invert while the bottom progress bar advances in sync"
  },
  "FontWeightPump": {
    "name": "Font Weight Pump",
    "card": "Type Rhythm Sync",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "font-weight-pump",
    "summary": "On the hit frame the strokes instantly thicken (stroke + weight jump), springing back over ~10f; stressed beats stretch an extra 8% wider"
  },
  "KaraokeFillSync": {
    "name": "Karaoke Fill Sync",
    "card": "Type Rhythm Sync",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "karaoke-fill-sync",
    "summary": "Each word fills bright left-to-right at reading pace and holds once read; the active word carries a follow-along underline"
  },
  "TerminalTypewriter": {
    "name": "Terminal Typewriter",
    "card": "Typewriter Moves",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "terminal-typewriter",
    "summary": "The command types at 2f/char with the cursor blinking as an f%12<6 square wave; on Enter the whole scene crash-pushes 6f scale 1→3.2 (origin locked to the command line's center) + 2f of 10px blur, hard-cutting to the dashboard settling 1.06→1"
  },
  "TypewriterErrorRetype": {
    "name": "Typewriter Moves · TypewriterErrorRetype",
    "card": "Typewriter Moves",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "summary": "Two typewriter moves — terminal-typewriter (the finished command detonates the scene change) and error-retype (a \"took it back\" three-act of deleting and retyping)"
  },
  "TypingCodeBlock": {
    "name": "Typing Code Block",
    "card": "Typing Code Block",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "typing-code-block",
    "summary": "The same syntax-highlighted code shown two ways side by side — left: line-level stagger 4f fade-in rising 8px; right: per-character typing with characters keeping their token colors, the current character backed by a #3a4468 block cursor"
  },
  "VerticalWordRollBlurCycle": {
    "name": "Vertical Word Roll",
    "card": "Vertical Word Roll",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "vertical-word-roll-blur-cycle",
    "summary": "The sentence-final word becomes a vertical roller: 3 swaps at 0.55s each (70% outQuint + 30% outBack — fast then ultra-slow with a micro overshoot); adjacent rows take vertical blur and desaturation by distance, and the centered word tints from gray to accent the instant it lands"
  },
  "WordRelayFilmstrip": {
    "name": "Word Relay Filmstrip",
    "card": "Word Relay Filmstrip",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "word-relay-filmstrip",
    "summary": "A left column of equal-height alternating black/white page cards steps-scrolls while a serif headline word relays in place (noun constant + verb rotating) — the column advances one step only at the word switch, with the word block's vertical center precisely aligned to the current page card's midpoint"
  },
  "WordRelayGeometry": {
    "name": "Word Relay Geometry",
    "card": "Word Relay Geometry",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "word-relay-geometry",
    "summary": "Three benefit words each carry a dedicated geometry relay — a dashed circle spins and contracts → three solid circles trim in sequence (0.06 phase offset) → a metallic sheen sweeps and a beat later it collapses to pure white; the old word shrinks to 0.86 and fades as the new word reveals stroke→fill"
  },
  "AvatarBracketCarousel": {
    "name": "Avatar Bracket Carousel",
    "card": "Avatar Bracket Carousel",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "avatar-bracket-carousel",
    "summary": "\"Your ___ teammates\" fill-in typesetting: the four-corner focus bracket stays pinned in the sentence while the avatar queue spring-rotates vertically three times inside it — entering magnified and crisp, exiting scaled down, faded, and blurred by distance, with role labels swapping in sync and the bracket breathing 7% at each switch"
  },
  "BezierSourceConvergeMerge": {
    "name": "Bezier Converge Merge",
    "card": "Bezier Converge Merge",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "bezier-source-converge-merge",
    "summary": "Four source nodes on the left each connect by a thin bezier to one convergence point on the right; the curves draw on left-to-right staggered first, nodes slide along their own curves toward the point accelerating in three stages to vanish, an accent-colored packet rides the path throughout, and after the merge the curves erase backward from the left leaving only the circular badge"
  },
  "CardStack": {
    "name": "Card Stack Fan",
    "card": "Card Stack Fan",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "card-stack",
    "summary": "8 cards spring in one by one from below the screen into a stack; once all land, the whole stack fans out into a 3D arc in one move — each rotated 8° by index, shifted 34px, and pushed back one z layer"
  },
  "Carousel3D": {
    "name": "Carousel 3D",
    "card": "Carousel 3D",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "carousel-3d",
    "summary": "8 cards arrange by sin/cos into a 190px-radius ring rotating one full circle at constant speed; each card only revolves around Y while billboard-facing outward, with front/back layers textured in matching orientation + backface-visibility:hidden so cards stay upright at all times; the camera stays pinned in a shallow high-angle close shot"
  },
  "ClonerDepthEcho": {
    "name": "Cloner Depth Echo",
    "card": "Cloner Depth Echo",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "cloner-depth-echo",
    "summary": "Cloner depth echo — the hero card instantly \"photocopies\" 7 translucent clones into a diagonal depth line; after a beat the whole column accelerates back into the original, merging + bouncing"
  },
  "DeckDealFlyin": {
    "name": "Deck Deal Fly-In",
    "card": "Deck Deal Fly-In",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "deck-deal-flyin",
    "summary": "Opens orbiting a physical deck close-up against a dark metallic backdrop; after pulling back to the page, a stack of cards slings into the grid like a dealer's throw with hard acceleration, the camera chasing the scroll and holding half a second once the board fills"
  },
  "DocParkLeftPillDeal": {
    "name": "Doc Park, Pills Dealt",
    "card": "Doc Park Pill Deal",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "doc-park-left-pill-deal",
    "summary": "The document doesn't fade — it slides left leaving ~35% width and shrinks to 0.92; on the right, three white outlined pills deal slowly at narration pace (outBack pop-in), each settling as its caption darkens word by word and the whole line fades before the next arrives, while the left document auto-scrolls imperceptibly to keep \"being read\""
  },
  "DocumentTypewriterReveal": {
    "name": "Document Typewriter Reveal",
    "card": "Document Typewriter",
    "category": "Type & Title Cards",
    "categoryKey": "typography",
    "styleKey": "document-typewriter-reveal",
    "summary": "A fully typeset document \"writes\" itself behind the cursor, the sidebar keeps pace, and history entries drop into their tracks one by one"
  },
  "DrawSvgTrace": {
    "name": "SVG Draw Trace",
    "card": "SVG Draw Trace",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "draw-svg-trace",
    "summary": "Stroke-grow annotation — an ink line with a nib runs the element's outline to \"draw\" it, flashing black at the moment of closure to hand off as content fades in; the same routine can underline a title"
  },
  "AxialStretch": {
    "name": "Axial Stretch",
    "card": "Element Body Moves",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "axial-stretch",
    "summary": "Velocity-differential-driven axial stretch — the faster it flies the longer it stretches (full stretch scaleX 2.2/scaleY 0.72), squashing back over 8f at the landing"
  },
  "ContactShadowLift": {
    "name": "Contact Shadow Lift",
    "card": "Element Body Moves",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "contact-shadow-lift",
    "summary": "Lift over 10f out-cubic: card translateY(−28px)+scale(1.08) while the detached ellipse shadow runs scale 1→1.72 / opacity 0.55→0.18 inversely on the same progress; set down 8f in-cubic + a 2f micro-press of the card shell"
  },
  "FloatingGlossyLabelPills": {
    "name": "Floating Glossy Pills",
    "card": "Glossy Label Pills",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "floating-glossy-label-pills",
    "summary": "Four light-gray dashboard wireframe panels each topped by a glossy pill label queuing horizontally; the track shifts right over three beats (slow start → mid rush → soft settle, the first beat slower with a long tail); the centered one enlarges crisp while the sides shrink to 0.62 and sink, fade, and blur slightly for a corridor feel; in the final segment a black white-outlined cursor glides diagonally from top-right to rest at the last pill's right end"
  },
  "IntegrationHubMap": {
    "name": "Integration Hub Map",
    "card": "Integration Hub Map",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "integration-hub-map",
    "summary": "The old page flips a full 180° in one go (a bright flash on the side edge) landing as the new hub page; five integration app icons pop in the same frame, then five rainbow light tubes connect in the same frame with delivery pulses streaming inside — \"turn a new page, the whole ecosystem plugs in\""
  },
  "ListReveal": {
    "name": "List Reveal",
    "card": "List Reveal",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "list-reveal",
    "summary": "Six vertical menu items find their scale one by one at 0.09 intervals with a slight outBack overshoot landing, while the whole list container drifts linearly up 32px throughout — per-item entry and overall drift are two unrelated motions"
  },
  "ListStackPress": {
    "name": "List Stack Press",
    "card": "List Stack Press",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "list-stack-press",
    "summary": "List cards fly up from the bottom of the frame stacking one by one; each landing presses the whole stack with a bounce while the counter ticks one step in sync"
  },
  "MorphFromPrimitive": {
    "name": "Morph from Primitive",
    "card": "Morph from Primitive",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "morph-from-primitive",
    "summary": "Morph from primitive — after a circle breathes a beat (anticipation), an SVG path interpolation grows it into a rounded card outline over 24f as content fades in"
  },
  "NeonFrameForerun": {
    "name": "Neon Frame Forerun",
    "card": "Neon Frame Forerun",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "neon-frame-forerun",
    "summary": "A strong-perspective rectangular neon frame races in from both ends of the left edge to form first; the page brightens inside the frame while its components/copy descend from 3D overhead with matching soft shadows, docking staggered in sync with the page lighting up, and the background neon-tube cluster goes dark at the end to yield the stage"
  },
  "NeonFrameForerunOrbit": {
    "name": "Neon Frame Orbit Drop",
    "card": "Neon Frame Orbit",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "neon-frame-orbit-drop",
    "summary": "After the neon frame draws first, the camera arcs around the page left→right while every component/character docks from overhead **in the same frame** (matching soft shadows converging in sync) — ensemble-entrance seating inside the frame"
  },
  "PageWaterfallWall": {
    "name": "Page Waterfall Wall",
    "card": "Page Waterfall Wall",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "page-waterfall-wall",
    "summary": "Page waterfall wall — real page screenshots sliced into 3-4 columns scrolling infinitely in opposite directions at differential speeds across a 3D reclined wall; parallax + a slow camera push sell the \"more content than can stream past\" overview"
  },
  "MaskingTapeSlap": {
    "name": "Masking Tape Slap",
    "card": "Paper Craft Moves",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "masking-tape-slap",
    "summary": "Wobble = amplitude envelope × sine (rot ±1.5°/bob ±5px); the tape slaps in over 6f: scale 1.45→1 + rotate from a 16° undershoot → 7° overshoot → level + a one-frame scaleY 0.72 squash on landing; a 14-point clipPath zigzag torn edge"
  },
  "PopupBookRise": {
    "name": "Popup Book Rise",
    "card": "Paper Craft Moves",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "popup-book-rise",
    "summary": "Two-layer 3D: the scene at rotateX 75° overhead (persp 2600), each card rotating rotateX 0→-90° on a spring (damping 11, overshoot to -95°) with origin at the bottom edge and preserve-3d throughout; far rows lead near rows staggered 7f"
  },
  "PlatformHingeRise": {
    "name": "Platform Hinge Rise",
    "card": "Platform Hinge Rise",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "platform-hinge-rise",
    "summary": "The support platform establishes laterally first; two main blocks flip up in opposite directions from adjacent bottom hinges with one restrained damped swing, and finally the conclusion deck rises in from off-screen — a three-stage \"stage → evidence → conclusion\" reveal"
  },
  "ProductCardProgressiveAssemble": {
    "name": "Progressive Card Assemble",
    "card": "Progressive Card Assemble",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "product-card-progressive-assemble",
    "summary": "The detail card assembles as if fetched field by field — image → title → breadcrumb pill popping in order; the old price appears then gets struck through as the accent-colored new price spring-jumps out; body copy reveals line by line with a highlight block brushing left to right; color swatches light up — all while the whole card pushes in on an ultra-slow scale"
  },
  "RadialWave": {
    "name": "Radial Wave",
    "card": "Radial Wave",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "radial-wave",
    "summary": "A 17×9 dot matrix lights up staggered by Euclidean distance to the wave source, each dot's scale overshooting to 1.5 before settling lit; after the first wave sweeps, a second bright-blue pulse gathers back toward center from the outer ring"
  },
  "ResearchCardStackScroll": {
    "name": "Research Card Stack",
    "card": "Research Card Stack",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "research-card-stack-scroll",
    "summary": "Dark paper cards fly in one every 12 frames along the lower-right axis, stacking at center with a 1-frame compression on landing; only the top card renders fully crisp (title+author+abstract) while cards below blur and darken by stack depth showing just title bars, with a horizontal grid in the background descending in sync as a speed reference"
  },
  "RowEmbed": {
    "name": "Row Embed",
    "card": "Row Embed",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "row-embed",
    "summary": "A content row descends like a card, levels out on rotateX, and at the embed instant a seam of accent light flashes along its bottom edge"
  },
  "RunwayGroundSkim": {
    "name": "Runway Ground Skim",
    "card": "Runway Ground Skim",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "runway-ground-skim",
    "summary": "From a low ground-skim camera position, a flock of UI cards slaps down from the sky like a sudden downpour (slightly offset starts, heavily overlapping parallel falls, dead-stop landings with zero rebound); once all land the page stands up and the view levels out to close"
  },
  "SkeletonReveal": {
    "name": "Skeleton Reveal",
    "card": "Skeleton Reveal",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "skeleton-reveal",
    "summary": "Draft → skeleton → content three-stage develop — hand-scribbled placeholder doodles (with boil jitter) are replaced in a beat by gray-bar skeleton windows; the skeleton list scrolls in, the camera pushes in, and gray bars develop row by row into avatars + word-by-word copy, the last word landing a half-beat late"
  },
  "SvgShapeMorph": {
    "name": "SVG Shape Morph",
    "card": "SVG Shape Morph",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "svg-shape-morph",
    "summary": "A 140-point closed outline smoothly morphs into another shape and back; both shapes are resampled in polar coordinates to equal point counts with per-point radius interpolation + inOutCubic, the mid-morph layered with a slight scale breath, slow rotation, and hue drifting from 185° to 305°"
  },
  "ValueStaggerGradient": {
    "name": "Value Stagger Gradient",
    "card": "Value Stagger Gradient",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "value-stagger-gradient",
    "summary": "16 bars enter with delays as the time stagger while height/hue/offset/blur each lay down a first-to-last numeric gradient; on the second beat the stagger origin shifts to the center, re-spreading the pulse with maximum amplitude at the middle"
  },
  "BentoLightUp": {
    "name": "Bento Light-Up",
    "card": "Wall Reveal Moves",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "bento-light-up",
    "summary": "A dark 3×2 bento wall waits dimmed; amber flowing light traces each cell's outline one by one with content brightening and rising after, and once fully lit the camera pushes in slowly to close"
  },
  "GridWaveFlip": {
    "name": "Grid Wave Flip",
    "card": "Wall Reveal Moves",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "grid-wave-flip",
    "summary": "A 3×3 wall of gray-backed cards flips 180° in place via rotateX following the diagonal wavefront, revealing front content, with the last card overshooting and rebounding"
  },
  "WireframeDrawOn": {
    "name": "Wireframe Draw-On",
    "card": "Wall Reveal Moves",
    "category": "UI Entrances & Showcases",
    "categoryKey": "ui-entrance",
    "styleKey": "wireframe-draw-on",
    "summary": "The UI first draws in as grouped SVG thin-line blueprints, then an amber glowing vertical line sweeps left→right, materializing the wireframes into the real interface wherever it passes"
  }
};

/** Gallery categories (in gallery order); only categories that have demos */
export const DEMO_CATEGORIES: string[] = ["Openers & Brand", "Type & Title Cards", "UI Entrances & Showcases", "Camera & Space", "Data & Metrics", "Interaction & Feature Demos", "Transitions", "Rhythm & Montage", "Light & Emphasis", "Outros"];
