import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UsersService,
    private activatedroute: ActivatedRoute) { }

  selectedUser;
  serviceSub;
  userId;
  ngOnInit(): void {
    this.serviceSub=this.activatedroute.params.subscribe(params => { 
      this.userId = params['id']; 
      let users=this.userService.fetchUsers().subscribe((data) => {
        this.selectedUser=data.find(item => item.id==this.userId);
      });
    });
  }

  ngOnDestroy() {
    this.serviceSub.unsubscribe();
  }
}
