import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  users: any;
  isShowFullInfo: boolean = false;
  usersAmount: number;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
  }

  getUsers() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
      if(this.usersAmount) {
        this.users = users.slice(0, this.usersAmount);
      }
    });
  }

}
