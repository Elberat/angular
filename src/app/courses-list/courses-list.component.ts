import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/app-interfaces';
import { FilterPipe } from '../pipes/filterPipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  public courses: ICourse[] = [];
  filterPipe = new FilterPipe();

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        title: 'Angular: The Complete Guide',
        creationDate: '2022-08-01T06:05:35',
        duration: 120,
        topRated: true,
        description:
          'This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      },
      {
        id: 2,
        title: 'React: The Complete Guide',
        creationDate: '2023-02-04T06:05:35',
        duration: 100,
        topRated: true,
        description:
          'This course will teach you everything you need to know about React. This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      },
      {
        id: 3,
        title: 'Vue: The Complete Guide',
        creationDate: '2025-02-04T06:05:35',
        duration: 60,
        topRated: false,
        description:
          'This course will teach you everything you need to know about Vue. This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      },
      {
        id: 4,
        title: 'Angular: The Complete Guide',
        creationDate: '2022-02-04T06:05:35',
        duration: 40,
        topRated: true,
        description:
          'This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      },
      {
        id: 5,
        title: 'React: The Complete Guide',
        creationDate: '2019-02-04T06:05:35',
        duration: 10,
        topRated: true,
        description:
          'This course will teach you everything you need to know about React. This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      },
      {
        id: 6,
        title: 'Vue: The Complete Guide',
        creationDate: '2017-02-04T06:05:35',
        duration: 300,
        topRated: false,
        description:
          'This course will teach you everything you need to know about Vue. This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      },
    ];
  }
}
