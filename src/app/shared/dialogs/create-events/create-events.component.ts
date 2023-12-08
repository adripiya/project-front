import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.scss']
})
export class CreateEventsComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateEventsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  cancelar() {
    this.dialogRef.close();
  }
}
