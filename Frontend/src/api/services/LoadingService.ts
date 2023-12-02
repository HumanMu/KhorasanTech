import { BehaviorSubject } from "rxjs";

export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  setLoading(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }

  public startLoading() {
    console.log("START LOADING");
    this.setLoading(true);
  }

  stopLoading() {
    console.log("STOP LOADING");
    this.setLoading(false);
  }

  async wrapRequest<T>(request: () => Promise<T>) {
    this.startLoading();

    try {
      const response = await request();
      this.stopLoading();
      return response;
    } catch (error) {
      this.stopLoading();
      throw error;
    }
  }
}
