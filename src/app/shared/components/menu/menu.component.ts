import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

   public menuItems: MenuItem[] = [];

    ngOnInit() {
        this.menuItems = [
          {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
                {
                    label: 'Textos y fechas',
                    icon: 'pi pi-fw pi-align-left',
                    routerLink:'Basic'
                },
                {
                    label: 'Numeros',
                    icon: 'pi pi-fw pi-dollar',
                    routerLink:'Numbers'
                },
                {
                    label: 'No Comunes',
                    icon: 'pi pi-fw pi-globe',
                    routerLink:'unCommon'
                }
            ]
        },
        {
            label: 'Pipes Personalizados',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Left',
                    icon: 'pi pi-fw pi-align-left'
                },
                {
                    label: 'Right',
                    icon: 'pi pi-fw pi-align-right'
                },
                {
                    label: 'Center',
                    icon: 'pi pi-fw pi-align-center'
                },
                {
                    label: 'Justify',
                    icon: 'pi pi-fw pi-align-justify'
                }
            ]
        },
 
        ];
    }


}
