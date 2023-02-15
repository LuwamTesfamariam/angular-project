import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SecondComponent} from "../second/second.component";

@Component({
  selector: 'app-first',
  imports: [CommonModule, SecondComponent],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

}
