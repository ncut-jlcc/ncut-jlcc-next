import Image from "next/image";
import Socials from "../components/Socials";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-100 text-base-content p-10">
        <aside className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
          />
          <p>
            <span>© 2025 NCUT 日语社</span>
            <br />
            <span className="text-sm">
              Japanese Language and Culture Club at North China University of
              Technology
            </span>
          </p>
        </aside>
        <nav>
          <span className="text-sm text-base-content/60 select-none italic">
            在我们的社交媒体上了解更多!
          </span>
          <div className="grid grid-flow-col gap-4"></div>
          <Socials />
        </nav>
      </footer>
    </>
  );
};

export default Footer;
