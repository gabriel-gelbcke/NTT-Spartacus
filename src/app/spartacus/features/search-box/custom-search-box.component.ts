import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  Optional,
} from '@angular/core';
import { SearchboxService, RoutingService, TranslationService, WindowRef, EventService, CmsSearchBoxComponent } from '@spartacus/core';


import { CmsComponentData, ICON_TYPE, SearchBoxComponent, SearchBoxComponentService } from '@spartacus/storefront';

// const DEFAULT_SEARCH_BOX_CONFIG: SearchBoxConfig = {
//   minCharactersBeforeRequest: 1,
//   displayProducts: true,
//   displaySuggestions: true,
//   maxProducts: 5,
//   maxSuggestions: 5,
//   displayProductImages: true,
// };

@Component({
  selector: 'cx-searchbox',
  templateUrl: './custom-search-box.component.html',
  styleUrls: ['custom-search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSearchBoxComponent extends SearchBoxComponent {

  constructor(
    searchBoxComponentService: SearchBoxComponentService,
    componentData: CmsComponentData<CmsSearchBoxComponent>,
    routingService: RoutingService,
    winRef: WindowRef
  ) {
    super(searchBoxComponentService, componentData, winRef, routingService)
    // super(searchService, routingService, translationService, winRef, eventService)
  }
}
