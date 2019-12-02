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
        <!--End Banner Section Three -->
        
        <!-- Price Page Section -->
        <section class="pricing-section style-two">
            <div class="auto-container">
                
                <!-- Sec Title -->
                <div class="sec-title centered">
                    <h2>Easy Pricing Plans</h2>
                </div>
                
                <div class="pricing-inner-container">
                    
                    <div class="pricing-option">
                        <div class="option-inner pb-3">
                            <button :class="tabProps.monthlyClass" @click="toggleTab('monthly')" class="theme-btn btn-style-three mr-2">Monthly</button>
                            <button :class="tabProps.yearlyClass" @click="toggleTab('yearly')" class="theme-btn btn-style-three ml-2">Yearly</button>
                        </div>
                    </div>
                    <!-- Monthly Package -->
                    <div v-if="tabProps.monthlyShow" class="monthly-package">
                        <div class="row clearfix">
                            
                            <!-- Price Block -->
                            <div class="price-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box">
                                    <div class="title-box">
                                        <h2>Basic</h2>
                                    </div>
                                    <div class="content-box">
                                        <div class="price"><sub>$</sub>5,260</div>
                                        <div class="title">Per annually</div>
                                        <!-- Price List -->
                                        <ul class="price-list">
                                            <li class="check"><span class="check fa fa-check"></span>User Profiling</li>
                                            <li class="cross"><span class="check fa fa-check"></span>Guest Booking</li>
                                            <li class="check"><span class="check fa fa-check"></span>Push Notifications</li>
                                            <li class="check"><span class="check fa fa-check"></span>Reperting</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Calender</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Guest Profiling</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Tag Management</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Schedule Sharing</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>User Logging</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Guest Approval</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Access Control</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Shared Resources</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Devices & Deliveries</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Self-Services (Console)</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Event Invities & Access</li>
                                        </ul>
                                        <!-- Button Box -->
                                        <div class="btn-box">
                                            <a href="#" class="theme-btn btn-style-four">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Price Block -->
                            <div class="price-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box">
                                    <div class="title-box">
                                        <h2>Pro</h2>
                                    </div>
                                    <div class="content-box">
                                        <div class="price"><sub>$</sub>5,840</div>
                                        <div class="title">Per annually</div>
                                        <!-- Price List -->
                                        <ul class="price-list">
                                            <li class="check"><span class="check fa fa-check"></span>User Profiling</li>
                                            <li class="check"><span class="check fa fa-check"></span>Guest Booking</li>
                                            <li class="check"><span class="check fa fa-check"></span>Push Notifications</li>
                                            <li class="check"><span class="check fa fa-check"></span>Reperting</li>
                                            <li class="cross"><span class="check fa fa-check"></span>Calender</li>
                                            <li class="cross"><span class="check fa fa-check"></span>Guest Profiling</li>
                                            <li class="cross"><span class="check fa fa-check"></span>Tag Management</li>
                                            <li class="cross"><span class="check fa fa-check"></span>Schedule Sharing</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>User Logging</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Guest Approval</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Access Control</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Shared Resources</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Devices & Deliveries</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Self-Services (Console)</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Event Invities & Access</li>
                                        </ul>
                                        <!-- Button Box -->
                                        <div class="btn-box">
                                            <a href="#" class="theme-btn btn-style-four">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Price Block -->
                            <div class="price-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box">
                                    <div class="title-box">
                                        <h2>Enterprise</h2>
                                    </div>
                                    <div class="content-box">
                                        <div class="price"><sub>$</sub>6,920</div>
                                        <div class="title">Per annually</div>
                                        <!-- Price List -->
                                        <ul class="price-list">
                                            <li class="check"><span class="check fa fa-check"></span>User Profiling</li>
                                            <li class="check"><span class="check fa fa-check"></span>Guest Booking</li>
                                            <li class="check"><span class="check fa fa-check"></span>Push Notifications</li>
                                            <li class="check"><span class="check fa fa-check"></span>Reperting</li>
                                            <li class="check"><span class="check fa fa-check"></span>Calender</li>
                                            <li class="check"><span class="check fa fa-check"></span>Guest Profiling</li>
                                            <li class="check"><span class="check fa fa-check"></span>Tag Management</li>
                                            <li class="check"><span class="check fa fa-check"></span>Schedule Sharing</li>
                                            <li class="check"><span class="check fa fa-check"></span>User Logging</li>
                                            <li class="check"><span class="check fa fa-check"></span>Guest Approval</li>
                                            <li class="check"><span class="check fa fa-check"></span>Access Control</li>
                                            <li class="check"><span class="check fa fa-check"></span>Shared Resources</li>
                                            <li class="check"><span class="check fa fa-check"></span>Devices & Deliveries</li>
                                            <li class="check"><span class="check fa fa-check"></span>Self-Services (Console)</li>
                                            <li class="check"><span class="check fa fa-check"></span>Event Invities & Access</li>
                                        </ul>
                                        <!-- Button Box -->
                                        <div class="btn-box">
                                            <a href="#" class="theme-btn btn-style-four">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    <!-- Yearly Package -->
                    <div v-if="tabProps.yearlyShow" class="monthly-package">
                        <div class="row clearfix">
                            
                            <!-- Price Block -->
                            <div class="price-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box">
                                    <div class="title-box">
                                        <h2>Starter</h2>
                                    </div>
                                    <div class="content-box">
                                        <div class="price"><sub>$</sub> 250<span>/year</span></div>
                                        <div class="title">$75 USD billed annually</div>
                                        <!-- Price List -->
                                        <ul class="price-list">
                                            <li class="check"><span class="check fa fa-check"></span>Push Notifications</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Offline Synchronization</li>
                                            <li class="check"><span class="check fa fa-check"></span>Data Transfer</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Speech & Text Analytics</li>
                                            <li class="check"><span class="check fa fa-check"></span>24/7 Support</li>
                                        </ul>
                                        <!-- Button Box -->
                                        <div class="btn-box">
                                            <a href="#" class="theme-btn btn-style-four">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Price Block -->
                            <div class="price-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box">
                                    <div class="title-box">
                                        <h2>Professional</h2>
                                    </div>
                                    <div class="content-box">
                                        <div class="price"><sub>$</sub> 500<span>/year</span></div>
                                        <div class="title">$102 USD billed annually</div>
                                        <!-- Price List -->
                                        <ul class="price-list">
                                            <li class="check"><span class="check fa fa-check"></span>Push Notifications</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Offline Synchronization</li>
                                            <li class="check"><span class="check fa fa-check"></span>Data Transfer</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Speech & Text Analytics</li>
                                            <li class="check"><span class="check fa fa-check"></span>24/7 Support</li>
                                        </ul>
                                        <!-- Button Box -->
                                        <div class="btn-box">
                                            <a href="#" class="theme-btn btn-style-four">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Price Block -->
                            <div class="price-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box">
                                    <div class="title-box">
                                        <h2>Business</h2>
                                    </div>
                                    <div class="content-box">
                                        <div class="price"><sub>$</sub> 750<span>/year</span></div>
                                        <div class="title">$150 USD billed annually</div>
                                        <!-- Price List -->
                                        <ul class="price-list">
                                            <li class="check"><span class="check fa fa-check"></span>Push Notifications</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Offline Synchronization</li>
                                            <li class="check"><span class="check fa fa-check"></span>Data Transfer</li>
                                            <li class="cross"><span class="remove fa fa-remove"></span>Speech & Text Analytics</li>
                                            <li class="check"><span class="check fa fa-check"></span>24/7 Support</li>
                                        </ul>
                                        <!-- Button Box -->
                                        <div class="btn-box">
                                            <a href="#" class="theme-btn btn-style-four">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
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
