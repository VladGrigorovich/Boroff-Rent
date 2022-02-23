import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../models';

@Component({
  selector: 'app-car-preview',
  templateUrl: './car-preview.component.html',
  styleUrls: ['./car-preview.component.scss'],
})
export class CarPreviewComponent implements OnInit {
  @Input() car!: Car;

  ngOnInit(): void {}
}
