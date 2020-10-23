import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],

  providers: [
    CategoryService
  ]
})

export class CategoryComponent implements OnInit {
  categories: Category[]
  selectedCategory: Category

  constructor (private categoryService: CategoryService) {}

  ngOnInit () {
    this.categoryService.getAllCategorys().subscribe((categories: Category[]) => {
      this.categories = categories
    })
  }

  private getIndex = (categoryId: String) => {
    return this.categories.findIndex((category: Category) => {
      return category._id === categoryId
    })
  }

  selectCategory (category: Category) {
    this.selectedCategory = category
  }

  createCategory = (category: Category) => {
    this.categories.push(category)
    this.selectCategory(category)
    return this.categories
  }

  createNewCategory () {
    let category: Category = {
      urlImg: '',
      name: ''
    }

    this.selectCategory(category)
  }

  updateCategory = (category: Category) => {
    let idx = this.getIndex(category._id)

    if (idx !== -1) {
      this.categories[idx] = category
      this.selectCategory(category)
    }

    return this.categories
  }

  deleteCategory = (categoryId: String) => {
    let idx = this.getIndex(categoryId)
    if (idx !== -1) {
      this.categories.splice(idx, 1)
      this.selectCategory(null)
    }

    return this.categories
  }
}

