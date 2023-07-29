import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  constructor() {
    this.course = {} as Course;
  }

  ngOnInit(){}

  @Input({
    required: true
  })
  course:Course;
  
  @Input()
  cardIndex:number=0;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  onCourseView() {
    console.log("Card component clicked");
    this.courseEmitter.emit(this.course);
  }

  cardClasses(){
    
    if(this.course.category == 'BEGINNER')
      return 'beginner'
    else
      return ""
  }

  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }

}
