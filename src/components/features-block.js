import Feature from './feature'
import Title from './sectiontitle'

const FeaturesBlock = () =>{

	return(

       <section class="py-16">
        <div class="w-5/6 m-auto space-y-10 text-gray-700">

        <Title
           title='Checkout Our Features To Know Why We Are Best In This Business'
        />


	    <div
	      class="flex justify-center items-center space-x-10 text-lg "
	    >

	      <Feature

             title='POPULAR COURSES'
             subtitle='Lorem ipsum dolor sit, amet consectetur elit.'
	      />

	      <Feature

             title='MODERN LIBRARY'
             subtitle='Lorem ipsum dolor sit, amet consectetur elit.'
	      />

	      <Feature

             title='QUALIFIED TEACHER'
             subtitle='Lorem ipsum dolor sit, amet consectetur elit.'
	      />

	      </div>




		  <div class="flex justify-center items-center space-x-10 text-lg">

		    <Feature
             title='UNLIMITED COURSES'
             subtitle='Lorem ipsum dolor sit, amet consectetur elit.'
		    />

		    <Feature
             title='MANY LOCATIONS'
             subtitle='Lorem ipsum dolor sit, amet consectetur elit.'
		    />

		    <Feature
             title='MANY LOCATIONS'
             subtitle='Lorem ipsum dolor sit, amet consectetur elit.'
		    />

		  </div>


      </div>
    </section>

	)
}

export default FeaturesBlock;