'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // },
  // childProcess: {
  //   enable: true,
  //   package: 'node:child_process',
  // },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
};

// eslint-disable-next-line eggache/no-override-exports
// module.exports.mongoose = {
//   enable: true,
//   package: 'egg-mongoose',
// };

// eslint-disable-next-line eggache/no-override-exports
// module.exports.validate = {
//   enable: true,
//   package: 'egg-validate',
// };
