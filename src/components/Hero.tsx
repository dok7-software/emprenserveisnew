import { useIsMobile } from "@/hooks/use-mobile";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

const Hero = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <HeroMobile open={open} setOpen={setOpen} />
  ) : (
    <HeroDesktop open={open} setOpen={setOpen} />
  );
};

export default Hero;
