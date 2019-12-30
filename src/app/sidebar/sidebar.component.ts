import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar-navigation',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})



export class SideBarNavigation {
    @Output() sidebar_state_change: EventEmitter<boolean> = new EventEmitter();
    public sidebar_expanded: boolean = false;
    
    sidebarClick() {
      console.log('sidebar clicked is called');
        this.sidebar_expanded = !this.sidebar_expanded;
        this.sidebar_state_change.emit(this.sidebar_expanded);
    }

}