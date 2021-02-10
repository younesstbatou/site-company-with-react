import Logoimage from '../assets/images/logo.png';

const Logo = () =>{

	 return (
	 	      <div class="flex">
                <img
                    class="p-2 m-auto w-14 h-14 bg-green-500 rounded-lg"
                    src={Logoimage}
                />
                <span
                    class="m-auto ml-2 text-base font-bold border-b-4 border-green-500"
                    >WEB Training</span
                >
                </div>
	 	)
}

export default Logo