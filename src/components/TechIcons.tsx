
import React from 'react';

export const HtmlIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M2 3h20l-2 18-8-2-8 2L2 3z" fill="#E34F26"/>
    <path d="M12 5v14l6.5-1.5L20 5H12z" fill="#FF5722"/>
    <text x="12" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">5</text>
  </svg>
);

export const CssIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M2 3h20l-2 18-8-2-8 2L2 3z" fill="#1572B6"/>
    <path d="M12 5v14l6.5-1.5L20 5H12z" fill="#33A9DC"/>
    <text x="12" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">3</text>
  </svg>
);

export const JavaScriptIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E"/>
    <text x="12" y="15" textAnchor="middle" fill="#000" fontSize="10" fontWeight="bold">JS</text>
  </svg>
);

export const ReactIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
    <path d="M12 2c5.5 0 10 2.5 10 6s-4.5 6-10 6S2 13.5 2 10s4.5-6 10-6z" stroke="#61DAFB" strokeWidth="1" fill="none"/>
    <path d="M12 22c-5.5 0-10-2.5-10-6s4.5-6 10-6s10 2.5 10 6-4.5 6-10 6z" stroke="#61DAFB" strokeWidth="1" fill="none"/>
    <path d="M6 12c0-5.5 2.5-10 6-10s6 4.5 6 10-2.5 10-6 10-6-4.5-6-10z" stroke="#61DAFB" strokeWidth="1" fill="none"/>
  </svg>
);

export const NextJsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#000"/>
    <path d="M8 8h8v8l-8-8z" fill="#fff"/>
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">N</text>
  </svg>
);

export const TypeScriptIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178C6"/>
    <text x="12" y="15" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">TS</text>
  </svg>
);

export const NodeJsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" fill="#68A063"/>
    <path d="M12 2v20" stroke="#68A063" strokeWidth="0.5"/>
    <circle cx="12" cy="12" r="3" fill="#8CC84B"/>
  </svg>
);

export const MongoDbIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2c-1 0-2 4-2 8s1 8 2 8 2-4 2-8-1-8-2-8z" fill="#47A248"/>
    <ellipse cx="12" cy="12" rx="8" ry="4" fill="#4DB33D"/>
    <path d="M12 8v8" stroke="#fff" strokeWidth="1"/>
  </svg>
);

export const PostgreSqlIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#336791"/>
    <path d="M8 8h8c2 0 2 2 0 2H8c-2 0-2 2 0 2h6c2 0 2 2 0 2H8" stroke="#fff" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const TailwindIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z" fill="#06B6D4"/>
  </svg>
);

export const GitIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M21.62 11.108l-9.5-9.5a1.5 1.5 0 0 0-2.12 0l-1.97 1.97 2.5 2.5c.64-.21 1.37-.07 1.88.42.51.51.64 1.24.42 1.88l2.41 2.41c.64-.22 1.37-.09 1.88.42a1.34 1.34 0 0 1 0 1.9 1.34 1.34 0 0 1-1.9 0 1.35 1.35 0 0 1-.28-1.46l-2.25-2.25v5.92c.33.16.63.38.87.62a1.34 1.34 0 0 1 0 1.9 1.34 1.34 0 0 1-1.9 0 1.34 1.34 0 0 1 0-1.9c.24-.24.54-.46.87-.62v-5.96c-.33-.16-.63-.38-.87-.62a1.35 1.35 0 0 1-.28-1.46l-2.5-2.5-6.58 6.58a1.5 1.5 0 0 0 0 2.12l9.5 9.5a1.5 1.5 0 0 0 2.12 0l9.46-9.46a1.5 1.5 0 0 0 0-2.12z" fill="#F14E32"/>
  </svg>
);

export const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#000"/>
  </svg>
);
