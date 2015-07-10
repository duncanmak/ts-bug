### Getting started ###

If you run `npm run good`, you get a compiler warning:

```
good.ts(6,13): error TS2304: Cannot find name 'pad'.
```

If you run `npm run bad`, you only get a runtime error:

```
module.js:338
    throw err;
          ^
Error: Cannot find module 'lodash'
```
