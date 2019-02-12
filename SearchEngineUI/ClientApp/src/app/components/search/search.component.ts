import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  templateUrl: './search.component.html',
  selector: 'app-search-component'
})

export class SearchComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'unicorn',
      sanitizer.bypassSecurityTrustResourceUrl('assets/iconfinder_unicorn_339893.svg'));
  }
  onEnter(value: string) {}
}
