import { Injectable } from '@angular/core';
import { ICourse } from '../types/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private coursesList: ICourse[] = [
    {
      id: 1,
      title: 'Angular: The Complete Guide',
      creationDate: new Date(2022, 7, 9),
      duration: 120,
      topRated: true,
      description:
        'This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      author: 'vladilen minin',
    },
    {
      id: 2,
      title: 'React: The Complete Guide',
      creationDate: new Date(2022, 12, 8),
      duration: 100,
      topRated: true,
      description:
        'This course will teach you everything you need to know about React. This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      author: 'vladilen minin',
    },
    {
      id: 3,
      title: 'Vue: The Complete Guide',
      creationDate: new Date(2018, 7, 12),
      duration: 60,
      topRated: false,
      description:
        'This course will teach you everything you need to know about Vue. This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      author: 'vladilen minin',
    },
    {
      id: 4,
      title: 'Angular: The Complete Guide',
      creationDate: new Date(2025, 11, 23),
      duration: 40,
      topRated: true,
      description:
        'This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      author: 'vladilen minin',
    },
    {
      id: 5,
      title: 'React: The Complete Guide',
      creationDate: new Date(2025, 9, 9),
      duration: 10,
      topRated: true,
      description:
        'This course will teach you everything you need to know about React. This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      author: 'vladilen minin',
    },
    {
      id: 6,
      title: 'Vue: The Complete Guide',
      creationDate: new Date(2022, 6, 6),
      duration: 300,
      topRated: false,
      description:
        'This course will teach you everything you need to know about Vue. This course will teach you everything you need to know about Angular. It will give you a solid foundation for building applications with Angular. You will learn about dependency injection, forms, routing, templates, data binding, animations, change detection, and more.',
      author: 'vladilen minin',
    },
  ];

  public getList(): ICourse[] {
    return this.coursesList;
  }

  public getItemById(id: number): ICourse {
    const itemToReturn = this.coursesList.find((course) => course.id === id);
    return itemToReturn
      ? itemToReturn
      : {
          id: Date.now(),
          title: '',
          author: '',
          description: '',
          duration: 0,
          creationDate: new Date(),
          topRated: true,
        };
  }

  public removeItem(id: number): void {
    this.coursesList = this.coursesList.filter((course) => course.id !== id);
  }

  public updateItem(item: ICourse): void {
    // this.coursesList[item.id + 1] = item;
  }

  public createCourse(item: ICourse): void {
    this.coursesList.push(item);
  }
}
