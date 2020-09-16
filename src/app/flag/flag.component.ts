import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css'],
})
export class FlagComponent implements OnInit {
  name: string;
  flag: string;
  constructor(route: ActivatedRoute) {
    const { country } = route.snapshot.params;
    this.name = country;
  }

  async ngOnInit(): Promise<void> {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${this.name}`
    );
    if (200 <= response.status && response.status < 300) {
      const [{ name, flag }] = await response.json();
      this.name = name;
      this.flag = flag;
    }
  }
}
