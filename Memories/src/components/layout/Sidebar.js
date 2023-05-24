/*Icons:*/
import { FaUsers, FaHome } from 'react-icons/fa';
import { GiArchiveResearch } from 'react-icons/gi';
import { AiFillHdd, AiFillTags } from 'react-icons/ai';
import { TfiMoreAlt } from 'react-icons/tfi';
import { ImExit } from 'react-icons/im';  
import { HiMenu } from 'react-icons/hi';

/*Dependencias:*/
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

/*JSX pages:*/
import Home from '../pages/Home';
import Research from '../pages/Research'
import Users from '../pages/Users';
import Projects from '../pages/Projects'
import Tags from '../pages/Tags';
import Others from '../pages/Others'

/*JSX*/
import Container from '../others/Container';



function Sidebar(){
    return(
      <>
         <BrowserRouter>
            <div>
                
               <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
               <span className="sr-only">Open sidebar</span>
               <HiMenu aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
               
               </HiMenu>
               </button>
            
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
               <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                  <Link to='/' className="flex items-center pl-2.5 mb-5">
                     <img src="https://www.nied.unicamp.br/wp-content/themes/nied-theme-2023/assets/images/logo-transparente.png" className="h-6 mr-3 sm:h-7" alt="Flowbite Logo" />
                     <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Admin Nied</span>
                  </Link>
                  <ul className="space-y-2 font-medium">
                     <li> 
                        <Link to='/' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <FaHome aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor"/>
                           <span className="ml-3">Inicio</span>
                        </Link>
                     </li>
                     <li> 
                        <Link to='/users' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <FaUsers aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor"/>
                           <span className="ml-3">Usuários</span>
                        </Link>
                     </li>
                     <li>
                        <Link to='/projects' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <AiFillHdd aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor"/>
                           <span className="flex-1 ml-3 whitespace-nowrap">Projetos</span>
                           <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
                        </Link>
                     </li>
                     <li>
                        <Link to='/research' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <GiArchiveResearch aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor"/>
                           <span className="flex-1 ml-3 whitespace-nowrap">Linhas de Pesquisa</span>
                           <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                        </Link>
                     </li>
                     <li>
                        <Link to='/tags' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <AiFillTags aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor"/>
                           <span className="flex-1 ml-3 whitespace-nowrap">Tags</span>
                        </Link>
                     </li>
                     <li>
                        <Link to='/others' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <TfiMoreAlt aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor"/>
                           <span className="flex-1 ml-3 whitespace-nowrap">Outros</span>
                        </Link>
                     </li>
                     <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <ImExit aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor"/>
                           <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </aside>
         
            </div>
            <Container>
               <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/research" element={<Research/>}/>
                  <Route path="/users" element={<Users/>}/>
                  <Route path="/projects" element={<Projects/>}/>
                  <Route path="/tags" element={<Tags/>}/>
                  <Route path="/others" element={<Others/>}/>
               </Routes>
            </Container>
         </BrowserRouter>



      </>
    )
}

export default Sidebar;

