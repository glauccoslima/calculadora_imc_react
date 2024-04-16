import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Define a type for the Vite configuration object
interface IViteConfig {
  plugins?: react[];
}

// Export a default function that returns the Vite configuration object
export default (): defineConfig => {
  return {
    // Give the configuration object a more descriptive name
    reactPlugins: [react()],
  } as IViteConfig;
};
