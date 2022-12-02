const { Type } = require('../db');

module.exports = {
  getAllTypes: async () => {
    return Type.findAll();
  },
};
