import { FooterItemType, HeaderItemType } from "./types";
import logo1 from "@/public/1.svg";
import logo2 from "@/public/2.svg";
import logo3 from "@/public/3.svg";
import logo4 from "@/public/4.svg";
import logo5 from "@/public/5.svg";
import logo6 from "@/public/6.svg";
import logo7 from "@/public/7.svg";
import logo8 from "@/public/8.svg";

export const headerListItem: HeaderItemType[] = [
  {
    id: "101",
    title: "ホーム",
    link: "/",
  },
  {
    id: "102",
    title: "製品・サービス",
    link: "/services",
  },
  {
    id: "103",
    title: "会社概要",
    link: "/about",
  },
  {
    id: "104",
    title: "お問い合わせ",
    link: "/contact",
  },
  {
    id: "105",
    title: "代表挨拶",
    link: "/director",
  },
];

export const footerListItem: FooterItemType[] = [
  { id: 111, title: "お問い合わせ", link: "#", icon: true },
  { id: 112, title: "特定商品取引法", link: "#", icon: true },
  { id: 113, title: "プライバシーポリシー", link: "#", icon: false },
];

export const clients = [
  ["1", logo1],
  ["2", logo2],
  ["3", logo3],
  ["4", logo4],
  ["5", logo5],
  ["6", logo6],
  ["7", logo7],
  ["8", logo8],
];
