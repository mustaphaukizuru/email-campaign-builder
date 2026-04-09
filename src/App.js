import React, { useState } from 'react';
import templates from './templates';

const CATEGORY_COLORS = {
  Sales:      { bg: '#fff5f5', text: '#e53e3e', border: '#fed7d7' },
  Onboarding: { bg: '#f0fdf4', text: '#38a169', border: '#c6f6d5' },
  Content:    { bg: '#ebf8ff', text: '#3182ce', border: '#bee3f8' },
  Retention:  { bg: '#faf5ff', text: '#805ad5', border: '#e9d8fd' },
};

export default function App() {
  const [selected, setSelected]   = useState(templates[0]);
  const [viewport, setViewport]   = useState('desktop');
  const [copied, setCopied]       = useState(false);
  const [showCode, setShowCode]   = useState(false);

  const copyHTML = () => {
    navigator.clipboard.writeText(selected.html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadHTML = () => {
    const blob = new Blob([selected.html], { type: 'text/html' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `${selected.id}-email-template.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const iframeWidth = viewport === 'desktop' ? '100%' : '375px';

  return (
    <div style={s.app}>
      {/* Top navbar */}
      <nav style={s.nav}>
        <div style={s.navLeft}>
          <span style={s.navIcon}>✉️</span>
          <span style={s.navBrand}>Email Campaign Builder</span>
          <span style={s.navSub}>by Mustapha Ukizuru</span>
        </div>
        <div style={s.navRight}>
          <a href="https://mustaphaukizuru.com" target="_blank" rel="noreferrer" style={s.navLink}>Portfolio</a>
          <a href="https://github.com/mustaphaukizuru/email-campaign-builder" target="_blank" rel="noreferrer" style={s.navLink}>GitHub</a>
          <a href="https://linkedin.com/in/mustaphaukizuru" target="_blank" rel="noreferrer" style={s.navLinkAccent}>LinkedIn</a>
        </div>
      </nav>

      <div style={s.layout}>
        {/* Sidebar */}
        <aside style={s.sidebar}>
          <p style={s.sidebarTitle}>Templates</p>
          <p style={s.sidebarSub}>{templates.length} professional HTML templates</p>

          {templates.map(t => {
            const cat  = CATEGORY_COLORS[t.category] || CATEGORY_COLORS.Sales;
            const active = selected.id === t.id;
            return (
              <div key={t.id} onClick={() => { setSelected(t); setShowCode(false); }}
                style={{ ...s.card, ...(active ? { ...s.cardActive, borderColor: t.color } : {}) }}>
                <div style={s.cardTop}>
                  <span style={{ ...s.categoryBadge,
                    background: cat.bg, color: cat.text, border: `1px solid ${cat.border}` }}>
                    {t.category}
                  </span>
                  {active && <span style={{ ...s.activeDot, background: t.color }}>●</span>}
                </div>
                <p style={{ ...s.cardName, ...(active ? { color: t.color } : {}) }}>{t.name}</p>
                <p style={s.cardDesc}>{t.description}</p>
              </div>
            );
          })}

          {/* About section */}
          <div style={s.about}>
            <p style={s.aboutTitle}>About this project</p>
            <p style={s.aboutText}>
              Built to showcase HTML email development skills from my experience at Blueflame Ltd. (Kigali, Rwanda), where digital campaigns drove <strong>25% revenue growth</strong>.
            </p>
            <p style={s.aboutText}>
              Templates are fully responsive, cross-client compatible, and production-ready.
            </p>
          </div>
        </aside>

        {/* Main preview area */}
        <main style={s.main}>
          {/* Toolbar */}
          <div style={s.toolbar}>
            <div style={s.toolbarLeft}>
              <div style={{ ...s.colorDot, background: selected.color }}></div>
              <span style={s.toolbarTitle}>{selected.name}</span>
            </div>
            <div style={s.toolbarRight}>
              {/* Viewport toggle */}
              <div style={s.viewportToggle}>
                <button onClick={() => setViewport('desktop')}
                  style={{ ...s.vpBtn, ...(viewport === 'desktop' ? s.vpBtnActive : {}) }}>
                  🖥 Desktop
                </button>
                <button onClick={() => setViewport('mobile')}
                  style={{ ...s.vpBtn, ...(viewport === 'mobile' ? s.vpBtnActive : {}) }}>
                  📱 Mobile
                </button>
              </div>
              <button onClick={() => setShowCode(!showCode)} style={s.btnOutline}>
                {showCode ? '👁 Preview' : '</> Code'}
              </button>
              <button onClick={copyHTML} style={s.btnOutline}>
                {copied ? '✅ Copied!' : '📋 Copy HTML'}
              </button>
              <button onClick={downloadHTML} style={{ ...s.btnOutline, ...s.btnDownload }}>
                ⬇ Download
              </button>
            </div>
          </div>

          {/* Preview / Code area */}
          <div style={s.previewWrapper}>
            {showCode ? (
              <div style={s.codeBlock}>
                <pre style={s.codePre}>{selected.html}</pre>
              </div>
            ) : (
              <div style={s.iframeWrapper}>
                <iframe
                  key={selected.id}
                  srcDoc={selected.html}
                  title={`${selected.name} preview`}
                  style={{ ...s.iframe, width: iframeWidth }}
                  sandbox="allow-same-origin"
                />
              </div>
            )}
          </div>

          {/* Footer bar */}
          <div style={s.previewFooter}>
            <span style={s.previewMeta}>
              {viewport === 'desktop' ? '🖥 Desktop view (600px)' : '📱 Mobile view (375px)'}
            </span>
            <span style={s.previewMeta}>
              HTML only · No external dependencies · Cross-client compatible
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}

const s = {
  app:            { minHeight: '100vh', background: '#f7fafc', fontFamily: 'Arial, Helvetica, sans-serif' },
  nav:            { background: '#1a202c', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  navLeft:        { display: 'flex', alignItems: 'center', gap: 10 },
  navIcon:        { fontSize: 18 },
  navBrand:       { color: '#ffffff', fontWeight: 700, fontSize: 16 },
  navSub:         { color: '#718096', fontSize: 13 },
  navRight:       { display: 'flex', gap: 8, alignItems: 'center' },
  navLink:        { color: '#a0aec0', textDecoration: 'none', fontSize: 13, padding: '6px 12px', borderRadius: 5 },
  navLinkAccent:  { color: '#fff', textDecoration: 'none', fontSize: 13, padding: '6px 12px', borderRadius: 5, background: '#3182ce', fontWeight: 600 },
  layout:         { display: 'flex', height: 'calc(100vh - 52px)' },
  sidebar:        { width: 280, background: '#ffffff', borderRight: '1px solid #e2e8f0', overflowY: 'auto', padding: '20px 16px', flexShrink: 0 },
  sidebarTitle:   { margin: '0 0 4px', fontSize: 13, fontWeight: 700, color: '#2d3748', textTransform: 'uppercase', letterSpacing: '0.5px' },
  sidebarSub:     { margin: '0 0 16px', fontSize: 12, color: '#a0aec0' },
  card:           { border: '1.5px solid #e2e8f0', borderRadius: 8, padding: '14px', marginBottom: 10, cursor: 'pointer', background: '#fff', transition: 'border-color 0.15s' },
  cardActive:     { background: '#fffff8', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' },
  cardTop:        { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  categoryBadge:  { fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 10 },
  activeDot:      { fontSize: 10, borderRadius: '50%', width: 8, height: 8, display: 'inline-block' },
  cardName:       { margin: '0 0 4px', fontSize: 14, fontWeight: 700, color: '#2d3748' },
  cardDesc:       { margin: 0, fontSize: 12, color: '#718096', lineHeight: 1.5 },
  about:          { marginTop: 20, padding: '16px', background: '#f7fafc', borderRadius: 8, border: '1px solid #e2e8f0' },
  aboutTitle:     { margin: '0 0 8px', fontSize: 12, fontWeight: 700, color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.5px' },
  aboutText:      { margin: '0 0 8px', fontSize: 12, color: '#718096', lineHeight: 1.6 },
  main:           { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' },
  toolbar:        { background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 },
  toolbarLeft:    { display: 'flex', alignItems: 'center', gap: 10 },
  colorDot:       { width: 12, height: 12, borderRadius: '50%' },
  toolbarTitle:   { fontSize: 15, fontWeight: 600, color: '#2d3748' },
  toolbarRight:   { display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' },
  viewportToggle: { display: 'flex', border: '1px solid #e2e8f0', borderRadius: 6, overflow: 'hidden' },
  vpBtn:          { padding: '6px 12px', background: '#fff', border: 'none', cursor: 'pointer', fontSize: 12, color: '#718096' },
  vpBtnActive:    { background: '#edf2f7', color: '#2d3748', fontWeight: 600 },
  btnOutline:     { padding: '7px 14px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 6, cursor: 'pointer', fontSize: 12, color: '#4a5568', fontWeight: 500 },
  btnDownload:    { background: '#3182ce', color: '#fff', borderColor: '#3182ce' },
  previewWrapper: { flex: 1, overflow: 'auto', background: '#e2e8f0', padding: 24 },
  iframeWrapper:  { display: 'flex', justifyContent: 'center' },
  iframe:         { border: 'none', background: '#fff', borderRadius: 6, boxShadow: '0 4px 16px rgba(0,0,0,0.12)', minHeight: 600, display: 'block' },
  codeBlock:      { background: '#1a202c', borderRadius: 8, padding: 24, maxWidth: 800, margin: '0 auto' },
  codePre:        { margin: 0, color: '#68d391', fontSize: 12, lineHeight: 1.7, whiteSpace: 'pre-wrap', wordBreak: 'break-all', fontFamily: 'monospace' },
  previewFooter:  { background: '#fff', borderTop: '1px solid #e2e8f0', padding: '8px 20px', display: 'flex', justifyContent: 'space-between' },
  previewMeta:    { fontSize: 12, color: '#a0aec0' },
};
