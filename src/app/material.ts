import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
    imports: [MatButtonModule, MatCardModule, MatInputModule, MatDialogModule],
    exports: [MatButtonModule, MatCardModule, MatInputModule, MatDialogModule]
})
export class MaterialModules { }