const settings = {
  "name": "blog.junglei.kim",
  "state": {
    "frontity": {
      "url": "https://junglei.kim",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      name: "material-ui",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://junglei.kim"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
