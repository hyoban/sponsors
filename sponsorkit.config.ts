import process from 'node:process'
import { defineConfig, tierPresets } from 'sponsorkit'

const mode = process.env.SPONSORKIT_MODE as 'sponsor' | 'sponsoring'

export default defineConfig({
  mode,
  tiers: mode === 'sponsor' ? [
    {
      title: 'Active Sponsors',
      preset: tierPresets.small,
    },
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.small,
    },
  ] : [
    {
      title: 'Backer',
      preset: tierPresets.small,
    },
    {
      title: 'Sponsor',
      monthlyDollars: 10,
      preset: tierPresets.base,
    },
    {
      title: 'Silver Supporter',
      monthlyDollars: 50,
      preset: tierPresets.medium,
    },
    {
      title: 'Gold Supporter',
      monthlyDollars: 100,
      preset: tierPresets.large,
    },
  ],
  outputDir: `./sponsorkit/${mode}`,
})
