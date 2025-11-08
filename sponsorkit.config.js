import { defineConfig, presets } from "@simon_he/sponsorkit";
// import { customGithubUser } from "./sponsors";

const customGithubUser = [
  {
    user: "xbanboo",
    money: 2000,
  },
  {
    user: "pubuzhixing8",
    money: 66,
  },
  {
    user: "hulk-2019",
    money: 66,
  },
  {
    user: "cellinlab",
    money: 50,
  },
  {
    user: "ccbikai",
    money: 36,
  },
  {
    user: "Otto-J",
    money: 50,
  },
  {
    user: "zerone0x",
    money: 30,
  },
  {
    user: "flipped-1121",
    money: 3,
  },
  {
    user: "noobnooc",
    money: 1,
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
