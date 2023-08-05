import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/modals/address';
import { users } from 'src/app/modals/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  users: users[] = [];
  userId;
  selectedUser;
  address: Address[] = [];
  constructor(private activatedRoute: ActivatedRoute,
    private userService: UsersService) {

  }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.fetchUsers().subscribe((data) => {
      this.users = data;
      if (this.userId) {
        this.selectedUser = this.users.find(item => item.id == this.userId);
      }
      else  {
        this.users.forEach((item) => {
          this.address.push({
            user: {
              id: item.id,
              name: item.name,
            },
            street: item.address.street,
            suite: item.address.suite,
            city: item.address.city,
            zipcode: item.address.zipcode,
            geo: item.address.geo
          });
        });
      }
    });
  }
}
