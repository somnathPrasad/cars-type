module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      primary: "#fff700",
      tranparent_: "rgb(255, 255, 255,.15)",
      btn_transparent:"rgb(2, 241, 245,.15)",
      btn_transparent_hover:"rgb(2, 241, 245,.50)",
      red_box:"rgb(255,0,0)",
    }),
    boxShadow: {
      box_shadow: '20px 10px 5px 5px rgba(0, 0, 0, 0.3)',
      box_shadow_main_box: '1px 2px 20px 11px rgb(100 152 189 / 20%);'
    },
    rotate: {
      '30':'30deg',
      '40':'40deg',
      '75':'75deg',
      '45':'45deg',
     },
     inset:{
      '10':'10%',
      '80':'80%',
      '60':'60%',
      '20':'20%',
      '75':'75%',
      '35':'35%',
      '50':'50%',
      '45':'45%',
     },
     minHeight: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
     },
     maxHeight: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
     },
    extend:{
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive']
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
