<template>
    <router-link class="link" :to="to">
        <p class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box br2 bg-near-white mr4">
            <span class="oi mr1" :data-glyph="icon"></span>
            {{title}}
        </p>
    </router-link>
</template>
<script type="text/javascript">
  export default {
    props: [ 'to', 'icon', 'title' ],
  }
</script>