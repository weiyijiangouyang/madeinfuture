// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mobileMenu.classList.add("hidden"));
  });
}

// How We Work timeline (7 steps)
const hww = [
  { range: 'Discovery & Audit', text: 'Stakeholder interviews, tool scan, workshops, AI Task Force' },
  { range: 'Roadmap Sprint', text: '2-week sprint prioritizing 3 automations, define KPIs, 90-day action plan' },
  { range: 'Build & Integrate', text: 'Off-the-shelf workflows, custom coded builds, full systems' },
  { range: 'Security Baseline', text: 'Customer data protection, GDPR, PCI DSS' },
  { range: 'Training & Enablement', text: 'Workshops, playbooks, tutorials for teams' },
  { range: 'Change & Rollout', text: 'Start with one dept, expand, exec reporting' },
  { range: 'Support & Growth', text: 'Ongoing fixes, new automations, monthly X Wins reports' },
];
const stepsEl = document.getElementById("hww-steps");
if (stepsEl) {
  hww.forEach((s, i) => {
    const sideLeft = i % 2 === 0;
    stepsEl.insertAdjacentHTML("beforeend", `
      <div class="md:grid md:grid-cols-2 md:gap-8 py-6">
        <div class="${sideLeft ? 'md:pr-8' : 'md:col-start-2 md:pl-8'}">
          <div class="relative bg-black border border-electrode/30 rounded-2xl p-6 overflow-hidden">
            <span class="absolute text-7xl font-extrabold text-electrode/40 right-4 bottom-2">${i+1}</span>
            <h4 class="text-white font-semibold mb-2 relative z-10">${s.range}</h4>
            <p class="text-gray-300 relative z-10">${s.text}</p>
          </div>
        </div>
      </div>
    `);
  });
}

// Past Work accordion
const pastWork = [
  {
    id: 'mkt', title: 'Marketing & Growth', items: [
      { before: 'Manual translation + reformatting', after: 'AI translates directly into formatted templates', impact: '100+ design hours saved; faster launches' },
      { before: 'Manual UGC outreach, weeks of delay', after: 'AI generates UGC-style ads & landing pages in hours', impact: '-30% CAC; 10x more ad variants' },
      { before: 'Limited ad copy variations', after: 'Instant ad copy variations for testing', impact: '+15–20% CTR' },
      { before: 'Manual brainstorm of visuals', after: 'AI generates scroll-stopping creatives', impact: '+10–15% CTR' },
      { before: 'Manual scripting, editing', after: 'AI assembles near-final video ads', impact: '≈70% production cost reduction' },
      { before: 'Expensive shoots with models & studios', after: 'AI generates lifestyle/product shots', impact: '$5k–$20k savings per shoot' },
      { before: 'Costly 3D modeling', after: 'AI converts 2D images into 3D videos', impact: '≈80% cost savings; higher PDP engagement' },
      { before: 'Manual design of carousels', after: 'AI auto-generates promo carousels', impact: '+25% content output' },
      { before: 'Pixel tracking inaccuracies', after: 'Automated Conversions API', impact: '+20–30% ROAS accuracy' },
    ]
  },
  { id:'rnd', title:'R&D & Product', items:[
    { before:'Manual daily checking of channel prices', after:'AI monitors channels, flags MAP violations, triggers alerts', impact:'Hours saved daily; protect margins' },
    { before:'Manual keyword & demand validation', after:'Automated SEMrush analysis & scoring', impact:'Months → hours; faster validation' },
    { before:'Manual competitor research', after:'Multi-agent competitor & demand scraping', impact:'Weeks saved; identifies niches' },
    { before:'Manual product optimization', after:'AI-driven listing & positioning optimization', impact:'Higher conversions' },
  ]},
  { id:'cx', title:'Customer Experience (CX)', items:[
    { before:'Manual review of tickets', after:'AI tagging + insights dashboards', impact:'Faster loops; reduced churn' },
    { before:'Manual email sorting', after:'Automated classification + routing', impact:'+30% CX efficiency' },
  ]},
  { id:'fin', title:'Finance & Back Office', items:[
    { before:'Manual reconciliation', after:'Automated accrual matching & templates', impact:'Hours saved; accurate reporting' },
    { before:'Data scattered in multiple platforms', after:'Centralized dashboards', impact:'Faster decisions; 100% live KPIs' },
    { before:'Knowledge siloed', after:'AI-powered internal chatbot', impact:'Instant answers; time saved' },
  ]},
  { id:'ops', title:'Operations', items:[
    { before:'Manual entry into sheets', after:'Automated logging with monthly tabs', impact:'Hours saved weekly; better visibility' },
    { before:'Manual daily compilation', after:'Automated AI-generated reports', impact:'Zero manual effort; consistent insights' },
    { before:'Manual monitoring across systems', after:'AI-driven fulfillment, inventory & feedback automation', impact:'Reduced overhead; fewer stockouts' },
  ]},
];

const accRoot = document.getElementById("pw-accordion");
if (accRoot) {
  pastWork.forEach(cat => {
    const panelId = `panel-${cat.id}`;
    accRoot.insertAdjacentHTML("beforeend", `
      <div class="border border-electrode/30 rounded-2xl overflow-hidden">
        <button data-target="${panelId}" class="w-full text-left px-6 py-4 bg-black/60 hover:bg-black/40 transition flex items-center justify-between">
          <span class="font-semibold">${cat.title}</span>
          <span class="acc-plus">+</span>
        </button>
        <div id="${panelId}" class="hidden px-6 py-4 bg-black/30 border-t border-electrode/20 space-y-4"></div>
      </div>
    `);
    // fill rows
    const rows = cat.items.map(item => `
      <div class="grid grid-cols-12 items-start border border-electrode/10 rounded-xl overflow-hidden">
        <div class="col-span-12 md:col-span-4 p-4">
          <div class="text-[11px] text-gray-400 mb-1">Before</div>
          <div class="text-gray-300">${item.before}</div>
        </div>
        <div class="col-span-12 md:col-span-4 p-4 border-t md:border-t-0 md:border-l border-electrode/10">
          <div class="text-[11px] text-gray-400 mb-1">After</div>
          <div class="text-electrode">${item.after}</div>
        </div>
        <div class="col-span-12 md:col-span-4 p-4 border-t md:border-t-0 md:border-l border-electrode/10">
          <div class="text-[11px] text-gray-400 mb-1">Impact</div>
          <div class="text-white font-medium">${item.impact}</div>
        </div>
      </div>
    `).join("");
    document.getElementById(panelId).innerHTML = rows;
  });

  // toggle panels
  accRoot.querySelectorAll("button[data-target]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-target");
      const panel = document.getElementById(id);
      panel.classList.toggle("hidden");
      const plus = btn.querySelector(".acc-plus");
      plus.classList.toggle("rotate-45");
    });
  });
}

// First 90 Days mirrored headings + blue subtitles
const f90 = [
  { range: "Day 1–14", subtitle: "Discovery & Sprint", desc: "Identify 10–50 automation opportunities, prioritize 3–5 high-impact candidates." },
  { range: "Day 15–30", subtitle: "First Builds", desc: "Launch quick wins (support automation, campaign automation) and kick off larger builds." },
  { range: "Day 31–60", subtitle: "Expansion", desc: "Roll automations into CX and Ops; refine based on adoption and performance feedback." },
  { range: "Day 61–90", subtitle: "Scaling", desc: "5–10 automations live with measurable KPI impact; momentum and culture shift underway." },
  { range: "Beyond 90 Days", subtitle: "Growth", desc: "Continuous discovery, larger initiatives, and embedding AI into the company DNA." },
];
const f90El = document.getElementById("f90");
if (f90El) {
  f90.forEach((ph, i) => {
    const onLeft = i % 2 === 0;
    f90El.insertAdjacentHTML("beforeend", `
      <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
        ${onLeft ? `
          <div class="text-right pr-6 flex flex-col items-end justify-center">
            <h4 class="text-3xl font-extrabold text-white leading-tight">${ph.range}</h4>
            <div class="text-3xl font-extrabold text-electrode leading-tight mt-1">${ph.subtitle}</div>
          </div>
          <div class="pl-6"><div class="bg-black border border-electrode/30 rounded-2xl p-6">
            <p class="text-gray-300">${ph.desc}</p>
          </div></div>
        ` : `
          <div class="pr-6"><div class="bg-black border border-electrode/30 rounded-2xl p-6">
            <p class="text-gray-300">${ph.desc}</p>
          </div></div>
          <div class="text-left pl-6 flex flex-col justify-center">
            <h4 class="text-3xl font-extrabold text-white leading-tight">${ph.range}</h4>
            <div class="text-3xl font-extrabold text-electrode leading-tight mt-1">${ph.subtitle}</div>
          </div>
        `}
      </div>
    `);
  });
}
