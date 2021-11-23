import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorytype } from './model/Category' 


interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category[] = [
    {value: 'category-0', viewValue: 'Steak'},
    {value: 'category-1', viewValue: 'Pizza'},
    {value: 'category-2', viewValue: 'Tacos'},
  ];

  ngOnInit(): void {

  }
}
