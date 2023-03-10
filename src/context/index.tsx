import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'
import * as auth from '../utils/auto-provider'

interface ContextType {
  login: (form: auth.RequestParamsType) => Promise<void>
  register: (form: auth.RequestParamsType) => Promise<void>
  logout: () => Promise<void>
  setUser: (user: null | auth.User) => void
  user: auth.User | null
}

// 创建上下文对象
const AuthContext = createContext<ContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode}) => {
	const [user, setUser] = useState<null | auth.User>(null)

	const login = (form: auth.RequestParamsType) => auth.login(form).then(setUser)

	const register = (form: auth.RequestParamsType) => auth.register(form).then(setUser)

	const logout = () => auth.logout().then(() => setUser(null))

	// 使用useMemo缓存数据
	const memoizetion = useMemo(() => {
		return {
			login,
			register,
			logout,
			user,
			setUser
		}
	}, [login, register, logout, user, setUser])

	return <AuthContext.Provider value={memoizetion} children={children}></AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}