This repository is for bugfix demonstration purposes only.

# The storybook (?) bug

- TypeScript ENUMs or UNIONs containing numbers are not handled properly in Storybook when using `@storybook/addon-essentials`

# This repository

The repository contains one component `Test` which just shows it's `props`. Please have a look at `src/components/Test/Test.tsx`.

The storybook consists of two identical stories showing the `Test` component while setting the props the same way.

# How to use this repository for reproducing the bug

- clone
- call `npm install`
- call `npm run storybook`
- open [http://localhost:6006/?path=/story/test--story-1](http://localhost:6006/?path=/story/test--story-1) in a fresh browser window and you will see in the canvas and also in the controls tab that `enumNumber` and `unionNumber` are not set properly
- navigate in the same browser tab to `Story 2` and you will see that `enumNumber` and `unionNumber` are not set properly in the controls but in the canvas
- navigate back to `Story 1` in the same browser tab by clicking on `Story 1` and you will see this URL [http://localhost:6006/?path=/story/test--story-1&args=enumNumber:!undefined;unionNumber:!undefined](http://localhost:6006/?path=/story/test--story-1&args=enumNumber:!undefined;unionNumber:!undefined), that looks weird
- stop storybook server

---
- remove `@storybook/addon-essentials` from addons in `.storybook/main.js`
- call `npm run storybook`
- `Story 1` should be opened in the Browser
- all values are set properly in both stories no matter if you navigate through storybook without refreshing the page or not
- stop storybook server

---
- readd `@storybook/addon-essentials` to addons in `.storybook/main.js` but deactivate all options like

```
{
  name: '@storybook/addon-essentials',
  options: {
    // controls: false,
    // docs: false,
    // actions: false,
    // viewport: false,
    // backgrounds: false,
    // toolbars: false,
  },
},
```
- you will observe the same behavior as when `@storybook/addon-essentials` is added to the addons `.storybook/main.js` "completely