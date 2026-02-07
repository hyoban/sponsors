import { defineConfig, tierPresets, defaultTiers } from 'sponsorkit'
import process from 'node:process'

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
  ] : defaultTiers,
  outputDir: `./sponsorkit/${mode}`,
})
