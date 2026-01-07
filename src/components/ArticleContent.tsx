'use client';

import { useEffect, useRef } from 'react';

export default function ArticleContent({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use a small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      if (!contentRef.current) return;

      const codeBlocks = Array.from(contentRef.current.querySelectorAll('pre'));

      codeBlocks.forEach((pre) => {
        // Get the code element
        const code = pre.querySelector('code');
        if (!code) return;

        // Extract code text from the raw text content
        // Line numbers are added via CSS ::before, so they won't be in textContent
        const lines = Array.from(code.querySelectorAll('.line'));
        const codeText = lines
          .map((line) => line.textContent || '')
          .join('\n')
          .trim();

        // Create wrapper div if not already wrapped
        if (!pre.parentElement?.classList.contains('code-block-wrapper')) {
          const wrapper = document.createElement('div');
          wrapper.className = 'relative group code-block-wrapper';
          pre.parentNode?.insertBefore(wrapper, pre);
          wrapper.appendChild(pre);
        }

        // Skip if already has a copy button (check AFTER wrapping)
        if (pre.parentElement?.querySelector('.copy-code-button')) return;

        // Create copy button
        const button = document.createElement('button');
        button.className =
          'copy-code-button absolute top-2 right-2 h-8 px-2.5 rounded-md text-text-tertiary hover:text-text-primary hover:bg-accent/10 transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1.5 text-xs font-medium border border-border/50 bg-surface/80 backdrop-blur-sm z-10';
        button.setAttribute('aria-label', 'Copy code to clipboard');
        button.type = 'button';

        const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
        const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;

        button.innerHTML = `${copyIcon}<span>Copy</span>`;

        button.addEventListener('click', async (e) => {
          e.preventDefault();
          try {
            await navigator.clipboard.writeText(codeText);
            button.innerHTML = `${checkIcon}<span>Copied!</span>`;
            button.classList.add('text-green-600');

            setTimeout(() => {
              button.innerHTML = `${copyIcon}<span>Copy</span>`;
              button.classList.remove('text-green-600');
            }, 2000);
          } catch (err) {
            console.error('Failed to copy code:', err);
          }
        });

        pre.parentElement?.appendChild(button);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={contentRef} className="article-content">
      {children}
    </div>
  );
}
