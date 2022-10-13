import BestInBeauty from "./LandingPage/BestInBeauty"
import BrandDays from "./LandingPage/BrandDays"
import { Carousel } from "./LandingPage/Carousel"
import CategoriesOnFocus from "./LandingPage/CategoriesOnFocus"
import { Check } from "./chekc"
import ExploreBeauty from "./LandingPage/ExploreBeauty"
import { HealthSlider } from "./LandingPage/HealthSlider"
import { LimitedTimeDeals } from "./LandingPage/LimitedTimeDeals"
import NewOnNetmeds from "./LandingPage/NewOnNetmeds"
import { PaymentsPartner } from "./LandingPage/PaymentsPartner"
import PersonalCare from "./LandingPage/PersonalCare"
import PreviousAndBeauty from "./LandingPage/PreviousAndBeauty"
import ShopByCategory from "./LandingPage/ShopByCategory"
import { ThreeCategory } from "./LandingPage/ThreeCategory"
import TopBrands from "./LandingPage/TopBrands"
import TrendingToday from "./LandingPage/TrendingToday"
import MensGrooming from "./LandingPage/MensGrooming"
import HealthConcern from "./LandingPage/HealthConcern"
import HealthLibrary from "./LandingPage/HealthLibrary"
import { AboutSome } from "./LandingPage/AboutSome"
import { FirstMembership } from "./LandingPage/FirstMembership"
import { OnlineDoctorConsultants } from "./LandingPage/OnlineDoctorConsultants"
import { Subscribe } from "./LandingPage/Subscribe"

export const Landing = () => {
    return <>
    <Carousel/>
    <ThreeCategory/>
    <PaymentsPartner/>
    <PreviousAndBeauty/>
    <TrendingToday/>
    <LimitedTimeDeals/>
    <BrandDays/>
    <ShopByCategory/>
    <NewOnNetmeds/>
    <TopBrands/>
    <FirstMembership/>
    <CategoriesOnFocus/>
    <ExploreBeauty/>
    <OnlineDoctorConsultants/>
    {/* <BestInBeauty/>
    <PersonalCare/>
    <MensGrooming/>
    <Subscribe/>
    <HealthConcern/>
    <HealthLibrary/>
    <AboutSome/> */}
    {/* <Check buttons={false} width={400}/> */}
    </>
}