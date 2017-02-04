const Brain = require('./brain');

Brain.fetchComic().then(res => {
  console.log(res);
});
