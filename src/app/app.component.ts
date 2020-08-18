import { Component } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-iron';
  notes: string[];
  note: string;
  

  constructor() { 
    this.notes = [];
    
  }
  ngOnInit() {
  }
    
  createNote(){
    this.notes.push(this.note);
  }

    
  
}
