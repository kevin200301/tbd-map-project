# TBDMapapp

Setup Guide

Required Programs

VS Code
Node.js and npm

1. Install dependencies

after you pull the repo, it will install every dependency specified in package.json with this command
terminal needs to be in the mapapp directory

```bash
npm install
```

2. Start the app

   Setup

   Create an expo account

   someone please look into sharing one eas build maybe
   Follow this: https://docs.expo.dev/build/setup/

   ```bash
   expo prebuild --clean
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
