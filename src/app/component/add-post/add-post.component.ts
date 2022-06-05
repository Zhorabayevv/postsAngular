import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
	selector: 'app-add-post',
	templateUrl: './add-post.component.html',
	styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
	@Output() onAddPost: EventEmitter<Task> = new EventEmitter()

	title!: string;
	description!: string;
	constructor() { }

	ngOnInit(): void {
	}

	onSubmit() {
		if (!this.title) {
			alert('Заполните поля!');
			return
		}

		const newPost = {
			title: this.title,
			description: this.description
		}

		this.onAddPost.emit(newPost)

		this.title = '';
		this.description = '';
	}

}
