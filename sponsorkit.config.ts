import process from 'node:process'
import { defineConfig, tierPresets } from 'sponsorkit'

const mode = process.env.SPONSORKIT_MODE as 'sponsor' | 'sponsoring'

export default defineConfig({
  mode,
  tiers: mode === 'sponsor' ? [
    {
      title: 'Active Sponsors',
      preset: tierPresets.xs,
    },
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
  ] : [
    {
      title: 'Sponsorships',
      preset: tierPresets.base,
    },
    {
      title: 'Bronze Sponsorships',
      monthlyDollars: 10,
      preset: tierPresets.medium,
    },
    {
      title: 'Silver Sponsorships',
      monthlyDollars: 50,
      preset: tierPresets.large,
    },
    {
      title: 'Gold Sponsorships',
      monthlyDollars: 100,
      preset: tierPresets.xl,
    },
  ],
  outputDir: `./sponsorkit/${mode}`,
})
