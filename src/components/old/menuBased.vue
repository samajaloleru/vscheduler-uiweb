<template >
  <section>
    <loadingscreen/>

    <div class="w-100 relative white">
        <nav @click="toggleMenu" class="w-100 center cf f6 f5-ns inline-flex items-center fw5 h3 bg-black fixed  z-max">
            <span  class="oi ml2 db" data-glyph="menu"></span>
            <span class=" pl2 f4 f5-ns">
                SAVE n FLEX
            </span>
            <router-link :to="{name: 'dashboard'}">
                <img src="@/assets/img/logoBlack.png" class="h3 absolute right-0  top-0" />
            </router-link>
        </nav>
        
    
      
        <div class="cf">
            <div class="fl h3 w-100"></div>
            <menulist class="top-0 left-0 vh-100 z-max fixed absolute dn" :class="{'slideInLeft w-100 bg-black-30':lShow, 'slideOutLeft':!lShow}">
            <template slot="default">
                <li class="ph2 bg-black-80 dim pointer">              
                <p class="h3 f7 inline-flex items-center mv0 white db w-100" @click="toggleMenu">
                    <span class="oi mr2" data-glyph="account-logout"></span>
                    CLOSE
                </p>
                </li>
            </template>
            </menulist>
            
            <div class="min-vh-100 white w-100 fl pa2 pa3-l center bg-white relative ">
            <router-view></router-view>
            </div>
        </div>
    </div>
  </section>
</template>

<!-- App specific objects  -->
<script type="text/javascript">
  import loadingscreen from "@/components/loading"
  import menulist from "@/components/dashboard/menulist"

  export default {
    name: "menuBased",
    data() {return{
      lShow:false,
      slideOut:"dn",
    }},
    methods: {
      toggleMenu() {
        this.lShow = !this.lShow
        document.getElementsByTagName("html")[0].classList.toggle('overflow-hidden');
      }
    },
    components: {
      menulist,loadingscreen
    },
  }
</script>