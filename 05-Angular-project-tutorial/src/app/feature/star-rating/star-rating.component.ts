import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent implements OnInit {
  @Input() rating: any;
  @Input() isReadOnly: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }
}
