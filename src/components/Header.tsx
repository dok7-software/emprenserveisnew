import { useIsMobile } from "@/hooks/use-mobile";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header = ({ onOpenInscripcion }: { onOpenInscripcion: () => void }) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <HeaderMobile onOpenInscripcion={onOpenInscripcion} />
  ) : (
    <HeaderDesktop onOpenInscripcion={onOpenInscripcion} />
  );
};

export default Header;
