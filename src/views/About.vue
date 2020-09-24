<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br>
    <router-link to="/about/js">JavaScript</router-link> | 
    <router-link to="/about/php">PHP</router-link>
    <router-view/>
  </div>
</template>
