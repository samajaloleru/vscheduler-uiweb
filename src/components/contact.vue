<template>
	<section class="">
        <siteheader/>
        <!-- Banner Section Three -->
        <section class="banner-section-three">
            <div class="auto-container">
                <div class="row clearfix">
                    
                    <!--Content Column-->
                    <div class="content-column col-lg-6 col-md-12 col-sm-12">
                        <div class="inner-column wow fadeInLeft">
                            <h2>Contact Us</h2>
                            <div class="text">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.</div>
                        </div>
                    </div>
                    <!--Image Column-->
                    <div class="image-column col-lg-6 col-md-12 col-sm-12">
                        <div class="image  wow slideInRight" data-wow-delay="0ms" data-wow-duration="2500ms">
                            <img src="@/assets/img/resource/mokeup-10.png" alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <!--End Banner Section Three -->
        
        <!-- Contact Page Section -->
        <section class="services-section-two style-two">
            <div class="auto-container">
                <div class="row clearfix">
                    
                    <!-- Map Column -->
                    <div class="map-column col-lg-6 col-md-12 col-sm-12">
                        <div class="inner-column">
                            <div class="image">
                                <img src="@/assets/img/resource/services-7.png" alt="" />
                            </div>
                        </div>
                    </div>
                    
                    <!-- Form Column -->
                    <div class="form-column col-lg-6 col-md-12 col-sm-12">
                        <div class="inner-column">
                            
                            <!-- Contact Form -->
                            <div class="contact-form">
                                    
                                <!-- Title Box -->
                                <div class="title-box">
                                    <h2>Leave a Reply</h2>
                                    <div class="title">Your email address will not be published. Required fields are marked *</div>
                                </div>
                                
                                <!--Contact Form-->
                                <form method="post" action="http://t.commonsupport.com/alfena/sendemail.php" id="contact-form">
                                    <div class="row clearfix">
                                        <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="text" name="username" placeholder="Name*" required>
                                        </div>
                                        
                                        <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="email" name="email" placeholder="Email*" required>
                                        </div>
                                        
                                        <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                            <input type="text" name="subject" placeholder="Subject*" required>
                                        </div>
                                        
                                        <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                            <textarea class="darma" name="message" placeholder="Type Your Message *"></textarea>
                                        </div>
                                        
                                        <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                            <button class="theme-btn btn-style-two" type="submit" name="submit-form">Send Now <span class="icon flaticon-next-3"></span></button>
                                        </div>
                                    </div>
                                </form>
                                    
                            </div>
                            <!--End Contact Form -->
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <!-- End Contact Page Section -->
        
        <!-- Contact Info Section -->
        <section class="contact-info-section">
            <div class="auto-container">
                <div class="row clearfix">
                    
                    <div class="column col-lg-4 col-md-6 col-sm-12">
                        <!-- Info Block -->
                        <div class="info-block">
                            <div class="block-inner">
                                <h3>New York</h3>
                                <ul>
                                    <li>+888 123 4567</li>
                                    <li>Yourmail@gmail.com</li>
                                    <li>123 New Street New City</li>
                                </ul>
                                <!-- Social Nav -->
                                <div class="social-icons">
                                    <a href="#"><span class="fa fa-facebook"></span></a>
                                    <a href="#"><span class="fa fa-twitter"></span></a>
                                    <a href="#"><span class="fa fa-google-plus"></span></a>
                                    <a href="#"><span class="fa fa-pinterest"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="column col-lg-4 col-md-6 col-sm-12">
                        <!-- Info Block -->
                        <div class="info-block">
                            <div class="block-inner">
                                <h3>London</h3>
                                <ul>
                                    <li>+888 123 4567</li>
                                    <li>Yourmail@gmail.com</li>
                                    <li>123 New Street New City</li>
                                </ul>
                                <!-- Social Nav -->
                                <div class="social-icons">
                                    <a href="#"><span class="fa fa-facebook"></span></a>
                                    <a href="#"><span class="fa fa-twitter"></span></a>
                                    <a href="#"><span class="fa fa-google-plus"></span></a>
                                    <a href="#"><span class="fa fa-pinterest"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="column col-lg-4 col-md-12 col-sm-12">
                        <!-- Info Block -->
                        <div class="info-block">
                            <div class="block-inner">
                                <h3>Brazil</h3>
                                <ul>
                                    <li>+888 123 4567</li>
                                    <li>Yourmail@gmail.com</li>
                                    <li>123 New Street New City</li>
                                </ul>
                                <!-- Social Nav -->
                                <div class="social-icons">
                                    <a href="#"><span class="fa fa-facebook"></span></a>
                                    <a href="#"><span class="fa fa-twitter"></span></a>
                                    <a href="#"><span class="fa fa-google-plus"></span></a>
                                    <a href="#"><span class="fa fa-pinterest"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <!-- End Contact Info Section -->
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
