import Socials from "../components/Socials"; // 假设 Socials 已经被转换为 React 组件
import Link from "next/link"; // Next.js 项目中推荐使用 Link 组件进行路由跳转
import Image from "next/image";

import logo from "./assets/logo.png";

// 定义 Navbar 组件
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* 侧边栏按钮 - 注释掉的部分 */}
      {/* <div className="flex-none">
        <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div> 
      */}

      <div className="flex-1">
        <div className="flex items-center gap-2">
          {/* 使用 Next.js 的 Link 组件 */}
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          <Link href="/" className="hidden sm:inline">
            <p className="text-xl font-normal p-0 min-h-0">NCUT 日语社</p>
          </Link>
        </div>
      </div>
      <div className="flex-none flex items-center gap-2">
        <span className="hidden sm:inline text-sm text-base-content/60 select-none italic">
          在我们的社交媒体上了解更多! --&gt;
        </span>
        <nav>
          <Socials />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
