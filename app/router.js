'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.prefix('/api/v1');
  router.get('/user/info', controller.user.userInfo);
  router.post('/user/login', controller.user.userLogin);
  router.post('/user/register', controller.user.userRegister);
  router.get('/wireguard/cmd', controller.wireGuard.setCMDInfo);
};
