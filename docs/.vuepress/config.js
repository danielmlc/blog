/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2020-02-04 21:56:24
 * @LastEditTime: 2020-03-01 23:52:28
 */

module.exports = {
  "title": "danielmlc的博客",
  "description": "信是所见之事的实底 是未见之事的确据",
  "base": "/blog/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "NPM",
            "link": "https://www.npmjs.com/~danielmlc",
            "icon": "reco-npm"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/danielmlc",
            "icon": "reco-github"
          },
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "ruanyifeng",
        "desc": "阮一峰站点",
        "email": "",
        "link": "http://www.ruanyifeng.com/home.html"
      },
    ],
    "logo": "/avatar.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "danielmlc",
    "authorAvatar": "/avatar.jpg",
    "record": "",
    "startYear": "2020",
    "valineConfig": {
      "appId": "PvVNgnr8a53LpPcuVgrVvdqF-gzGzoHsz",
      "appKey": "pvXzUKHyM3t5HsnOguiAefnr",
      "avatar":"identicon",
      "placeholder": "随便聊聊..."
    }
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    [
      "vuepress-plugin-kan-ban-niang",
      {
        theme: ["miku"],
        clean: true,
        modelStyle: {
          position: "fixed",
          left: "0px",
          bottom: "0px",
          opacity: "0.9",
          zIndex: 99999
        }
      }
    ]
  ]
}