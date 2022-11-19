// TODO: add to tailwind config
//bg-blue-medium -> hex values
//text-red-primary -> hex values
//text-gray-base-> hex values
//border-gray-primary -> hex values
//text-blue-medium -> hex values

const { th } = require("date-fns/locale");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.primary"),
    }),
    colors: {
      white: "#ffffff",
      blue: {
        medium: "#005c98",
      },
      black: {
        light: "#005c98",
        faded: "#00000059",
      },
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#bdbdbd",
      },
      red: {
        primary: "#ed4956",
      },
    },
  },
};
