const Reviews = () => {
    return (
        <section>
            <div className="py-[80px]">
                <div className="mr-container">
                    <div className="text-center">
                        <h2 className="text-[50px] leading-tight font-semibold text-black">Writing Reviews</h2>
                        <span className="text-xl block text-primary-100 my-3">By Best Selling Publishers</span>
                        <p className="text-base leading-normal font-normal w-[55%] mx-auto">We will strategically promote your books online to optimize sales and secure the well-deserved <br /> exposure your work deserves. We will strategically promote your books online</p>
                    </div>
                    <div className="grid grid-cols-12 items-center mt-20">
                        <div className="col-span-5">
                            <div className="relative z-20">
                                <iframe className="rounded-xl" width="530px" height="250px" src="https://www.youtube.com/embed/3geuMW9Vo6w" title="A Heartfelt Thank You to Our Valued Customers | Best Selling Publisher" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-span-7">
                            <div className="bg-primary-100 text-white px-[50px] py-[40px] rounded-xl">
                                <h3 className="text-[40px] leading-tight font-semibold mb-3">Jose Monzon - The Author Of
                                    "The Stories Of The Underworld"</h3>
                                <p className="text-base leading-normal font-normal">We will strategically promote your books online to optimize sales and secure the well-deserved exposure your work deserves. We will strategically promote your books online to optimize sales We will strategically promote your books online to optimize sales and secure the well-deserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Reviews;