import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    MenubarModule,
    CardModule,
    PanelModule,
    FieldsetModule,
  ],
})
export class PrimeNgModule {}
