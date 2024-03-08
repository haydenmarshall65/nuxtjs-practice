<template>
  <div>
    The home
    <CounterComponent />
    <div>
      x: {{ x }}
      y: {{ y }}
    </div>
    <div>
      <ul>
        <li
          v-for="user in users"
          :key="user.id"
        >
          {{ user.name }}
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li
          v-for="user in users2"
          :key="user.id"
        >
          {{ user.name }}
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <li
          v-for="user in users3"
          :key="user.id"
        >
          {{ user.name }}
        </li>
      </ul>
    </div>
    <div>{{ oneUser.name }}</div>
    <div>{{ foobar.foo }}</div>
  </div>
</template>

<script setup>
const {x, y} = useMouse()
const users = ref([])

onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => users.value = data)
})

const { data: users2 } = await useAsyncData('users2', () => {
  $fetch('https://jsonplaceholder.typicode.com/users')
})

const { data: users3 } = await useFetch('https://jsonplaceholder.typicode.com/users');

const { data: oneUser } = await useFetch('https://jsonplaceholder.typicode.com/users/1', { pick: 
['id', 'name', 'email']});

const { data: foobar }  = await useFetch('/api/hello')
console.log(foobar)
</script>