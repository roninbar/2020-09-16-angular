import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css'],
})
export class FlagComponent implements OnInit {
  countryName: string;
  flagUrl: string;
  constructor(route: ActivatedRoute) {
    const { country } = route.snapshot.params;
    this.countryName = country;
  }

  async ngOnInit(): Promise<void> {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${this.countryName}`
    );
    if (200 <= response.status && response.status < 300) {
      const [{ flag }] = await response.json();
      this.flagUrl = flag;
    }
  }
}
