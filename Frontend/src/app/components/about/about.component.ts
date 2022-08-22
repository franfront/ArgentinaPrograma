import { PersonaService } from './../../service/persona.service';
import { persona } from './../../model/persona.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  persona: persona = new persona('', '', '');

  constructor(public personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => (this.persona = data));
  };
}
