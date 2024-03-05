import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewStudentComponent } from './create-new-student/create-new-student.component';
import { ShowAllStudentsComponent } from './show-all-students/show-all-students.component';

const routes: Routes = [
  { path: 'add-new-student', component: CreateNewStudentComponent },
  { path: 'view-all-students', component: ShowAllStudentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
