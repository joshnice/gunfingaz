import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar-navigation',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SideBarNavigation {

    @Output() sidebar_state_change: EventEmitter<boolean> = new EventEmitter();
    public sidebar_expanded: boolean = false;
    public background_colour: string = 'transparent';
    

    public sidebarClick() {
        this.sidebar_expanded = !this.sidebar_expanded;
        this.sidebar_state_change.emit(this.sidebar_expanded);
        this.checkBackgroundColour();
    }

    private checkBackgroundColour() {
      this.sidebar_expanded ? this.background_colour = 'black' : this.background_colour = 'transparent';
    }
}
