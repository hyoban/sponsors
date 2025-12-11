import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  tiers: [
    {
      title: 'My Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
  ],
})
