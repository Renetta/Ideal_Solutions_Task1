import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/modals/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent  implements OnInit{

  constructor(private userService: UsersService) { }
  
  users: users[] = [];

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    })
  }

  
}
