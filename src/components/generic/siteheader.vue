<template>
  <section class="">
    <header class="main-header header-style-one">
      <div class="header-upper">
        <div class="auto-container">
          <div class="clearfix">
            <div class="pull-left">
              <div class="logo pt-3"><a href="index.html"><img src="@/assets/img/logo.png" style="width: 70px" alt="" title=""></a></div>
            </div>
                  
            <div class="pull-right">
              <div class="nav-outer clearfix">
                <nav class="main-menu navbar-expand-md">
                  <div class="navbar-header">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                  </div>
                  <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                    <ul class="navigation clearfix">
                      <li><router-link to="/">Home</router-link></li>
                      <li><router-link to="/about">About</router-link></li>
                      <li><router-link to="/pricing">Pricing</router-link></li>
                      <li><router-link to="/contact">Contact Us</router-link></li>
                      <li><router-link to="/signup">Sign up</router-link></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </section>
</template>
<script type="text/javascript">
import menulistitem from "@/components/generic/menulistitem";
import menulistgroup from "@/components/generic/menulistgroup";
const submenu = [
    { to: "/", icon: "", title:"Home" },
    { to: "/about", icon: "", title: "About / Features" },
    { to: "/product", icon: "", title: "Products" },
    { to: "/faq", icon: "", title: "Testimonies / FAQ" },
    { to: "/pricing", icon: "", title: "Pricing" },
    { to: "/contact", icon: "", title: "Contact Us" },
    { to: "/signup", icon: "", title: "Sign up" },

];

export default {
  data() {
    return {
      submenu,
      lShow: false,
    };
  },
  methods: {
    toggleMenu() {
      this.lShow = !this.lShow;
      //document.getElementsByTagName("html")[0].classList.toggle('overflow-hidden');
    },
    hideMenuOnScroll() {
      var hideMenu;
      var shrinkOn = 100;
      var distanceY = window.pageYOffset || document.documentElement.scrollTop;
      if (distanceY < shrinkOn) {
        hideMenu = "dn";
      } else {
        hideMenu = "";
      }
      if (hideMenu !== this.hideMenu) {
        this.hideMenu = hideMenu;
      }
    }
  },
  components: {
    menulistgroup,
    menulistitem
  },
  beforeMount() {
    if (this.$route.fullPath == "/") {
      this.hideMenu = "dn";
      window.addEventListener("scroll", this.hideMenuOnScroll, false);
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.hideMenuOnScroll, false);
  }
};
</script>
