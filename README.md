# vue-music

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 获取推荐列表 jsonp
## Request URL:https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5&uin=0&needNewCode=1&jsonpCallback=__jp1
Request Method:GET
## 参数
| g_tk | 1928093487 |
:-:|:-:|
inCharset | utf-8 | 
outCharset | utf-8 |
notice | 0 |
format | jsonp |
platform | h5 | 
uin | 0 |
needNewCode | 1 |
jsonpCallback | __jp1 |
## 返回值
    __jp1({
        "code":0,
        "data":
        {
            "slider":
                [
                    {
                        "linkUrl":"https://y.qq.com/m/act/dfb2019/index.html?_video=true&ADTAG=jdt&channelId=10048169",
                        "picUrl":"http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1978362.jpg",
                        "id":25246
                    },{
                        "linkUrl":"https://y.qq.com/m/sact/sfhd/94.html?ADTAG=ZDQ&_video=true&openinqqmusic=1",
                        "picUrl":"http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1979203.jpg",
                        "id":25257
                    },...
                ],
            "radioList":
                [
                    {
                        "picUrl":"http://y.gtimg.cn/music/photo/radio/track_radio_199_12_8.jpg",
                        "Ftitle":"热歌",
                        "radioid":199
                    },{
                        "picUrl":"http://y.gtimg.cn/music/photo/radio/track_radio_307_12_5.jpg",
                        "Ftitle":"一人一首招牌歌",
                        "radioid":307
                    }
                ],
                "songList":[]
        }
    })

