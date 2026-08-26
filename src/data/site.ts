// Single source of truth for site-wide business info, navigation, and pricing.

export const business = {
  name: "It's All About Bookkeeping",
  shortName: "IABB",
  tagline: "Clear numbers. Confident business.",
  mission: "Organized books. Stronger business. Peace of mind.",
  description:
    "Straightforward bookkeeping for small businesses — QuickBooks setup, cleanup, and monthly bookkeeping packages that keep your numbers accurate and easy to understand.",
  email: "bridgette@itsallaboutbookkeeping.com",
  phone: "(850) 692-8460",
  phoneHref: "tel:+18506928460",
  serviceArea: "Serving Washington County, the Florida Panhandle, and surrounding areas",
} as const;

export const owner = {
  name: "Bridgette",
  title: "Founder & Owner",
  bio: "With 20+ years of bookkeeping experience, Bridgette founded It's All About Bookkeeping to give small business owners the same clarity and confidence in their numbers that larger businesses take for granted.",
} as const;

export const credentials = {
  intuitBookkeeping: {
    name: "Intuit Bookkeeping Certification",
    issuer: "Intuit",
    verifyUrl: "https://www.credly.com/go/k7uCh8MEIPMuZyrP4pC20g",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const headerCta = { label: "Free Consultation", href: "/contact" } as const;

export type OneTimeService = {
  slug: string;
  name: string;
  startingAt: string;
  summary: string;
  includes: string[];
  note?: string;
  cta: string;
  icon: string;
};

export const oneTimeServices: OneTimeService[] = [
  {
    slug: "quickbooks-setup",
    name: "QuickBooks Setup",
    startingAt: "Starting at $250",
    summary: "Start with an organized QuickBooks account built around your business.",
    includes: [
      "QuickBooks Online setup",
      "Customized chart of accounts",
      "Bank and credit card connections",
      "Beginning balances",
      "Basic bookkeeping workflows",
    ],
    cta: "Ask About QuickBooks Setup",
    icon: "calculator",
  },
  {
    slug: "bookkeeping-cleanup",
    name: "Bookkeeping Cleanup",
    startingAt: "Starting at $300",
    summary:
      "Behind on your books or unsure what's correct? We'll review, clean up, and organize your records so you can move forward with confidence.",
    includes: [
      "Review of existing books",
      "Transaction cleanup and corrections",
      "Bank and credit card reconciliations",
      "Catch-up bookkeeping",
      "Preparation for ongoing monthly bookkeeping",
    ],
    note: "Final pricing depends on the condition of the books and the number of months requiring attention.",
    cta: "Get a Cleanup Quote",
    icon: "clipboard-check",
  },
];

export type MonthlyPackage = {
  slug: string;
  name: string;
  price: string;
  bestFor: string;
  includes: string[];
  cta: string;
};

export const monthlyPackages: MonthlyPackage[] = [
  {
    slug: "starter",
    name: "Starter",
    price: "$200/month",
    bestFor: "Sole proprietors and very small businesses.",
    includes: [
      "Up to approximately 75 transactions per month",
      "1 bank account",
      "1 credit card",
      "Income and expense categorization",
      "Monthly reconciliations",
      "Profit & Loss Statement",
      "Balance Sheet",
      "Email support",
    ],
    cta: "Choose Starter",
  },
  {
    slug: "standard",
    name: "Standard",
    price: "$300/month",
    bestFor: "Established small businesses with moderate activity.",
    includes: [
      "Up to approximately 150 transactions per month",
      "Up to 3 financial accounts",
      "Income and expense categorization",
      "Monthly reconciliations",
      "Profit & Loss Statement",
      "Balance Sheet",
      "Monthly bookkeeping review",
      "Email support",
    ],
    cta: "Choose Standard",
  },
  {
    slug: "growth",
    name: "Growth",
    price: "$425/month",
    bestFor: "Growing businesses with higher transaction volume.",
    includes: [
      "Up to approximately 250 transactions per month",
      "Multiple financial accounts",
      "Income and expense categorization",
      "Monthly reconciliations",
      "Profit & Loss Statement",
      "Balance Sheet",
      "Additional monthly reporting",
      "Priority support",
    ],
    cta: "Choose Growth",
  },
];

export const packageComparison = [
  {
    name: "Starter",
    points: ["~75 transactions", "1 bank account", "1 credit card", "Core monthly reporting", "Email support"],
  },
  {
    name: "Standard",
    points: [
      "~150 transactions",
      "Up to 3 financial accounts",
      "Core monthly reporting",
      "Monthly bookkeeping review",
      "Email support",
    ],
  },
  {
    name: "Growth",
    points: ["~250 transactions", "Multiple financial accounts", "Additional reporting", "Priority support"],
  },
] as const;

export const cleanupPricingGuide = [
  { range: "1–3 months behind", price: "$300–$450" },
  { range: "4–6 months behind", price: "$500–$750" },
  { range: "7–12 months behind", price: "$800–$1,200" },
  { range: "12+ months or complex books", price: "Custom quote" },
] as const;

export const pricingTransparencyNote =
  "Prices are starting rates and may vary based on transaction volume, number of accounts, complexity, and the condition of the books. A review may be required before a final quote is provided.";

export const serviceScopeNote =
  "Bookkeeping services do not include tax preparation, tax filing, legal advice, or financial advisory services unless specifically included in a written service agreement.";

export type FaqItem = { question: string; answer: string; category: "General" | "Pricing" };

export const faqs: FaqItem[] = [
  {
    category: "General",
    question: "What does a typical engagement look like?",
    answer:
      "Most clients start with a free consultation to talk through where your books stand today. From there, we recommend either a QuickBooks setup, a bookkeeping cleanup, or moving straight into a monthly bookkeeping package — whichever fits your business.",
  },
  {
    category: "General",
    question: "What software do you use?",
    answer:
      "We work in QuickBooks Online. If you're not set up yet, QuickBooks Setup gets your account built around your business from the start.",
  },
  {
    category: "General",
    question: "How do you communicate with clients?",
    answer:
      "Ongoing support is handled by email, with priority support included on the Growth package. We're happy to schedule a call whenever it's useful.",
  },
  {
    category: "General",
    question: "How do I get started?",
    answer:
      "Schedule a free consultation. We'll ask a few questions about your business and current books, then recommend the right starting point.",
  },
  {
    category: "Pricing",
    question: "Are these prices fixed?",
    answer:
      "The listed amounts are starting rates. Final pricing may depend on transaction volume, number of accounts, complexity, and the condition of the books.",
  },
  {
    category: "Pricing",
    question: "How do I know which monthly package I need?",
    answer:
      "The appropriate package depends primarily on transaction volume, number of financial accounts, and the level of bookkeeping support needed. A consultation can help determine the best fit.",
  },
  {
    category: "Pricing",
    question: "Why does bookkeeping cleanup pricing vary?",
    answer:
      "Cleanup work depends on how far behind the books are and the amount of correction, reconciliation, and organization required.",
  },
  {
    category: "Pricing",
    question: "Can cleanup cost more than the listed range?",
    answer: "Complex books or businesses more than 12 months behind may require a custom quote.",
  },
  {
    category: "Pricing",
    question: "Do monthly packages include tax preparation?",
    answer:
      "No. Bookkeeping services do not include tax preparation, tax filing, legal advice, or financial advisory services unless specifically included in a written service agreement.",
  },
];
