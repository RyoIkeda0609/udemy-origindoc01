import { FooterItemType, HeaderItemType } from "./types";

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
