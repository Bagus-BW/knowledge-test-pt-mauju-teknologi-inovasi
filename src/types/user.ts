export type User = {
  id: number
  email: string,
  first_name: number,
  last_name: string,
  avatar: string
}

export type UserCreate = {
  name: string,
  job: string,
  id: string,
  createdAt: string
}

export type UserUpdate = {
  name: string,
  job: string,
  updatedAt: string
}