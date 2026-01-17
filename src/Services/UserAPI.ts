import { NativeModules } from 'react-native';
import { User, UserListResponse } from './Types/UserListResponseDTO';

interface UserAPIModule {
  getUsers(limit: number, skip: number): Promise<UserListResponse>;
  getUserById(userId: number): Promise<User>;
}

export const UserAPI: UserAPIModule = NativeModules.UserAPI;
