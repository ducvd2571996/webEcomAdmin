export interface UserRegister {
  phone: string;
  password: string;
}

export interface UserLogin {
  phone: string;
  password: string;
}

export interface UserData {
  name: string;
  token: string;
  email: string;
  url: string;
  phoneNumber: string;
}

export interface CustomerData {
  name: string;
  email: string;
  url: string;
  phoneNumber: string;
  address: string;
  id: number;
  createdAt: Date;
}

export interface UpdateCustomerDto {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  id: number;
}
