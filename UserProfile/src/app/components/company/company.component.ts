import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/modals/company';
import { users } from 'src/app/modals/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{

  users: users[] = [];
  company: Company[] = [];

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe((data) => {
      this.users = data;
      this.users.forEach((item) => {
        this.company.push({
          user: {
            id: item.id,
            name: item.name,
          },
          name: item.company.name,
          catchPhrase: item.company.catchPhrase,
          bs: item.company.bs
        });
      });
    });
  }

}
