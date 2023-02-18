import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroesActions } from '../../store';
import { HeroService } from '../../services/hero.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {


  public form: FormGroup = new FormGroup({
    _id: new FormControl(null),
    rating: new FormControl(0),
    user: new FormControl(null),
    name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    description: new FormControl(null, [Validators.maxLength(500)]),
    powers: new FormControl(null, [Validators.required, Validators.maxLength(255)])
  });
  public keywords: string[] = [];
  public readOnly: boolean = false;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { hero: any, readOnly: boolean },
    private dialogRef: MatDialogRef<ProfileComponent>,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.readOnly = this.data.readOnly;
    if (this.readOnly) {
      this.form.disable();
      const hero = this.data.hero;
      const powers = hero.powers.split(',');
      this.keywords = powers;
      this.form.setValue(hero);
    }
  }

  addHero() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const hero = this.form.value;
    hero.powers = this.form.value.powers.join(', ');
    this.store.dispatch(HeroesActions.saveHero({ hero }));
    this.dialogRef.close();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
