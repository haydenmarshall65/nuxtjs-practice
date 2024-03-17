<template>
  <div class="post-container py-8">
    <h3 class="text-3xl font-bold">
      Title of Blog
    </h3>
    <div class="post-meta text-gray-700 flex items-center space-x-2">
      <div>Feb 2, 2022</div>
      <div>&middot;</div>
      <div>Hayden Marshall</div>
    </div>
    <div class="post-preview leading-relaxed mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div class="mt-4">
      <NuxtLink 
        to="/posts/1" 
        class="bg-blue-700 hover:bg-blue-800 rounded text-white inline-block px-4 py-2"
      >
        Read more
      </NuxtLink>
    </div>
  </div>
</template>