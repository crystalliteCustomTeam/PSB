import React from 'react'
import { Header, Hero, Logos, OurCaseStudy, PublishingServices, SatisfiedClient, ProcessSteps, ChooseOur, BookPublished, Faqs } from '@/component/ChildrenBooklp'

const ChildrenBookServicesLP = () => {
    const faqsContent = [
        ["How Can Book Marketing Benefit My Author Career?", "Our Services Include Everything From Ghostwriting To Editing And Publishing Assistance. Whether You Need Help Crafting A Compelling Storyline Or Want To Polish Your Manuscript, Our Team Of Experienced Individuals Is Here To Help."],
        [<>Is Social Media Essential For Book Marketing, And Which <br className='mr-2xl:block hidden' /> Platforms Are Most Effective?</>, "Top trends in children's book illustration emphasize diversity, inclusivity, multiculturalism, sustainability, and technology. These trends reflect the evolving landscape of children's literature, prioritizing representation and educational value."],
        [<>What Is SEO Book Marketing, And Why Is It Important <br className='mr-2xl:block hidden' />For Authors?</>, "Picture books are vital for developing children's literacy skills—the blend of illustrations and text aids in building comprehension, fluency, and vocabulary. Visuals bring the story to life, guiding young readers through the narrative and making reading engaging and accessible, fostering a love for learning."],
        ["What Is The Purpose Of Book Marketing Services?", "There are four approaches to illustration: Narrative, Decorative, Informative, and Conceptual. Understanding these methods allows students to broaden their horizons, expand possibilities, and increase their chances for success."]
    ];
    return (
        <>
            <Header />
            <Hero />
            <Logos />
            <OurCaseStudy />
            <PublishingServices />
            <SatisfiedClient />
            <ProcessSteps />
            <ChooseOur />
            <BookPublished />
            <Faqs items={faqsContent} />
        </>
    )
}

export default ChildrenBookServicesLP
