import "./globals.css";

import { Metadata } from "next"; // 引入 Metadata 类型
import Snow from "@/components/Snow";

// 定义元数据对象
export const metadata: Metadata = {
  // 页面标题
  title: "北方工业大学日语社 | 北方工業大学日本語サークル",

  // 描述
  description: "我们是北方工大日语社！欢迎加入哦！",

  // 关键词
  keywords: [
    "北方工业大学",
    "北方工大",
    "北方工業大学",
    "NCUT",
    "日语社",
    "日本語サークル",
    "JLCC",
    "Japanese Language and Culture Club",
  ],

  // 机器人索引
  robots: {
    index: true,
    follow: true,
  },

  // Favicon (图标)
  icons: {
    icon: "/logo.webp", // 假设您的 favicon 文件在 public/ 目录下
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>{children}<Snow /></body>
    </html >
  );
}
