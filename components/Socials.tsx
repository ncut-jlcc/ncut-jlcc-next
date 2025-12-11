import React from "react";
import { Icon } from "@iconify/react";

const socials = [
  {
    href: "https://qm.qq.com/q/GoTUHXM0sE",
    ariaLabel: "QQ群",
    icon: "ri:qq-line",
  },
  {
    href: "https://mp.weixin.qq.com/s/QuOUnCuFP68rFlmvdOWhdQ",
    ariaLabel: "微信公众号",
    icon: "ri:wechat-line",
  },
  {
    href: "https://www.instagram.com/ncut_jlcc/",
    ariaLabel: "Instagram",
    icon: "ri:instagram-line",
  },
];

const Socials: React.FC = () => {
  return (
    <div className="grid grid-flow-col gap-4">
      {socials.map((social) => (
        <a
          key={social.ariaLabel}
          href={social.href}
          aria-label={social.ariaLabel}
          title={social.ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-primary hover:text-accent transition-colors"
        >
          <Icon icon={social.icon} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
