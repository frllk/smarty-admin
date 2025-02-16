export default {
  testEnvironment: "jsdom", // 默认JSdom
  roots: ["<rootDir>/src"], //
  preset: 'ts-jest',
  transform: {
    // "^.+\\.ts$": "babel-jest",
    "^.+\\.ts(x)?$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest", // vue单文件
  },
  moduleFileExtensions: ["js", "vue", "ts", "tsx"],
  testMatch: ["**/__tests__/**/*.spec.ts"],
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  }

};
