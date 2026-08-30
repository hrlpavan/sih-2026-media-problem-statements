import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5F5F7] border-t border-black/[0.08] mt-20 pt-8 pb-12 text-[#86868B] text-[12px] leading-[1.33] no-print w-full select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        {/* 4-Item Legal & Official Accreditation Notes */}
        <div className="space-y-1.5 font-normal text-[#86868B]">
          <p>
            1. HRL International Private Limited is an incorporated corporate entity registered in Mangaluru, Karnataka, India.
          </p>
          <p>
            2. Verified credentials awarded via JPMorgan Chase & Co. and Deloitte Australia through Forage accreditation platforms. DaVinci Resolve 20 certification awarded by Blackmagic Design.
          </p>
          <p>
            3. Corporate Inquiries:{' '}
            <a
              href="mailto:hrlinternationalprivatelimited@gmail.com"
              className="text-[#0071E3] hover:underline"
            >
              hrlinternationalprivatelimited@gmail.com
            </a>
          </p>
          <p>
            4. Official Network:{' '}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#0071E3] hover:underline">
              LinkedIn (Pavan Kumar Sadashiv)
            </a>{' '}
            ·{' '}
            <a href="https://github.com/hrlpavan" target="_blank" rel="noreferrer" className="text-[#0071E3] hover:underline">
              GitHub (@hrlpavan)
            </a>{' '}
            ·{' '}
            <span className="text-[#0071E3]">@hrlpremiumstudio</span>{' '}
            ·{' '}
            <span className="text-[#0071E3]">@hrlefx (Film Edits)</span>{' '}
            ·{' '}
            <span className="text-[#0071E3]">@hrlflix</span>{' '}
            ·{' '}
            <span className="text-[#0071E3]">@hrlstayupdated</span>
          </p>
        </div>

        {/* Crisp Apple Divider Line */}
        <div className="border-t border-black/[0.08]" />

        {/* Bottom Copyright & Footer Links */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 pt-1">
          {/* Copyright Text */}
          <div className="text-[#86868B] text-[11.5px] leading-relaxed">
            Copyright © 2026 Pavan Kumar Sadashiv. HRL International™ and HRL International Private Limited™ are asserted trademarks of Pavan Kumar Sadashiv. All rights reserved.
          </div>

          {/* Symmetrical Links Stack */}
          <div className="flex flex-col items-start lg:items-end gap-1.5 text-[11.5px]">
            {/* Row 1 */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#515154]">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#0071E3] hover:underline">
                LinkedIn
              </a>
              <a href="https://github.com/hrlpavan" target="_blank" rel="noreferrer" className="text-[#515154] hover:text-[#1D1D1F]">
                GitHub
              </a>
              <span className="text-hrl-crimson font-medium">@hrlpremiumstudio</span>
              <span className="text-hrl-crimson font-medium">@hrlefx (Film Edits)</span>
              <span className="text-hrl-crimson font-medium">@hrlflix</span>
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#515154]">
              <span className="text-hrl-crimson font-medium">@hrlstayupdated</span>
              <a href="#" className="hover:text-[#1D1D1F]">Privacy Policy</a>
              <a href="#" className="hover:text-[#1D1D1F]">Terms of Use</a>
              <a href="#" className="hover:text-[#1D1D1F]">Corporate Verification</a>
            </div>

            {/* Row 3 */}
            <div className="pt-0.5">
              <a href="#" className="text-hrl-crimson hover:underline font-semibold">
                Copyright & DMCA Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
