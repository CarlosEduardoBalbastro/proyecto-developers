import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Cards } from '../../components/cards/cards';

@Component({
  selector: 'app-home',
  imports: [Header, Cards],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
