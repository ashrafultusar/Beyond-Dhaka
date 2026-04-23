import { TrendingUp, Sparkles, Target, Monitor, PenTool, Search } from "lucide-react";

export const generateSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const servicesData = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Grow your brand visibility and attract the right customers through data-driven marketing.",
    subTitle: "Focused on real growth, not just reach.", 
    features: [
      "Facebook & Google Ads – targeted campaigns to drive instant traffic & leads",
      "Social Media Management – consistent posting and audience engagement",
      "Content Strategy – content that attracts and converts",
      "Campaign Optimization – improve performance & ROI continuously"
    ],
    ctaText: "👉 Start Free Consultation",
    icon: <TrendingUp size={24} color="white" />,
  },
  {
    id: 2,
    title: "Image Editing",
    description: "Get clean, professional visuals that boost your product appeal and sales.",
    subTitle: "Make your visuals sell for you.",
    features: [
      "Background Removal – clean and distraction-free images",
      "Product Retouching – enhance quality for better presentation",
      "Banner & Ad Design – eye-catching creatives for campaigns",
      "E-commerce Optimization – ready images for online stores"
    ],
    ctaText: "👉 View Samples",
    icon: <Sparkles size={24} color="white" />,
  },
  {
    id: 3,
    title: "Lead Generation",
    description: "Generate high-quality leads that convert into real customers.",
    subTitle: "More leads, better conversions.",
    features: [
      "Facebook Lead Ads – collect leads directly from ads",
      "Landing Page Setup – high-converting pages",
      "Audience Targeting – reach the right people",
      "Lead Filtering – improve lead quality"
    ],
    ctaText: "👉 Get Leads Now",
    icon: <Target size={24} color="white" />,
  },
  {
    id: 4,
    title: "Web Development",
    description: "Build fast, modern websites that turn visitors into customers.",
    subTitle: "Your website, your best salesperson.",
    features: [
      "Business Website – professional company websites",
      "Landing Pages – conversion-focused pages",
      "E-commerce Setup – sell products online",
      "Speed Optimization – fast & mobile-friendly performance"
    ],
    ctaText: "👉 Build My Website",
    icon: <Monitor size={24} color="white" />,
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "Create user-friendly designs that improve experience and conversions.",
    subTitle: "Design that users love to use.",
    features: [
      "Website UI Design – modern and clean layouts",
      "App Interface Design – smooth user experience",
      "User Flow Planning – easy navigation structure",
      "Wireframing & Prototyping – plan before development"
    ],
    ctaText: "👉 Get Design",
    icon: <PenTool size={24} color="white" />,
  },
  {
    id: 6,
    title: "SEO Optimization",
    description: "Rank higher on search engines and get consistent organic traffic.",
    subTitle: "Long-term traffic, long-term growth.",
    features: [
      "On-page SEO – optimize content & structure",
      "Keyword Research – target the right keywords",
      "Technical SEO – fix backend issues",
      "Content Optimization – improve ranking content"
    ],
    ctaText: "👉 Improve Ranking",
    icon: <Search size={24} color="white" />,
  },
];