import 'ts-node/register';
import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  plugins: ['expo-router'],
  scheme: 'your-app-scheme',
  name: 'navigation',
  slug: 'navigation',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/app-icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.stelmakhivan.navigation',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/app-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.stelmakhivan.navigation',
  },
  web: {
    favicon: './assets/favicon.png',
    bundler: 'metro',
  },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
};

export default config;
