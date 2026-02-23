import type { Dictionary } from "./types";

const fil: Dictionary = {
  nav: {
    howItWorks: "Paano gumagana",
    pricing: "Presyo",
    portfolio: "Portfolio",
    about: "Tungkol sa amin",
    contact: "Makipag-ugnayan",
    talkToUs: "Kausapin kami",
  },
  hero: {
    title1: "Ipa-online ang negosyo mo",
    title2: "ngayong linggo.",
    subtitle:
      "Website + hosting + support sa iisang fixed na taunang bayad. Walang sorpresa, walang hidden fees — website na talagang gumagana para sa negosyo mo.",
    ctaPrimary: "Paano gumagana",
    ctaSecondary: "Kausapin kami",
    altTablet: "Pilipinong propesyonal na may hawak na tablet",
    altLaptop: "Pilipinong propesyonal na nagtatrabaho sa laptop",
    altSmiling: "Masayang Pilipinong propesyonal",
    altLiveCard: "System: Live status",
    altSSL: "Verified Secure SSL badge",
    altPerformance: "Performance Score: 95",
  },
  socialProof: {
    label: "Gawa para sa Pilipinas",
    headline: "Pinagkakatiwalaan ng mga negosyo sa Maynila, Cebu, at Davao.",
  },
  valuePillars: {
    title: "Lahat ng kailangan mo, ",
    titleMuted: "wala nang sobra.",
    subtitle:
      "Pinapasimple namin ang proseso para makapag-focus ka sa negosyo mo.",
    card1: {
      label: "All-in-one talaga",
      title: "Kami ang bahala sa tech, ikaw sa negosyo.",
      description:
        "Design, development, hosting, domain, speed optimization — lahat nasa iisang package. Hindi mo kailangang mag-manage ng maraming vendor.",
      checklist: [
        "Custom na design",
        "Development",
        "Hosting at domain",
        "SEO at bilis",
      ],
    },
    card2: {
      label: "Malinaw na singil",
      title: "Walang hidden fees. Kailanman.",
      description:
        "Isang fixed na taunang bayad lang—kasama na lahat. Walang setup fee, walang biglaang invoice, walang kontrata.",
      items: [
        "Walang setup fee",
        "Walang lock-in na kontrata",
        "Mag-cancel kahit kailan",
        "Sa’yo ang lahat",
        "Kasama ang libreng domain",
      ],
      hiddenFees: "Hidden fees:",
    },
    card3: {
      label: "Suporta na laging available",
      title: "Kasama ang updates.",
      description:
        "May ipapabago na text o magdadagdag ng bagong photo? Message mo lang kami.",
    },
  },
  howItWorks: {
    title: "Paano ito ",
    titleMuted: "gumagana",
    subtitle:
      "Tatlong simpleng hakbang lang—walang komplikadong proseso, walang mahabang kontrata.",
    steps: [
      {
        phase: "Pagkilala",
        title: "Mabilisang usap",
        description:
          "Kinukumpirma namin ang details ng negosyo mo at kung ano talaga ang kailangan mo para lumago. Walang sales pitch—15 minuto lang para mag-align.",
      },
      {
        phase: "Engineering",
        title: "Gagawa kami ng draft",
        description:
          "Kami na ang bahala sa heavy lifting—design, hosting, at tech. Makakakuha ka ng fully working na unang version para i-review sa loob ng 7 araw.",
      },
      {
        phase: "Collaboration",
        title: "Ikaw ang magdedesisyon",
        description: "",
        descriptionParts: [
          "Kung okay sa’yo ang draft, ipo-publish namin. Kung hindi pa tugma, ",
          "walang problema—walang hard feelings",
          ". Ikaw pa rin ang may control.",
        ],
      },
    ],
  },
  localEdge: {
    title: "Modernong tech na ",
    titleMuted: "gumagana para sa iyong negosyo",
    subtitle:
      "Gumagamit kami ng latest tools, pero kabisado namin ang market sa Pilipinas. Mabilis, ligtas, at optimized para sa local customers.",
    altImage:
      "Pilipinong propesyonal na namamahala ng negosyo online gamit ang Nettsaga — napapaligiran ng performance metrics, deploy pipeline, at mobile-first indicators",
    features: [
      {
        title: "Gawa para sa bilis",
        description:
          "Optimized para sa internet sa Pilipinas. Mabilis mag-load ang site mo kahit anong koneksyon, kaya mas engaged ang customers.",
      },
      {
        title: "Mobile-first na disenyo",
        description:
          "Mahigit 90% ng mga Pilipino ay nagba-browse sa mobile. Bawat site na ginagawa namin ay maganda at smooth sa phone muna.",
      },
      {
        title: "Sarili mong presensya online",
        description:
          "Isang propesyonal na website na madaling mahanap, nakakapag-build ng tiwala, at nagko-convert ng bisita maging customer.",
      },
      {
        title: "Laging minomonitor",
        description:
          "Minomonitor namin ang uptime, bilis, at security 24/7. Kapag may kailangang ayusin, inaasikaso namin bago mo pa mapansin.",
      },
    ],
  },
  pricing: {
    title: "Simple, transparent na ",
    titleMuted: "presyo.",
    subtitle:
      "Isang taunang bayad — kasama na lahat. Walang buwanang sorpresa.",
    popular: "Pinakasikat",
    getStarted: "Magsimula",
    period: "/ taon",
    plans: [
      {
        name: "Starter",
        description: "Para sa maliliit na negosyo at startups",
        features: [
          "Hanggang 5 pahina",
          "Responsive na design",
          "Contact form",
          "SSL certificate",
          "Basic SEO",
          "Email support",
        ],
      },
      {
        name: "Business",
        description: "Para sa lumalaking SME",
        features: [
          "Lahat ng nasa Starter",
          "Hanggang 10 pahina",
          "Custom na design",
          "Social media integration",
          "SEO optimization",
          "Priority support",
        ],
      },
      {
        name: "Growth",
        description:
          "Para sa mas malalaking negosyo na mas marami ang kailangan",
        features: [
          "Lahat ng nasa Business",
          "Hanggang 20 pahina",
          "E-commerce ready",
          "Advanced SEO",
          "Analytics dashboard",
          "Dedicated support",
        ],
      },
      {
        name: "Custom",
        description: "Solusyong sakto sa kailangan mo",
        features: [
          "Fully custom na solusyon",
          "Walang limit sa pahina",
          "Advanced integrations",
          "Custom functionality",
          "Specialized na design",
          "SLA guarantee",
        ],
      },
    ],
  },
  faq: {
    title: "May tanong? ",
    titleMuted: "May sagot kami.",
    subtitle: "Diretso lang — walang fine print, walang sorpresa.",
    weAccept: "Tumatanggap kami ng",
    items: [
      {
        q: "Akin ba ang website?",
        a: "Oo—100%. Nakapangalan sa’yo ang domain at sa’yo rin ang lahat ng content, design, at code. Kapag umalis ka, dala mo lahat.",
      },
      {
        q: "Paano ang bayad?",
        a: "Isang fixed na taunang bayad lang. Yun na ’yon. Walang hidden charges, walang biglaang invoice. Kasama na lahat—design, development, hosting, domain, at support.",
      },
      {
        q: "Puwede ba akong mag-cancel?",
        a: "Kahit kailan. Walang lock-in na kontrata, walang cancellation fees. Live pa rin ang site mo hanggang matapos ang paid period mo, at tutulungan ka naming mag-transition kung kailangan.",
      },
      {
        q: "Gaano kabilis ang delivery?",
        a: "Karamihan ng website ay live within 7 days. May malinaw kang timeline bago kami magsimula para walang sorpresa.",
      },
      {
        q: "Paano kung meron na akong website?",
        a: "Puwede naming i-redesign at i-migrate ang existing site mo, o gumawa ng bago—kung alin ang mas may sense para sa direksyon ng negosyo mo.",
      },
      {
        q: "Ano ang kasama sa updates?",
        a: "Text changes, photo swaps, bagong section, layout tweaks—message mo lang kami. Inaayos namin within the day, walang extra cost.",
      },
      {
        q: "Nagbibigay ba kayo ng email?",
        a: "Oo. Nagse-setup kami ng professional email tulad ng you@yourbusiness.com para credible ang dating ng brand mo mula sa unang message.",
      },
    ],
  },
  sampleWork: {
    title: "Totoong sites. ",
    titleMuted: "Totoong negosyo.",
    subtitle:
      "Iba-ibang industriya, iba-ibang pangangailangan—bawat site ay custom-designed para tumugma sa brand at negosyo mo.",
  },
  ctaBanner: {
    title: "Handa ka na bang ",
    titleMuted: "mag-online?",
    subtitle:
      "Walang commitment. Usap tayo kung ano ang kailangan mo—kami na bahala sa susunod.",
    cta: "Mag-usap tayo",
  },
  footer: {
    quickLinks: "Quick links",
    getInTouch: "Makipag-ugnayan",
    copyright: "\u00a9 {year} Nettsaga. Lahat ng karapatan ay nakalaan.",
    links: [
      "Paano gumagana",
      "Bakit kami",
      "Presyo",
      "Portfolio",
      "FAQ",
      "Tungkol sa amin",
      "Makipag-ugnayan",
    ],
  },
  contact: {
    title: "Makipag-ugnayan",
    subtitle:
      "May proyekto ka ba sa isip? Gusto naming marinig ang tungkol dito.",
    sidebar: {
      title: "Simulan natin ang usapan.",
      description:
        "Makipag-ugnayan sa alinman sa mga channel na ’to o sagutan ang form—babalikan ka namin.",
      response: "Lunes \u2014 Biyernes, sa loob ng araw",
      pipeline: {
        designApproved: "Naaprubahan ang design",
        codeReviewed: "Na-review ang code",
        testsPassed: "Pasado ang tests",
        goingLive: "Magla-launch...",
      },
      metrics: {
        uptime: "Uptime",
        pageLoad: "Page Load",
        fasterThan: "Mas mabilis kaysa sa 92% ng mga site",
      },
    },
    form: {
      name: "Pangalan",
      email: "Email",
      phone: "Telepono",
      phoneOptional: "(opsyonal)",
      message: "Mensahe",
      consent:
        "Sumasang-ayon akong kolektahin at i-store ng Nettsaga ang impormasyon ko para masagot ang inquiry na ito. Hindi namin ibabahagi ang data mo sa third parties.",
      submit: "Ipadala ang mensahe",
      tellUs: "Kuwento mo sa amin ang proyekto mo",
      placeholders: {
        name: "Buong pangalan mo",
        email: "you@example.com",
        phone: "9XX XXX XXXX",
        message: "Kuwento mo ang negosyo mo at kung ano ang kailangan mo...",
      },
    },
  },
  about: {
    hero: {
      title: "Ginawa sa Norway, ",
      titleMuted: "para sa Pilipinas.",
      subtitle:
        "Norwegian quality standards, honest pricing, at 7-day turnaround—ngayon para sa mga negosyong Pilipino.",
    },
    story: {
      title: "Mula sa Scandinavia ",
      titleMuted: "hanggang Southeast Asia",
      description:
        "Nagsimula ang Nettsaga sa Oslo, Norway—isang team ng engineers, developers, at designers na tumutulong sa mga negosyong Scandinavian na mag-online. Pagkatapos ng 500+ projects, pareho ang nakita naming problema kahit saan: sobrang mahal, sobrang komplikado, at kulang sa delivery. Dinala namin ang Nettsaga sa Pilipinas para ayusin ’yon—parehong standards, parehong bilis, honest pricing.",
      hqLabel: "Kirkegata 15, Oslo",
      officeLabel: "Burgundy Tower, Makati",
    },
    scope: {
      title: "Lahat ng kailangan ng iyong negosyo ",
      titleMuted: "para mag-live",
    },
    team: {
      title: "Ang team sa likod ng ",
      titleBold: "Nettsaga",
    },
    cta: {
      title: "Gusto mong magtrabaho ",
      titleMuted: "kasama namin?",
      subtitle:
        "Kung kailangan mo ng bagong website o gusto mong pagandahin ang meron ka—usap tayo kung paano kami makakatulong.",
      cta: "Makipag-ugnayan",
    },
  },
  serviceStack: {
    pillars: [
      {
        label: "Disenyo at Development",
        detail: "Custom na gawa mula sa umpisa",
      },
      { label: "Hosting at Seguridad", detail: "Managed infrastructure" },
      { label: "SEO at Performance", detail: "Optimized para sa bilis" },
      { label: "Patuloy na Suporta", detail: "Updates at monitoring" },
    ],
    footer: "Isang taunang bayad — kasama na lahat",
  },
  buildPipeline: {
    steps: [
      { label: "Kausapin kami", detail: "Sabihin kung ano ang kailangan mo" },
      { label: "Gagawin namin", detail: "Unti-unting nabubuo ang site mo" },
      { label: "Ikaw ang mag-review", detail: "Aprubahan o i-refine" },
      { label: "Go live", detail: "Launch at patuloy na suporta" },
    ],
    footer: "Walang kontrata — puwedeng mag-cancel kahit kailan",
  },
  statusPanel: {
    metrics: [
      { label: "Uptime", status: "Operational" },
      { label: "PageSpeed", status: "Optimized" },
      { label: "SSL", status: "Secured" },
      { label: "Response", status: "Available" },
    ],
    monitoring: "Aktibo ang 24/7 monitoring",
  },
  comparison: {
    feature: "Katangian",
    popular: "Pinakasikat",
    categories: [
      {
        label: "Mga Pangunahing Kailangan sa Website",
        features: [
          "Mga pahina",
          "Custom domain",
          "SSL certificate",
          "Responsive na design",
          "Contact form",
          "Custom na design",
          "Custom functionality",
        ],
      },
      {
        label: "Hosting at Performance",
        features: [
          "Managed hosting",
          "Speed optimization",
          "Uptime monitoring",
          "CDN",
          "Daily backups",
        ],
      },
      {
        label: "SEO at Marketing",
        features: [
          "Basic SEO",
          "SEO optimization",
          "Advanced SEO",
          "Social media integration",
          "Analytics dashboard",
          "Google Business setup",
        ],
      },
      {
        label: "E-commerce",
        features: [
          "E-commerce ready",
          "Payment integration",
          "Advanced integrations",
          "Booking system",
        ],
      },
      {
        label: "Suporta at Maintenance",
        features: [
          "Content updates",
          "Email support",
          "Priority support",
          "Dedicated support",
          "SLA guarantee",
          "Propesyonal na email",
        ],
      },
    ],
  },
  pricingPage: {
    comparisonTitle: "Ano ang kasama sa ",
    comparisonTitleMuted: "bawat plan",
    comparisonSubtitle:
      "Kasama sa bawat plan ang hosting, updates, at support.",
    cta: {
      title: "Hindi sigurado kung aling plan ",
      titleMuted: "ang bagay?",
      subtitle:
        "Walang commitment. Usap tayo at hanapin ang pinakamagandang option para sa negosyo mo.",
      cta: "Kausapin kami",
    },
    trust: [
      {
        title: "Walang lock-in",
        description:
          "Mag-cancel kahit kailan. Walang kontrata, walang cancellation fees.",
      },
      {
        title: "Live sa 7 araw",
        description: "Mula kickoff hanggang launch sa loob ng isang linggo.",
      },
      {
        title: "Ikaw ang may-ari ng lahat",
        description: "Domain, code, content—lahat sa’yo.",
      },
      {
        title: "Libreng updates",
        description: "Kasama lagi ang content changes at tweaks.",
      },
    ],
  },
  metadata: {
    home: {
      title: "Nettsaga — I-online ang Iyong Negosyo Ngayong Linggo",
      description:
        "Propesyonal na website para sa mga negosyong Pilipino. Isang fixed na taunang bayad para sa website, hosting, at support. Mabilis kang makakapag-online kasama ang Nettsaga.",
    },
    about: {
      title: "Tungkol sa Amin — Nettsaga",
      description:
        "Ipinanganak sa Norway, ginawa para sa Pilipinas. Kilalanin ang team sa likod ng Nettsaga at ang misyon naming tulungan ang mga negosyong Pilipino na umunlad online.",
    },
    pricing: {
      title: "Presyo — Nettsaga",
      description:
        "Simple at transparent na presyo. Isang taunang bayad—kasama na lahat. Ihambing ang plans at features.",
    },
    contact: {
      title: "Makipag-ugnayan — Nettsaga",
      description:
        "Makipag-ugnayan sa Nettsaga. Gusto naming marinig ang tungkol sa iyong proyekto.",
    },
  },
};

export default fil;
