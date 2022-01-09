<template>
  <div>
    <p>
      <notfound-component />
    </p>
    <h1>{{ $route.params.catchAll }} not found.</h1>
    Go back to <router-link to="/">Home</router-link>
  </div>
</template>