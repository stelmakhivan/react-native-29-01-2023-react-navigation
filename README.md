# Code from react-native lectures (11.01.2024)<br />Lecture #5 - react-navigation

### Examples with Drawer, Native Stack, Bottom Tabs and Typescript

https://github.com/stelmakhivan/react-native-29-01-2023-react-navigation/assets/28428836/08ca27d5-0e11-4d71-a483-1119a81e684a

## Setup project

```shell
yarn install
yarn start
```

### Tested with environment

`npx react-native info`

```shell
System:
  OS: macOS 14.3
  CPU: (10) arm64 Apple M1 Max
  Memory: 8.38 GB / 32.00 GB
  Shell:
    version: "5.9"
    path: /bin/zsh
Binaries:
  Node:
    version: 20.10.0
    path: ~/.nvm/versions/node/v20.10.0/bin/node
  Yarn:
    version: 1.22.19
    path: ~/.nvm/versions/node/v20.10.0/bin/yarn
  npm:
    version: 10.2.3
    path: ~/.nvm/versions/node/v20.10.0/bin/npm
  Watchman:
    version: 2023.10.23.00
    path: /opt/homebrew/bin/watchman
Managers:
  CocoaPods:
    version: 1.14.2
    path: /Users/ivanstelmakh/.rvm/gems/ruby-3.2.2/bin/pod
SDKs:
  iOS SDK:
    Platforms:
      - DriverKit 23.2
      - iOS 17.2
      - macOS 14.2
      - tvOS 17.2
      - visionOS 1.0
      - watchOS 10.2
  Android SDK: Not Found
IDEs:
  Android Studio: 2023.1 AI-231.9392.1.2311.11255304
  Xcode:
    version: 15.2/15C500b
    path: /usr/bin/xcodebuild
Languages:
  Java:
    version: 17.0.9
    path: /usr/bin/javac
  Ruby:
    version: 3.2.2
    path: /Users/ivanstelmakh/.rvm/rubies/ruby-3.2.2/bin/ruby
npmPackages:
  "@react-native-community/cli": Not Found
  react:
    installed: 18.2.0
    wanted: 18.2.0
  react-native:
    installed: 0.73.2
    wanted: 0.73.2
  react-native-macos: Not Found
npmGlobalPackages:
  "*react-native*": Not Found
Android:
  hermesEnabled: Not found
  newArchEnabled: Not found
iOS:
  hermesEnabled: Not found
  newArchEnabled: Not found
```
