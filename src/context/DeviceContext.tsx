"use client";

import { createContext, useContext, useEffect, useState } from "react";

type DeviceContextType = {
  isMobile: boolean;
};

const DeviceContext = createContext<DeviceContextType>({
  isMobile: false,
});

export function DeviceProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Lista más completa de patrones para dispositivos móviles
      const mobileRegex = [
        /android/, 
        /webos/,
        /iphone/,
        /ipad/,
        /ipod/,
        /blackberry/,
        /windows phone/,
        /iemobile/,
        /opera mini/,
        /mobile safari/,
        /kindle/,
        /silk/,
        /meego/,
        /bb10/,
        /nokia/,
        /asus/,
        /xiaomi/,
        /huawei/,
        /lg/,
        /sony/,
        /moto/,
        /zte/,
        /alcatel/,
        /vivo/,
        /oppo/,
        /realme/,
        /oneplus/,
        /pixel/,
        /galaxy nexus/,
        /nexus [4-7]/i,
        /redmi/,
        /poco/,
      ];

      const isMobileDevice = mobileRegex.some(regex => regex.test(userAgent));
      const smallScreen = window.innerWidth <= 768;

      setIsMobile(isMobileDevice || (isTouchDevice && smallScreen));
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
}

export const useDevice = () => useContext(DeviceContext);