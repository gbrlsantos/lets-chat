import { makeObservable, observable } from "mobx";

export class HomepageViewModel {
    @observable showRegisterForm: boolean = false;

    constructor() {
        makeObservable(this);
    }

    setShowRegisterForm(showRegisterForm: boolean) {
        this.showRegisterForm = showRegisterForm;
    }
}