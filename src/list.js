const { exec } = require("child_process");

module.exports = (req, res) => {
  exec("ls " + req.query.dir, (err, out) => res.send(out));
};
