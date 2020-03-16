/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2020-02-04 21:56:24
 * @LastEditTime: 2020-03-16 14:11:59
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
    "record": 'MIT License',
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
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        "theme": ["blackCat"],
        "clean": true,
        "modelStyle": {
          "position": "fixed",
          "right": "0px",
          "bottom": "0px",
          "opacity": "0.7",
          "zIndex": 99999
        },
        "messages":{
          "welcome": "欢迎来到danielmlc的博客",
          "home": "我带你参观我美丽的小屋子。",
          "theme": "好吧，希望你能喜欢我的其他小伙伴。",
          "close": "你知道我喜欢吃什么吗？痴痴地望着你。"
        },
        "width":80,
        "height":140,
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        "audios": [
          // 网络文件示例
          {
            "name": 'valder Fields',
            "artist": 'valder Fields',
            "url": '/music/valderFields.flac',
            "cover": 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
          {
            "name": '강남역 4번 출구',
            "artist": 'Plastic / Fallin` Dild',
            "url": 'https://assets.smallsunnyfox.com/music/2.mp3',
            "cover": 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
          {
            "name": '用胳膊当枕头',
            "artist": '최낙타',
            "url": 'https://assets.smallsunnyfox.com/music/3.mp3',
            "cover": 'https://assets.smallsunnyfox.com/music/3.jpg'
          }
        ],
        "position":{
          "left": "10px",
          "bottom": "10px",
          "z-index": "999999"
        },
        "shrinkMode":"mini"
      }
    ]
  ]
}