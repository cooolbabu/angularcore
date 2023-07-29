import { Component } from '@angular/core';
import {COURSES} from '../data/datadb'
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sreenivas welcome to Angular deep dive course';
  price = 9.99;
  rate = .30;

  courses = COURSES;

  startDate = new Date(2000, 0, 1);

  onCourseSelected(courseEvent:Course) {
    console.log("Card clicked ... ", courseEvent)
  }
}
