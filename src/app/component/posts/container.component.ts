
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
	selector: 'app-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
	@Input() task!: Task
	@Output() onDeletePost: EventEmitter<Task> = new EventEmitter()
	


	// count = 5

	// increment() {
	// 	return this.count = this.count + 1;
	// }
	// decrement() {
	// 	return this.count = this.count - 1;
	// }
	constructor() { }

	ngOnInit(): void {
	}

	onDelete(task: any) {
		this.onDeletePost.emit(task);
	}

	// inputHandler(event: any) {
	// 	const value = event.target.value
	// 	this.title = value
	// }
}
