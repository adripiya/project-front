import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-events',
  templateUrl: './detail-events.component.html',
  styleUrls: ['./detail-events.component.scss']
})
export class DetailEventsComponent {

  constructor(
    public dialogRef: MatDialogRef<DetailEventsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  cancelar() {
    this.dialogRef.close();
  }
}
