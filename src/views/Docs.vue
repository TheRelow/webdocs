<template>
  <div class="container">
    <router-view/>
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large red">
        <i class="large material-icons">mode_edit</i>
      </a>
      <ul>
<!--        <li><a class="btn-floating yellow darken-1"><i class="material-icons">publish</i></a></li>-->
<!--        <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>-->
        <router-link to="/docs/new" tag="li"><a class="btn-floating red"><i class="material-icons">add</i></a></router-link>
        <router-link to="/docs/settings" tag="li"><a class="btn-floating green"><i class="material-icons">settings</i></a></router-link>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Docs',
  mounted() {
    let fixedButton = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(fixedButton, {
      direction: 'left',
      hoverEnabled: false
    });
  }
}
</script>
