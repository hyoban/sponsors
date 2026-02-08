import process from 'node:process'
import { defineConfig, tierPresets } from 'sponsorkit'

const mode = process.env.SPONSORKIT_MODE as 'sponsor' | 'sponsoring'

export default defineConfig({
  mode,
  tiers: mode === 'sponsor' ? [
    {
      title: 'Active Sponsors',
      preset: tierPresets.base,
    },
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.base,
    },
  ] : [
    {
      title: 'Backer',
      preset: tierPresets.base,
    },
    {
      title: 'Sponsor',
      monthlyDollars: 10,
      preset: tierPresets.medium,
    },
    {
      title: 'Silver Supporter',
      monthlyDollars: 50,
      preset: tierPresets.large,
    },
    {
      title: 'Gold Supporter',
      monthlyDollars: 100,
      preset: tierPresets.xl,
    },
  ],
  outputDir: `./sponsorkit/${mode}`,
})
