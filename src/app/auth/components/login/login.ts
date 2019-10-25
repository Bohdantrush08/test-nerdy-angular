export class UserLogin {

  public username: string;
  public password: string;

  constructor(username?: string, password?: string) {
    this.username = username !== undefined ? username : null;
    this.password = password !== undefined ? password : null;
  }
}
