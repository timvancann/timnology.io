import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki'
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('rehype-pretty-code').Options} */
const options = {
  keepBackground: false,
};

const mdsvexOptions = {
  extensions: ['.md'],
  smartypants: true,
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highlighter = await createHighlighter({
        themes: ['poimandres', 'tokyo-night', 'night-owl'],
        langs: ['javascript', 'typescript', 'bash', 'json', 'yaml', 'python', 'toml'],
      })
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'night-owl' }))
      highlighter.dispose()
      return `{@html \`${html}\` }`
    }
  },
  rehypePlugins: [[rehypePrettyCode, options]],
}

const config = {
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: { adapter: adapter() },
  extensions: ['.svelte', '.svx', '.md'],
  assetsInclude: ['**/*.md'],
};

export default config;
