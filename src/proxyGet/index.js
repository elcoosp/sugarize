const proxyGet = get =>
  new Proxy(
    {},
    {
      get
    }
  )

module.exports = proxyGet
