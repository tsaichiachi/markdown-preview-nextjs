import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

// const eslintConfig = defineConfig([
//   ...nextVitals,
//   // Override default ignores of eslint-config-next.
//   globalIgnores([
//     // Default ignores of eslint-config-next:
//     ".next/**",
//     "out/**",
//     "build/**",
//     "next-env.d.ts",
//   ]),
// ]);

// export default eslintConfig;

// eslint.config.mjs
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  // Next.js 推薦規則
  ...nextVitals,

  // 調整忽略清單
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  //  在 Flat Config 裡用另一個 config 物件覆蓋規則
  {
    rules: {
      // 允許在 useEffect 內 setState（配合 GitHub Pages 靜態匯出與 localStorage 載入）
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);



