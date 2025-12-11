import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  tiers: [
    {
      title: 'My Sponsors',
      preset: tierPresets.xs,
    },
  ],
})
