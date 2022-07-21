import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/app-interfaces';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  public courses: ICourse[] = [];

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        title: 'Angular: The Complete Guide',
        creationDate: 'Jan 01 2021',
        duration: 120,
        description:
          'This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      },
      {
        id: 2,
        title: 'React: The Complete Guide',
        creationDate: 'Now 23 2012',
        duration: 120,
        description:
          'This course will teach you everything you need to know about React. This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      },
      {
        id: 3,
        title: 'Vue: The Complete Guide',
        creationDate: 'Sep 09 2020',
        duration: 120,
        description:
          'This course will teach you everything you need to know about Vue. This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      },
      {
        id: 4,
        title: 'Angular: The Complete Guide',
        creationDate: 'Feb 28 2023',
        duration: 120,
        description:
          'This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      },
      {
        id: 5,
        title: 'React: The Complete Guide',
        creationDate: 'Mar 08 2025',
        duration: 120,
        description:
          'This course will teach you everything you need to know about React. This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      },
      {
        id: 6,
        title: 'Vue: The Complete Guide',
        creationDate: 'Apr 01 2019',
        duration: 120,
        description:
          'This course will teach you everything you need to know about Vue. This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      },
    ];
  }
}
