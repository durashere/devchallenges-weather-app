module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      ral: ["Raleway", "sans-serif"],
      mon: ["Montserrat", "sans-serif"],
      // heb: ["Heebo", "sans-serif"],
      // pop: ["Poppins", "sans-serif"],
    },
    colors: {
      transparent: {
        DEFAULT: "transparent",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      black: {
        DEFAULT: "#000000",
      },
      gray: {
        cE7E7EB: "#E7E7EB",
        c6E707A: "#6E707A",
        cA09FB1: "#A09FB1",
        c616475: "#616475",
        // cA9A9A9: "#A9A9A9",
        // cE0E0E0: "#E0E0E0",
        // cF2F2F2: "#F2F2F2",
        // c333333: "#333333",
        // c4F4F4F: "#4F4F4F",
        // c828282: "#828282",
        // cBDBDBD: "#BDBDBD",
      },
      red: {
        // cEB5757: "#EB5757",
      },
      green: {
        // c27AE60: "#27AE60",
      },
      yellow: {
        cFFEC65: "#FFEC65",
      },
      blue: {
        c1E213A: "#1E213A",
        c88869D: "#88869D",
        c100E1D: "#100E1D",
        c3C47E9: "#3C47E9",
        c110E3C: "#110E3C",
        // c2D9CDB: "#2D9CDB",
        // c100E1D: "#100E1D",
      },
      purple: {
        c585676: "#585676",
      },
    },
    flex: {
      1: "1 1 0%",
      full: "1 0 100%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      inherit: "inherit",
      none: "none",
      2: "2 2 0%",
    },
    rotate: {
      NNE: "22.5deg",
      NE: "45deg",
      ENE: "67.5",
      E: "90deg",
      ESE: "112.5deg",
      SE: "135deg",
      SSE: "157.5deg",
      S: "180deg",
      SSW: "202.5deg",
      SW: "225deg",
      WSW: "247.5deg",
      W: "270deg",
      WNW: "292.5deg",
      NW: "315deg",
      NNW: "337.5deg",
    },
    extend: {
      backgroundImage: (theme) => ({
        "cloud-background": "url('/Cloud-background.png')",
      }),
      width: {
        "0%": "0%",
        "1%": "1%",
        "2%": "2%",
        "3%": "3%",
        "4%": "4%",
        "5%": "5%",
        "6%": "6%",
        "7%": "7%",
        "8%": "8%",
        "9%": "9%",
        "10%": "10%",
        "11%": "11%",
        "12%": "12%",
        "13%": "13%",
        "14%": "14%",
        "15%": "15%",
        "16%": "16%",
        "17%": "17%",
        "18%": "18%",
        "19%": "19%",
        "20%": "20%",
        "21%": "21%",
        "22%": "22%",
        "23%": "23%",
        "24%": "24%",
        "25%": "25%",
        "26%": "26%",
        "27%": "27%",
        "28%": "28%",
        "29%": "29%",
        "30%": "30%",
        "31%": "31%",
        "32%": "32%",
        "33%": "33%",
        "34%": "34%",
        "35%": "35%",
        "36%": "36%",
        "37%": "37%",
        "38%": "38%",
        "39%": "39%",
        "40%": "40%",
        "41%": "41%",
        "42%": "42%",
        "43%": "43%",
        "44%": "44%",
        "45%": "45%",
        "46%": "46%",
        "47%": "47%",
        "48%": "48%",
        "49%": "49%",
        "50%": "50%",
        "51%": "51%",
        "52%": "52%",
        "53%": "53%",
        "54%": "54%",
        "55%": "55%",
        "56%": "56%",
        "57%": "57%",
        "58%": "58%",
        "59%": "59%",
        "60%": "60%",
        "61%": "61%",
        "62%": "62%",
        "63%": "63%",
        "64%": "64%",
        "65%": "65%",
        "66%": "66%",
        "67%": "67%",
        "68%": "68%",
        "69%": "69%",
        "70%": "70%",
        "71%": "71%",
        "72%": "72%",
        "73%": "73%",
        "74%": "74%",
        "75%": "75%",
        "76%": "76%",
        "77%": "77%",
        "78%": "78%",
        "79%": "79%",
        "80%": "80%",
        "81%": "81%",
        "82%": "82%",
        "83%": "83%",
        "84%": "84%",
        "85%": "85%",
        "86%": "86%",
        "87%": "87%",
        "88%": "88%",
        "89%": "89%",
        "90%": "90%",
        "91%": "91%",
        "92%": "92%",
        "93%": "93%",
        "94%": "94%",
        "95%": "95%",
        "96%": "96%",
        "97%": "97%",
        "98%": "98%",
        "99%": "99%",
        "100%": "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
