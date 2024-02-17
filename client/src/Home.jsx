import Navbar from './component/Navbar';
import Hero from "./component/Hero";
import ModelSection from './component/ModelSection';
import Contact from './component/Contact';
import Testimonial from './component/Testimonial';

const Home = () => {


    return (
        <main className="mx-2 md:mx-4 lg:mx-16">
            <Navbar />

            <Hero />

            <ModelSection />

            <Testimonial />

            <Contact />
        </main>
    )
}

export default Home