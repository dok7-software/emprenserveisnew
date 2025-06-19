import { useIsMobile } from "@/hooks/use-mobile";
import BenefitsDesktop from "./BenefitsDesktop";
import BenefitsMobile from "./BenefitsMobile";

const Benefits = () => {
  const isMobile = useIsMobile();

  return isMobile ? <BenefitsMobile /> : <BenefitsDesktop />;
};

export default Benefits;
