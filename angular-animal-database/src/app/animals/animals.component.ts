import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnInit
} from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector : 'animals',
  templateUrl : './animals.component.html',
  styleUrls : ['./animals.component.css']
})

export class AnimalsComponent implements OnInit {

  @Input() animals : Animal[];
  @Output() onAnimalSelected : EventEmitter<Animal>;

  private currentAnimal : Animal;

  constructor() {
    this.onAnimalSelected = new EventEmitter();
  }

  ngOnInit() { }

  onChange( animal : Animal ) : void {
    this.currentAnimal = animal;
    this.onAnimalSelected.emit( animal );
  }

  isSelected( animal : Animal ) : boolean {
    if ( !animal || !this.currentAnimal ) {
      return false;
    }
    return animal.name === this.currentAnimal.name;
  }
}