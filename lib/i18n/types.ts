export type Locale = "en" | "fil";

export interface Dictionary {
  nav: {
    howItWorks: string;
    pricing: string;
    portfolio: string;
    about: string;
    contact: string;
    talkToUs: string;
  };
  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    altTablet: string;
    altLaptop: string;
    altSmiling: string;
    altLiveCard: string;
    altSSL: string;
    altPerformance: string;
  };
  socialProof: {
    label: string;
    headline: string;
  };
  valuePillars: {
    title: string;
    titleMuted: string;
    subtitle: string;
    card1: {
      label: string;
      title: string;
      description: string;
      checklist: string[];
    };
    card2: {
      label: string;
      title: string;
      description: string;
      items: string[];
      hiddenFees: string;
    };
    card3: {
      label: string;
      title: string;
      description: string;
    };
  };
  howItWorks: {
    title: string;
    titleMuted: string;
    subtitle: string;
    steps: {
      phase: string;
      title: string;
      description: string;
      descriptionParts?: string[];
    }[];
  };
  localEdge: {
    title: string;
    titleMuted: string;
    subtitle: string;
    altImage: string;
    features: { title: string; description: string }[];
  };
  pricing: {
    title: string;
    titleMuted: string;
    subtitle: string;
    popular: string;
    getStarted: string;
    period: string;
    plans: {
      name: string;
      description: string;
      features: string[];
    }[];
  };
  faq: {
    title: string;
    titleMuted: string;
    subtitle: string;
    weAccept: string;
    items: { q: string; a: string }[];
  };
  sampleWork: {
    title: string;
    titleMuted: string;
    subtitle: string;
  };
  ctaBanner: {
    title: string;
    titleMuted: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    quickLinks: string;
    getInTouch: string;
    copyright: string;
    links: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    sidebar: {
      title: string;
      description: string;
      response: string;
      pipeline: {
        designApproved: string;
        codeReviewed: string;
        testsPassed: string;
        goingLive: string;
      };
      metrics: {
        uptime: string;
        pageLoad: string;
        fasterThan: string;
      };
    };
    form: {
      name: string;
      email: string;
      phone: string;
      phoneOptional: string;
      message: string;
      consent: string;
      submit: string;
      tellUs: string;
      placeholders: {
        name: string;
        email: string;
        phone: string;
        message: string;
      };
    };
  };
  about: {
    hero: {
      title: string;
      titleMuted: string;
      subtitle: string;
    };
    story: {
      title: string;
      titleMuted: string;
      description: string;
      hqLabel: string;
      officeLabel: string;
    };
    scope: {
      title: string;
      titleMuted: string;
    };
    team: {
      title: string;
      titleBold: string;
    };
    cta: {
      title: string;
      titleMuted: string;
      subtitle: string;
      cta: string;
    };
  };
  serviceStack: {
    pillars: { label: string; detail: string }[];
    footer: string;
  };
  buildPipeline: {
    steps: { label: string; detail: string }[];
    footer: string;
  };
  statusPanel: {
    metrics: { label: string; status: string }[];
    monitoring: string;
  };
  comparison: {
    feature: string;
    popular: string;
    categories: {
      label: string;
      features: string[];
    }[];
  };
  pricingPage: {
    comparisonTitle: string;
    comparisonTitleMuted: string;
    comparisonSubtitle: string;
    cta: {
      title: string;
      titleMuted: string;
      subtitle: string;
      cta: string;
    };
    trust: { title: string; description: string }[];
  };
  metadata: {
    home: { title: string; description: string };
    about: { title: string; description: string };
    pricing: { title: string; description: string };
    contact: { title: string; description: string };
  };
}
