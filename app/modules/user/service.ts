import { IUser } from './interface'
import { User } from './model'
import { generateUserId } from './utils'

export const createUserService = async (user: IUser): Promise<IUser | null> => {
    const id = await generateUserId()
    user.id = id
    if (!user.password) {
        user.password = process.env.DEFAULT_PASS as string
    }

    const createdUser = await User.create(user)

    if (!createUserService) {
        throw new Error('Failed to create user!')
    }
    return createdUser
}