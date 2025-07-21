import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProgramOverview from '@/components/ProgramOverview';
import CurrentCandidates from '@/components/CurrentCandidates';
import MeetLastYearDelegates from '@/components/MeetLastYearDelegates';
import SuccessStories from '@/components/SuccessStories';
import YouthDelegateSpeeches from '@/components/YouthDelegateSpeeches';
import SocialMediaHub from '@/components/SocialMediaHub';
import Preparation2026 from '@/components/Preparation2026';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProgramOverview />
      <CurrentCandidates />
      <MeetLastYearDelegates />
      <SuccessStories />
      <YouthDelegateSpeeches />
      <SocialMediaHub />
      <Preparation2026 />
      <Footer />
    </main>
  );
}
