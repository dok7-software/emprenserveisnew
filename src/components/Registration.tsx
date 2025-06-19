import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, ArrowRight, Zap } from "lucide-react";
import { useContext } from "react";
import { LangContext } from "@/pages/Index";
import { useIsMobile } from "@/hooks/use-mobile";
import RegistrationDesktop from "./RegistrationDesktop";
import RegistrationMobile from "./RegistrationMobile";

const Registration = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  const lang = useContext(LangContext);
  const isMobile = useIsMobile();

  return isMobile ? <RegistrationMobile open={open} setOpen={setOpen} /> : <RegistrationDesktop open={open} setOpen={setOpen} />;
};

export default Registration;
