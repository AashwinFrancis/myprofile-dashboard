import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: object;

  constructor() {
    this.employee = {
      ID: 7,
      FirstName: 'Ashwin',
      LastName: 'Francis',
      Prefix: 'Mr.',
      Position: 'Software developr',
      Picture: 'assets/images/profile.png',
      BirthDate: new Date('2000/06/08'),
      Notes: 'Iam a passionate Angular frontend developer with a keen eye for user-centric design and a knack for creating visually appealing web experience . With expertise in Angular, TypeScript, HTML5, CSS3, and JavaScript, I craft responsive and dynamic web applications that elevate user interactions.',
      Address: 'Abhishek bhavan karode'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}
