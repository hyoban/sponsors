import { defineConfig, tierPresets } from 'sponsorkit'
import process from 'node:process'

const mode = process.env.SPONSORKIT_MODE as 'sponsor' | 'sponsoring'

export default defineConfig({
  mode,
  tiers: mode ? [
    {
      title: 'Active Sponsors',
      preset: tierPresets.xs,
    },
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
  ] : [],
  outputDir: `./sponsorkit/${mode}`,
})
