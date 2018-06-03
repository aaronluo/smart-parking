import data from './mock-data.json';
import _ from 'lodash';

export default {
  login (username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (_.isEqual('aaronluo', username)) {
          resolve(data.user);
        } else {
          reject(new Error('invalid username & password!'));
        }
      }, 1000);
    });
  }
}
