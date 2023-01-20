const { Controller } = require('egg');

class UserController extends Controller {
  userInfo() {
    const { ctx } = this;
    ctx.body = {
      id: 1,
      name: 'jerry',
    };
  }
}

module.exports = UserController;
