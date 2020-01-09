import { Component, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'sidebar-navigation',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations : [
    trigger('openClose', [
      state('closed', style({
        width: '30px'
      })),
      state('open', style({
        width: '20vw'
      })),
      transition('closed => open', [
        animate(3000)
      ]),
      transition('open => closed', [
        animate(2000)
      ]),
    ])
  ]
})

export class SideBarNavigation {

    @Output() sidebar_state_change: EventEmitter<boolean> = new EventEmitter();
    public sidebar_expanded: boolean = false;
    public background_colour: string = 'transparent';

    public is_open = false;
    

    public sidebarClick() {
        this.sidebar_expanded = !this.sidebar_expanded;
        this.sidebar_state_change.emit(this.sidebar_expanded);
        this.checkBackgroundColour();
        this.is_open = !this.is_open;
        console.log('is open', this.is_open);
    }

    private checkBackgroundColour() {
      this.sidebar_expanded ? this.background_colour = 'black' : this.background_colour = 'transparent';
    }
}
