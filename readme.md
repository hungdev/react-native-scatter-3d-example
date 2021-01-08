### It is demo about 3D Graph ( scatter 3d )

This project is example of `highcharts-react-native`, it includes of `react-native-plotly`


<span align="center">
  <img src="https://github.com/hungdev/eact-native-scatter-3d-example/blob/master/assets/Ios.png?raw=true" width=300/>
</span>
<span align="center">
  <img src="https://github.com/hungdev/eact-native-scatter-3d-example/blob/master/assets/Android.png?raw=true" width=300/>
</span>

During the installation I encountered an error related `expo-file-system.downloadAsync` and i resolved this error by doing follow steps in [this comment](https://github.com/highcharts/highcharts-react-native/issues/91#issuecomment-676261777)

Step:
* run npx react-native init myApp
* edited the `metro.config.js` file, in the way mentioned above (https://github.com/highcharts/highcharts-react-native#installing)
* installed react-native-webview library
* installed react-native-unimodules package
* edit two files from ios directory, as it is described [here](https://docs.expo.io/bare/installing-unimodules/#configuration-for-ios), and for android files [here](https://docs.expo.io/bare/installing-unimodules/#configuration-for-android)
* run npx pod-install from the root directory of the app.

You also see my commit to watch changed file.

Hope this help you.