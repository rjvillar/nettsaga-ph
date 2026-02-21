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
    title1: "I-online ang iyong negosyo",
    title2: "ngayong linggo.",
    subtitle:
      "Website + hosting + suporta sa isang nakapirming taunang bayad. Walang sorpresa, walang nakatagong gastos — isang website na gumagana para sa iyong negosyo.",
    ctaPrimary: "Tingnan kung paano",
    ctaSecondary: "Makipag-ugnayan",
    altTablet: "Propesyonal na Pilipinong may hawak na tablet",
    altLaptop: "Propesyonal na Pilipinong nagtatrabaho sa laptop",
    altSmiling: "Masayang propesyonal na Pilipino",
    altLiveCard: "System: Live status",
    altSSL: "Verified Secure SSL badge",
    altPerformance: "Performance Score: 95",
  },
  socialProof: {
    label: "Gawa para sa Pilipinas",
    headline: "Pinagkakatiwalaan ng mga negosyo sa Manila, Cebu, at Davao.",
  },
  valuePillars: {
    title: "Lahat ng kailangan mo, ",
    titleMuted: "wala nang hindi kailangan.",
    subtitle:
      "Pinasimple namin para makapag-focus ka sa pagpapatakbo ng iyong negosyo.",
    card1: {
      label: "Kumpleto sa isang package",
      title: "Kami ang bahala sa komplikado, ikaw ang bahala sa negosyo.",
      description:
        "Disenyo, development, hosting, domain, speed optimization — lahat nasa isang package. Hindi na kailangan ng maraming vendor.",
      checklist: [
        "Custom na Disenyo",
        "Development",
        "Hosting at Domain",
        "SEO at Bilis",
      ],
    },
    card2: {
      label: "Transparent na presyo",
      title: "Walang nakatagong bayad. Kahit kailan.",
      description:
        "Isang taunang bayad lang, kasama na lahat. Walang setup cost, walang biglaang invoice, walang kontrata.",
      items: [
        "Walang setup fees",
        "Walang lock-in na kontrata",
        "Pwedeng i-cancel anytime",
        "Ikaw ang may-ari ng lahat",
        "Libreng domain kasama",
      ],
      hiddenFees: "Nakatagong bayad:",
    },
    card3: {
      label: "Laging nandyan na suporta",
      title: "Kasama na ang mga update.",
      description:
        "Kailangan bang palitan ang text o magdagdag ng bagong litrato? Mag-message lang.",
    },
  },
  howItWorks: {
    title: "Paano ito ",
    titleMuted: "gumagana",
    subtitle:
      "Tatlong simpleng hakbang — walang komplikadong proseso, walang mahabang kontrata.",
    steps: [
      {
        phase: "Koneksyon",
        title: "Mabilisang usapan",
        description:
          "Kino-confirm namin ang info ng negosyo mo at kung ano ang kailangan mo para lumago. Walang sales pitch, 15 minutong pag-uusap lang.",
      },
      {
        phase: "Engineering",
        title: "Gagawin namin ang draft",
        description:
          "Ang team namin ang bahala sa mahirap na trabaho — disenyo, hosting, at tech. Makakakuha ka ng gumaganang unang bersyon para i-review sa loob ng 7 araw.",
      },
      {
        phase: "Kolaborasyon",
        title: "Ikaw ang magde-desisyon",
        description: "",
        descriptionParts: [
          "Kung gusto mo ang draft, ipa-publish namin. Kung hindi tugma, ",
          "walang problema at walang hard feelings",
          ". Ikaw ang laging may kontrol.",
        ],
      },
    ],
  },
  localEdge: {
    title: "Modernong tech na ",
    titleMuted: "gumagana para sa iyong negosyo",
    subtitle:
      "Gumagamit kami ng pinakabagong tools pero naiintindihan namin ang merkado ng Pilipinas. Mabilis, ligtas, at optimized para sa mga lokal na customer.",
    altImage:
      "Propesyonal na Pilipinong namamahala ng kanyang negosyo online gamit ang Nettsaga — napapaligiran ng performance metrics, deploy pipeline, at mobile-first indicators",
    features: [
      {
        title: "Gawa para sa bilis",
        description:
          "Optimized para sa internet sa Pilipinas. Mabilis mag-load ang site mo sa kahit anong koneksyon, para engaged ang mga customer.",
      },
      {
        title: "Mobile-first na disenyo",
        description:
          "Mahigit 90% ng mga Pilipino ang nag-browse sa mobile. Bawat site na ginagawa namin ay maganda at gumagana sa phone muna.",
      },
      {
        title: "Sarili mong presensya online",
        description:
          "Isang propesyonal na website na nagpapadaling mahanap ang iyong negosyo, nagtatayo ng tiwala, at ginagawang customer ang mga bisita.",
      },
      {
        title: "Laging minomonitor",
        description:
          "Sino-subaybayan namin ang uptime, bilis, at seguridad 24/7. Kung may kailangan ayusin, inaasikaso namin bago mo pa mapansin.",
      },
    ],
  },
  pricing: {
    title: "Simple, transparent na ",
    titleMuted: "presyo.",
    subtitle:
      "Isang taunang bayad — kasama na lahat. Walang buwanang sorpresa.",
    popular: "Popular",
    getStarted: "Magsimula",
    period: "/ taon",
    plans: [
      {
        name: "Starter",
        description: "Perpekto para sa maliliit na negosyo at startup",
        features: [
          "Hanggang 5 page",
          "Responsive na disenyo",
          "Contact form",
          "SSL certificate",
          "Basic SEO",
          "Email support",
        ],
      },
      {
        name: "Business",
        description: "Ideal para sa lumalagong SME",
        features: [
          "Lahat ng nasa Starter",
          "Hanggang 10 page",
          "Custom na disenyo",
          "Social media integration",
          "SEO optimization",
          "Priority support",
        ],
      },
      {
        name: "Growth",
        description: "Para sa mas malalaking kompanya na may mas malaking pangangailangan",
        features: [
          "Lahat ng nasa Business",
          "Hanggang 20 page",
          "E-commerce ready",
          "Advanced SEO",
          "Analytics dashboard",
          "Dedicated support",
        ],
      },
      {
        name: "Custom",
        description: "Solusyong gawa ayon sa iyong pangangailangan",
        features: [
          "Fully custom na solusyon",
          "Walang limitasyong page",
          "Advanced integrations",
          "Custom functionality",
          "Specialized na disenyo",
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
        q: "Amin ba ang website?",
        a: "Oo — 100%. Ang domain ay nakapangalan sa inyo at pagmamay-ari niyo ang lahat ng content, disenyo, at code. Kung umalis kayo, kasama lahat.",
      },
      {
        q: "Paano gumagana ang bayaran?",
        a: "Isang nakapirming taunang bayad. Yun lang. Walang nakatagong singil, walang biglaang invoice. Kasama na lahat — disenyo, development, hosting, domain, at suporta.",
      },
      {
        q: "Pwede ba akong mag-cancel?",
        a: "Kahit kailan. Walang lock-in na kontrata, walang cancellation fees. Mananatiling live ang site mo hanggang sa katapusan ng bayad mong period at tutulungan ka naming mag-transition kung kailangan.",
      },
      {
        q: "Gaano kabilis ang delivery?",
        a: "Karamihan ng website ay live sa loob ng 7 araw. Makakakuha ka ng malinaw na timeline bago kami magsimula para walang sorpresa sa delivery.",
      },
      {
        q: "Paano kung meron na akong website?",
        a: "Kaya naming i-redesign at i-migrate ang existing site mo o gumawa ng bagong-bago — kung alin ang mas may sense para sa direksyon ng negosyo mo.",
      },
      {
        q: "Ano ang kasama sa updates?",
        a: "Pagpapalit ng text, pagpapalit ng litrato, bagong section, layout tweaks — mag-message lang. Inaasikaso namin sa loob ng araw, walang dagdag na bayad.",
      },
      {
        q: "Nagbibigay ba kayo ng email?",
        a: "Oo. Nagse-setup kami ng propesyonal na email address tulad ng ikaw@iyongnegosyo.com para professional ang dating ng brand mo mula sa unang mensahe.",
      },
    ],
  },
  sampleWork: {
    title: "Totoong website. ",
    titleMuted: "Totoong negosyo.",
    subtitle:
      "Iba-ibang industriya, iba-ibang pangangailangan — bawat site ay custom na dinisenyo para tumugma sa iyong brand at negosyo.",
  },
  ctaBanner: {
    title: "Handa ka na bang ",
    titleMuted: "mag-online?",
    subtitle:
      "Walang commitment na kailangan. Mag-usap tayo tungkol sa kung ano ang kailangan mo at doon na natin ituloy.",
    cta: "Mag-usap tayo",
  },
  footer: {
    quickLinks: "Mabilisang links",
    getInTouch: "Makipag-ugnayan",
    copyright: "\u00a9 {year} Nettsaga. Lahat ng karapatan ay nakalaan.",
    links: ["Paano gumagana", "Bakit kami", "Presyo", "Portfolio", "FAQ", "Tungkol sa amin", "Makipag-ugnayan"],
  },
  contact: {
    title: "Makipag-ugnayan",
    subtitle:
      "May proyekto ka ba sa isip? Gusto naming marinig ang tungkol dito.",
    sidebar: {
      title: "Simulan natin ang usapan.",
      description:
        "Mag-reach out sa alinman sa mga channel na ito o sagutan ang form at babalikan ka namin.",
      response: "Lun \u2014 Biy, sa loob ng araw",
      pipeline: {
        designApproved: "Design approved",
        codeReviewed: "Code reviewed",
        testsPassed: "Tests passed",
        goingLive: "Gagawing live...",
      },
      metrics: {
        uptime: "Uptime",
        pageLoad: "Page Load",
        fasterThan: "Mas mabilis sa 92% ng mga site",
      },
    },
    form: {
      name: "Pangalan",
      email: "Email",
      phone: "Telepono",
      phoneOptional: "(opsyonal)",
      message: "Mensahe",
      consent:
        "Pumayag ako na mangolekta at mag-imbak ang Nettsaga ng aking impormasyon para masagot ang inquiry na ito. Hindi ibabahagi ang iyong data sa mga third party.",
      submit: "Ipadala ang mensahe",
      tellUs: "Sabihin sa amin ang tungkol sa iyong proyekto",
      placeholders: {
        name: "Ang iyong buong pangalan",
        email: "ikaw@halimbawa.com",
        phone: "9XX XXX XXXX",
        message: "Sabihin sa amin ang tungkol sa iyong negosyo at kung ano ang kailangan mo...",
      },
    },
  },
  about: {
    hero: {
      title: "Ginawa sa Norway, ",
      titleMuted: "para sa Pilipinas.",
      subtitle:
        "Norwegian quality standards, matapat na presyo, at 7-day turnaround — ngayo'y nagsisilbi sa mga negosyong Pilipino.",
    },
    story: {
      title: "Mula sa Scandinavia ",
      titleMuted: "hanggang Southeast Asia",
      description:
        "Nagsimula ang Nettsaga sa Oslo, Norway — isang team ng mga engineer, developer, at designer na tumutulong sa mga negosyong Scandinavian na mag-online. Pagkatapos ng 500+ na proyekto, nakita namin ang parehong problema kahit saan: sobrang mahal ang mga agency, sobrang komplikado, at kulang sa delivery. Dinala namin ang Nettsaga sa Pilipinas para ayusin iyon — parehong standards, parehong bilis, matapat na presyo.",
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
        "Kung kailangan mo ng bagong website o gusto mong pagandahin ang meron ka — pag-usapan natin kung paano kami makakatulong.",
      cta: "Makipag-ugnayan",
    },
  },
  serviceStack: {
    pillars: [
      { label: "Disenyo at Development", detail: "Custom na gawa mula sa simula" },
      { label: "Hosting at Seguridad", detail: "Managed na infrastructure" },
      { label: "SEO at Performance", detail: "Optimized para sa bilis" },
      { label: "Patuloy na Suporta", detail: "Updates at monitoring" },
    ],
    footer: "Isang taunang bayad — kasama na lahat",
  },
  buildPipeline: {
    steps: [
      { label: "Kausapin kami", detail: "Sabihin kung ano ang kailangan mo" },
      { label: "Gagawin namin", detail: "Umuusad na ang iyong site" },
      { label: "Ikaw ang mag-review", detail: "Aprubahan o i-refine" },
      { label: "Mag-live na", detail: "Launch at patuloy na suporta" },
    ],
    footer: "Walang kontrata — pwedeng i-cancel anytime",
  },
  statusPanel: {
    metrics: [
      { label: "Uptime", status: "Operational" },
      { label: "PageSpeed", status: "Optimized" },
      { label: "SSL", status: "Secured" },
      { label: "Response", status: "Available" },
    ],
    monitoring: "24/7 monitoring active",
  },
  comparison: {
    feature: "Feature",
    popular: "Popular",
    categories: [
      {
        label: "Website Essentials",
        features: [
          "Mga page",
          "Custom domain",
          "SSL certificate",
          "Responsive na disenyo",
          "Contact form",
          "Custom na disenyo",
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
      "Bawat plan ay may kasamang hosting, updates, at suporta.",
    cta: {
      title: "Hindi sigurado kung aling plan ",
      titleMuted: "ang bagay?",
      subtitle:
        "Walang commitment na kailangan. Mag-usap tayo at hanapin ang pinakamagandang opsyon para sa iyong negosyo.",
      cta: "Kausapin kami",
    },
    trust: [
      {
        title: "Walang lock-in",
        description: "I-cancel anytime. Walang kontrata, walang cancellation fees.",
      },
      {
        title: "Live sa 7 araw",
        description: "Mula sa kickoff hanggang launch sa isang linggo.",
      },
      {
        title: "Ikaw ang may-ari ng lahat",
        description: "Domain, code, content — lahat sa iyo.",
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
        "Propesyonal na website para sa mga negosyong Pilipino. Isang nakapirming taunang bayad para sa website, hosting, at suporta. Mag-online na ngayon kasama ang Nettsaga.",
    },
    about: {
      title: "Tungkol sa Amin — Nettsaga",
      description:
        "Ipinanganak sa Norway, ginawa para sa Pilipinas. Kilalanin ang team sa likod ng Nettsaga at ang aming misyon na tulungan ang mga negosyong Pilipino na umunlad online.",
    },
    pricing: {
      title: "Presyo — Nettsaga",
      description:
        "Simple, transparent na presyo. Isang taunang bayad — kasama na lahat. Ihambing ang mga plan at features.",
    },
    contact: {
      title: "Makipag-ugnayan — Nettsaga",
      description:
        "Makipag-ugnayan sa Nettsaga. Gusto naming marinig ang tungkol sa iyong proyekto.",
    },
  },
};

export default fil;
