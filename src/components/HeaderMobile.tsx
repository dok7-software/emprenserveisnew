import { useContext } from "react";
import { Switch } from "@/components/ui/switch";
import { LangContext } from "@/pages/Index";

const HeaderMobile = ({ onOpenInscripcion }: { onOpenInscripcion: () => void }) => {
  const lang = useContext(LangContext);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl tracking-widest" style={{ fontFamily: 'ClashDisplay' }}>
            <span className="text-black">EMPRÈN</span>
            <span className="text-empren-purple"> SERVEIS</span>
          </h1>
        </div>
        
        {/* Language Switch */}
        <div className="flex items-center gap-1">
          <span className={`font-bold text-xs ${lang === 'es' ? 'text-empren-purple' : 'text-gray-400'}`}>ES</span>
          <Switch
            checked={lang === 'cat'}
            onCheckedChange={() => {
              const newLang = lang === 'es' ? 'cat' : 'es';
              localStorage.setItem('lang', newLang);
              window.dispatchEvent(new Event('languageChange'));
            }}
            aria-label="Cambiar idioma"
            className="data-[state=checked]:bg-empren-purple scale-75"
          />
          <span className={`font-bold text-xs ${lang === 'cat' ? 'text-empren-purple' : 'text-gray-400'}`}>CAT</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile; 