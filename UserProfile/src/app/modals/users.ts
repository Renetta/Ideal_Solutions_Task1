import { Company } from "./company";
import { Address } from "./address";

export class users {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    address?: Address
    phone?: string;
    website?: string;
    company?: Company
}