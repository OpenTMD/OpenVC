'use strict';

const { Controller } = require('egg');
const childProcess = require('node:child_process');

class WireGuardController extends Controller {
  async setCMDInfo() {
    const { ctx, app } = this;
    try {
      const res = await childProcess.exec('dir');
      console.log(res);
      ctx.body = res;
    } catch (e) {
      app.logger.error(e);
    }
  }
}

module.exports = WireGuardController;
