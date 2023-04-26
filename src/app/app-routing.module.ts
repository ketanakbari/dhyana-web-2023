import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { HomeDemoFiveComponent } from './components/pages/home-demo-five/home-demo-five.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoSixComponent } from './components/pages/home-demo-six/home-demo-six.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ServicesDetailsPageComponent } from './components/pages/services-details-page/services-details-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { WorkDetailsPageComponent } from './components/pages/work-details-page/work-details-page.component';
import { WorkStyleOnePageComponent } from './components/pages/work-style-one-page/work-style-one-page.component';
import { WorkStyleThreePageComponent } from './components/pages/work-style-three-page/work-style-three-page.component';
import { WorkStyleTwoPageComponent } from './components/pages/work-style-two-page/work-style-two-page.component';

const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},
    {path: 'index-2', component: HomeDemoTwoComponent},
    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'index-4', component: HomeDemoFourComponent},
    {path: 'index-5', component: HomeDemoFiveComponent},
    {path: 'index-6', component: HomeDemoSixComponent},
    {path: 'about-us', component: AboutPageComponent},
    {path: 'services', component: ServicesDetailsPageComponent},
    {path: 'more-services', component: ServicesPageComponent},
    {path: 'work-style-1', component: WorkStyleOnePageComponent},
    {path: 'work-style-2', component: WorkStyleTwoPageComponent},
    {path: 'work-style-3', component: WorkStyleThreePageComponent},
    {path: 'work-details', component: WorkDetailsPageComponent},
    {path: 'blog', component: BlogPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'team', component: TeamPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'contact', component: ContactPageComponent},
    // Here add new pages component

    {path: '**', component: NotFoundPageComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }