import { useIsMobile } from "@/hooks/use-mobile";
import MethodologyDesktop from "./MethodologyDesktop";
import MethodologyMobile from "./MethodologyMobile";

const Methodology = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MethodologyMobile /> : <MethodologyDesktop />;
};

export default Methodology;
