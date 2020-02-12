# React with node+express+ejs using webpack

### Pros

- can split js into chunks and make use of lazy load
- builds pretty fast
- gives a lot of options

### Cons

- dev server reloads page after changes in styles
- not that easy to configure
- configuration is not flexible
- user have to manually reload browser after building

## Setup

> start node server on first cmd

```shell
    node index.js
```

> start gulp on second cmd

```shell
    npm run build:watch
```

### Additional info

You might wanna work in 'development' mode, but this config is not prepared for that, since it wouldn't work with node
To do that, you would have to create another index.html and add development options to webpack config
