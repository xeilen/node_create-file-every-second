'use strict';

const fs = require('fs');

setInterval(() => {
  const timestamp = new Date();
  const hour = timestamp.getHours();
  const minutes = timestamp.getMinutes();
  const seconds = timestamp.getSeconds();

  fs.appendFile(
    `${__dirname}/app-${hour}_${minutes}_${seconds}.log`,
    timestamp.toDateString(),
    (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log('Error');

        return;
      }

      // eslint-disable-next-line no-console
      console.log('File has been created successful!');
    });
}, 1000);
