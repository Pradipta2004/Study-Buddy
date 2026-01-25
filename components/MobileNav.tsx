'use client';

interface MobileNavProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
}

export default function MobileNav({ title, subtitle, showBack, onBack }: MobileNavProps) {
  return (
    <div className="sticky top-0 z-40 bg-white border-b border-blue-100 shadow-sm">
      <div className="max-w-screen-md mx-auto px-4 py-4 flex items-center gap-3">
        {showBack && (
          <button
            onClick={onBack}
            className="p-2 hover:bg-sky-50 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h1>
          {subtitle && <p className="text-sm text-blue-600 mt-0.5">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
