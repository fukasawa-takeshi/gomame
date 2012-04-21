(function() {

  exports.index = function(req, res) {
    console.log("hoge!");
    return res.render("index", {
      title: "!"
    });
  };

  exports.search = function(req, res) {
    console.log(req.query);
    console.log(req.query.w);
    return res.render("index", {
      title: req.query.w
    });
  };

}).call(this);
