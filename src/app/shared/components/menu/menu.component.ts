import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'share-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

    ngOnInit() {
        this.menuItems = [
            {
              label: 'Pipes de Angular',
              icon: 'pi pi-desktop',
              items: [
                {
                  label: 'Textos y Fechas',
                  icon: 'pi pi-align-left',
                  items:[
                    {label: 'Entrar', icon: 'pi pi-align-left', routerLink: ''}
                  ]
                },
                {
                  label: 'Números',
                  icon: 'pi pi-dollar',
                  routerLink: '/numbers'
                },
                {
                  label: 'No comunes',
                  icon: 'pi pi-globe',
                  routerLink: '/uncommon'
                }
              ]
            },
            {
              label: 'Pipes personalizados',
              icon: 'pi pi-cog',
              items: [
                {
                  label: 'Otro elemento',
                  icon: 'pi pi-cog'
                }
              ]
            }
        ];
    }

}