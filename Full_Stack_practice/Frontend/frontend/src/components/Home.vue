<template>
  <div class="container mx-auto">
    <div class="w-1/3 mt-4">
      <p class="text-lg text-gray-800 font-semibold"> Suggested Posters</p>
        <div class="border-solid border-2 p-2 border-gray-300 flex flex-row j leading-normal shadow-md">
          <img class="w-10 h-10 rounded-full m-2" src="../assets/Rock-Lee.png" alt="Avatar of Rock Lee"/>
          <img class="w-10 h-10 rounded-full m-2" src="../assets/vegeta.jpg" alt="Avatar of Vegeta"/>
          <img class="w-10 h-10 rounded-full m-2" src="../assets/Gaara.png" alt="Avatar of Gaara"/>
          <img class="w-10 h-10 rounded-full m-2" src="../assets/Uchiha_Itachi.png" alt="Avatar of Itachi"/>
          <img class="w-10 h-10 rounded-full m-2" src="../assets/kisame.png" alt="Avatar of Kisame"/>
          <img class="w-10 h-10 rounded-full m-2" src="../assets/goku.jpg" alt="Avatar of Goku"/>
          <img class="w-10 h-10 rounded-full m-2" src="../assets/frieza.png" alt="Avatar of Frieza"/>
        </div>
      </div>
      <div class="w-1/3 ">
        <p class="text-gray-800 font-semibold text-lg ">Shortcuts</p>
        <div class=" border-solid border-2 p-4 border-gray-300 flex flex-row justify-between leading-normal shadow-md ">
           <p class="text-gray-600 border-b-2 border-indigo-600 my-2">Favorites</p>
           <p class="text-gray-600 border-b-2 border-indigo-600 my-2">Liked</p>
           <p class="text-gray-600 border-b-2 border-indigo-600 my-2">Shared</p>
           <p class="text-gray-600 border-b-2 border-indigo-600 my-2">Comments</p>
         </div>
      </div>
      <div class="w-1/3 mx-0 justify-start mt-4">
        <form class="border shadow-lg p-1">
        <div class="flex items-end py-2 pr-6">
          <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 p-2 px-10 leading-tight focus:outline-none" type="text" placeholder="Create a post">
          <button class="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
          Submit
          </button>
        </div>
        </form>
     </div>
     <div class="float-right w-1/5 -mt-64 mb-8 mx-2 ">
      <p class="text-lg text-gray-800 font-semibold align-top">Most Favorited</p>
      <div class="border-solid border-2 p-4 border-gray-300 flex flex-col justify-center leading-normal shadow-lg">
        <img class="w-24 h-24 rounded-full m-2 justify-center ml-16" src="../assets/vegeta.jpg" alt="Avatar of Vegeta"/>
        <span class="text-center">Vegeta</span>
        <span class="text-center">Total Viewers: 405</span>
        <span class="text-center">Subscribers: 289</span>
        <span class="text-center">Shared Posts: 120</span>
         <span class="text-center">Favorited by: 212</span>
      </div>
     </div>
      <div class="float-right w-1/5 -mt-64 mb-8 mx-2 ">
      <p class="text-lg text-gray-800 font-semibold align-top">Most Subscribed to</p>
      <div class="border-solid border-2 p-4 border-gray-300 flex flex-col justify-center leading-normal shadow-lg">
        <img class="w-24 h-24 rounded-full m-2 justify-center ml-16" src="../assets/goku.jpg" alt="Avatar of Goku"/>
        <span class="text-center">Goku</span>
        <span class="text-center">Total Viewers: 1092</span>
        <span class="text-center">Subscribers: 671</span>
        <span class="text-center">Shared Posts: 536</span>
         <span class="text-center">Favorited by: 201</span>
      </div>
     </div>
      <div class="float-right w-1/5 -mt-64 mb-8 mx-2 ">
      <p class="text-lg text-gray-800 font-semibold align-top">Most Shared Author</p>
      <div class="border-solid border-2 p-4 border-gray-300 flex flex-col justify-center leading-normal shadow-lg">
        <img class="w-24 h-24 rounded-full m-2 justify-center ml-16" src="../assets/Uchiha_Itachi.png" alt="Avatar of Itachi"/>
        <span class="text-center">Itachi</span>
        <span class="text-center">Total Viewers: 902</span>
        <span class="text-center">Subscribers: 400</span>
        <span class="text-center">Shared Posts: 652</span>
         <span class="text-center">Favorited by: 92</span>
      </div>
     </div>
    <div class="mt-6"> 
    <div class="">
      <span>Filter By:</span> 
        <select class="ml-2">
          <option>Most Recent</option>
          <option>Most Popular</option>
          <option>Trending</option>
        </select> 
        </div>
    </div>
    <div v-if="!isHidden" class="max-w-sm w-full my-4 lg:max-w-full lg:flex">
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-md">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">Can Coffee make you a better developer?</div>
             <span class="text-gray-600 leading-none float-right -mt-8">Total Views: 109</span>
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
   <div v-if="!isHidden" class="mx-auto my-4">
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-md">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">Caffeine + Developer = ?</div>
              <span class="text-gray-600 leading-none float-right -mt-8">Total Views: 253</span>
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
      <div v-if="!isHidden" class="max-w-sm w-full my-4 lg:max-w-full lg:flex">
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-md">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">Something Something Dark Side</div>
             <span class="text-gray-600 leading-none float-right -mt-8">Total Views: 302</span>
          <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div class="flex items-center">
          <img class="w-10 h-10 rounded-full mr-4" src="../assets/Uchiha_Itachi.png" alt="Avatar of Itachi">
          <div class="text-sm">
            <p class="text-gray-900 leading-none">Itachi</p>
            <p class="text-gray-600">June 21</p>
          </div>
      </div>
    </div>
  </div>
      <div class="float-right -mt-2 mb-6 mr-56">
        <p class="opacity-75">Showing 3 of 3</p> 
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
        Prev
      </button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        Next
      </button>
    </div>
      <div class="mt-4">
        <span v-on:click="isHidden = true" v-if="!isHidden" class="text-red-700 text-lg ml-2">Hide Posts</span> 
        <span v-on:click="isHidden = false" v-if="isHidden" class="text-green-700 text-lg">Show Posts</span>
      </div>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      blogPost : [],
      isHidden: false,
    }
  },
  async created() {
    this.blogPost = (await this.$store.dispatch("getBlogPost",
    this.$route.params.id)).data;
  }
}
</script>