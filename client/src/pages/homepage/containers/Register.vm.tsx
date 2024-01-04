import { action, makeObservable, observable } from "mobx";

// In a View Model, all of our outside dependencies are injected

export class RegisterViewModel {
    @observable username: string = '';
    @observable password: string = '';
    @observable country: string = '';
    @observable language: string = '';
    @observable email: string = '';
    @observable passwordsMatch: boolean = true;
    @observable confirmedPassword: string = '';

    constructor() {
        makeObservable(this);
    }


    @action setUsername(username: string) {
        this.username = username;
    }

    @action setPassword(password: string) {
        this.password = password;
        if (this.confirmedPassword) this.passwordsMatch = this.password === this.confirmedPassword;
    }

    @action setCountry(country: string) {
        this.country = country;
    }

    @action setLanguage(language: string) {
        this.language = language;
    }

    @action setEmail(email: string) {
        this.email = email;
    }

    @action register() {
        console.log('Clicked!');
    }

    @action confirmPassword(password: string) {
        this.confirmedPassword = password;
        this.passwordsMatch = this.password === password;
    }
}