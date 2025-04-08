
import eslint from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier/recommended";

export default [
  eslint.configs.recommended,
  prettierPlugin,
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../src/**", "!../src/index"],
              message: "Import it from index.mjs",
            },
          ],
        },
      ],
    },
  }
];

