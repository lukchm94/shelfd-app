// apps/web/app/icon.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    // 💡 Minimalist deep blue square with a bold white 'S' and a blue accent dot
    <div
      style={{
        fontSize: 20,
        background: '#0f172a', // 🔹 slate-900 / Deep blue Base
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontWeight: 900,
        fontFamily: 'sans-serif',
        borderRadius: '8px',
        position: 'relative',
      }}
    >
      <span>S</span>
      {/* 🔹 blue Blue accent dot matching your updated design system */}
      <div
        style={{
          position: 'absolute',
          bottom: '3px',
          right: '3px',
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          background: '#1d4ed8', // 🔹 blue-700 / Digital blue Accent
        }}
      />
    </div>,
    {
      ...size,
    },
  );
}
