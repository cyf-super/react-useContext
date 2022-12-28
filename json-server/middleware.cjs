const userInfo = {
  username: '',
  password: ''
}

module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    const { username, password } = req.body
    if (username && username === userInfo.username && password && password === userInfo.password) {
      res.status(200).json({
				...userInfo,
				token: `token==${new Date().getTime()}`
			})
    } else {
      res.status(401).json({
				message: '账号不存在，请先注册账号！'
			})
    }
  } else if (req.method === 'POST' && req.path === '/register') {
    const { username, password } = req.body
    if (username && password) {
      userInfo.username = username
			userInfo.password = password
      res.status(200).json({
				...userInfo,
				token: `token==${new Date().getTime()}`
			})
    } else {
      res.status(404).json({
				message: '账号密码不合法！'
			})
    }
	}
  next()
}