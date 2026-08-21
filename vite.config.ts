import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Exposure-Decision-Tool/',
  test: {
    include: ['src/**/*.test.ts'],
  },
})
