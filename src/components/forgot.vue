<template>
  <section class="fl w-100">
    <div class="dt vh-100 w-100 pv5">
      <div class="cf center w-50">
        <article class="pa4 cf center w-40-l w-90-ns w-100 black-80 ph2">
          <div class="v-mid tc white ph2-l">
            <img src="@/assets/img/dtcblack.png" class="pa2 w4 h3 tc">

            <div class="cf bg-transparent ba b--white-10 br3 center pa2">
              <div class="w-100 fl">
                <p class="cf db w-100 f4 pt2 pb2 black fw7">Reset your Account</p>
              </div>
              <notify :notifications="notifications"></notify>

              <div class="center">
                <div class="cf w-100 pv3">
                  <input
                    class="signin f6 fw3 bn pa2 dib w-100 br2 bg-light-gray ba b--white"
                    type="text"
                    placeholder="Enter your reistered email"
                    @keyup="keyUp"
                    v-model="email"
                  >
                </div>

                <span>
                  <a class="f6 link dim br2 ph3 pv2 mb2 dib white bg-red white" href="#0">
                    Reset Account
                    <img src="@/assets/img/arrow-right.png" class="pl3 fr">
                  </a>
                </span>

                <div class="dit w-100 pv3 mt4 fl cf">
                  <router-link to="login" name="home" class="no-underline">
                    <p class="fl pa0 ma0 red f7">
                      <i class="fa fa-arrow-alt-left f7 tr mr2"></i> Remember your Password?
                    </p>
                  </router-link>
                </div>

                <!-- <div class="black pa2"> © {{date}} Digital Tribe MPCS &nbsp;</div> -->
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
import { HTTP } from "@/common";
import { checkRedirect } from "@/common";
import notify from "@/components/notify";

export default {
  components: {
    notify: notify
  },
  data() {
    return {
      lLoading: true,
      notifications: [],
      username: "",
      password: ""
    };
  },
  methods: {
    forgot() {
      HTTP.post(
        "/api/forgot",
        {
          username: this.email
        },
        { withCredentials: true }
      )
        .then(response => {
          this.notifications.push(response.data);
          setTimeout(checkRedirect(response.data), 2000);
        })
        .catch(e => {
          console.log(e);
          this.error = e;
          // this.errors.push(e)
        });
    }
  }
};
</script>
