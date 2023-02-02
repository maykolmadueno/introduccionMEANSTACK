import { Component,EventEmitter,Output } from "@angular/core";
import {Post} from "../post.model"
import {NgForm} from "@angular/forms"

@Component({
  templateUrl:'./create-post.component.html',
  selector:'app-create-post',
  styleUrls:['./create-post.component.css']
})
export class CreatePostComponent{
  newPost='';
  inputUser='';
  titulo='';

  @Output() postCreado=new EventEmitter();

  guardarPost(form : NgForm){
    const post: Post={
      titulo: form.value.titulo,
      contenido: form.value.contenido
    };
    this.postCreado.emit(post);
  }
}
