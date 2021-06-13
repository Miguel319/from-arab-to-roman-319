import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RomanService } from 'src/app/services/roman.service';

@Component({
  selector: 'app-roman',
  templateUrl: './roman.component.html',
  styleUrls: ['./roman.component.scss'],
})
export class RomanComponent implements OnInit {
  romanForm!: FormGroup;

  fromArabTxt: number = 1;
  fromArabAnswer: string = '';
  error: string = '';

  constructor(
    private readonly romanService: RomanService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.onChanges();
  }

  onChanges(): void {
    this.romanForm.valueChanges.subscribe(({ fromArabTxt }) => {
      !fromArabTxt ? (this.fromArabAnswer = '') : undefined;
      this.error = '';
    });
  }

  createForm(): void {
    this.romanForm = this.fb.group({
      fromArabTxt: [1],
    });
  }

  convertToArab(): void {
    this.error = '';

    this.fromArabTxt = this.romanForm.get('fromArabTxt')?.value;

    this.romanService.fromArab(this.fromArabTxt).subscribe(
      (res: string) => (this.fromArabAnswer = res),
      (err) => {
        const error = JSON.parse(err.error);
        console.log(err);

        this.error = error.message;
      }
    );
  }
}
