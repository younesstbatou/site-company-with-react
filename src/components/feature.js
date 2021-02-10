import FeatureIcon from './featureicon'

const Feature = (props) => {

	return(

		<div class="flex p-6 shadow-xl">
            <div
              class="flex justify-center items-center my-auto mr-5 w-16 h-14 text-3xl text-white bg-green-500 rounded"
            >
              <FeatureIcon
                icon='I'
              />

            </div>
            <div class="">
              <h2 class="text-base font-bold">{props.title}</h2>
              <div class="-mr-16 w-4/5 text-base text-gray-500">
                {props.subtitle}
              </div>
            </div>
        </div>
	)
}

export default Feature;