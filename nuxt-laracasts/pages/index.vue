<template>
  <div>
    The home
    <CounterComponent />
    <div>
      x: {{ x }}
      y: {{ y }}
    </div>
  </div>
</template>

<script setup>
const {x, y} = useMouse()
</script>