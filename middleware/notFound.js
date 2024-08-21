const notFound = (req, res) => {
  res.status(404).send("<h1>404</h1> <h3>Oops! Page not found</h3><a href='/'>back to home page</a>")
}
module.exports = notFound;