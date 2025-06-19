import { useIsMobile } from "@/hooks/use-mobile";
import ContactDesktop from "./ContactDesktop";
import ContactMobile from "./ContactMobile";

const Contact = () => {
  const isMobile = useIsMobile();

  return isMobile ? <ContactMobile /> : <ContactDesktop />;
};

export default Contact;
