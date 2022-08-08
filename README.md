# FAIMS3-elaboration-i18n
i18n prototype

#### How translations work

1. Will attempt to detect the language used in browser and compile to that
1. Language json lazy loaded and can be switched at run time 
1. t function used to mark locations where translations are needed
1. t function then checks key located in ..public/locales/en/translation.json for translation



![](https://github.com/FAIMS/FAIMS3-elaboration-i18n/blob/main/translationExample.gif)
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run extract`

Script which extracts all translation keys (i.e. in JSX `{t(new.key, string)}`) from the application and matches them with inside of `public/locales/translation` JSON files.