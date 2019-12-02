<template>
  <section class="">
    <div class="preloader"></div>
    <siteheader/>
    
    <!--Form Back Drop-->
    <div class="form-back-drop"></div>
    
    <!--Appointment Box-->
    <section class="appointment-box">
    	<div class="inner-box">
            <div class="cross-icon"><span class="flaticon-cancel-1"></span></div>
            <div class="title">
                <h2>Get Appointment</h2>
                <div class="separator"></div>
            </div>
            
            <!--Appointment Form-->
            <div class="appointment-form">
                <form method="post" action="http://t.commonsupport.com/alfena/contact.html">

                    <div class="form-group">
                        <input type="text" name="text" value="" placeholder="Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" value="" placeholder="Email Address" required>
                    </div>
                    <div class="form-group">
                        <input type="text" name="phone" value="" placeholder="Phone no." required>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="theme-btn btn-style-one">Submit now</button>
                    </div>
                    
                </form>
            </div>
            
            <!--Contact Info Box-->
            <div class="contact-info-box">
            	<ul class="info-list">
                	<li>alfena@yousite.com</li>
                    <li>+(000) 000 0000</li>
                </ul>
                <ul class="social-list clearfix">
                	<li><a href="#">Facebook</a></li>
                    <li><a href="#">Linkedin</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Google +</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
            
        </div>
    </section>
    <!--End Consulting Form-->
    
    <!--Main Banner-->
    <section class="main-banner">
    	<div class="bg-round-layer"></div>
        
    	<div class="auto-container">
			<div class="row clearfix">
            	
                <!--Content Column-->
                <div class="content-column col-lg-6 col-md-12 col-sm-12">
                	<div class="inner-column wow slideInLeft">
                    	<h2>Your Digital<br> Marketing Solution</h2>
                        <div class="text">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.leveling customer service .</div>
                        <a href="#" class="theme-btn btn-style-two">Explore Now <span class="icon flaticon-next-3"></span></a>
                    </div>
                </div>
                <!--Image Column-->
                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                	<div class="inner-column">
						<div class="image paroller" data-paroller-factor="-0.15" data-paroller-factor-lg="-0.15" data-paroller-factor-md="-0.15" data-paroller-factor-sm="-0.15" data-paroller-type="foreground" data-paroller-direction="horizontal">
							<img src="@/assets/img/resource/mokeup-1.png" alt="" />
						</div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <!--End Main Banner-->
    
    <!-- Services Section -->
    <section class="services-section">
      <div class="auto-container">
        <!-- Sec Title -->
        <div class="sec-title centered">
          <h2>The only app you will need</h2>
        </div>
        
        <div class="row clearfix">
          
          <!-- Services Block -->
          <div class="services-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div class="icon-box">
                <span class="icon flaticon-locked"></span>
              </div>
              <h3><a href="feature.html">Safty</a></h3>
              <div class="text">Efficiently unleash cross-media information without.</div>
            </div>
          </div>
          
          <!-- Services Block -->
          <div class="services-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div class="icon-box">
                <span class="icon flaticon-speed-meter"></span>
              </div>
              <h3><a href="feature.html">Quick Access</a></h3>
              <div class="text">Efficiently unleash cross-media information without.</div>
            </div>
          </div>
          
          <!-- Services Block -->
          <div class="services-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div class="icon-box">
                <span class="icon flaticon-heart"></span>
              </div>
              <h3><a href="feature.html">Easily manage</a></h3>
              <div class="text">Efficiently unleash cross-media information without.</div>
            </div>
          </div>
          
          <!-- Services Block -->
          <div class="services-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
              <div class="icon-box">
                <span class="icon flaticon-like-1"></span>
              </div>
              <h3><a href="feature.html">24h Support</a></h3>
              <div class="text">Efficiently unleash cross-media information without.</div>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
    <!-- End Services Section -->
  </section>
</template>

<script type="text/javascript">
import { HTTP } from "@/common";
import { checkRedirect } from "@/common";
import siteheader from "@/components/generic/siteheader";
import sitefooter from "@/components/sitefooter";

export default {
  components: {
    siteheader,
    sitefooter
  },
  data() {
    return {
      lLoading: true,
      notifications: [],
      username: "",
      password: "",
      IsCompany: true,
      hoverMember:false,
    };
  },
  methods: {
    goToPage() {
      if (this.IsCompany) {
        this.$router.push({ name: "companies" });
      } else {
        this.$router.push({ name: "vendors" });
      }
    },
    keyUp(event) {
      if (event.code == "Enter") {
        this.login();
      }
    },
    login() {
      HTTP.post(
        "/api/login",
        {
          username: this.username,
          password: this.password
        },
        {
          withCredentials: true
        }
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