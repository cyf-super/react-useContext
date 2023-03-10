import React from 'react'
import { useAuth } from '../../context'
import { useToggle } from '../../hooks/useToggle'
import config from '../../config.json'
import './style.scss'

export const LoginScreen = () => {
	const { register, login, setUser, user } = useAuth?.() || {}
	const [hasAccount, togglehasAccount] = useToggle(!!localStorage.getItem(config.localStorageKey))

	const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const username = (e.currentTarget[0] as HTMLInputElement).value
		const password = (e.currentTarget[1] as HTMLInputElement).value
		if (hasAccount) {
			login && login({ username, password })
		} else {
			register && register({ username, password })
		}
	}

	const togleLogin = () => {
		togglehasAccount()
		setUser && setUser(null)
	}
	return (
		<div className="login">
			<h2 className="login_name">useContext</h2>
			<form onSubmit={submitHandle}>
				<div className="login_username">
					<label htmlFor="username" id="username">
						账号
					</label>
					<input type="text" />
				</div>
				<div className="login_password">
					<label htmlFor="password">密码</label>
					<input type="password" id="password" />
				</div>
				<button type="submit" className="submit">
					{hasAccount ? '登录' : '注册'}
				</button>
				<a className="prompt" onClick={() => togleLogin()}>
					{hasAccount ? '去注册' : '去登录'}
				</a>
			</form>
			<div className="message">{user && user.message}</div>
		</div>
	)
}
