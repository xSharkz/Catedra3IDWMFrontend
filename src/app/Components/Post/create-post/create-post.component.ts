import { Component } from '@angular/core';
import { PostService } from '../../../Services/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastService } from '../../../Services/toast.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-post',
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  postForm: FormGroup;
  previewImage: string | ArrayBuffer | null = null;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private postService: PostService, private toastService: ToastService, private router: Router) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required,Validators.minLength(5)]],
      image: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const postData = new FormData();
      postData.append('title', this.postForm.value.title);
      postData.append('image', this.postForm.value.image);

      this.postService.createPost(postData).subscribe(
        () => {
          this.toastService.show('¡Post creado con éxito!');
          this.router.navigate(['/posts']);
        },
        (error) => {
          this.errorMessage =
            error.error.message || 'Ocurrió un error al crear el post.';
          this.toastService.show(this.errorMessage);
          this.postForm.patchValue({ image: null });
          this.previewImage = null;
        }
      );
    }
  }
  

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const validFormats = ['image/jpeg', 'image/png', 'image/jpg'];
      const maxSize = 5 * 1024 * 1024;

      if (!validFormats.includes(file.type)) {
        this.errorMessage = 'El formato de la imagen no es válido. Usa JPEG o PNG.';
        this.toastService.show(this.errorMessage);
        return;
      }
      if (file.size > maxSize) {
        this.errorMessage = 'El tamaño de la imagen no debe exceder 5 MB.';
        this.toastService.show(this.errorMessage);
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result;
      };
      reader.readAsDataURL(file);

      this.postForm.patchValue({ image: file });

    }
  }
}
