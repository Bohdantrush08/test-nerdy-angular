export class RegistrationForm {
  public email: string;
  public name: string;
  public surname: string;
  public password: string;
  public confirmPassword: string;

  constructor(email?: string, name?: string, surname?: string, password?: string) {
    this.email = email !== undefined ? email : "";
    this.name = name !== undefined ? name : "";
    this.surname = surname !== undefined ? surname : "";
    this.password = password !== undefined ? password : "";
    this.confirmPassword = password !== undefined ? password : "";
  }
}
