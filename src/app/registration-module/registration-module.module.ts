import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewStudentComponent } from './create-new-student/create-new-student.component';
import { ShowAllStudentsComponent } from './show-all-students/show-all-students.component';

const routes: Routes = [
  { path: 'reg/add-new-student', component: CreateNewStudentComponent },
  { path: 'reg/view-all-students', component: ShowAllStudentsComponent },
];

@NgModule({
  declarations: [CreateNewStudentComponent, ShowAllStudentsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RegistrationModuleModule {}
