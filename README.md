### NPM install list:

  ```jest babel-preset-env babel-preset-react react react-dom enzyme enzyme-adapter-react-16 react-test-renderer```

  * for basic JS testing: jest
  * to use babel: babel-preset-env
  * to use react (in jest files): babel-preset-react react react-dom
  * to use enzyme: enzyme enzyme-adapter-react-16
  * for snapshots: react-test-renderer

### update test scripts in `package.json`:
```javascript
  "scripts": {
    "test": "jest",
    "test_watch": "jest --watch"
  }
```


