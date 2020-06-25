<template>
  <div class="container mx-auto">
    <div class="mt-8"> <span>Filter By:</span> 
      <select class="ml-2">
      <option>Most Recent</option>
      <option>Most Popular</option>
      <option>Trending</option>
      </select>
    </div>
    <div class="max-w-sm w-full my-4 lg:max-w-full lg:flex">
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
        <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      </div>
      <div class="flex items-center">
        <img class="w-10 h-10 rounded-full mr-4" src="../assets/myself.jpg" alt="Avatar of William Spicer">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">William Spicer</p>
          <p class="text-gray-600">June 25</p>
        </div>
      </div>
    </div>
  </div>
   <div class="mx-auto my-4">
   <div class="max-w-sm w-full lg:max-w-full lg:flex">
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">Caffeine + Developer = ?</div>
        <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      </div>
      <div class="flex items-center">
        <img class="w-10 h-10 rounded-full mr-4" src="../assets/myself.jpg" alt="Avatar of William Spicer">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">William Spicer</p>
          <p class="text-gray-600">June 24</p>
        </div>
      </div>
    </div>
  </div>
     <div class="float-right mr-56">
      <p class="opacity-75 mt-2">Showing 2 of 2</p> 
     <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
       Prev
  </button>
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
      Next
  </button>
</div>
</div>
</div>
</template>

<script>
export default {

}
</script>