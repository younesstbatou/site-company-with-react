import Logo from './logo.js'
import ApplyButton from './applybutton.js'

import Flag from '../assets/images/usa.svg';



const Header = () => {
    return(
        
        <div>
            <div class="border-b">
                <div
                class="h-10 w-5/6 m-auto flex items-center justify-between text-green-500"
                >

                <div class="flex space-x-6">
                    <div>
                    <i class="mr-1 text-xs fas fa-phone-alt"></i>
                    <p class="inline text-sm text-gray-500">+1 (396) 486 4709</p>
                    </div>
                    <div>
                    <i class="mr-1 text-xs fas fa-envelope"></i>
                    <p class="inline text-sm text-gray-500">enquery@domain.com</p>
                    </div>
                    <div>
                    <i class="mr-1 text-xs fas fa-map-marker-alt"></i>
                    <p class="inline text-sm text-gray-500">
                        795 South Park Avenue, CA
                    </p>
                    </div>
                </div>


                <div class="flex">
                    <div class="flex space-x-2">
                    <img class="m-auto w-6 h-6" src={Flag} />
                    <a
                        href="/"
                        class="m-auto text-sm text-gray-500 hover:text-green-500"
                    >
                        English
                        <i
                        class="fas fa-chevron-down text-gray-400 m-auto text-xs pt-0.5 hover:text-green-500"
                        ></i>
                    </a>
                    </div>

                    <div class="px-4 m-auto">
                    <span class="pl-0.5 bg-gray-300"> </span>
                    </div>

                    <div class="flex space-x-2 text-xs">
                    <div
                        class="flex justify-center items-center m-auto w-6 h-6 bg-gray-200 rounded hover:bg-green-500 hover:text-white"
                    >
                        <div class="fab fa-facebook-f"></div>
                    </div>

                    <div
                        class="flex justify-center items-center m-auto w-6 h-6 bg-gray-200 rounded hover:bg-green-500 hover:text-white"
                    >
                        <div class="fab fa-twitter"></div>
                    </div>

                    <div
                        class="flex justify-center items-center m-auto w-6 h-6 bg-gray-200 rounded hover:bg-green-500 hover:text-white"
                    >
                        <div class="fab fa-linkedin-in"></div>
                    </div>

                    <div
                        class="flex justify-center items-center m-auto w-6 h-6 bg-gray-200 rounded hover:bg-green-500 hover:text-white"
                    >
                        <div class="fab fa-instagram"></div>
                    </div>
                    </div>

                    <div class="px-4 m-auto">
                    <span class="pl-0.5 bg-gray-300"> </span>
                    </div>

                    <div class="m-auto text-xl font-semibold fas fa-bars"></div>
                </div>
                </div>
            </div>



            <div class="h-20 w-5/6 m-auto border-b flex justify-between text-sm">


                <Logo />

                <div class="flex my-auto font-semibold">
                    <ul class="flex m-auto space-x-6 list-none no-underline">
                        <li class="uppercase hover:text-green-500">
                        <a href="/"
                            >home<i
                            class="ml-1 text-xs text-gray-500 fas fa-chevron-down"
                            ></i
                        ></a>
                        </li>

                        <li class="uppercase hover:text-green-500">
                        <a href="/course-list.html"
                            >course list<i
                            class="ml-1 text-xs text-gray-500 fas fa-chevron-down hover:text-green-500"
                            ></i
                        ></a>
                        </li>

                        <li class="uppercase hover:text-green-500">
                        <a href="/course-details.html"
                            >course details<i
                            class="ml-1 text-xs text-gray-500 fas fa-chevron-down"
                            ></i
                        ></a>
                        </li>

                        <li class="uppercase hover:text-green-500">
                        <a href="/about.html"
                            >about us<i
                            class="ml-1 text-xs text-gray-500 fas fa-chevron-down"
                            ></i
                        ></a>
                        </li>

                        <li class="uppercase hover:text-green-500">
                        <a href="/blog.html"
                            >blog<i
                            class="ml-1 text-xs text-gray-500 fas fa-chevron-down"
                            ></i
                        ></a>
                        </li>
                    </ul>

                    <div class="m-auto">
                        <i
                        class="px-8 text-green-600 transform rotate-90 fas fa-search"
                        ></i>
                    </div>

                    <ApplyButton />

                </div>

            </div>

        </div>

        
    )
}

export default Header;
