import {Component, Input} from '@angular/core';
import {RemoteAPIService} from './remote-api.service';

@Component({
  selector: 'validation-control',
  template: `
  <div class="validation-control">
    <span class="glyphicon glyphicon-remove form-control-feedback text-danger"
      *ngIf="(currentErrors[field.name].length > 0)"></span>
    <span class="glyphicon glyphicon-ok form-control-feedback text-success"
      *ngIf="field.dirty && currentErrors[field.name].length === 0"></span>
  </div>
  <span class="help-block text-danger">{{ currentErrors[field.name] || "&nbsp;" }}</span>
  `,
  providers: [RemoteAPIService]
})
export class ValidationControlComponent {
  @Input() currentErrors: Object;
  @Input() field: any;
}
