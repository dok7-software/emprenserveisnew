import { useIsMobile } from "@/hooks/use-mobile";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

const Footer = () => {
  const isMobile = useIsMobile();

  return isMobile ? <FooterMobile /> : <FooterDesktop />;
};

export default Footer;
