import { NgModule } from '@angular/core';
import { CreateNewStudentComponent } from './create-new-student/create-new-student.component';
import { ShowAllStudentsComponent } from './show-all-students/show-all-students.component';

@NgModule({
  declarations: [CreateNewStudentComponent, ShowAllStudentsComponent],
  imports: [RegistrationModule],
})
export class RegistrationModule {}
