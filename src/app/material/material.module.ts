import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatCheckboxModule,
  MatGridListModule, MatStepperModule, MatSelectModule, MatListModule, MatSidenavModule, MatRadioModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
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
    MatFormFieldModule,
    MatInputModule

    /*MatGridList,
    MatGridAvatarCssMatStyler,
    MatGridTile*/
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
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
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule
    /*MatGridList,
    MatGridAvatarCssMatStyler,
    MatGridTile*/
  ],
})
export class MaterialModule { }
