import { defineConfig, presets } from "@simon_he/sponsorkit";
// import { customGithubUser } from "./sponsors";

const customGithubUser = [
  {
    user: "xbanboo",
    money: 666,
  },
];

export default defineConfig({
  // includePrivate: true,
  type: "all",
  tiers: [
    {
      title: "Past Sponsors",
      money: -1,
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
      money: 10,
      preset: presets.medium,
      // to insert custom elements after the tier block
      composeAfter: (composer, _tierSponsors, _config) => {
        composer.addSpan(10);
      },
    },
    {
      title: "Silver Sponsors",
      money: 50,
      preset: presets.large,
    },
    {
      title: "Gold Sponsors",
      money: 100,
      preset: presets.xl,
    },
  ],
  customGithubUser,
});
