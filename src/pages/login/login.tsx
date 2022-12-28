import React from "react"
import qs from 'qs'

const login = (params: { username: string, password: string }) => {
  return fetch('http://localhost:3004/login', {
		method: 'POST',
		body: qs.stringify(params)
	})
}

export const Login = () => {
  const submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = (e.currentTarget[0] as HTMLInputElement).value
    const password = (e.currentTarget[1] as HTMLInputElement).value
    console.log({ username, password })
    login({ username, password }).then(res => {
      console.log(res);
    })
  }
  return (
    <form onSubmit={submitLogin}>
      <div>
        <label htmlFor="username" id="username">账号</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id='password' />
      </div>
      <button type="submit">登录</button>
    </form>
  )
}
