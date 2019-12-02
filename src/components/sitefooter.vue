<template>
    <footer class="fl w-100 bg-near-black">
        <div class="tc pa1 bg-near-white w-100 f7 black pv1">
            <small class="tracked b"> Digital Tribe Multipurpose Cooperative Society (LSCS 16668) is licensed and regulated by the Lagos State Government.</small>
        </div>
        <div class="w-100 ph1 pv3 pv4-l flex items-center mw9 cf center">
            <div class="fl w-100 w-40-ns flex items-center">
                <span class="pl2">
                    <i class="mr2 mr3-l f4 white fab fa-facebook-f"></i> 
                    <i class="mr2 mr3-l f4 white fab fa-twitter"></i> 
                    <i class="mr2 mr3-l f4 white fab fa-linkedin-in"></i> 
                    <i class="f4 white fab fa-instagram"></i>
                </span>
            </div>
            <div class="fl w-100 w-60-ns f7 tr white">
                <div class="flex items-center float fr tracked">
                    <span class="ttu">Digital</span> <span class="orange ph1 f2 fw1">|</span> TRIBE
                    <span class="pointer">
                        <i @click="scrollTop" class="pl3 fal fa-arrow-circle-up f1-l f2 orange hover-silver"></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="fl tc pa3 bg-orange near-white w-100 f7 fw5 tracked">
            Copyright © {{date}} Digital Tribe MPCS &nbsp;  <span class="dn dib-l near-white">|</span>
            <div class="w-100 cf dn-l pv1"></div> 
            <router-link to="terms" class="near-white link ph1">Terms and Conditions</router-link> -
            <router-link to="privacy" class="near-white link ph1">Privacy Policy</router-link> 
        </div>
    </footer>
</template>

<script type="text/javascript">
    export default {
        data(){return{ date: new Date().getFullYear()}},
        methods:{
            scrollTop(){
                const   scrollHeight = window.scrollY,
                scrollStep = Math.PI / ( 300 / 15 ),
                cosParameter = scrollHeight / 2;
                var scrollCount = 0, scrollMargin,
                scrollInterval = setInterval( function() {
                    if ( window.scrollY != 0 ) {
                        scrollCount = scrollCount + 1;  
                        scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                        window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
                    } 
                    else clearInterval(scrollInterval); 
                }, 15 );
            }
        }
    }
</script>