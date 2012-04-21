exports.index = (req, res) ->
  console.log "hoge!"
  res.render "index",
    title: "!"

# 検索
exports.search = (req, res) ->
  console.log req.query
  console.log req.query.w
  res.render "index",
    title: req.query.w


