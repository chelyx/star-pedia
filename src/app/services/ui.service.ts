import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  showingDetails = new BehaviorSubject<boolean>(false);

  getShowingDetails() {
    return this.showingDetails.asObservable();
  }

  setShowingDetails(value: boolean) {
    return this.showingDetails.next(value);
  }
}
