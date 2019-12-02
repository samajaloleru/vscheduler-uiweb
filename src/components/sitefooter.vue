<template>
    <footer class="main-footer">
		<div class="auto-container">
			<div class="button-box wow bounce" data-wow-delay="0ms" data-wow-duration="1500ms">
				<a href="#" class="theme-btn btn-style-four">Sign Up</a>
			</div>
            <div class="widgets-section">
            	<div class="clearfix">
					
                    <div class="footer-column">
                    	<div class="footer-widget links-widget">
							<h2>Company</h2>
							<ul class="footer-list">
								<li><a href="#">Company</a></li>
								<li><a href="#">Features</a></li>
								<li><a href="#">Pricing</a></li>
							</ul>
						</div>
					</div>
					
                    <div class="footer-column">
                    	<div class="footer-widget links-widget">
							<h2>Download</h2>
							<ul class="footer-list">
								<li><a href="#">iOS</a></li>
								<li><a href="#">Android</a></li>
							</ul>
						</div>
					</div>
					
                    <div class="footer-column">
                    	<div class="footer-widget links-widget">
							<h2>Quick Link</h2>
							<ul class="footer-list">
								<li><a href="#">About</a></li>
								<li><a href="#">Blog</a></li>
								<li><a href="#">Contact</a></li>
							</ul>
						</div>
					</div>
					
                    <div class="footer-column">
                    	<div class="footer-widget links-widget">
							<h2>Support</h2>
							<ul class="footer-list">
								<li><a href="#">Documentation</a></li>
								<li><a href="#">FAQ's</a></li>
								<li><a href="#">Privacy</a></li>
							</ul>
						</div>
					</div>
					
                    <div class="footer-column">
                    	<div class="footer-widget links-widget">
							<h2>Address</h2>
							<ul class="footer-list">
								<li>(+81) 9876543210</li>
								<li>example@mail.com</li>
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