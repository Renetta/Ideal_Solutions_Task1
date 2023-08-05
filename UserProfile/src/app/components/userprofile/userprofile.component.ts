import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/modals/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent  implements OnInit{

  constructor(private userService: UsersService, private route: Router) { }
  
  users: users[] = [];

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe((data) => {
      this.users = data;
    })
  }

}
