import config from '../config.json'

export interface User {
	username: string
	password: string
	token: string
	message: string
}

export interface RequestParamsType { 
  username: string
  password: string
}

const { baseUrl, localStorageKey } = config

const getToken = () => {
	return localStorage.getItem(localStorageKey)
}

function request(url: string, params: RequestParamsType) {
	return fetch(`${baseUrl}${url}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(params)
	}).then(async (res) => {
		if (res) {
      const data = await res.json()
			localStorage.setItem(localStorageKey, data.token || '')
			return Promise.resolve(data)
		} else {
			return Promise.reject('error')
		}
	})
}

const login = (params: RequestParamsType) => {
	return request('/login', params)
}
const register = (params: RequestParamsType) => {
	return request('/register', params)
}

const logout = async (isClear = false) => isClear && localStorage.removeItem(localStorageKey)

export { login, register, logout, getToken }