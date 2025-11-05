import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NewsService } from '../../../services/news.service';
import { ICreateNews } from '../../../interfaces/news.interface';

@Component({
  selector: 'app-create-news-modal',
  imports: [ReactiveFormsModule],
  providers: [NewsService],
  templateUrl: './create-news-modal.html',
  styleUrl: './create-news-modal.scss',
})
export class CreateNewsModal {
  @Output() eventChangeState = new EventEmitter<boolean>();
  @Output() eventAnswerClose = new EventEmitter<boolean>();

  public dataNews: FormGroup;
  public selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private _newsService: NewsService) {
    this.dataNews = this.fb.group<ICreateNews>({
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
