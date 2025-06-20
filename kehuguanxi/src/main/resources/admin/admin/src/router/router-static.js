import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import chanpin from '@/views/modules/chanpin/list'
    import chanpinDingdan from '@/views/modules/chanpinDingdan/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import kehu from '@/views/modules/kehu/list'
    import kehuFankui from '@/views/modules/kehuFankui/list'
    import kehuZoufang from '@/views/modules/kehuZoufang/list'
    import yuangong from '@/views/modules/yuangong/list'
    import dictionaryChanpin from '@/views/modules/dictionaryChanpin/list'
    import dictionaryChanpinDingdan from '@/views/modules/dictionaryChanpinDingdan/list'
    import dictionaryChanpinDingdanXiaoshou from '@/views/modules/dictionaryChanpinDingdanXiaoshou/list'
    import dictionaryChanpinDingdanXiaoshoufangshi from '@/views/modules/dictionaryChanpinDingdanXiaoshoufangshi/list'
    import dictionaryDiqu from '@/views/modules/dictionaryDiqu/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryHangye from '@/views/modules/dictionaryHangye/list'
    import dictionaryJinyong from '@/views/modules/dictionaryJinyong/list'
    import dictionaryKehuFankui from '@/views/modules/dictionaryKehuFankui/list'
    import dictionaryKehuFankuizhuangtai from '@/views/modules/dictionaryKehuFankuizhuangtai/list'
    import dictionaryKehuZoufang from '@/views/modules/dictionaryKehuZoufang/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryZhiwei from '@/views/modules/dictionaryZhiwei/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryChanpin',
        name: '产品类型',
        component: dictionaryChanpin
    }
    ,{
        path: '/dictionaryChanpinDingdan',
        name: '销售状态',
        component: dictionaryChanpinDingdan
    }
    ,{
        path: '/dictionaryChanpinDingdanXiaoshou',
        name: '销售类型',
        component: dictionaryChanpinDingdanXiaoshou
    }
    ,{
        path: '/dictionaryChanpinDingdanXiaoshoufangshi',
        name: '销售方式',
        component: dictionaryChanpinDingdanXiaoshoufangshi
    }
    ,{
        path: '/dictionaryDiqu',
        name: '地区',
        component: dictionaryDiqu
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryHangye',
        name: '行业',
        component: dictionaryHangye
    }
    ,{
        path: '/dictionaryJinyong',
        name: '账户状态',
        component: dictionaryJinyong
    }
    ,{
        path: '/dictionaryKehuFankui',
        name: '客户反馈类型',
        component: dictionaryKehuFankui
    }
    ,{
        path: '/dictionaryKehuFankuizhuangtai',
        name: '反馈状态',
        component: dictionaryKehuFankuizhuangtai
    }
    ,{
        path: '/dictionaryKehuZoufang',
        name: '客户走访类型',
        component: dictionaryKehuZoufang
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryZhiwei',
        name: '职位',
        component: dictionaryZhiwei
    }


    ,{
        path: '/chanpin',
        name: '产品',
        component: chanpin
      }
    ,{
        path: '/chanpinDingdan',
        name: '产品订单',
        component: chanpinDingdan
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/kehu',
        name: '客户',
        component: kehu
      }
    ,{
        path: '/kehuFankui',
        name: '反馈建议',
        component: kehuFankui
      }
    ,{
        path: '/kehuZoufang',
        name: '客户走访',
        component: kehuZoufang
      }
    ,{
        path: '/yuangong',
        name: '员工',
        component: yuangong
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
