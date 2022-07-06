//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require("axios");
const URLtypes = "https://pokeapi.co/api/v2/type";
const {Type} = require("../api/src/db");

// Syncing all the models at once.
conn.sync({ force: true }).then( async () => {   // CARGO LOS TYPES A LA BD
  const {data} = await axios.get(URLtypes)
  data.results ? Type.bulkCreate(data.results.map( t => {
    return {
      name: t.name
    }
  })) : console.log('Cant charge types')
  console.log('Types successfully added in database...')



  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
