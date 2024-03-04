import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ex-base',
  templateUrl: './ex-base.component.html',
  styleUrls: ['./ex-base.component.scss'],
})
export class ExBaseComponent {
  constructor(private router: Router) {}

  goToInBase(): void {
    this.router.navigate(['/internal']);
  }
}
