import { Injectable } from '@angular/core';
import { UserModel } from './user-model';

@Injectable()
export class RemoteAPIService {
  users: Array<UserModel> = [
    new UserModel('test@test.pl', 'Password1', false),
  ];
  messages = {
    'fail': "Random server error. :) Please try again.",
    'ok': "Login successful",
    'deny': "Invalid email and/or password",
  };

  getResponse(type: String) {
    switch (type) {
      case 'ok': return { result: this.messages['ok'], status: 200 };
      case 'fail': return { result: this.messages['fail'], status: 500 };
      case 'deny': return { result: this.messages['deny'], status: 403 };
    }
  }

  authenticate(formData: UserModel): Promise<JSON> {
    return new Promise((resolve, reject) => {
      const shouldFail = Math.random() > 0.8;
      const user = this.users.find(user => user.is(formData));

      if (shouldFail) {
        setTimeout(() => reject(this.getResponse('fail')), 1000);
      } else if (user) {
        setTimeout(() => resolve(this.getResponse('ok')), 3000);
      } else {
        setTimeout(() => resolve(this.getResponse('deny')), 2500);
      }
    });
  }
}
