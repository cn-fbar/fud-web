import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatCheckboxModule,
  MatGridListModule, MatStepperModule, MatSelectModule, MatListModule, MatSidenavModule, MatRadioModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatGridListModule,
    MatStepperModule,
    MatSelectModule,
    MatSidenavModule,
    MatRadioModule,

    /*MatGridList,
    MatGridAvatarCssMatStyler,
    MatGridTile*/
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatGridListModule,
    MatStepperModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule
    /*MatGridList,
    MatGridAvatarCssMatStyler,
    MatGridTile*/
  ],
})
export class MaterialModule { }
