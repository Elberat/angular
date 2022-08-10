import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, Subscription } from 'rxjs';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-app';
  public isLoading: boolean = false;
  private subscription: Subscription;

  constructor(private spinnerService: SpinnerService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = this.spinnerService.isLoading
      .pipe(debounceTime(50))
      .subscribe((value) => {
        this.isLoading = value;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
