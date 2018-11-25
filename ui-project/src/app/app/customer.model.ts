export class Customer {

  firstName: string;
  lastName: string;
  email: string;
  mobile: number;
  password: string;
  constructor( firstName?: string, lastName?: string, email?: string,
    mobile?: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.mobile = mobile;
    }
}
