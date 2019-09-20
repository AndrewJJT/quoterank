var controllers = require('./controllers')
const path = require('path')

module.exports = function(app) {
    app.get('/authors', controllers.getallauthors)
    app.get('/authors/:id', controllers.getauthor)
    app.post('/authors', controllers.addauthor)
    app.put ('/authors/:id', controllers.updateauthor)
  

    app.put('/authorsquotes/:id', controllers.addquote)
    app.put('/authorsquotes/:id/:qid', controllers.updatevote)
    app.delete('/authorsquotes/:id/:qid', controllers.deletequote)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}
