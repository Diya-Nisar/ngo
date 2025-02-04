type User = {
  id: string
  name: string
  email: string
  password: string
  role: "admin" | "employee"
}

class MockDatabase {
  private users: User[] = [
    {
      id: "1",
      name: "Admin User",
      email: "admin@ngo.com",
      password: "adminpassword",
      role: "admin",
    },
    {
      id: "2",
      name: "Employee User",
      email: "employee@ngo.com",
      password: "employeepassword",
      role: "employee",
    },
  ]

  async findUserByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email)
  }

  async createUser(user: Omit<User, "id">): Promise<User> {
    const newUser = { ...user, id: String(this.users.length + 1) }
    this.users.push(newUser)
    return newUser
  }

  async getAllUsers(): Promise<User[]> {
    return this.users
  }
}

export const db = new MockDatabase()

