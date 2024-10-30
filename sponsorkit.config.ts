import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  tiers: [
    {
      title: 'Active Monthly Sponsors',
      preset: tierPresets.xs,
    },
    {
      title: 'Past or One-Time Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
  ],
})
