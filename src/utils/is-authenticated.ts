import * as accountService from '../services/account.service'

const isAuthenticated = async () => {
  const token = localStorage.getItem('token')
  if (!token) return false

  const res = await accountService.getMe()
  if (res.success) return res.user
  return false
}

export const authUtils = {
  isAuthenticated,
}
