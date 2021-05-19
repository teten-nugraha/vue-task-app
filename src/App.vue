<template>
  <div id="app">

    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/" class="nav-link">Tasks</router-link>
            </li>
            <li>
              <router-link to="/add-task" class="nav-link">Add</router-link>
            </li>
            <li>
              <router-link to="/analytic" class="nav-link">Analytic Report</router-link>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container">
       <div class="starter-template">
      <router-view />
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

