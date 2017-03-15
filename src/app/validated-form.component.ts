import {Component, Input, ViewChild} from '@angular/core';
import {UserModel} from './user-model';
import {RemoteAPIService} from './remote-api.service';
import {NgForm} from "@angular/forms";
import errorMessages from './error-messages';

@Component({
  selector: 'validated-form',
  templateUrl: './validated-form.component.html',
  providers: [RemoteAPIService]
})
export class ValidatedFormComponent {
  @Input() user: UserModel = new UserModel('', '', false);
  @ViewChild('userForm') viewForm: NgForm;
  userForm: NgForm;
  sending: boolean = false;
  response: any = null;
  currentErrors = {
    email: '',
    password: '',
  };

  constructor(private api: RemoteAPIService) {}

  ngAfterViewChecked() {
    this.onFormChange();
  }

  onFormChange() {
    if (this.userForm === this.viewForm) return;
    this.userForm = this.viewForm;
    if (this.userForm) {
      this.userForm.valueChanges.subscribe(this.onValueChange);
    }
  }

  onValueChange = () => {
    if (!this.userForm) return;
    const form = this.userForm.form;
    for (const field in this.currentErrors) {
      this.currentErrors[field] = '';
      const input = form.get(field);

      if (!input || input.pristine || input.valid) continue;
      const fieldMessages = errorMessages[field];
      this.currentErrors[field] = Object
        .keys(input.errors)
        .map(errorType => fieldMessages[errorType])
        .join('; ');
    }
  };

  onSubmit() {
    this.sending = true;
    this.api.authenticate(this.user)
      .catch(response => response)
      .then(response => {
        this.response = response;
        return response;
      })
      .then(() => {
        this.sending = false
      });
  }

  onReset() {
    this.sending = false;
    this.response = false;
  }
}
