import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-usuario',
  templateUrl: './detail-usuario.component.html',
  styleUrls: ['./detail-usuario.component.scss']
})
export class DetailUsuarioComponent {



  constructor(public dialogRef: MatDialogRef<DetailUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  cerrar() {
    this.dialogRef.close();
  }

}
