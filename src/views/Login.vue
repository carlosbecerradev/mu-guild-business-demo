<template>
  <div class="login">
    <div class="flex items-center justify-center py-12 sm:px-6 lg:px-8">
      <div class="max-w-sm w-full space-y-4 p-4 bg-white px-8 rounded-md shadow-md">
        <div>
          <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
            Login
          </h2>
        </div>
        <span class="sr-only">login form</span>
        <form>
          <div class="overflow-hidden sm:rounded-md">
            <div class="py-4">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label
                    for="username"
                    class="block text-sm font-medium text-gray-700"
                    >Username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder=""
                    v-model="user_account.username"
                    class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                    >Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder=""
                    v-model="user_account.password"
                    class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <button
                    type="submit"
                    class="flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >Confirm</button>
                </div>
                <div
                  class="col-span-6 sm:col-span-3 flex items-center justify-center">
                  <router-link
                    to="/"
                    class="inline-block font-medium text-sm text-indigo-600 hover:text-indigo-500"
                    >Cancel</router-link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user_account: {
        username: "",
        password: "",
      },
    };
  },
};
</script>
