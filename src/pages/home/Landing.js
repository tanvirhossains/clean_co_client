import React from 'react';
import bucketGirl from "../../assets/image/bucketgirl.png"

const Landing = () => {
    return (
        <div>


            <div class="hero h-full lg:h-[60vh] mt-16 bg-accent ">
                <div class="hero-content flex-col lg:flex-row w-full ">
                    <div>
                        <h1
                            class="text-5xl font-bold"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                            data-aos-delay="50"
                        >
                            Professional Cleaning Service
                        </h1>
                        <p
                            class=" py-6 max-w-lg"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                            data-aos-delay="400"
                        >
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button class="btn btn-primary"
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                        data-aos-delay="900"
                        >Get Started</button>
                    </div>
                    <div className='h-[60vh] shrink-0 '>

                        <img src={bucketGirl} class="h-full -z-50 " alt=' '
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-delay="900"
                        />
                    </div>
                </div>
            </div >


            <div className='bg-slate-400 w-5/6 p-5 mx-auto z-60 relative rounded-lg mt-[-50px] '>
                <div>This </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>

                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                </div>
            </div>
        </div>

    );
};

export default Landing;