import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICardData } from '../../interfaces/card-data.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-create-news-modal',
  templateUrl: './create-news-modal.component.html',
  styleUrl: './create-news-modal.component.scss',
})
export class CreateNewsModalComponent {
  @Output() eventChangeState = new EventEmitter<boolean>();
  @Output() eventAnswerClose = new EventEmitter<boolean>();

  public dataNews: FormGroup;
  public selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private _newsService: NewsService) {
    this.dataNews = this.fb.group<ICardData>({
      text: ['', Validators.required],
      image: [null],
    });
  }

  public onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.selectedFile = file;

      // Обновляем значение в форме
      this.dataNews.patchValue({
        image: file,
      });

      // Обновляем валидацию
      this.dataNews.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.dataNews.valid) {
      const formData: FormData = new FormData();

      formData.append('text', this.dataNews.value.text);

      if (this.selectedFile) {
        formData.append('image', this.selectedFile, this.selectedFile.name);
      }

      this._newsService.savePost(formData);
    }
  }

  public changeState(): void {
    this.eventChangeState.emit(true);
  }

  public answerClose(): void {
    this.eventAnswerClose.emit(true);
  }
}
