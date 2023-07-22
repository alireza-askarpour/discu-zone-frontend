import http from '../config/http'

export const getMe = async () => {
  try {
    const { data } = await http.post('/users/account')
    return { success: true, user: data.user }
  } catch (err) {
    return { success: false, error: err }
  }
}
