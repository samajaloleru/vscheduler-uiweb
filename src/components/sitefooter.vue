<template>
    <footer class="main-footer">
		<div class="auto-container">
			<div class="button-box wow bounce" data-wow-delay="0ms" data-wow-duration="1500ms">
				<router-link class="theme-btn btn-style-four" to="/signup">Sign In</router-link>
			</div>
            <div class="widgets-section">
            	<div class="clearfix row justify-content-center">
					
                    <div class="footer-column col-3">
                    	<div class="footer-widget links-widget">
							<h2>ABOUT</h2>
							<p class="footer-list">vScheduler is the most comprehensive system for end-to-end Visitor Management & Access Control.</p>
						</div>
					</div>
					
                    <div class="footer-column col-2">
                    	<div class="footer-widget links-widget">
							<h2>RESOURCES</h2>
							<ul class="footer-list">
								<li><router-link to="/">Get Started</router-link></li>
								<li><router-link to="/faq">FAQ</router-link></li>
								<li><router-link to="/">Support</router-link></li>
							</ul>
						</div>
					</div>
					
                    <div class="footer-column col-2">
                    	<div class="footer-widget links-widget">
							<h2>TERMS</h2>
							<ul class="footer-list">
								<li><router-link to="/privacy">Privacy Policy</router-link></li>
								<li><router-link to="/term">Terms of Service</router-link></li>
								<li><router-link to="/security">Security Practices</router-link></li>
							</ul>
						</div>
					</div>

                    <div class="footer-column col-2">
                    	<div class="footer-widget links-widget">
							<h2>CONTACT</h2>
							<ul class="footer-list">
								<li>234 809 310 7121</li>
								<li>234 809 310 7125</li>
								<li>sales@vscheduler.com</li>
								<li>North Carolina, USA</li>
							</ul>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		
		<div class="footer-bottom">
			<div class="auto-container">
				<div class="logo">
					<a href="index.html"><img src="@/assets/img/logo.png" style="width: 70px" alt="" /></a>
				</div>

				<div class="copyright">Copyright © {{date}} Vscheduler . All Rights Reserved.</div>

				<div class="social-nav">
					<a href="#"><span class="fa fa-facebook"></span></a>
					<a href="#"><span class="fa fa-twitter"></span></a>
					<a href="#"><span class="fa fa-google-plus"></span></a>
					<a href="#"><span class="fa fa-pinterest"></span></a>
					<a href="#"><span class="fa fa-dribbble"></span></a>
				</div>
			</div>
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