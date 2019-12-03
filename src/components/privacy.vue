<template>
	<section class="">
        <siteheader/>
        <!-- Banner Section Three -->
        <section class="banner-section-three">
            <div class="auto-container">
                <div class="row clearfix">
                    
                    <!--Content Column-->
                    <div class="content-column col-lg-6 col-md-12 col-sm-12">
                        <div class="inner-column wow slideInLeft">
                            <h2>Plan & Pricing</h2>
                            <div class="text">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.</div>
                        </div>
                    </div>
                    <!--Image Column-->
                    <div class="image-column col-lg-6 col-md-12 col-sm-12">
                        <div class="image paroller" data-paroller-factor="0.15" data-paroller-factor-lg="0.15" data-paroller-factor-md="0.10" data-paroller-factor-sm="0.10" data-paroller-type="foreground" data-paroller-direction="horizontal">
                            <img src="@/assets/img/resource/mokeup-12.png" alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <sitefooter/>    
    </section>
</template>

<script>
import {HTTP} from '@/common';
import siteheader from "@/components/generic/siteheader"
import sitefooter from "@/components/sitefooter"


export default {
    created() {
        this.toggleTab("");
    },
	components: {siteheader,sitefooter},
    data(){ 
        return {
            notifications:[],
            tabProps: {},
        }
    },
	methods: {
        toggleTab(tabname) {
            switch(tabname) {
            default:
                this.tabProps = {monthlyClass:"",monthlyShow:true}
                break;
            case "yearly":
                this.tabProps = {yearlyClass:"",yearlyShow:true}
                break;
            }
        },
        popup(){
            console.log("POPUP")
        },
    }
}
</script>
