
const IndexController = {
  test: async (req, res) => {
    try {
      res.status(200).send('success');
    } catch(err) {
      res.status(500).send('Server Error');
    }
  }
}

module.exports.Controller = IndexController;
module.exports.controller = (app) => {
  app.get('/v1/test', IndexController.test);
}
