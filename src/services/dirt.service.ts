import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Dirt } from 'src/model/common';

@Injectable({
  providedIn: 'root'
})

export class DirtService {
	private _dirt = new Subject<Dirt>();
	public dirt$ = this._dirt.asObservable();

	public updateDirt(input: Dirt){
		this._dirt.next(input);
	}
  constructor() { }
}
