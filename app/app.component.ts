import {Component, View} from 'angular2/core';

@Component({
	selector: 'app'
})
@View({
	template: `
    <h2>Angular2</h2>
    <p>hello111 {{test}}</p>
  `
})
export class App1 {
	test: string;

	constructor() {
		this.test = 'world';
	}
}
