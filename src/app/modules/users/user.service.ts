import config from '../../../config'
import { generateUserId } from './user.utils'
import { IUser } from './users.interface'
import { User } from './users.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto genareted increamental id
  const id = await generateUserId()
  user.id = id

  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = User.create(user)
  if (!createUser) {
    throw new Error('Faild to create user')
  }
  return createdUser
}

export default {
  createUser,
}
