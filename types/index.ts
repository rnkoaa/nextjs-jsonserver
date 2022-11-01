export interface Address {
  string: string;
  suite?: string;
  city: string;
  zipcode: string;
  geo: Map<string, string>;
}

export interface Company {
  name: string;
  catchPhrase?: string;
  bs?: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone?: string;
  company?: Company;
}
