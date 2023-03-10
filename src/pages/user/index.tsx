import { useAuth } from "../../context"; 
import './style.scss'

export const UserMessage = () => {
  const { user, logout } = useAuth?.() || {}
  return (
		<div className="user">
			<header>
				<h2 className="user_info">用户信息</h2>
				<div className="logout" onClick={logout}>
					登出
				</div>
			</header>
			{user?.username ? (
				<section>
					<h3>用户名: {user.username}</h3>
					<h3>密码: {user.password}</h3>
					<h3>送给自己: {user.message}</h3>
				</section>
			) : null}
		</div>
	)
}