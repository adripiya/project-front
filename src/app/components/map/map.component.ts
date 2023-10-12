import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { Map, NavigationControl, Marker } from 'maplibre-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;
  @Input() location: any;
  @ViewChild('map')

  private mapContainer!: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const initialStateZoom = 10;

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=bAv1VlIHdMcrEH1jBQfr`,
      center: [this.location.longitude, this.location.latitude],
      zoom: initialStateZoom
    });
    this.map.addControl(new NavigationControl(), 'top-right');
    new Marker({ color: "#FF0000" })
      .setLngLat([this.location.longitude, this.location.latitude])
      .addTo(this.map);
  }

  ngOnDestroy() {
    this.map?.remove();
  }

}