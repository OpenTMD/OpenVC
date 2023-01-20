const { Controller } = require('egg');

class UserController extends Controller {
  userLogin() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: 'success',
      result: ctx.request.body,
    };
  }

  userInfo() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: 'success',
      result: ctx.request.query,
    };
  }

  userRegister() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: 'success',
      result: ctx.request.body,
    };
  }
}

module.exports = UserController;
