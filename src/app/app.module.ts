import { NgModule } from '@angular/core';
import { AccordionModule } from "ngx-accordion";
import { StickyNavModule } from 'ng2-sticky-nav';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { HomeDemoFiveComponent } from './components/pages/home-demo-five/home-demo-five.component';
import { HomeDemoSixComponent } from './components/pages/home-demo-six/home-demo-six.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { GetStartedComponent } from './components/common/get-started/get-started.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { RelatedBlogComponent } from './components/pages/blog-details-page/related-blog/related-blog.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { HomethreeBannerComponent } from './components/pages/home-demo-three/homethree-banner/homethree-banner.component';
import { HomefourBannerComponent } from './components/pages/home-demo-four/homefour-banner/homefour-banner.component';
import { HomefiveBannerComponent } from './components/pages/home-demo-five/homefive-banner/homefive-banner.component';
import { HomesixBannerComponent } from './components/pages/home-demo-six/homesix-banner/homesix-banner.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { HomeoneAboutComponent } from './components/pages/home-demo-one/homeone-about/homeone-about.component';
import { PartnersComponent } from './components/common/partners/partners.component';
import { ServicesComponent } from './components/common/services/services.component';
import { WorkProcessComponent } from './components/common/work-process/work-process.component';
import { CaseStudiesComponent } from './components/common/case-studies/case-studies.component';
import { TeamComponent } from './components/common/team/team.component';
import { HometwoAboutComponent } from './components/pages/home-demo-two/hometwo-about/hometwo-about.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { HomethreeAboutComponent } from './components/pages/home-demo-three/homethree-about/homethree-about.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { GetReportComponent } from './components/common/get-report/get-report.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { HomefourAboutComponent } from './components/pages/home-demo-four/homefour-about/homefour-about.component';
import { VideoComponent } from './components/common/video/video.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { PricingComponent } from './components/common/pricing/pricing.component';
import { ConsultationFormComponent } from './components/common/consultation-form/consultation-form.component';
import { CyberSafetyComponent } from './components/common/cyber-safety/cyber-safety.component';
import { HomefiveAboutComponent } from './components/pages/home-demo-five/homefive-about/homefive-about.component';
import { BuyTokensComponent } from './components/common/buy-tokens/buy-tokens.component';
import { OurPlatformsComponent } from './components/common/our-platforms/our-platforms.component';
import { TokenDistributionComponent } from './components/common/token-distribution/token-distribution.component';
import { CryptocurrencyInvestReasonsComponent } from './components/common/cryptocurrency-invest-reasons/cryptocurrency-invest-reasons.component';
import { RoadmapComponent } from './components/common/roadmap/roadmap.component';
import { MobileAppComponent } from './components/common/mobile-app/mobile-app.component';
import { HomefiveContactComponent } from './components/pages/home-demo-five/homefive-contact/homefive-contact.component';
import { HomesixAboutComponent } from './components/pages/home-demo-six/homesix-about/homesix-about.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { PricingCompareComponent } from './components/common/pricing-compare/pricing-compare.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { HomesixContactComponent } from './components/pages/home-demo-six/homesix-contact/homesix-contact.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { AwardsComponent } from './components/common/awards/awards.component';
import { ServicesDetailsPageComponent } from './components/pages/services-details-page/services-details-page.component';
import { HowWeWorksComponent } from './components/common/how-we-works/how-we-works.component';
import { LetsTalkComponent } from './components/pages/services-details-page/lets-talk/lets-talk.component';
import { WorkDetailsPageComponent } from './components/pages/work-details-page/work-details-page.component';
import { WorkStyleOnePageComponent } from './components/pages/work-style-one-page/work-style-one-page.component';
import { WorkStyleTwoPageComponent } from './components/pages/work-style-two-page/work-style-two-page.component';
import { WorkStyleThreePageComponent } from './components/pages/work-style-three-page/work-style-three-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeDemoOneComponent,
        HomeDemoTwoComponent,
        HomeDemoThreeComponent,
        HomeDemoFourComponent,
        HomeDemoFiveComponent,
        HomeDemoSixComponent,
        FooterComponent,
        GetStartedComponent,
        BlogComponent,
        BlogDetailsPageComponent,
        RelatedBlogComponent,
        HomeoneBannerComponent,
        NavbarComponent,
        HometwoBannerComponent,
        HomethreeBannerComponent,
        HomefourBannerComponent,
        HomefiveBannerComponent,
        HomesixBannerComponent,
        FeaturesComponent,
        HomeoneAboutComponent,
        PartnersComponent,
        ServicesComponent,
        WorkProcessComponent,
        CaseStudiesComponent,
        TeamComponent,
        HometwoAboutComponent,
        FeedbackComponent,
        HomethreeAboutComponent,
        FunfactsComponent,
        GetReportComponent,
        SubscribeComponent,
        HomefourAboutComponent,
        VideoComponent,
        WhyChooseUsComponent,
        PricingComponent,
        ConsultationFormComponent,
        CyberSafetyComponent,
        HomefiveAboutComponent,
        BuyTokensComponent,
        OurPlatformsComponent,
        TokenDistributionComponent,
        CryptocurrencyInvestReasonsComponent,
        RoadmapComponent,
        MobileAppComponent,
        HomefiveContactComponent,
        HomesixAboutComponent,
        ContactPageComponent,
        NotFoundPageComponent,
        TeamPageComponent,
        PricingPageComponent,
        PricingCompareComponent,
        FaqComponent,
        BlogPageComponent,
        HomesixContactComponent,
        AboutPageComponent,
        AwardsComponent,
        ServicesDetailsPageComponent,
        HowWeWorksComponent,
        LetsTalkComponent,
        WorkDetailsPageComponent,
        WorkStyleOnePageComponent,
        WorkStyleTwoPageComponent,
        WorkStyleThreePageComponent,
        PrivacyPolicyPageComponent,
        TermsConditionsPageComponent,
        ServicesPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgxScrollTopModule,
        StickyNavModule,
        CarouselModule,
        NgxSimpleCountdownModule,
        AccordionModule,
        NgxSmartModalModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }