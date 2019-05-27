import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  title = 'mis Noticias';
  text: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    
  }

 
}
