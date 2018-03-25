import { Component, OnInit } from '@angular/core';

import { NoteService } from '../note.service';

import { Note } from '../note-model';

import { Observable } from 'rxjs/Observable';
import { NotifyService } from '../../core/notify.service';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {

  notes: Observable<Note[]>;
  content: string;
  location: string;
  edate: string;
  etime: string;
  description: string;
  registration: string;

  constructor(private noteService: NoteService, private notify: NotifyService) { }

  ngOnInit() {
    // this.notes = this.noteService.getData()
    this.notes = this.noteService.getSnapshot();
  }

  createNote() {
    this.noteService.create(this.content, this.location, this.edate, this.etime, this.description, this.registration);
    this.content = '';
	this.location = '';
	this.edate = '';
	this.etime = '';
	this.description = '';
	this.registration = '';
	this.notify.update('Event SuccessFully Added !!!', 'success');
  }

}
