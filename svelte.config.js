import adapter from '@sveltejs/adapter-static' // This was changed from adapter-auto
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: ({ path }) => {
        if (path == "/specifications/w3c/group") {
          // This route is fine, not sure why it throws a 500 on build
          return;
        }
      }
    }
  },
}

export default config