export class UserModel {
  constructor(
    public email: string,
    public password: string,
    public remember: boolean
  ) { }

  is(other: UserModel): boolean {
    return this.email === other.email &&
        this.password === other.password;
  }
}
