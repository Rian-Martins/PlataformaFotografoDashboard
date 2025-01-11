// angular import
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './theme/shared/components/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, SpinnerComponent,CommonModule, HttpClientModule]
})
export class AppComponent {

  title = 'mantis-free-version';
}
