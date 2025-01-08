import { Component } from '@angular/core';
import { PostService } from '../../../Services/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-post',
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      image: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const postData = new FormData();
      postData.append('title', this.postForm.value.title);
      postData.append('image', this.postForm.value.image);

      this.postService.createPost(postData).subscribe(response => {
        console.log('Post creado:', response);
      });
    }
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.postForm.patchValue({ image: file });
    }
  }
}
