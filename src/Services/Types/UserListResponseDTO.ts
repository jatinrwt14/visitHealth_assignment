export interface UserListResponse {
  users: User[];
  total: number;
  limit: number;
  skip: number;
}


export interface Address {
  city: string;
  state: string;
  country: string;
}

export interface Company {
  name: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  image: string;
  address: Address;
  company: Company;
}
