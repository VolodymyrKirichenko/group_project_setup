import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/group_project_setup/',
	build: {
		outDir: 'dist',
		sourcemap: true,
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@import './src/styles/utils/variables.scss';
				`,
			},
		},
	},
});
