<template>
  <div id="login">
  

<body>

  <div>
    <!--Navigation-->
    <div class="py-4 px-20 bg-yellow-500">
      <!--Small screen drop-button-->
      <div class="relative flex items-center md:hidden" id="burger">
        <svg class="cursor-pointer items-center w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round"
          stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <span class="absolute w-full text-center text-2xl">Store</span>
      </div>
      <!--Small screen drop-menu-->
      <div class="hidden md:hidden flex flex-col divide-y-2 divide-gray-800 text-center text-2xl mt-5" id="menu">
        <a href="">
          <p>Library</p>
        </a>
        <a href="profile.html">
          <p>Profile</p>
        </a>
        <a href="tech_support.html">
          <p>Help</p>
        </a>
        <div class="divide-x-2 divide-gray-800">
          <a href="login.html">
            <span class="px-10"> Log in </span>
          </a>
          <a href="registration.html">
            <span class="px-10"> Sing up </span>
          </a>
        </div>
      </div>
      <!--Navigation menu-->
      <nav class="hidden md:block">
        <div class="flex justify-between items-center text-2xl">
          <div class="flex divide-x-2 divide-gray-800">
            <svg class="mx-2 w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z">
              </path>
            </svg>
            <a href="index.html" class="px-2">
              <span>Store</span>
            </a>
            <a href="library.html" class="px-2">
              <span>Library</span>
            </a>
            <a href="profile.html" class="px-2">
              <span>Profile</span>
            </a>
            <a href="tech_support.html" class="px-2">
              <span>Support</span>
            </a>
          </div>
          <div class="divide-x-2 divide-gray-800">
            <a href="login.html" class="px-2 bg-blue-400">
              <span> Log in </span>
            </a>
            <a href="registration.html" class="px-2">
              <span> Sing up </span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  

    <main>
      <div class="py-10 max-w-md mx-auto">
        <form class="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username" type="text" placeholder="Username">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" placeholder="******************">
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button">
              Sign In
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </main>
  </div>

  
</body>
</div>


</template>

<script>
export default {
  name: 'login'
}
</script>
<!-- инкапсулированные стили компонента -->
<style>
#login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>