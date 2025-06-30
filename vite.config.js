import { defineConfig } from 'vite';


const allowedHostsEnv = process.env.ALLOWED_HOSTS || '';

const allowedHosts = allowedHostsEnv
  ? allowedHostsEnv.split(',').map(host => host.trim())
  : [];

export default defineConfig({
  preview: {
    allowedHosts: allowedHosts.length > 0 ? allowedHosts : 'all',
    host: true,
  },
});
