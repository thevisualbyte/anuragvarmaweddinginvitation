'use client';

import { useState } from 'react';

interface WaxSealProps {
  children: React.ReactNode;
}

export default function WaxSeal({ children }: WaxSealProps) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#f8f2e7] via-[#fdfbf7] to-[#efe3d1]">
          <button
            onClick={() => setOpened(true)}
            className="relative flex h-40 w-40 items-center justify-center rounded-full
                       bg-gradient-to-br from-[#7A0F24] via-[#5C0818] to-[#3A040F]
                       shadow-2xl transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-2 rounded-full border-2 border-[#D4AF37] opacity-80"></div>

            <div className="absolute inset-5 rounded-full border border-[#F4D06F] opacity-70"></div>

            <div className="text-center">
              <div
                className="text-3xl font-serif text-[#F4D06F]"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.35)' }}
              >
                A ❤ D
              </div>

              <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#F8E8B0]">
                Tap to Open
              </div>
            </div>
          </button>
        </div>
      )}

      {opened && children}
    </>
  );
}