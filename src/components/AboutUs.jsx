import React from 'react'
import about from '../assets/Images/About.jpg'

const AboutUs = () => {
  return (
    <div className=''>
        <div className="text-base text-justify xs:text-xl w-10/12 md:w-8/12 mx-auto leading-relaxed mt-5">
            <p>Welcome to our sewing and delivery service, where creativity meets convenience. At our core, we believe that every stitch tells a story, and we are passionate about transforming your fabric dreams into reality. Our journey began with a love for textiles and a desire to provide high-quality, personalized sewing solutions that cater to the unique needs of our community.
<br/><br/>
With a team of skilled artisans who have honed their craft over the years, we take pride in our attention to detail and commitment to excellence. Whether you’re looking for custom garments, home décor, or special occasion attire, we approach each project with enthusiasm and a meticulous eye, ensuring that your vision comes to life just as you imagined.
<br/><br/>
Our services extend beyond just sewing; we understand the importance of timely delivery and strive to make the process as seamless as possible. We offer reliable delivery options that ensure your creations reach you when you need them, so you can focus on what matters most.
<br/><br/>
What truly sets us apart is our dedication to building relationships with our clients. We value open communication and collaboration, and we encourage you to share your ideas and inspirations. This partnership allows us to better understand your preferences, ensuring that every piece we create resonates with your personal style.
<br/><br/>
As we continue to grow, we remain committed to sustainability and ethical practices. We source our materials thoughtfully, prioritizing eco-friendly options wherever possible. Our mission is not only to create beautiful items but to do so in a way that respects our planet and the artisans behind our materials.
<br/><br/>
Thank you for choosing us to be a part of your creative journey. We look forward to crafting something special for you, one stitch at a time.</p>
        </div>
        <div className="h-[20rem] md:w-10/12 w-11/12 md:h-[35rem] mx-auto overflow-hidden rounded-xl my-10">
          <img src={about} className='h-full w-full hover:scale-105 transition-all duration-700 object-cover object-center rounded-xl' alt="" />
        </div>
        
    </div>
  )
}

export default AboutUs