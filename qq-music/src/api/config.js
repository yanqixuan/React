export const URL = {
  // 图片轮播
  carousel:'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1562038591351&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1',
  // 最新专辑
  newalbum:'https://u.y.qq.com/cgi-bin/musicu.fcg?-=getUCGI7194831779960162&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22new_album%22%3A%7B%22module%22%3A%22newalbum.NewAlbumServer%22%2C%22method%22%3A%22get_new_album_info%22%2C%22param%22%3A%7B%22area%22%3A1%2C%22start%22%3A0%2C%22num%22%3A20%7D%7D%2C%22new_album_tag%22%3A%7B%22module%22%3A%22newalbum.NewAlbumServer%22%2C%22method%22%3A%22get_new_album_area%22%2C%22param%22%3A%7B%7D%7D%2C%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%7D'
}

// 公共参数配置
export const PARAM = {
  format:'jsonp',
  inCharset:'utf-8',
  outCharset:'utf-8',
  notice:0
}

// 回调配置
export const OPTION = {
  param:'jsonpCallback',
  prefix:'callback'
}

export const CODE_SUCCESS = 0; //成功的code