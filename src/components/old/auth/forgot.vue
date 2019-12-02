<template>
  <section class="">

    <loadingscreen/>
    
    <div class="fl w-100">
        <div class="fl w-50">
            <article class="vh-100 dt w-100 cover" :style="{backgroundImage:'url('+require('@/assets/img/wallpaper-signin.jpg')+')'}">
                <div class="dtc v-mid tc white ph3 ph4-l bg-black-60">
                    
                </div>
            </article>
        </div>

        <div class="fl w-50">
            <article class="vh-100 dt w-100" style="background: linear-gradient(to top, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at bottom center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; background-blend-mode: multiply,multiply;">
                <div class="dtc v-mid tc white ph3 ph4-l">

                    <img src="@/assets/img/logoWhite.png" class="pb2 pt4 tc " />

                    <div class="cf bg-transparent ba b--white-10 br3 center pa3 " style="max-width:350px" >

                        <div class="w-100 fl">
                        <p class="cf db w-100 f5 pt2 pb2 near-white fw4">Reset your account</p>
                        </div>


                        <notify :notifications="notifications"></notify>

                        <div  class="center">

                        <div class="cf w-100 pv3">
                            <input class="signin f6 fw3 bn pa2 dib w-100 br2 bg-light-gray ba b--white" type="email" placeholder="Enter your registered email"  v-model="email" />
                        </div>

                        <span class="cf tl no-underline inline-flex items-center pa2 white bg-mid-gray ba b--white-20 br2 relative pointer" @click="forgot()">
                            Reset Account
                            <img src="@/assets/img/arrow-right.png" class="pl3 fr"/>
                        </span>

                        <div class="cf w-100 pv3">
                            <router-link to="/signin" class="cf no-underline">
                            <p class="fr white f7">Sign Me In</p>
                            </router-link>
                        </div>

                        <div class="cf w-100">
                            <p class="f7"> 2019 © SAVE n FLEX</p>
                        </div>
                        </div>
                    </div>

                </div>
            </article>
        </div>
    </div>

      
  </section>
</template>

<script type="text/javascript">
  import {HTTP} from '@/common';
  import {checkRedirect} from '@/common';
  import notify from "@/components/notify"
  import loadingscreen from "@/components/loading"

  export default {
    components: {
      "notify": notify,
      "loadingscreen": loadingscreen,
    },
    data() {return{
      lLoading:true, notifications:[], username:'',password:'',
    }},
    methods: {
      forgot() {
        HTTP.post('/api/forgot', {
          username:this.email
        },{withCredentials: true}).then(response => {
          this.notifications.push(response.data)
          setTimeout(checkRedirect(response.data),2000)
        }).catch(e => {
          console.log(e)
          this.error = e
          // this.errors.push(e)
        })
      }
    }
  }
</script>
