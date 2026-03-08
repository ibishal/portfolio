import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { ReactNode, useState, useEffect } from 'react';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-bg text-text-primary py-20 px-4 sm:px-12 font-sans transition-colors duration-300">
      
      {/* Theme Toggle */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="group fixed top-6 right-6 p-2 rounded-full hover:bg-bg-hover text-text-tertiary hover:text-text-secondary transition-colors z-50"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} className="group-hover:fill-current transition-colors" /> : <Moon size={20} className="group-hover:fill-current transition-colors" />}
      </button>

      <div className="max-w-xl mx-auto relative pl-4 sm:pl-8">
        
        {/* Profile Section */}
        <Section title="mintu gogoi" isFirst={true} isProfile={true}>
          <div className="pl-[44px] pb-6 pt-1">
            <p className="text-sm text-text-secondary">software engineer & designer</p>
            <div className="flex gap-1 mt-4 text-text-tertiary -ml-2">
              <a href="#" className="group p-2 rounded-lg hover:bg-bg-hover hover:text-text-secondary transition-colors"><Github size={16} className="group-hover:fill-current transition-colors" /></a>
              <a href="#" className="group p-2 rounded-lg hover:bg-bg-hover hover:text-text-secondary transition-colors" aria-label="X (formerly Twitter)">
                <svg viewBox="0 0 24 24" width="16" height="16" className="group-hover:fill-current transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="group p-2 rounded-lg hover:bg-bg-hover hover:text-text-secondary transition-colors"><Linkedin size={16} className="group-hover:fill-current transition-colors" /></a>
              <a href="#" className="group p-2 rounded-lg hover:bg-bg-hover hover:text-text-secondary transition-colors"><Mail size={16} className="group-hover:fill-current transition-colors" /></a>
            </div>
          </div>
        </Section>

        {/* Work Section */}
        <Section title="Work">
          <TimelineItem
            title="TechNova"
            subtitle="frontend engineer"
            date="jan 2024 — present"
            description="Leading the frontend team to build next-generation developer tools. Architected the core component library using React and Tailwind."
          />
          <TimelineItem
            title="Studio Minimal"
            subtitle="design engineer"
            date="mar 2022 — dec 2023"
            description="Bridged the gap between design and engineering. Delivered high-end e-commerce experiences with complex animations."
          />
          <TimelineItem
            title="Freelance"
            subtitle="fullstack developer"
            date="aug 2020 — feb 2022"
            description="Developed custom web applications and landing pages for various early-stage startups."
          />
        </Section>

        {/* Projects Section */}
        <Section title="Projects" isLast={true}>
          <TimelineItem
            title="aura-ui"
            subtitle="minimal react components"
            description="A highly accessible, beautifully designed component library built for modern React applications."
            image="https://picsum.photos/seed/aura/600/400?blur=2"
          />
          <TimelineItem
            title="syntax-theme"
            subtitle="dark theme for vs code"
            description="A carefully calibrated dark theme focusing on readability and reducing eye strain during long coding sessions."
            image="https://picsum.photos/seed/syntax/600/400?blur=2"
          />
          <TimelineItem
            title="focus-app"
            subtitle="pomodoro timer"
            description="A lightweight, cross-platform productivity timer built with Rust and Tauri."
            image="https://picsum.photos/seed/focus/600/400?blur=2"
          />
        </Section>

      </div>
    </div>
  );
}

function Section({ 
  title, 
  children, 
  isFirst = false, 
  isLast = false, 
  isProfile = false 
}: { 
  title: string, 
  children: ReactNode, 
  isFirst?: boolean, 
  isLast?: boolean, 
  isProfile?: boolean 
}) {
  return (
    <div className="relative">
      {/* Incoming curve from previous section */}
      {!isFirst && (
        <svg className="absolute left-[3.5px] top-[-12px] w-[22px] h-[24px] text-line transition-colors duration-300" fill="none" stroke="currentColor">
          <path d="M 21 0 C 21 12, 0.5 12, 0.5 24" strokeWidth="1" />
        </svg>
      )}

      {/* Header */}
      <div className="relative flex items-center h-6">
        <div className={`absolute left-[0px] top-[8px] w-2 h-2 rounded-full ${isProfile ? 'bg-accent' : 'bg-dot'} ring-4 ring-bg transition-colors duration-300 z-10`} />
        <h2 className={`ml-8 font-medium ${isProfile ? 'text-lg tracking-tight text-text-primary' : 'text-sm text-text-primary'}`}>{title}</h2>
      </div>

      {/* Outgoing curve to items */}
      <svg className="absolute left-[3.5px] top-[12px] w-[22px] h-[16px] text-line transition-colors duration-300" fill="none" stroke="currentColor">
        <path d="M 0.5 0 C 0.5 8, 21 8, 21 16" strokeWidth="1" />
      </svg>

      {/* Items Container */}
      <div className="relative pt-2 pb-6">
        {/* Vertical line for items */}
        <div className={`absolute left-[24px] top-[4px] ${isLast ? 'bottom-[24px]' : 'bottom-[12px]'} w-[1px] bg-line transition-colors duration-300`} />
        
        <div className="space-y-1">
          {children}
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ 
  title, 
  subtitle, 
  date, 
  description, 
  image 
}: { 
  title: string, 
  subtitle: string, 
  date?: string, 
  description?: string, 
  image?: string 
}) {
  return (
    <div className="relative flex items-start py-3 pl-[44px] pr-4 hover:bg-bg-hover rounded-xl group cursor-pointer transition-colors duration-300">
      {/* Dot */}
      <div 
        className="absolute left-[20.5px] top-[18px] w-2 h-2 rounded-full bg-dot group-hover:bg-accent ring-4 ring-bg group-hover:ring-bg-hover transition-all duration-300 z-10"
        style={{
          boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 0 8px var(--color-accent-glow)'
        }}
      />
      
      {/* Content */}
      <div className="flex flex-col w-full">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
          <span className="text-sm font-medium text-text-primary transition-colors duration-300">
            {title}
          </span>
          <span className="text-sm text-text-secondary transition-colors duration-300">
            {subtitle}
          </span>
          {date && (
            <span className="text-xs text-text-tertiary sm:ml-auto whitespace-nowrap transition-colors duration-300">
              {date}
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm text-text-secondary mt-1.5 leading-relaxed pr-4 transition-colors duration-300">
            {description}
          </p>
        )}
      </div>

      {/* Image Popover */}
      {image && (
        <div className="hidden sm:block absolute left-full ml-4 top-1/2 -translate-y-1/2 w-64 h-40 bg-popover-bg rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-popover-border opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 z-50 overflow-hidden transform translate-x-4 group-hover:translate-x-0 scale-95 group-hover:scale-100">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
}
