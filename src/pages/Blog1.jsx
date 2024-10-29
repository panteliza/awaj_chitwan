import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog1 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        {/* Blog Content */}
        <article className="prose lg:prose-xl mx-auto p-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Breaking Barriers: Embracing Open Conversations About Menstruation</h1>
          <img
            src="your-image-url.jpg"
            alt="Breaking Barriers"
            className="w-full h-auto rounded-lg mb-4"
          />
          <p className="text-lg lg:text-xl">
            In a world where open conversations about menstruation have often
            been shrouded in silence and secrecy, it's time to break free from
            the confines of discomfort and shyness. Menstruation is a natural
            and essential aspect of human life, and discussing it openly is not
            just necessary, but liberating.
          </p>

          <p className="text-lg lg:text-xl">
            For too long, societal taboos have prevented people from talking
            freely about menstruation. This lack of open dialogue has led to
            misinformation, shame, and even discrimination. It's time to change
            that narrative and create an environment where menstruation is
            celebrated as a normal part of life.
          </p>

          <p className="text-lg lg:text-xl">
            Breaking the barriers of silence surrounding menstruation requires
            education, empathy, and understanding. It's essential to provide
            accurate information about menstruation to both girls and boys from
            a young age, fostering a sense of normalcy and inclusivity.
          </p>

          <p className="text-lg lg:text-xl">
            Embracing open conversations about menstruation is not just about
            breaking the silence; it's also about empowering individuals to
            make informed choices about their health and well-being. When
            people are well-informed about menstruation, they can better
            manage their menstrual health and feel more confident and
            comfortable in their bodies.
          </p>

          <p className="text-lg lg:text-xl">
            Let's join the movement to break the barriers of silence and stigma
            surrounding menstruation. It's time to embrace open conversations,
            educate ourselves and others, and create a world where menstruation
            is no longer a taboo topic but a celebrated and understood aspect
            of human life.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Blog1;
