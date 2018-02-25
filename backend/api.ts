import {initDb} from './db/db';

import {create, find, removeById, updateById} from './db/species';

const express = require('express');
const router = express.Router();

export function initApi() {

  initDb();

  router.route('/species').get(find);
  router.route('/species').post(create);
  router.route('/species/:id').delete(removeById);
  router.route('/species/:id').put(updateById);

  return router;
}
