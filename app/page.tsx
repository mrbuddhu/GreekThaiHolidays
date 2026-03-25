import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { GallerySection } from '@/components/GallerySection'
import { PartnersSection } from '@/components/PartnersSection'
import { ExperiencesSection } from '@/components/ExperiencesSection'
import { StoriesSection } from '@/components/StoriesSection'
import { PackagesSection } from '@/components/PackagesSection'
import { ActivitiesSection } from '@/components/ActivitiesSection'
import { AudienceSection } from '@/components/AudienceSection'
import { RestaurantSection } from '@/components/RestaurantSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white text-foreground">
      <Header />
      <Hero />
      <GallerySection />
      <ExperiencesSection />
      <StoriesSection />
      <PackagesSection />
      <ActivitiesSection />
      <AudienceSection />
      <RestaurantSection />
      <PartnersSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  )
}
