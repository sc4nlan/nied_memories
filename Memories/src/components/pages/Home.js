import TableUsers from "../others/TableUsers";

function Home(){
    return(
        <div class="p-4 sm:ml-64">
        <div class="p-4border-2 border-gray-200 rounded-lg dark:border-gray-700">

           <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-60 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">updates</p>
           </div>
           <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="flex items-center justify-center rounded bg-gray-50 h-80 dark:bg-gray-800">
                 <p class="text-2xl text-gray-400 dark:text-gray-500">Lista projetos</p>
              </div>
              <div class="flex justify-center rounded bg-gray-50 h-80">
                 <p class="text-2xl "><TableUsers/></p>
              </div>

           </div>
           <div class="flex items-center justify-center h-60 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
           </div>
           
        </div>
       </div>
    )
}

export default Home;