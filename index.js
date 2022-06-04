module.exports = {
  extends: ["airbnb", "prettier", "plugin:prettier/recommended"],
  plugins: ["prettier", "no-for-of-loops", "html"],
  rules: {
    "no-for-of-loops/no-for-of-loops": "error",
  },
};
