const BASEURL = "https://easy-mock.com/mock/5aeb0cfe671cac5c2b7aa0ea/example/easyVue/";
const LOCAL = "http://localhost:3000/";
const URL = {
  getShoppingMallInfo: BASEURL + 'index',
  getGoodsInfo: BASEURL + 'getGoodsInfo',
  registerUser: LOCAL + 'user/register' //用户注册接口url
}

export default URL