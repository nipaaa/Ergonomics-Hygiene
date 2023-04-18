import React from 'react';
import fullertone from '../../public/accomodation/fullertone.png';
import sultan from '../../public/accomodation/sultan.png';
import ascott from '../../public/accomodation/ascott.png';
import AccomodationCard from './AccomodationCard';

const Accomodation = () => {
    const accomodations = [
        {
            pic:fullertone,
            blueTitle:"The Fullerton hotel",
            content1:"Located in the Central Business District, The Fullerton Hotel Singapore is a 5-minute drive from Clarke Quay and Boat Quay. It features a spa, infinity pool and a fitness center.",
            content2:"The Fullerton Hotel Singapore is a 25-minute drive from Changi International Airport. Raffles Place MRT Station is a short 5-minute walk from the hotel.",
            specialContent:"*Preferential rate for delegates available, contact us for more information.",
        },
        {
            pic:sultan,
            title:"The Sultan",
            content1:"With just 60 unique rooms crafted from our collection of iconic early-1900s shophouses such as the old Al-Ahmadiah Press Building, step back in time with The Sultan, to experience the rich soul of Kampong Glam.",
            content2:"Wander through our historic neighborhood with calls-to-prayer from the iconic Sultan Mosque as your background soundtrack. Go on a culinary adventure with recommendations from our concierge. Retreat to our restful sanctuary for the perfect end to the perfect day. ",
        },
        {
            pic:ascott,
            title:"Ascott Raffles Place Singapore",
            content1:"Nestled in the heart of the Central Business District, the serviced residence is closely connected to an array of business, cultural, and entertainment attractions. Find yourself located immediately in a bustling, fast-paced business hub by day, and a vibrant nightlife spot once the sunsets.",
            content2:"If you are looking for iconic Singaporean monuments, Merlion Park is a short stroll away from the residence. The park features the mythical symbol, a fish and lion hybrid that has gained international recognition as one of the city’s unofficial mascots.",
        },
    ]
    return (
        <div className='section_gap container'>
            <div className='text-center accomodation_main_title'>
            <p>31 Aug - 01 Sept 2022</p>
            <p>The Fullerton Hotel Singapore</p>
            </div>
            {
                accomodations.map((accomodation,index)=><AccomodationCard
                key={index} index={index}
                accomodation={accomodation}></AccomodationCard>)
            }
      
        </div>
    );
};

export default Accomodation;