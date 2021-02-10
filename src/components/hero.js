import PlayButton from './playbutton'

import HeroImageDecor from '../assets/images/r-shape.png'

const Hero = () =>{

	return(

		<>
			    <section
			      class="bg-gray-900 relative text-center text-white bg-center bg-cover"
			      >
			      <div class="w-1/2 m-auto">
			        <div class="flex flex-col justify-center items-center py-44 space-y-6">
			          <div class="text-5xl font-semibold leading-tight">
			            Best University In This Region Join With Us Today.
			          </div>
			          <div class="">
			            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
			            tempore laudantium pariatur ipsa delectus odit sequi dolor.
			          </div>
			          
			          <PlayButton/>

			        </div>
			      </div>

			      <img class="absolute bottom-0" src={HeroImageDecor} />
			    </section>

		</>

	)
}

export default Hero;