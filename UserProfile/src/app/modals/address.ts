import { Geo } from "./geo"
import { User } from "./user";

export class Address {
    user: User;
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo
}