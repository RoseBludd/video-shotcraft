// 自动生成，勿手改：node scripts/gen-index.mjs
// demo 组件名 → 中文名 / 所属镜头卡 / 画廊分类 / 预览视频（gallery/media 本地已拉取时）/ 一句话
export type DemoMeta = { name: string; card: string; category: string; categoryKey: string; styleKey?: string; preview?: string; summary?: string };
export const DEMO_META: Record<string, DemoMeta> = {
  "Basic3DScene": {
    "name": "空间步进演示",
    "card": "空间步进演示",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "styleKey": "basic-3d-scene",
    "summary": "impress.js 式空间演示：卡片以不同位置/旋转/缩放散布 3D 空间，相机取各步姿态之逆依次飞行对齐，末步拉到 OVERVIEW 总览"
  },
  "CrashImpactReal": {
    "name": "冲撞变焦 · CrashImpactReal",
    "card": "冲撞变焦",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "summary": "全景一拍急推到目标特写（6f），落位二选一——过冲回弹（弹性）或撞停震屏（重量）"
  },
  "CrashZoomReal": {
    "name": "冲撞变焦 · CrashZoomReal",
    "card": "冲撞变焦",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "summary": "全景一拍急推到目标特写（6f），落位二选一——过冲回弹（弹性）或撞停震屏（重量）"
  },
  "CursorFlyover": {
    "name": "四角巡览指点",
    "card": "四角巡览指点",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "styleKey": "cursor-flyover",
    "summary": "整页俯瞰淡入后，相机依次飞到四个角落 zoom-in 特写，SVG 光标同步跟到位指点并留下点击涟漪"
  },
  "DollyZoomReal": {
    "name": "分层深度运镜 · DollyZoomReal",
    "card": "分层深度运镜",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "summary": "分层深度两款运镜——多层视差滑轨（3 层速度梯度横移出纵深）与伪 dolly-zoom（主体钉死、背景膨胀压来）"
  },
  "MultiplaneReal": {
    "name": "分层深度运镜 · MultiplaneReal",
    "card": "分层深度运镜",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "summary": "分层深度两款运镜——多层视差滑轨（3 层速度梯度横移出纵深）与伪 dolly-zoom（主体钉死、背景膨胀压来）"
  },
  "GrazeFaceTour": {
    "name": "贴面游走",
    "card": "贴面游走",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "styleKey": "graze-face-tour",
    "summary": "大倾角贴面游走特写——镜头贴着 UI 表面低飞掠过（侧栏树/顶栏/列表当地形），页面文字初始悬浮在界面上空带同形软影，随镜头行进先后加速贴落回界面"
  },
  "OverheadTabletopDrop": {
    "name": "俯视桌面扎落",
    "card": "俯视运镜",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "styleKey": "overhead-tabletop-drop",
    "summary": "卡阵平躺 rotateX 62°，pan 段只动 translateX 横滑掠过，drop 段角度/缩放/位移三通道同跑扎入落版"
  },
  "TiltReveal": {
    "name": "俯仰揭示",
    "card": "俯视运镜",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "styleKey": "tilt-reveal",
    "summary": "perspective 容器内整页 rotateX -80° 平躺，~43f 抬正，rotateX/scale/translateY 共用 out-cubic，末端轻过冲"
  },
  "DroneDiveLanding": {
    "name": "无人机俯冲落点",
    "card": "空间运镜",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "styleKey": "drone-dive-landing",
    "summary": "近垂直俯角悬停 → 猛扎俯冲 → 气垫减速停在 hero 卡特写"
  },
  "ExplodedView": {
    "name": "爆炸分层视图",
    "card": "空间运镜",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "styleKey": "exploded-view",
    "summary": "整页 3D 倾斜后构件沿 Z 轴错峰炸开悬停，一拍后逆序合体震屏收口"
  },
  "SteepTiltGlide": {
    "name": "侧立透视滑行",
    "card": "侧立透视滑行",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "styleKey": "steep-tilt-glide",
    "summary": "固定镜头下直立页面以 60° 强透视侧立（右近左远），页面自身沿其 3D 横面方向滑移掠过镜头（物动镜不动），滑移带速度重影、文字组件悬空贴落、由暗揭亮"
  },
  "BulletTimeFreezeOrbit": {
    "name": "冻结环绕",
    "card": "张力运镜",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "styleKey": "bullet-time-freeze-orbit",
    "summary": "图表生长到一半全冻住，相机绕悬停的 UI 平面 rotateY 扫 55° 再回，时间恢复接着长完"
  },
  "DutchRollToLevel": {
    "name": "斜角滚正",
    "card": "张力运镜",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "styleKey": "dutch-roll-to-level",
    "summary": "痛点段整帧 -10° 斜角悬着（叠微漂移），解决方案一拍带单次过冲滚回水平"
  },
  "PullBackIsolation": {
    "name": "拉远孤立",
    "card": "张力运镜",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "styleKey": "pull-back-isolation",
    "summary": "从发光主卡特写后拉，兄弟卡按距离错峰熄灭、背景沉黑，孤卡悬在暗场中央"
  },
  "SlowPushIn": {
    "name": "慢推压迫",
    "card": "张力运镜",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "styleKey": "slow-push-in",
    "summary": "4s 匀加速推近 1.00→1.14 + 暗角渐深，张力顶点无过渡硬切亮场"
  },
  "Terminal3D": {
    "name": "终端空间飞行",
    "card": "终端空间飞行",
    "category": "运镜与空间",
    "categoryKey": "camera",
    "styleKey": "terminal-3d",
    "summary": "三个终端窗散布 3D 空间，相机窗间飞行、途中正弦拉远，每到一窗打字机敲命令、结果逐行滑出——命令执行的空间叙事流"
  },
  "AvatarGridRadialBuildColorize": {
    "name": "分环生长染色",
    "card": "分环生长染色",
    "category": "数据与指标",
    "categoryKey": "data",
    "styleKey": "avatar-grid-radial-build-colorize",
    "summary": "8×7 小卡片网格由中心分环生长铺满（内容混合首字母/图标/图片占位），随后约 15% 的卡片随机时刻染红标异常，标题图例常驻中央"
  },
  "BeforeAfterSliderScrub": {
    "name": "前后对比拉杆",
    "card": "前后对比拉杆",
    "category": "数据与指标",
    "categoryKey": "data",
    "styleKey": "before-after-slider-scrub",
    "summary": "前后对比拉杆——\"处理前/后\"两版叠放，分割杆先猛甩后慢扫，杆过处新版\"显影\"揭出"
  },
  "AxisRescaleShockV2": {
    "name": "活体图表 · AxisRescaleShockV2",
    "card": "活体图表",
    "category": "数据与指标",
    "categoryKey": "data",
    "summary": "活体图表三式——oscilloscope-stream 示波流线（曲线右端实时写入+突发尖峰）、unit-dot-swarm-regroup 点阵重组（点群三幕迁徙聚成数字）、axis-rescale-shock 轴爆表重标（新值冲出画框逼 y 轴重标）"
  },
  "OscilloscopeStreamV2": {
    "name": "活体图表 · OscilloscopeStreamV2",
    "card": "活体图表",
    "category": "数据与指标",
    "categoryKey": "data",
    "summary": "活体图表三式——oscilloscope-stream 示波流线（曲线右端实时写入+突发尖峰）、unit-dot-swarm-regroup 点阵重组（点群三幕迁徙聚成数字）、axis-rescale-shock 轴爆表重标（新值冲出画框逼 y 轴重标）"
  },
  "UnitDotSwarmRegroupV2": {
    "name": "活体图表 · UnitDotSwarmRegroupV2",
    "card": "活体图表",
    "category": "数据与指标",
    "categoryKey": "data",
    "summary": "活体图表三式——oscilloscope-stream 示波流线（曲线右端实时写入+突发尖峰）、unit-dot-swarm-regroup 点阵重组（点群三幕迁徙聚成数字）、axis-rescale-shock 轴爆表重标（新值冲出画框逼 y 轴重标）"
  },
  "CounterConfetti": {
    "name": "数字冲刺纸屑",
    "card": "数字冲刺纸屑",
    "category": "数据与指标",
    "categoryKey": "data",
    "styleKey": "counter-confetti",
    "summary": "大数字 easeOutQuart 冲刺计数并带 scale 过冲，到位前一拍 52 片彩纸从两侧抛物线炸入，冲击环扩散、标签字距收紧收尾"
  },
  "CycleGlassNodeMorph": {
    "name": "循环玻璃节点接管",
    "card": "循环玻璃节点接管",
    "category": "数据与指标",
    "categoryKey": "data",
    "styleKey": "cycle-glass-node-morph",
    "summary": "单一主体在对角擦除中缩入机制图，三段循环标签沿弧线依次建立，连续推近时三枚玻璃节点从下方托起并接管原标签，最后诊断标记错峰钉住系统状态"
  },
  "NeedleSweepSelftest": {
    "name": "满弧扫针自检",
    "card": "仪表读数动效",
    "category": "数据与指标",
    "categoryKey": "data",
    "styleKey": "needle-sweep-selftest",
    "summary": "指针去程 ~12f ease-out 甩满弧，回程 ~20f 带 5-8° 过冲回摆落真值；多表错峰 3-5f；落定同帧盘下数值弹出"
  },
  "TapeScrollFixedPointer": {
    "name": "滚带定针",
    "card": "仪表读数动效",
    "category": "数据与指标",
    "categoryKey": "data",
    "styleKey": "tape-scroll-fixed-pointer",
    "summary": "长刻度带 translate：慢爬段→45px/f 冲刺 ~25f→spring 刹车过冲回摆停位；窗内读数同步刷新"
  },
  "HatchDepth": {
    "name": "斜纹变实柱",
    "card": "斜纹变实柱",
    "category": "数据与指标",
    "categoryKey": "data",
    "styleKey": "hatch-depth",
    "summary": "斜纹占位条逐条 wipe 伸长后，斜纹淡出、强调色实心层淡入并弹出数值，占位图蜕变为真数据条形图"
  },
  "OdometerDigitRoll": {
    "name": "里程表数字滚动",
    "card": "里程表数字滚动",
    "category": "数据与指标",
    "categoryKey": "data",
    "styleKey": "odometer-digit-roll",
    "summary": "里程表数字滚动大字报——全屏巨号指标每个数位像老虎机滚轮独立纵向滚动带残影，从左到右逐位过冲停稳，全部锁定瞬间整体加深脉冲"
  },
  "ConfettiCrossfire": {
    "name": "双侧礼炮",
    "card": "粒子庆祝打点",
    "category": "数据与指标",
    "categoryKey": "data",
    "styleKey": "confetti-crossfire",
    "summary": "双炮各 50 颗矩形彩屑：初速 90-150px/f（decay 0.9 下总程 ~900-1500px 才能交叉过中线）、spread 55°、每帧翻转 8-15°；~90f 全部落出画外后条件卸载"
  },
  "CounterTickSparks": {
    "name": "数字跳动溅火",
    "card": "粒子庆祝打点",
    "category": "数据与指标",
    "categoryKey": "data",
    "styleKey": "counter-tick-sparks",
    "summary": "tick 帧由计数器同一 interpolate 派生；每 tick 6-10 颗 2px 火星（初速向上 4-6px/f、重力 12-18f 坠灭），终值跳翻倍 20 颗+数字弹 1.1x"
  },
  "ParticleSandFill": {
    "name": "粒子落砂成柱",
    "card": "粒子落砂成柱",
    "category": "数据与指标",
    "categoryKey": "data",
    "styleKey": "particle-sand-fill",
    "summary": "粒子落斗成柱——柱状图不长高而是\"下雨下出来\"：方点粒子逐颗坠落堆积成柱，堆满凝成实体+数值弹出"
  },
  "RingDiagramAnnotationReveal": {
    "name": "环图收束标注",
    "card": "环图收束标注",
    "category": "数据与指标",
    "categoryKey": "data",
    "styleKey": "ring-diagram-annotation-reveal",
    "summary": "全屏主体被圆形窗口收束成同心环图解，分段外环与 12 支向心箭头建立机制，整组随后左移缩小并为四块标题和两级注释让出右栏"
  },
  "BrakeReticleLock": {
    "name": "刹停准星锁定",
    "card": "滚动刹停",
    "category": "数据与指标",
    "categoryKey": "data",
    "styleKey": "brake-reticle-lock",
    "summary": "滚动三段：sin-in 加速→cubic-out 猛减速冲过头 +30px→回弹落定；blur=v×0.12 封顶 24px；角标从 ±620/±320 画外 Easing.back(2.4) 飞入咬合，高亮 6f 内完成、标签 back(2.6) 弹出"
  },
  "ChangelogScrollBrake": {
    "name": "更新日志滚动刹停",
    "card": "滚动刹停",
    "category": "数据与指标",
    "categoryKey": "data",
    "styleKey": "changelog-scroll-brake",
    "summary": "translateY 扫 ~2400px（out exp 指数减速 ~50f），blur 由帧间位移差分驱动（0-6px 自动清零）；停点行 scale 1.03 抬升+阴影+3px 描边，其余 opacity 退 0.38"
  },
  "TimelineTravel": {
    "name": "时间线穿行",
    "card": "时间线穿行",
    "category": "数据与指标",
    "categoryKey": "data",
    "styleKey": "timeline-travel",
    "summary": "时间轴横移——镜头沿水平刻度轴加速掠过版本刻度，每过一格卡片弹立短停，末刻度急停推近"
  },
  "AssembleThenTypeFlyin": {
    "name": "骨架装配落字",
    "card": "骨架装配落字",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "assemble-then-type-flyin",
    "summary": "空的暗底网格上，无文字的组件骨架先从四面八方飞入贴合；随后各处文字逐字从 3D 空间旋转着飞来落位，先大标题后小标注，全部落位后页面成形"
  },
  "AuroraBloomBgFlip": {
    "name": "极光升腾反黑",
    "card": "极光升腾反黑",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "aurora-bloom-bg-flip",
    "summary": "浅灰底从底部升起紫橙柔焦 blob，随后整个底色在约 0.36s 内压暗到近黑、blob 压成余晖；文案同步 blur-out 换句 blur-in，换句间留空档不 cross-fade"
  },
  "BrandFrameSnap": {
    "name": "品牌画框硬切",
    "card": "品牌画框硬切",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "brand-frame-snap",
    "summary": "品牌色画框语法——一圈粗纯色画框先于内容长出包住全屏，录屏窗口落进框内；模式切换时整圈画框同帧硬翻色+窗内布局同帧换，一个 borderColor 干完章节导航/状态提示/品牌露出三件事"
  },
  "DashboardGlowHighlightPill": {
    "name": "金色胶囊指引",
    "card": "金色胶囊指引",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "dashboard-glow-highlight-pill",
    "summary": "金字悬于黑场，数据仪表盘自底带透视升入并持续 3D 漂移；金色光斑从右侧巡游到底部拉成胶囊，再由它起笔描出弹窗的辉光轮廓"
  },
  "LineUnfoldPanel": {
    "name": "线条展开面板",
    "card": "科幻 HUD 动效",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "line-unfold-panel",
    "summary": "scaleX 0→1（out poly4 急抽 5f）接 scaleY 3px→满高（out cubic 9f），内容提前一拍淡入；退场镜像反序"
  },
  "ReticleLockOn": {
    "name": "准星锁定",
    "card": "科幻 HUD 动效",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "reticle-lock-on",
    "summary": "四 L 角=同一对矩形四份镜像，飞入（10f out cubic）与收缩（2.2×→0.94×→1 超调回弹）解耦；咬合帧目标微亮+标签 back 弹出"
  },
  "FlylineArc": {
    "name": "飞线连接",
    "card": "光斑与飞线",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "flyline-arc",
    "summary": "手写 bezier 100 段采样，22f out-cubic 生长；光头条件挂载领跑，段 opacity 按离头距离渐隐；落点描边脉冲，可接力"
  },
  "GlowOrbAmbient": {
    "name": "暗场光斑呼吸",
    "card": "光斑与飞线",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "glow-orb-ambient",
    "summary": "三团 500-700px radial 光斑 + blur(100px)，双正弦漂移；卡缘辉光按光斑距离 [180,720]px→[1,0] 加权取 max 驱动"
  },
  "OrbFlylineRelay": {
    "name": "光斑飞线接力",
    "card": "光斑与飞线",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "orb-flyline-relay",
    "summary": "A+B 焊接：光斑 surge 与卡脉冲共用落点帧，涨亮 1+1.6×surge、5f 起升 15f 消散"
  },
  "AttentionBounce": {
    "name": "注意力弹跳",
    "card": "图标表演动效",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "attention-bounce",
    "summary": "translateY 弹跳缓动递增 + 落地帧 scaleX/Y 挤压 + 尘点，峰值帧镜头 scale 1.08 推近，落定触发面板卡弹出"
  },
  "PopBurstConfirm": {
    "name": "弹跳爆点确认",
    "card": "图标表演动效",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "pop-burst-confirm",
    "summary": "scale 蓄力-过冲-落回 spring + N 条径向 line translate + 圆环 scale/opacity，全程 ~20f，随后标签弹出"
  },
  "AnimeImpact": {
    "name": "动漫打击帧",
    "card": "冲击反馈",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "anime-impact",
    "summary": "crash-zoom 撞停的 3f 整幅负片反色 + 放射集中线 + 红青色散，第 4f 全撤"
  },
  "HitCounter": {
    "name": "连招计数",
    "card": "冲击反馈",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "hit-counter",
    "summary": "三卡接连砸入，每命中 = 顿帧 2f + 伤害数字上浮 + ×N 计数跳字逐次加码"
  },
  "HalationBloom": {
    "name": "光晕绽放",
    "card": "光影动效",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "halation-bloom",
    "summary": "文字复制底层 blur+brightness 当晕层，撞停帧起猛涨一圈回落成稳态柔光"
  },
  "SheenSweepRetry": {
    "name": "光影动效 · SheenSweepRetry",
    "card": "光影动效",
    "category": "光效与强调",
    "categoryKey": "effects",
    "summary": "光效三式——spotlight-sweep 聚光扫字、sheen 单点扫光、halation-bloom 撞停晕染"
  },
  "SpotlightSweepReveal": {
    "name": "光影动效 · SpotlightSweepReveal",
    "card": "光影动效",
    "category": "光效与强调",
    "categoryKey": "effects",
    "summary": "光效三式——spotlight-sweep 聚光扫字、sheen 单点扫光、halation-bloom 撞停晕染"
  },
  "LineBoil": {
    "name": "线条沸腾",
    "card": "线条沸腾",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "line-boil",
    "summary": "线条沸腾——hold 期间文字/描边轮廓每 3 帧轻微扭动一次，像手绘逐帧重描，静止画面保持\"活着\"的呼吸感"
  },
  "RadialRipplePhoneChips": {
    "name": "同心波纹手机",
    "card": "同心波纹手机",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "radial-ripple-phone-chips",
    "summary": "浅灰底四层同心圆错相呼吸如水波，中央手机 mockup 屏内 feed 自动缓滚，两侧白色 chip 先后 spring pop 入场并悬浮"
  },
  "RisoBeatPump": {
    "name": "孔版印刷冲击 · RisoBeatPump",
    "card": "孔版印刷冲击",
    "category": "光效与强调",
    "categoryKey": "effects",
    "summary": "套印错位两式——riso-misregistration-hit 单发冲击帧（撞停裂双色版抖两下套准）与 riso-beat-pump 节拍泵（逐拍跳大+错版逐次加码）"
  },
  "RisoMisregistrationHit": {
    "name": "孔版印刷冲击 · RisoMisregistrationHit",
    "card": "孔版印刷冲击",
    "category": "光效与强调",
    "categoryKey": "effects",
    "summary": "套印错位两式——riso-misregistration-hit 单发冲击帧（撞停裂双色版抖两下套准）与 riso-beat-pump 节拍泵（逐拍跳大+错版逐次加码）"
  },
  "ScanBracketSweep": {
    "name": "取景括号扫描",
    "card": "取景括号扫描",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "scan-bracket-sweep",
    "summary": "骨架文档弹到中央，四角落下 L 形取景括号，一条 2.5px 实线带渐变拖尾在文档上往复扫 5 趟——文档全程静止，只有光在读它"
  },
  "ScanlineAnnotateFocus": {
    "name": "扫描取景标注",
    "card": "扫描取景标注",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "scanline-annotate-focus",
    "summary": "一条亮扫描线自上而下掠过页面，扫过之处按先后顺序弹出相机取景框（1.75 倍收拢对准 + 轻微过冲），随后旁侧打出等宽小字标注，顶部状态行同步计数 00/06→06/06"
  },
  "ScanlineAssembleFlyin": {
    "name": "扫描装配飞入",
    "card": "扫描装配飞入",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "scanline-assemble-flyin",
    "summary": "页面开场是空的暗底网格，一条亮扫描线自上而下掠过；扫到每个区块的落点，该处组件就从画外飞入贴合，带残影模糊与落位闪边——扫完整页恰好装配完成"
  },
  "ImpactBurstKit": {
    "name": "冲击爆点套件",
    "card": "砸入式登场",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "impact-burst-kit",
    "summary": "B 三件套 + 冲击波前沿按半径-距离精算扫过邻卡帧，邻卡外推 30px + rotate ±3° 阻尼弹回"
  },
  "KanadaPerspectiveSnap": {
    "name": "金田式透视甩正",
    "card": "砸入式登场",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "kanada-perspective-snap",
    "summary": "perspective 300→1500px + rotate3d 58°→0 + scale 1.7→1 甩入 18f，末 4f 过冲 +5° 弹平，长斜影收正"
  },
  "ScoreSlam": {
    "name": "比分砸入",
    "card": "砸入式登场",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "score-slam",
    "summary": "卡从 scale 2.5/rotate 5° 六帧 Easing.in(quad) 砸落，落点帧圆环扩散+尘点飞散+震屏同帧"
  },
  "CornerSpotlightReveal": {
    "name": "角落匀速显影",
    "card": "暗场聚光显影",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "corner-spotlight-reveal",
    "summary": "角落匀速显影：左上角径向聚光半径严格 linear 扩张，照到显影照不到沉黑，最终全屏亮起——光即转场"
  },
  "GlowWakeSleepPanel": {
    "name": "醒睡扫过",
    "card": "暗场聚光显影",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "glow-wake-sleep-panel",
    "summary": "醒睡扫过：radial 显影罩跟随光头从左向右匀速移动，贴顶边紫色光线三层辉光同行，经过 logo 描光、到右缘点亮竖直残光，尾段面板沉回黑暗"
  },
  "SlideSpotlightPan": {
    "name": "贴边泛光横摇",
    "card": "暗场聚光显影",
    "category": "光效与强调",
    "categoryKey": "effects",
    "styleKey": "slide-spotlight-pan",
    "summary": "贴边泛光横摇：光线先绕左上角竖缘、转角后沿顶边横走，紫光晕染渗入 UI 顶部内侧；聚光头匀速右移显影 + 面板匀速左滑＝相机右摇感"
  },
  "StreamResponse": {
    "name": "AI 响应汇入",
    "card": "AI 响应汇入",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "styleKey": "ai-stream-response",
    "summary": "AI 响应面板先落一句可读摘要，再让带状态图标的证据行逐条汇入，最后统一收束成完成态"
  },
  "AutolayoutGapDial": {
    "name": "间距拨盘布局",
    "card": "间距拨盘布局",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "styleKey": "autolayout-gap-dial",
    "summary": "间距拨盘驱动布局——一排链接块带框选描边+缝隙间距标注，徽章数字逐格跳动、块被参数实时推开再弹簧回弹归位；\"参数驱动布局\"的可视化"
  },
  "DiagramCascadeBuild": {
    "name": "画布物化动效 · DiagramCascadeBuild",
    "card": "画布物化动效",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "summary": "内容\"物化上画布\"两式——panel-to-canvas 行倒卡（面板表格行沿弧线飞出、跨容器变形成画布卡片）与 diagram-cascade 级联生成树（prompt 打字后节点逐层弹出、连线先于节点生长）"
  },
  "PanelToCanvasMaterialize": {
    "name": "画布物化动效 · PanelToCanvasMaterialize",
    "card": "画布物化动效",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "summary": "内容\"物化上画布\"两式——panel-to-canvas 行倒卡（面板表格行沿弧线飞出、跨容器变形成画布卡片）与 diagram-cascade 级联生成树（prompt 打字后节点逐层弹出、连线先于节点生长）"
  },
  "ChipGridSingleSelectBlackout": {
    "name": "灰闪单选反黑",
    "card": "灰闪单选反黑",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "styleKey": "chip-grid-single-select-blackout",
    "summary": "五个选项 chip 以 3+2 居中排布逐个淡入；选中帧先插一帧灰色按压块，紧接数帧内底色变纯黑、文字变白并做 1→1.04→1 极轻回弹，其余 chip 淡到 18% 但位置锁死；随后余项归零，黑 chip 上移收窄，下方浮现算式行"
  },
  "ChipLiftToUserPill": {
    "name": "选中长成药丸",
    "card": "选中长成药丸",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "styleKey": "chip-lift-to-user-pill",
    "summary": "网格里的目标 chip 先 3 帧硬切反色成黑底白字，其余 chip 按到它的曼哈顿距离交错淡出缩小；黑 chip 左缘锚定向右生长成药丸，内部逐字打出人名并点亮绿点，再拉一条 1px 连接线接到圆形徽标"
  },
  "CursorCastEnsemble": {
    "name": "协作光标演出 · CursorCastEnsemble",
    "card": "协作光标演出",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "summary": "协作光标当演员的两式——dialogue-duet 双光标暗场对话双人舞（靠近/绕位/灯光交接/放大成转场），与 cast-ensemble 五光标群演氛围层（错峰飞入+正弦漂移+打字 cameo+聚拢围观）"
  },
  "CursorDialogueDuet": {
    "name": "协作光标演出 · CursorDialogueDuet",
    "card": "协作光标演出",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "summary": "协作光标当演员的两式——dialogue-duet 双光标暗场对话双人舞（靠近/绕位/灯光交接/放大成转场），与 cast-ensemble 五光标群演氛围层（错峰飞入+正弦漂移+打字 cameo+聚拢围观）"
  },
  "CommandPaletteSummon": {
    "name": "命令面板召唤",
    "card": "命令面板召唤",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "styleKey": "command-palette-summon",
    "summary": "命令面板降临——整屏压暗加模糊，⌘K 面板带过冲弹落，候选行错峰浮现，敲字列表实时收窄"
  },
  "GlassPillDictationTyping": {
    "name": "玻璃胶囊听写",
    "card": "玻璃胶囊听写",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "styleKey": "glass-pill-dictation-typing",
    "summary": "纯黑底上一条定宽玻璃胶囊以约 1.25 倍略大弹出后缓落到位，内部自左暗到右亮铺一层强调色光；光标先行、随后打字出现占位句，光随打字进度渐渐熄灭，收尾成中性深色玻璃条"
  },
  "HashtagToPillMaterialize": {
    "name": "话题词实体化",
    "card": "话题词实体化",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "styleKey": "hashtag-to-pill-materialize",
    "summary": "话题词打字实体化——居中打出 \"#word\"（红实心光标恒亮），1 帧硬切变成宽大胶囊标签，hold 后缩小左移落到页面标签位，再 1 帧硬切揭示成品页；\"两次硬切一次滑动\"的节奏骨架"
  },
  "CursorPerformancePunchIn": {
    "name": "输入触发动效 · CursorPerformancePunchIn",
    "card": "输入触发动效",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "summary": "输入触发两式——cursor-performance 光标表演点击推近、keycap-smash-cut 键帽引信引爆猛切"
  },
  "KeycapSmashCut": {
    "name": "键帽砸屏硬切",
    "card": "输入触发动效",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "styleKey": "keycap-smash-cut",
    "summary": "键帽呼吸悬浮→3f 压扁+亮环引信 + 30f 卡片四面冲镜持续加速轰鸣 + 动势最猛一帧硬切静止全景、键帽嵌顶栏"
  },
  "PickerCarouselFeatureCycle": {
    "name": "药丸吸附轮播",
    "card": "药丸吸附轮播",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "styleKey": "picker-carousel-feature-cycle",
    "summary": "移动端风竖向选择器——焦点药丸不动、内容穿过它，每项带明显 outQuint 减速吸附后完全静止，按到中心距离分层控制透明度/字号/灰度，落定时药丸做 scaleY 极轻呼吸"
  },
  "SegmentedThumbHero": {
    "name": "分段控件特写",
    "card": "分段控件特写",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "styleKey": "segmented-thumb-hero",
    "summary": "分段控件 thumb 位移当主角特写——超大胶囊 segmented control 弹簧浮入，描边箭头光标画外滑入按下，白 thumb 8f ease-out 滑到另一段，到位瞬间新图标 spring 弹出、旧图标收起"
  },
  "PaletteThemeRipple": {
    "name": "调色板主题涟漪",
    "card": "主题切换动效",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "styleKey": "palette-theme-ripple",
    "summary": "面板 back(1.9) 弹落→逐字输入→回车面板 ease-in 收缩到 0 + 白色高光核钉住位置→圆形 clip 半径 12→1250px cubic-out 荡开，边缘 5px 白环双向辉光"
  },
  "ThemeSweepToggle": {
    "name": "主题斜扫切换",
    "card": "主题切换动效",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "styleKey": "theme-sweep-toggle",
    "summary": "深色版 clip-path polygon 15° 斜边扫场（out poly3 先快后缓 ~38f），边界 4px 白亮线+18px 辉光，扫完 2f 淡出；深版 scale 1→0.995→1 坐实"
  },
  "TypeAndFilter": {
    "name": "打字筛选",
    "card": "打字筛选",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "styleKey": "type-and-filter",
    "summary": "真实 UI 上打字搜索、网格自己收敛成一张卡、点击穿透进详情页"
  },
  "VoiceWaveformLive": {
    "name": "实时声纹",
    "card": "实时声纹",
    "category": "交互与功能演示",
    "categoryKey": "interaction",
    "styleKey": "voice-waveform-live",
    "summary": "录音胶囊实时声纹——64 根细竖条随\"说话\"起伏，说话时中部高耸、停顿缩成点线，波形从右往左滚动；说→停→说→提交塌缩的完整表演"
  },
  "CraneRiseReveal": {
    "name": "吊臂升起揭示",
    "card": "吊臂升起揭示",
    "category": "开场与品牌",
    "categoryKey": "opening",
    "styleKey": "crane-rise-reveal",
    "summary": "升降臂拉升揭示——开场怼在一行数据特写，相机沿 Y 轴减速升起后拉，行行涌入直到整面 dashboard 铺满全幅"
  },
  "DatavizLandscapeOpen": {
    "name": "数据景观开场",
    "card": "数据景观开场",
    "category": "开场与品牌",
    "categoryKey": "opening",
    "styleKey": "dataviz-landscape-open",
    "summary": "暗场支流线束地景开场——多条流线汇入主干、虚构 ID 标签浮在线上、相机重景深低速飞越"
  },
  "Fracture": {
    "name": "碎片聚合飞散",
    "card": "碎片聚合飞散",
    "category": "开场与品牌",
    "categoryKey": "opening",
    "styleKey": "fracture",
    "summary": "5×5 瓦片从 3D 碎片态按中心波纹逐圈聚合成整面海报，停一拍亮字，随后全部碎片背离中心加速旋转飞出画面"
  },
  "IconFieldColorize": {
    "name": "图标点阵翻色",
    "card": "图标点阵翻色",
    "category": "开场与品牌",
    "categoryKey": "opening",
    "styleKey": "icon-field-colorize",
    "summary": "灰阶小图标点阵错峰浮现铺满全屏，停一拍后多道品牌色横带波纹极快向下扫翻全场——\"功能全景先摆满，品牌一瞬间点亮\"的开场/收束卡"
  },
  "LetterspaceMaterialize": {
    "name": "字距结晶字标",
    "card": "字距结晶字标",
    "category": "开场与品牌",
    "categoryKey": "opening",
    "styleKey": "letterspace-materialize",
    "summary": "大字距字标全字符并行连续描画结晶——所有字母同帧起笔、笔画像手写一样连续生长、同帧齐收成词；氛围底景上的品牌字标显影"
  },
  "MagicianCardFlourish": {
    "name": "魔术卡弹射",
    "card": "魔术卡弹射",
    "category": "开场与品牌",
    "categoryKey": "opening",
    "styleKey": "magician-card-flourish",
    "summary": "纯黑场上蓝色星芒闪现 0.3s（X 形针状光束旋转 90°+中心辉光放射小光芒），卡片从闪光点弹射而出——极速自旋弧线飞向镜头、自旋随靠近衰减、瞬间硬定格近满幅、定格后 sheen 扫光"
  },
  "OrbitRingTitleOpen": {
    "name": "环形卡阵标题开场",
    "card": "环形卡阵标题开场",
    "category": "开场与品牌",
    "categoryKey": "opening",
    "styleKey": "orbit-ring-title-open",
    "summary": "八张 16:9 内容卡按 45° 均布在 700×375 椭圆上匀速公转（卡身永不倾斜，纵深只由 sin θ 给出 ±9% 缩放与 z 序），环撑开期间卡内容冻结首帧、f24 之后八张一起开播；居中标题逐字解糊下沉落定，关键词到位那一刻黄色马克块自左横扫铺满，mono 副行随后浮出，末段整行失焦淡出、环继续转着交棒下一镜"
  },
  "SpotlightHeroCard": {
    "name": "聚光主角卡",
    "card": "聚光主角卡",
    "category": "开场与品牌",
    "categoryKey": "opening",
    "styleKey": "spotlight-hero-card",
    "summary": "聚光灯扫过页面锁定一张卡，斜 45° 推进后卡片弹起悬浮、光束沿轮廓两圈、贴回原位"
  },
  "StrokeSegmentBuild": {
    "name": "描边分段构建",
    "card": "描边分段构建",
    "category": "开场与品牌",
    "categoryKey": "opening",
    "styleKey": "stroke-segment-build",
    "summary": "断笔成字——标题拆成十几段互不相连的笔画乱序逐段点亮，前 70% 不可读，末段落位瞬间语义\"啪\"地成立"
  },
  "TextAsMask": {
    "name": "文字蒙版",
    "card": "文字蒙版",
    "category": "开场与品牌",
    "categoryKey": "opening",
    "styleKey": "text-as-mask",
    "summary": "文字视频遮罩——超粗大标题字内部透出缓慢平移的产品画面，结尾字形放大 26 倍溢出、内部画面接管全屏"
  },
  "LogoStingButton": {
    "name": "字标彩蛋收尾",
    "card": "剪辑钩子",
    "category": "收尾",
    "categoryKey": "outro",
    "styleKey": "logo-sting-button",
    "summary": "logo-sting-button 片尾钩子——片尾 logo 定住后突插 12f 彩蛋再收，预告片 button ending"
  },
  "GrainDissolve": {
    "name": "文字砂化凝聚",
    "card": "文字砂化凝聚",
    "category": "收尾",
    "categoryKey": "outro",
    "styleKey": "grain-dissolve",
    "summary": "整行字爆裂成沸腾颗粒噪点并浮现斜纹选区框，噪点云急速凝聚成更大号发光短字标，位移衰减归零定格"
  },
  "LogoShrinkWordmarkLockup": {
    "name": "图标收束落位",
    "card": "图标收束落位",
    "category": "收尾",
    "categoryKey": "outro",
    "styleKey": "logo-shrink-wordmark-lockup",
    "summary": "霓虹切口大环快速收束成中央实心小白 O 并带过冲刹车，图标左移让位，字母逐个滑入完成 lockup，强调色标语收尾"
  },
  "NeonTripleMarquee": {
    "name": "三行霓虹跑马灯",
    "card": "三行霓虹跑马灯",
    "category": "收尾",
    "categoryKey": "outro",
    "styleKey": "neon-triple-marquee",
    "summary": "三行对向霓虹跑马灯 recap——BETTER/FASTER/STRONGER 空心描边巨字上中下排满全屏，奇偶行反向匀速无限横滚，三行按 1/3 相位轮流亮起，结尾整组淡出"
  },
  "OutroGroupPhotoLaunch": {
    "name": "发布会合影收场",
    "card": "发布会合影收场",
    "category": "收尾",
    "categoryKey": "outro",
    "styleKey": "outro-group-photo-launch",
    "summary": "全片元素从四面八方飞来围住字标合影，crane 落机位+舞台光+金尘做成发布会收场"
  },
  "UiStripAwayOutro": {
    "name": "减法收尾",
    "card": "减法收尾",
    "category": "收尾",
    "categoryKey": "outro",
    "styleKey": "ui-strip-away-outro",
    "summary": "减法式收尾——点击 Publish 后整个编辑器 UI 从外围到中心层层错峰蒸发，黑场上只剩那颗按钮滑到屏心放大，按钮再淡出交棒字标定版"
  },
  "IconFlipBloomLogo": {
    "name": "UI 变品牌 · IconFlipBloomLogo",
    "card": "UI 变品牌",
    "category": "收尾",
    "categoryKey": "outro",
    "summary": "UI 变品牌两式——icon-flip-bloom 图标 Y 轴翻扁成竖线绽放成花形 mark + wordmark 逐字落定，与 input-morph-assemble 输入框收缩成胶囊、三粒图元落下集结成 logo 单瓣"
  },
  "InputMorphsIntoLogo": {
    "name": "UI 变品牌 · InputMorphsIntoLogo",
    "card": "UI 变品牌",
    "category": "收尾",
    "categoryKey": "outro",
    "summary": "UI 变品牌两式——icon-flip-bloom 图标 Y 轴翻扁成竖线绽放成花形 mark + wordmark 逐字落定，与 input-morph-assemble 输入框收缩成胶囊、三粒图元落下集结成 logo 单瓣"
  },
  "BeatCutAccelerando": {
    "name": "递进硬切串",
    "card": "节拍硬切",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "beat-cut-accelerando",
    "summary": "六视图按 16→12→8→6→4f 间隔减半全屏硬切，加速逼近，末刀戛然定格回主画面轻推收住"
  },
  "PaparazziFlash": {
    "name": "连闪定格",
    "card": "节拍硬切",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "paparazzi-flash",
    "summary": "三次白闪各硬切同素材不同裁切（全景→卡片特写→数字特写），快门余韵沉降，第三闪停在数字收束"
  },
  "BeatStepListThemeCycle": {
    "name": "节拍列表换色",
    "card": "节拍列表换色",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "beat-step-list-theme-cycle",
    "summary": "三通道节拍器——深色场形容词列表逐拍上移一行，视口中央固定胶囊\"接住\"下一个词并换色，整场底色同拍跟换；行、色、场三通道锁死同一拍点"
  },
  "DominoCascade": {
    "name": "多米诺连锁入场",
    "card": "蒙太奇节奏",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "domino-cascade",
    "summary": "标题砸落→震波弹起卡片列→末卡撞滑侧边栏进场，动量方向逐级传递"
  },
  "DropBlackoutSlam": {
    "name": "黑场蓄爆",
    "card": "蒙太奇节奏",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "drop-blackout-slam",
    "summary": "正常播放中一帧切纯黑死寂 12f，然后主视觉带震屏+亮环砸入"
  },
  "WrightTripleCut": {
    "name": "三连特写",
    "card": "蒙太奇节奏",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "wright-triple-cut",
    "summary": "三个 10f 超近特写硬切连打（各\"静4-动3-静3\"），第三声甩回全景亮结果"
  },
  "ComicPanelSplit": {
    "name": "漫画分镜切屏",
    "card": "面板网格动效",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "comic-panel-split",
    "summary": "三格各一份整页 clip-path 12° 斜边裁切 + translate/scale 摆机位（1x/1.9x/2.6x），逐格 2f 间隔弹入；定格 18f 各格缓推保活，末格斜边 12f out-cubic 扩张吃屏"
  },
  "FlipGridReflow": {
    "name": "翻转网格重排",
    "card": "面板网格动效",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "flip-grid-reflow",
    "summary": "预写两套坐标表（横排/3×2 网格），每卡 delay=i×1.5f、16f inOut cubic 直线飞行 + scale 1→1.28 带 1.02 过冲；落定后 6f brightness 0.78 全画面脉冲"
  },
  "GridFlashMosaic": {
    "name": "网格闪切马赛克",
    "card": "面板网格动效",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "grid-flash-mosaic",
    "summary": "3×3 格每 2f 一格按 h(i) 乱序条件挂载硬入（入格 3f scale 1.18→1 + 2f 加深脉冲），满墙呼吸一拍，中心格 14f Easing.in(cubic) 放大 3.28x 吞屏"
  },
  "QuadSplitParallelScenes": {
    "name": "四宫并行蒙太奇",
    "card": "四宫并行蒙太奇",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "quad-split-parallel-scenes",
    "summary": "画面硬切 2×2 四宫格，四个象限并行跑各自的微场景（打字、急推、逐词、交互链），关键节拍错开 3–6 帧制造信息轰炸"
  },
  "JumpCutPunchIn": {
    "name": "跳切递进推近",
    "card": "节奏中断动效",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "jump-cut-punch-in",
    "summary": "transform-origin 钉目标中心，三档 scale 阶梯跳变（零补间），每跳 2f 加深脉冲当 tick"
  },
  "StrobeBlackFrames": {
    "name": "黑帧频闪倒数",
    "card": "节奏中断动效",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "strobe-black-frames",
    "summary": "全屏黑帧按写死帧号表闪现（每次 2f，间隔 8f→3f 收敛），末闪掀开即硬切放大落定"
  },
  "SakugaTimingShift": {
    "name": "作画式节奏变拍",
    "card": "作画式节奏变拍",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "sakuga-timing-shift",
    "summary": "一拍三转一拍一——元素先以每 3 帧一步的手翻书顿挫移动，高潮瞬间切成逐帧丝滑冲刺，帧率量化的突变本身就是看点"
  },
  "SmearMultiples": {
    "name": "拖影分身",
    "card": "拖影分身",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "smear-multiples",
    "summary": "残像分身——卡片高速横移时拖 4 个清晰可数的半透明分身副本，落位瞬间收拢合一；motion blur 的动画式平替"
  },
  "SpectrumMorphUi": {
    "name": "频谱变形界面",
    "card": "频谱变形界面",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "spectrum-morph-ui",
    "summary": "频谱化 UI——标题下划线裂成一排竖条按频谱跳动两小节，再收拢还原成直线；音乐可视化长在 UI 上"
  },
  "FreezeAnnotateReal": {
    "name": "变速与定格 · FreezeAnnotateReal",
    "card": "变速与定格",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "summary": "帧号非线性 remap 的两款节奏手法——变速（快→0.2x 凝视→快）与定格标注（流动→定格圈注→解冻）"
  },
  "SpeedRampReal": {
    "name": "变速与定格 · SpeedRampReal",
    "card": "变速与定格",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "summary": "帧号非线性 remap 的两款节奏手法——变速（快→0.2x 凝视→快）与定格标注（流动→定格圈注→解冻）"
  },
  "CardFootageCadence": {
    "name": "卡片与画面节奏交替",
    "card": "预告片剪辑语法",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "card-footage-cadence",
    "summary": "七段条件挂载分段（14/22/34/42/52/62 切点）：UI 段带微动（缓推/裁切横移），字卡段黑底白字 1.05→1 落定微缩"
  },
  "SmashCut": {
    "name": "冲脸硬切",
    "card": "预告片剪辑语法",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "smash-cut",
    "summary": "轰鸣段全 Easing.in(quad)：背景推近 1→1.55 + rotate 1.8°、5 张飞卡错峰加速冲脸 + 速度门控模糊；42f 一帧硬切无动画属性的静止全景"
  },
  "TrailerBumper": {
    "name": "预告片冷开场",
    "card": "预告片剪辑语法",
    "category": "节奏与蒙太奇",
    "categoryKey": "rhythm",
    "styleKey": "trailer-bumper",
    "summary": "三镜头各 9f 等长硬切（0/9/18），每镜内部 scale 1→1.04 微推保活；27-33f 纯黑静默，33f 起标题 16f 淡入 + 44px out-cubic 微升"
  },
  "BottomPushStackWipe": {
    "name": "底推换章",
    "card": "底推换章",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "bottom-push-stack-wipe",
    "summary": "底边上推换章——新场景连底色整屏从底边向上推入，把旧场景物理顶出画外，连推数章各配一种饱和底色，内容钉死在各自色底坐标系里随底色走"
  },
  "BubbleSwarmTakeover": {
    "name": "气泡群幕布",
    "card": "气泡群幕布",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "bubble-swarm-takeover",
    "summary": "珠光气泡群幕布转场——大小不一的气泡从画外飘入越涨越大遮满整屏，页面同步\"洗白\"，遮蔽峰值处藏切换，气泡向外散开后已是新场景；可混入 i18n 文字胶囊变体"
  },
  "CardFlipReveal": {
    "name": "卡片翻面揭示",
    "card": "卡片翻面揭示",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "card-flip-reveal",
    "summary": "功能卡 3D 翻面揭示——卡片沿 Y 轴翻 180°，正面 UI 翻到侧棱最薄处闪过一道随角度移动的高光带，背面揭出大号结论数字，逐张错峰扫过整排"
  },
  "CardFlockTumble": {
    "name": "卡片翻飞收束",
    "card": "卡片翻飞收束",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "card-flock-tumble",
    "summary": "三张 UI 页卡从侧棱薄边 3D 翻飞成阶梯站定（全程清晰、样条连续丝滑），站定后保持慢转不停，快速收束吸入中心，炸出单个湍流烟雾环扩散，巨字横贯收场"
  },
  "CircleMatchIris": {
    "name": "圆心匹配光圈切",
    "card": "圆心匹配光圈切",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "circle-match-iris",
    "summary": "圆心匹配光圈切——光圈从页面上圆形元素的圆心炸开，圈内新页的圆形图表接在同一个圆上；匹配剪辑给光圈一个语义锚点"
  },
  "ColorBlockStepWipe": {
    "name": "色块阶跃吞屏",
    "card": "色块阶跃吞屏",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "color-block-step-wipe",
    "summary": "离散阶跃色块吞屏两式——A 中央小条按 3–5 步硬跳阶跃扩成全屏（接管后徽章两跳弹出），B 色块从角落斜向 3 步吃屏并携带一张页面卡逐跳前进"
  },
  "CubeNavigation": {
    "name": "立方体逐面导航",
    "card": "立方体逐面导航",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "cube-navigation",
    "summary": "内容贴满 3D 立方体六面，相机正面特写→拉远等轴看棱角→转面推近交替步进，每面按法线朝向实时算明暗"
  },
  "GradientTransition": {
    "name": "渐变参数变奏",
    "card": "渐变参数变奏",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "gradient-transition",
    "summary": "背景在 linear、radial、conic 三类 CSS 渐变间平滑过渡——角度、色标、中心、半径逐参数插值，段间交叉淡化换类型"
  },
  "LineCarryTransition": {
    "name": "线条接力转场",
    "card": "线条接力转场",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "line-carry-transition",
    "summary": "线条接力横移转场——场景 A 的进度条延伸出画，镜头跟线横移，线在移动中拐角围出场景 B 的卡框，全程无剪切"
  },
  "MosaicReframe": {
    "name": "三段布局重排",
    "card": "三段布局重排",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "mosaic-reframe",
    "summary": "12 张瓦片在规则网格、feature mosaic、对角瀑布串三种排版间连续变形，位置宽高各自插值、逐片微错峰，段间留 hold"
  },
  "BarnDoorSplit": {
    "name": "双门裂开",
    "card": "翻页转场",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "barn-door-split",
    "summary": "旧页两个 960px overflow 容器对位拼合，同时向外 Easing.in(cubic) 滑出画外；裂缝内边缘亮线+投影，新页底层 scale 1.06→1 迎上"
  },
  "CubeRotate": {
    "name": "立方体旋页",
    "card": "翻页转场",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "cube-rotate",
    "summary": "两页贴立方体相邻面（rotateY 0/90° + translateZ W/2），场景层转 -90°；旧面转出压暗、新面转进变亮，45° 时两面夹一条暗棱"
  },
  "PaperPlaneMessenger": {
    "name": "纸飞机信使",
    "card": "纸飞机信使",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "paper-plane-messenger",
    "summary": "纸飞机信使转场——点击\"发送\"后镜头拉远脱离窗口 A，折纸飞机沿贝塞尔弧线飞出（俯仰跟随切线），镜头伴飞穿过多层视差道具，飞抵窗口 B 门前落定，B 放大接管全屏"
  },
  "InkBleedReveal": {
    "name": "墨渗揭示",
    "card": "印刷质感转场",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "ink-bleed-reveal",
    "summary": "印刷质感转场——ink-bleed-reveal 墨渗揭示（须状渗边洇开吃掉旧景）"
  },
  "BlackCardTransition": {
    "name": "镜头交棒转场 · BlackCardTransition",
    "card": "镜头交棒转场",
    "category": "转场",
    "categoryKey": "transition",
    "summary": "镜头交棒六式——推进流白、穿暗场直航、虚焦接力、黑场字卡、whip-pan 甩镜、mask-wipe 穿窗（含纵深款），按能量落差选型"
  },
  "DarkTunnelTransition": {
    "name": "镜头交棒转场 · DarkTunnelTransition",
    "card": "镜头交棒转场",
    "category": "转场",
    "categoryKey": "transition",
    "summary": "镜头交棒六式——推进流白、穿暗场直航、虚焦接力、黑场字卡、whip-pan 甩镜、mask-wipe 穿窗（含纵深款），按能量落差选型"
  },
  "FocusHandoffTransition": {
    "name": "镜头交棒转场 · FocusHandoffTransition",
    "card": "镜头交棒转场",
    "category": "转场",
    "categoryKey": "transition",
    "summary": "镜头交棒六式——推进流白、穿暗场直航、虚焦接力、黑场字卡、whip-pan 甩镜、mask-wipe 穿窗（含纵深款），按能量落差选型"
  },
  "MaskWipeReal": {
    "name": "镜头交棒转场 · MaskWipeReal",
    "card": "镜头交棒转场",
    "category": "转场",
    "categoryKey": "transition",
    "summary": "镜头交棒六式——推进流白、穿暗场直航、虚焦接力、黑场字卡、whip-pan 甩镜、mask-wipe 穿窗（含纵深款），按能量落差选型"
  },
  "PortalWipeV2": {
    "name": "镜头交棒转场 · PortalWipeV2",
    "card": "镜头交棒转场",
    "category": "转场",
    "categoryKey": "transition",
    "summary": "镜头交棒六式——推进流白、穿暗场直航、虚焦接力、黑场字卡、whip-pan 甩镜、mask-wipe 穿窗（含纵深款），按能量落差选型"
  },
  "WhipBrakeReal": {
    "name": "镜头交棒转场 · WhipBrakeReal",
    "card": "镜头交棒转场",
    "category": "转场",
    "categoryKey": "transition",
    "summary": "镜头交棒六式——推进流白、穿暗场直航、虚焦接力、黑场字卡、whip-pan 甩镜、mask-wipe 穿窗（含纵深款），按能量落差选型"
  },
  "WhipPanReal": {
    "name": "镜头交棒转场 · WhipPanReal",
    "card": "镜头交棒转场",
    "category": "转场",
    "categoryKey": "transition",
    "summary": "镜头交棒六式——推进流白、穿暗场直航、虚焦接力、黑场字卡、whip-pan 甩镜、mask-wipe 穿窗（含纵深款），按能量落差选型"
  },
  "GlitchDisplace": {
    "name": "故障条带错位",
    "card": "撕裂拖影转场",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "glitch-displace",
    "summary": "撕裂转场——glitch-displace 噪声撕裂（16 横条错位抖动中硬切），数字故障语义的条带级撕裂"
  },
  "InvisibleCut": {
    "name": "前景遮挡隐形切",
    "card": "隐藏切点转场",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "invisible-cut",
    "summary": "一张超画幅卡片带重运动模糊贴脸横扫，糊满全屏的遮挡帧内背景 A→B 硬切，卡片飞出观众以为还是同一镜"
  },
  "LightLeakBurn": {
    "name": "琥珀漏光烧切",
    "card": "隐藏切点转场",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "light-leak-burn",
    "summary": "三团琥珀柔光沿对角线斜扫，光峰帧吞掉旧页约七成时硬切新页，光退散时新页已就位"
  },
  "VersusSlam": {
    "name": "对撞开屏",
    "card": "隐藏切点转场",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "versus-slam",
    "summary": "左右两半屏带斜切边从画外加速对冲撞合，撞击帧白闪+震屏+VS 盖章，切点就是撞击本身"
  },
  "LetterformZoom": {
    "name": "字腔穿越",
    "card": "穿行式转场",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "letterform-zoom",
    "summary": "巨型标题字腔（SVG mask 挖洞）透出新页，指数推进穿洞，洞撑满瞬间接管、残余笔画甩出画外"
  },
  "SharedElementMorph": {
    "name": "共享元素归位",
    "card": "穿行式转场",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "shared-element-morph",
    "summary": "全屏特写卡收缩+位移+长出圆角，严丝合缝飞落进 dashboard 网格所属槽位，3% 过冲落座"
  },
  "WhiteFlashLogoSimplifyCut": {
    "name": "冲白降维切换",
    "card": "冲白降维切换",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "white-flash-logo-simplify-cut",
    "summary": "彩色液态渐变字标静置流光，画面一拍冲白过曝，白底上扁平版字标淡入定格——一次闪白完成质感降维"
  },
  "BlindsSlice": {
    "name": "百叶窗切条",
    "card": "几何擦除转场",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "blinds-slice",
    "summary": "12 根 160px 竖条 overflow hidden + 内层整页负 margin 对位；条内 A scaleX(1-p) 左缘收缩、B scaleX(p) 右缘展开，错峰 delay 成波，缝上亮线随波扫"
  },
  "ClockWipe": {
    "name": "时钟扫描擦除",
    "card": "几何擦除转场",
    "category": "转场",
    "categoryKey": "transition",
    "styleKey": "clock-wipe",
    "summary": "B 页上层套扇形 clip-path polygon，指针从屏心 12 点顺时针匀速扫 360°，扫过处露 B；扫描沿带多层亮线"
  },
  "BlurSlide": {
    "name": "逐词模糊入场",
    "card": "逐词模糊入场",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "blur-slide",
    "summary": "标题逐词入场，y 40→0 + blur 10→0 + opacity 0→1 三通道走同一条 outCubic 同步收敛，词间隔约 3.5f；副标题在标题收完前就错峰跟进"
  },
  "BraceExpand": {
    "name": "括号拉幕",
    "card": "括号拉幕",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "brace-expand",
    "summary": "一对花括号先小字号出现在正中，随即带过冲向左右滑到 ±148px 并放大到标题级，文字 clip 宽度严格绑括号间距、像被拉开幕布般揭示，落定后字距再细微松弛"
  },
  "BrandInkOpen": {
    "name": "品牌墨印开场",
    "card": "品牌墨印开场",
    "category": "开场与品牌",
    "categoryKey": "opening",
    "styleKey": "brand-ink-open",
    "summary": "墨线十字准星描画→字标逐字压印→打字机副标→满一秒静止再上浮消散"
  },
  "CelFlashStomp": {
    "name": "底色闪砸字",
    "card": "底色闪砸字",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "cel-flash-stomp",
    "summary": "底色闪砸字——大词逐拍像图章歪着砸满屏，每词落定瞬间背景层在两个纯色间频闪数帧而文字纹丝不动；动漫必杀技字卡的 UI 翻译"
  },
  "CountdownArcScatter": {
    "name": "表盘数字扫过",
    "card": "表盘数字扫过",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "countdown-arc-scatter",
    "summary": "白底表盘 9 个等大数字沿大弧切向排布，整盘扫过 96° 后减速急停，\"5\" 停在弧顶随即平移落位成标题首字符，其余数字带 blur 原地散去，标题逐词模糊淡入、末词转强调色"
  },
  "FlyingWords": {
    "name": "词语纵深隧道",
    "card": "词语纵深隧道",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "flying-words",
    "summary": "22 个关键词按黄金角铺在扁椭圆截面上，沿 z 轴从 -1750px 飞到相机前 800px 擦身而过，透明度走 [0,1,0.5,0.2,0] 生命曲线，跑满 2 整圈首尾无缝"
  },
  "GlitchCycle": {
    "name": "乱码轮播",
    "card": "乱码轮播",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "glitch-cycle",
    "summary": "同一行等宽槽位循环轮播 4 条状态短语，每条头尾按概率关键帧 [1,0,0,0.1,0,0,1] 全乱码、中段偶发单字抖动，切换瞬间叠 RGB 分离与整行位移；末条概率收 0 保证收尾干净"
  },
  "GradientWordSweep": {
    "name": "渐变充能词",
    "card": "渐变充能词",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "gradient-word-sweep",
    "summary": "黑底标语里关键词被渐变彩光从左到右快速扫过\"充能\"——波前字符辉光最强向后衰减，填满后字符间勾连细紫红闪电、整词稳态泛光呼吸"
  },
  "LeadWordZoomAssemble": {
    "name": "首词推近组句",
    "card": "首词推近组句",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "lead-word-zoom-assemble",
    "summary": "首词以 2.3 倍字号占据画面中央、hold 期间继续推近 6%，随后一条曲线同时完成「缩回终字号」与「整行左滑归位」，后续词各自从槽位右侧 0.5em 被推进来；支点横向钉首词中心、纵向钉基线（挂载时实测），整行上移的同一时窗副行浮出，停一拍后整幕 crash-zoom 推近失焦交棒"
  },
  "MarkerUnderlineTitle": {
    "name": "马克笔下划线",
    "card": "马克笔下划线",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "marker-underline-title",
    "summary": "大标题落定后，关键词下方马克笔下划线从左到右快速描画——变宽笔形、毛糙边缘、微上斜跟随斜体字势，贴着字底"
  },
  "OutlineWordFill": {
    "name": "空心字点亮",
    "card": "空心字点亮",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "outline-word-fill",
    "summary": "空心词（1px 灰描边、500 字重）从 3.2 倍急缓收缩落位，虚线大圆随后从 2.8 倍收到字周围并缓慢自转，左右水平虚线从画框边缘内伸；描边先微微增亮，实心白在 0.6 帧内瞬间点亮，一闪辉光即定格"
  },
  "PaperTitleCard": {
    "name": "纸张标题卡",
    "card": "纸张标题卡",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "paper-title-card",
    "summary": "一句话逐词压印上纸、一个词标强调色斜体、短划线收束"
  },
  "PillChipSlotCycleHandled": {
    "name": "胶囊滚轮挤开",
    "card": "胶囊滚轮挤开",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "pill-chip-slot-cycle-handled",
    "summary": "白底句式 \"Your `chip` Handled\" 里深色胶囊内词竖向滚轮轮换，胶囊宽度按预量文本宽插值平滑伸缩、两侧文字被自然挤开收拢，胶囊上下露出 13% 透明度的灰色幽灵项"
  },
  "PillSlotCycle": {
    "name": "词槽轮换",
    "card": "词槽轮换",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "pill-slot-cycle",
    "summary": "句中词槽轮换——固定句干钉死不动，句尾 pill 徽章每 ~0.7s 老虎机滚一格（旧的上飞加速淡出、新的从下带模糊滑入），连换 N 个功能词后落成完整句子收束"
  },
  "Scramble": {
    "name": "乱码锁定",
    "card": "乱码锁定",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "scramble",
    "summary": "等宽整行字符先每 2 帧高速跳乱码，再从左到右逐个锁定为真字，锁定瞬间蓝白高光闪一下——种子驱动可复现的解密感"
  },
  "SplitFlapFlip": {
    "name": "翻牌屏标题",
    "card": "翻牌屏标题",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "split-flap-title",
    "summary": "机场翻牌屏字标题——每字符上下两半机械翻牌格，翻过 2 个乱码咔哒停在目标字，左→右级联成波"
  },
  "TextColumnConverge": {
    "name": "双词合拢",
    "card": "双词合拢",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "text-column-converge",
    "summary": "双词对峙合拢——左\"NEW\"右特性词钉死在等屏边距两侧硬切轮换、全程零收缩，换到最后一词才唯一一次 ease-in-out 滑到居中咬合成短语，下方小字近乎硬切浮现；收尾揭晓型文字卡"
  },
  "TitleDemoteToLabel": {
    "name": "标题降格标签",
    "card": "标题降格标签",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "title-demote-to-label",
    "summary": "大标题降格为节标签两式——A 大标题居中显影站稳一拍后连续缩小 0.3x 平移到左上角落成小节标签、内容区在其下生长；B 同套路但登场时带文本选中态高亮块扫入再撤掉"
  },
  "LetterformDriftAssembly": {
    "name": "文字集结 · LetterformDriftAssembly",
    "card": "文字集结",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "summary": "文字集结四式——split-text-stagger 逐字裂升、letterform-drift-assembly 漂移合拢、tracking-expand-reveal 字距呼吸、text-on-path 沿线流入"
  },
  "SplitTextStagger": {
    "name": "逐字裂升",
    "card": "文字集结",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "split-text-stagger",
    "summary": "每字 overflow 盒内 translateY(115%→0) 带 10% 过冲，delay i×2f，基线同步生长"
  },
  "TextOnPath": {
    "name": "沿线流入",
    "card": "文字集结",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "text-on-path",
    "summary": "字符沿贝塞尔曲线鱼贯滑入（切线角旋转），到达后 12f 摆正水平"
  },
  "TrackingExpandReveal": {
    "name": "文字集结 · TrackingExpandReveal",
    "card": "文字集结",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "summary": "文字集结四式——split-text-stagger 逐字裂升、letterform-drift-assembly 漂移合拢、tracking-expand-reveal 字距呼吸、text-on-path 沿线流入"
  },
  "LetterDropPhysics": {
    "name": "字符坠落",
    "card": "文字入场",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "letter-drop-physics",
    "summary": "字符错峰从顶砸落，重力加速+两次衰减弹跳+落地歪斜站定，最后一拍全体齐整回正"
  },
  "ScrambleDecode": {
    "name": "乱码解码",
    "card": "文字入场",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "scramble-decode",
    "summary": "全员字符高速跳乱码 hold，随后从左到右逐个锁定真字符，锁定瞬间反色闪 2f，底部进度条同步推进"
  },
  "FontWeightPump": {
    "name": "字重脉冲",
    "card": "文字节奏同步",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "font-weight-pump",
    "summary": "命中帧笔画瞬间变粗（stroke+字重跳变），~10f 衰减弹回；重音拍额外撑宽 8%"
  },
  "KaraokeFillSync": {
    "name": "填色随读",
    "card": "文字节奏同步",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "karaoke-fill-sync",
    "summary": "每词深色从左到右填亮，进度跟语速，读完保持；活跃词下带读指下划线"
  },
  "TerminalTypewriter": {
    "name": "终端打字引爆",
    "card": "打字机动效",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "terminal-typewriter",
    "summary": "2f/字符敲出命令，光标 f%12<6 方波闪；回车帧整场景 6f 急推 scale 1→3.2（origin 锁命令行中心）+ 末 2f blur 10px，硬切 dashboard 1.06→1 回稳"
  },
  "TypewriterErrorRetype": {
    "name": "打字机动效 · TypewriterErrorRetype",
    "card": "打字机动效",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "summary": "打字机两式——terminal-typewriter 终端命令敲完即引爆场景切换、error-retype 误删重打的\"改口\"三幕剧"
  },
  "TypingCodeBlock": {
    "name": "代码块揭示",
    "card": "代码块揭示",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "typing-code-block",
    "summary": "同一段语法高亮代码左右并置两种 reveal——左侧行级 stagger 4f 淡入上浮 8px，右侧逐字符打字但字符保持原 token 色，当前字符垫一块 #3a4468 方块光标"
  },
  "VerticalWordRollBlurCycle": {
    "name": "竖向词条滚轮",
    "card": "竖向词条滚轮",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "vertical-word-roll-blur-cycle",
    "summary": "句尾词换成竖向滚轮，3 次换词各 0.55s（outQuint 七成 + outBack 三成，前快后极慢带微过冲），相邻行按距离上垂直 blur 与灰度，中心词落定瞬间从灰染成强调色"
  },
  "WordRelayFilmstrip": {
    "name": "胶片词接力",
    "card": "胶片词接力",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "word-relay-filmstrip",
    "summary": "左列黑白相间等高页面卡步进滚动、右侧衬线大词原位接力（名词恒定+动词轮换）——切词瞬间才滚动一格，词块垂直中心与当前页面卡中点精确对齐"
  },
  "WordRelayGeometry": {
    "name": "利益词接力",
    "card": "利益词接力",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "word-relay-geometry",
    "summary": "三个利益词各带一套专属几何接力——虚线大圆自转收缩 → 三实线圆 trim 依次生长（相位差 0.06）→ 金属 sheen 扫过后一拍收成纯白；旧词缩到 0.86 淡出，新词描边→填充揭示"
  },
  "AvatarBracketCarousel": {
    "name": "对焦框轮换",
    "card": "对焦框轮换",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "avatar-bracket-carousel",
    "summary": "\"Your ___ teammates\" 填空排版，四角对焦框钉在句中不动，头像队列在框内垂直 spring 轮换三次，入框放大清晰、出框按距离缩小淡化模糊，角色标签同步更换，切换瞬间对焦框呼吸 7%"
  },
  "BezierSourceConvergeMerge": {
    "name": "曲线汇流吞并",
    "card": "曲线汇流吞并",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "bezier-source-converge-merge",
    "summary": "左侧四个来源节点各有一条细贝塞尔曲线连向右侧同一汇聚点，曲线先错峰由左向右 draw-on，节点沿自己的曲线滑向汇聚点并三段式加速缩小到消失，强调色数据包全程沿路径滑行，吞并完成后曲线从左端反向擦除只留圆形徽标"
  },
  "CardStack": {
    "name": "牌堆扇展",
    "card": "牌堆扇展",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "card-stack",
    "summary": "8 张卡从屏幕下方逐张 spring 弹入叠成一摞，全员落位后整摞一次性展成 3D 扇面——每张按序号偏转 8°、横移 34px、向后退一层 z"
  },
  "Carousel3D": {
    "name": "环形画廊",
    "card": "环形画廊",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "carousel-3d",
    "summary": "8 张卡按 sin/cos 排成半径 190px 的圆环并匀速整环自转一圈，每卡只绕 Y 公转、自身 billboard 朝外，正反两层同向贴图配 backface-visibility:hidden 保证任何时刻都正立不倒置，相机全程钉在浅俯角近景"
  },
  "ClonerDepthEcho": {
    "name": "克隆纵深回响",
    "card": "克隆纵深回响",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "cloner-depth-echo",
    "summary": "克隆纵队——主卡瞬间\"复印\"出 7 个半透明分身沿斜向纵深排开成队，停一拍后全体加速吸回本体合一+弹跳"
  },
  "DeckDealFlyin": {
    "name": "发牌飞入",
    "card": "发牌飞入",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "deck-deal-flyin",
    "summary": "暗场金属背景里的实体牌堆特写环绕开局，拉远交给页面后一摞卡像发牌一样硬加速甩进网格，相机追着滚动、满板停半秒"
  },
  "DocParkLeftPillDeal": {
    "name": "文档驻留发牌",
    "card": "文档驻留发牌",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "doc-park-left-pill-deal",
    "summary": "文档不淡出而是向左滑出只露约 35% 宽并微缩到 0.92，右侧按旁白节奏慢速发牌三张白底描边药丸（outBack 弹入），每张落定后其下方字幕逐词加深、下一张到来前整句淡出，左侧文档全程极缓慢自动滚动保持\"正在被读\""
  },
  "DocumentTypewriterReveal": {
    "name": "文档打字揭示",
    "card": "文档打字揭示",
    "category": "文字与字卡",
    "categoryKey": "typography",
    "styleKey": "document-typewriter-reveal",
    "summary": "整页真排版文档在光标后自己\"写\"出来、侧栏跟进、历史条目逐个落入轨道"
  },
  "DrawSvgTrace": {
    "name": "SVG 描线追踪",
    "card": "SVG 描线追踪",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "draw-svg-trace",
    "summary": "描边生长圈注——一条带笔头的墨线沿元素轮廓跑一圈把它\"画\"出来，闭合瞬间闪黑交棒、内容淡入；同套路可给标题画下划线"
  },
  "AxialStretch": {
    "name": "轴向拉伸",
    "card": "元素形变",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "axial-stretch",
    "summary": "速度差分驱动轴向拉伸——飞得越快拉得越长（满拉伸 scaleX 2.2/scaleY 0.72），落点 8f 压扁回弹"
  },
  "ContactShadowLift": {
    "name": "接触阴影抬升",
    "card": "元素形变",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "contact-shadow-lift",
    "summary": "抬起 10f out-cubic：卡 translateY(−28px)+scale(1.08)，独立椭圆阴影 scale 1→1.72 / opacity 0.55→0.18 同进度反向；落回 8f in-cubic + 2f 微压卡壳"
  },
  "FloatingGlossyLabelPills": {
    "name": "高光胶囊横滑",
    "card": "高光胶囊横滑",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "floating-glossy-label-pills",
    "summary": "四块浅灰 dashboard wireframe 面板各顶一枚高光胶囊标签横向排队，轨道三拍向右换位（缓起→中段冲→缓收，首拍更慢带长尾），居中者放大清晰、两侧缩到 0.62 并下沉变淡微模糊形成走廊感，末段黑色描白边光标从右上斜滑到末位胶囊右端静止"
  },
  "IntegrationHubMap": {
    "name": "集成星图",
    "card": "集成星图",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "integration-hub-map",
    "summary": "旧页面一次性快翻 180°（侧棱瞬间亮闪）落成新中枢页，五个集成 app 图标同帧弹现、随即五条彩虹光管同帧齐连，光管内输送脉冲持续流动——\"翻开新一页，生态一齐接入\""
  },
  "ListReveal": {
    "name": "逐项找位",
    "card": "逐项找位",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "list-reveal",
    "summary": "垂直菜单 6 项按 0.09 的间隔依次 scale 找位、outBack 轻微过冲落定，同时整个列表容器全程线性上移 32px——逐项入场与整体漂移是两层不相干的运动"
  },
  "ListStackPress": {
    "name": "列表堆叠压弹",
    "card": "列表堆叠压弹",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "list-stack-press",
    "summary": "列表卡从画面底部逐张飞上摞起，每张落地压弹整摞、计数器同步跳一格"
  },
  "MorphFromPrimitive": {
    "name": "原型变形",
    "card": "原型变形",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "morph-from-primitive",
    "summary": "原型变形——正圆呼吸一拍（anticipation）后 SVG path 插值 24f 长成圆角卡轮廓，内容淡入"
  },
  "NeonFrameForerun": {
    "name": "霓虹框先行",
    "card": "霓虹框先行",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "neon-frame-forerun",
    "summary": "强透视直角霓虹框自左缘两头奔画先行成型，页面在框内由暗转亮，同时框内组件/文字从 3D 上空带同形软影错峰贴落、随页面点亮同步完成贴合，背景霓虹管群终段熄灭让位"
  },
  "NeonFrameForerunOrbit": {
    "name": "霓虹框环绕齐落",
    "card": "霓虹框环绕齐落",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "neon-frame-orbit-drop",
    "summary": "霓虹框先行描框后，镜头绕页面左→右弧线旋转，页面全部组件/文字**同帧**从空中往下贴合（同形软影同步收敛）——整体登场式的框内安放"
  },
  "PageWaterfallWall": {
    "name": "页面瀑布墙",
    "card": "页面瀑布墙",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "page-waterfall-wall",
    "summary": "页面瀑布墙——真实页面截图切成 3–4 列在 3D 后仰墙面上差速反向无限滚动，视差 + 镜头缓推做\"内容多到流不完\"的一览"
  },
  "MaskingTapeSlap": {
    "name": "胶带拍贴",
    "card": "纸艺动效",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "masking-tape-slap",
    "summary": "晃动=幅度包络×正弦（rot ±1.5°/bob ±5px）；胶带扑入 6f：scale 1.45→1 + rotate 欠 16°→过冲 7°→回正 + 落帧 scaleY 0.72 一帧压扁；撕边 14 点 clipPath 锯齿"
  },
  "PopupBookRise": {
    "name": "立体书升起",
    "card": "纸艺动效",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "popup-book-rise",
    "summary": "双层 3D：场景 rotateX 75° 俯视（persp 2600），每卡 rotateX 0→-90° spring（damping 11 过冲 -95°），origin 底边，preserve-3d 贯通；远排先近排后错峰 7f"
  },
  "PlatformHingeRise": {
    "name": "平台铰接升起",
    "card": "平台铰接升起",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "platform-hinge-rise",
    "summary": "承托平台先横向建立，两块主体从相邻底部铰点反向翻起并做一次克制阻尼回摆，最后结论台从画外升入，形成“舞台→证据→结论”的三段式揭示"
  },
  "ProductCardProgressiveAssemble": {
    "name": "字段逐个落位",
    "card": "字段逐个落位",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "product-card-progressive-assemble",
    "summary": "详情卡像被逐字段抓取般自建——图→标题→breadcrumb pill 依次 pop→原价出现后被划线降级、强调色新价 spring 跳出→正文逐行揭示且高亮块由左向右刷过→色卡点亮，整卡全程极慢 scale 前推"
  },
  "RadialWave": {
    "name": "点阵涟漪",
    "card": "点阵涟漪",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "radial-wave",
    "summary": "17×9 圆点阵列按到波源的欧氏距离错峰点亮，每点 scale 过冲到 1.5 再落回常亮，第一道波扫完后第二道亮蓝脉冲从外圈反向收拢回中心"
  },
  "ResearchCardStackScroll": {
    "name": "论文卡叠压",
    "card": "论文卡叠压",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "research-card-stack-scroll",
    "summary": "深色论文卡每 12 帧一张沿右下轴线飞入中心叠压，落位带 1 帧压缩，只有最上一张全清晰渲染标题+作者+摘要，下方卡按堆积深度递增模糊变暗只露标题条，背景横向 grid 同步下移做速度参照"
  },
  "RowEmbed": {
    "name": "行元素嵌入",
    "card": "行元素嵌入",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "row-embed",
    "summary": "内容行像卡片一样从空中降下、rotateX 收平、嵌入瞬间底边亮一道强调色的缝"
  },
  "RunwayGroundSkim": {
    "name": "跑道掠地贴落",
    "card": "跑道掠地贴落",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "runway-ground-skim",
    "summary": "低角度掠地机位下 UI 卡片群从空中一阵急雨式快速贴落（起点微错、下落大量重叠并行、着地即停零回弹），落齐后整页立起、视角转正收尾"
  },
  "SkeletonReveal": {
    "name": "骨架显影",
    "card": "骨架显影",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "skeleton-reveal",
    "summary": "草稿→骨架→内容三级显影——手绘涂鸦占位（煮沸抖动）一拍被灰条骨架窗口替换，骨架列表滚入后镜头推近、灰条逐行显影成头像+逐词文字，末词晚半拍落地"
  },
  "SvgShapeMorph": {
    "name": "轮廓变形",
    "card": "轮廓变形",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "svg-shape-morph",
    "summary": "一条 140 点闭合轮廓平滑变形为另一条再变回，两形状先在极坐标下重采样到相同点数、逐点半径插值 + inOutCubic，变形中段叠轻微 scale 呼吸、缓慢自转与色相从 185° 漂到 305°"
  },
  "ValueStaggerGradient": {
    "name": "数值梯度铺开",
    "card": "数值梯度铺开",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "value-stagger-gradient",
    "summary": "16 根柱入场时 delay 是时间错峰，同时高度/色相/位移/模糊四个属性各自铺成从首到末的数值梯度；第二拍把错峰原点换成中心，脉冲幅度以中心为最大重新铺开"
  },
  "BentoLightUp": {
    "name": "逐格点亮",
    "card": "整墙揭示",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "bento-light-up",
    "summary": "暗场 3×2 bento 墙压暗待命，琥珀流光逐格描边一圈、内容随即提亮上浮，全亮后镜头缓推收住"
  },
  "GridWaveFlip": {
    "name": "波浪翻面",
    "card": "整墙揭示",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "grid-wave-flip",
    "summary": "3×3 灰背卡墙沿对角线波前依次 rotateX 原位翻转 180°，翻出正面内容，尾张过冲回弹"
  },
  "WireframeDrawOn": {
    "name": "蓝图描线成形",
    "card": "整墙揭示",
    "category": "界面登场与陈列",
    "categoryKey": "ui-entrance",
    "styleKey": "wireframe-draw-on",
    "summary": "界面先以 SVG 细线蓝图分组描画，再一条琥珀发光竖线左→右扫过，扫过处线框实体化成真实界面"
  }
};

/** 画廊分类（中文，按画廊顺序），只含有 demo 的分类 */
export const DEMO_CATEGORIES: string[] = ["开场与品牌","文字与字卡","界面登场与陈列","运镜与空间","数据与指标","交互与功能演示","转场","节奏与蒙太奇","光效与强调","收尾"];
