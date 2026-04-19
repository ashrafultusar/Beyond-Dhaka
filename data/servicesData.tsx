import React from "react";
import { TrendingUp, Sparkles, Target, Monitor, PenTool, Search } from "lucide-react";

export const servicesData = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "SEO, paid ads, social media — strategies that bring real customers.",
    icon: <TrendingUp size={24} color="white" />,
  },
  {
    id: 2,
    title: "Image Editing",
    description: "Pro retouching, product shots, and creative edits that convert.",
    icon: <Sparkles size={24} color="white" />,
  },
  {
    id: 3,
    title: "Lead Generation",
    description: "Funnels & campaigns built to fill your pipeline with quality leads.",
    icon: <Target size={24} color="white" />,
  },
  {
    id: 4,
    title: "Web Development",
    description: "Fast, responsive, and highly converting websites tailored for your brand.",
    icon: <Monitor size={24} color="white" />,
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "User-centric design solutions that enhance engagement and retention.",
    icon: <PenTool size={24} color="white" />,
  },
  {
    id: 6,
    title: "SEO Optimization",
    description: "Rank higher on search engines and get organic traffic consistently.",
    icon: <Search size={24} color="white" />,
  },
];