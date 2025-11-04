import { defineConfig, presets } from "@simon_he/sponsorkit";
// import { customGithubUser } from "./sponsors";

const customGithubUser = [
  {
    user: "xbanboo",
    monthlyDollars: 2000,
  },
  {
    user: "pubuzhixing8",
    monthlyDollars: 66,
  },
  {
    user: "hulk-2019",
    monthlyDollars: 66,
  },
  {
    user: "cellinlab",
    monthlyDollars: 50,
  },
  {
    user: "zerone0x",
    monthlyDollars: 30,
  },
  {
    user: "flipped-1121",
    monthlyDollars: 3,
  },
  {
    user: "noobnooc",
    monthlyDollars: 1,
  },
];

export default defineConfig({
  // includePrivate: true,
  type: "all",
  tiers: [
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: "Backers",
      // to replace the entire tier rendering
      // compose: (composer, tierSponsors, config) => {
      //   composer.addRaw(
      //     '<-- custom svg -->',
      //   )
      // },
    },
    {
      title: "Sponsors",
      monthlyDollars: 10,
      preset: presets.medium,
      // to insert custom elements after the tier block
      composeAfter: (composer, _tierSponsors, _config) => {
        composer.addSpan(10);
      },
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 50,
      preset: presets.large,
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 100,
      preset: presets.xl,
    },
  ],
  customGithubUser,
});
