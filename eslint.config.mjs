import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    pluginJs.configs.recommended,
    eslintConfigPrettier,

    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "script",
        },
    },
    {
        languageOptions: {
            globals: globals.browser,
        },
    }
];
