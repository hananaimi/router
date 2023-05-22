import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { SignupComponent } from "./signup/signup.component";
import { UserComponent } from "./user/user.component";
import { MenuComponent } from "./menu/menu.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";




const ROUTES: Routes = [
    // {
    //     path: 'home', component: HomeComponent
    // },
    // {
    //     path: 'contact', component: ContactComponent
    // },
    {
        path: 'menu', component: MenuComponent
    },

    {
        path: 'signup', component: SignupComponent
    },
    {
        path: 'user', component: UserProfileComponent
    },

]
export { ROUTES };