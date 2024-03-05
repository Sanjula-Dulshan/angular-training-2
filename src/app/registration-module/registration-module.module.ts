import { NgModule } from '@angular/core';
import { CreateNewStudentComponent } from './create-new-student/create-new-student.component';
import { ShowAllStudentsComponent } from './show-all-students/show-all-students.component';
import { RegistrationRoutingModule } from './registration-routing.module';

@NgModule({
  declarations: [CreateNewStudentComponent, ShowAllStudentsComponent],
  imports: [RegistrationRoutingModule],
})
export class RegistrationModule {}
