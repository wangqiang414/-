// 先引入Mock
import Mock from 'mockjs'
// 引入banners---首页大轮播图的数据
import home from './index.json'
// 引入floors---首页楼层的数据
import CateModule from './indexCateModule.json'
import cateNavDatas from './cateNavDatas.json'
import navCateLists from './cateLists.json'
// 使用Mock的相关方法,进行接口的拦截及返回数据的操作
// 自己设定并确定banners数据的接口地址--->/mock/banners   和   floors数据的接口地址---->/mock/floors
// 参数1:要拦截的接口地址,参数2:要返回的数据模版
Mock.mock('/mock/home', { code: 200, message: '成功', data: home })
Mock.mock('/mock/catemodule', { code: 200, message: '成功', data: CateModule })
Mock.mock('/mock/catenavnatas', { code: 200, message: '成功', data: cateNavDatas })
Mock.mock('/mock/navcatelists', { code: 200, message: '成功', data: navCateLists })
// 不需要进行暴露,必须要吧上述代码执行一次

