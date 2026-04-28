import { Component } from '@angular/core';
import { Cards } from '../../components/cards/cards';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Cards],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
