/**
 * This class represents a user.
 */

interface ConstructorParams {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
}

export class User {
  userName: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';

  constructor({ userName, firstName, lastName, password }: ConstructorParams) {
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
  }

  getFullName(): string {
    return this.lastName + ' ' + this.firstName;
  }
}
