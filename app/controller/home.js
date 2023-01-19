'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Welcome to OpenVC Software Center.';
  }
}

module.exports = HomeController;
