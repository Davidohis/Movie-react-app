import React from 'react';
import './footer.css';

export default function FooterComponent() {
    return (
        <>
           

<footer class="new_footer_area bg_color">
            <div class="new_footer_top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft"}}>
                                <h3 class="f-title f_600 t_color f_size_18">Get to know more</h3>
                                <p>Unlimited movies, TV shows, and more.
                                  Watch anywhere. Cancel anytime.
                                  </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility: "visible", animationDelay: "0.4s", animationName: "fadeInLeft"}}>
                                <h3 class="f-title f_600 t_color f_size_18">Download</h3>
                                <ul class="list-unstyled f_list">
                                    <li>Android App</li>
                                    <li>ios App</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility: "visible", animationDelay: "0.6s", animationName: "fadeInLeft"}}>
                                <h3 class="f-title f_600 t_color f_size_18">Help</h3>
                                <ul class="list-unstyled f_list">
                                    <li>Term &amp; conditions</li>
                                    <li>Privacy</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s">
                                <h3 class="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                <div class="f_social_icon">
                                    <li class="fab fa-facebook"></li>
                                    <li class="fab fa-twitter"></li>
                                    <li class="fab fa-linkedin"></li>
                                    <li href="/" class="fab fa-pinterest"></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer_bg">
                    <div class="footer_bg_one"></div>
                    <div class="footer_bg_two"></div>
                </div>
            </div>
            <div class="footer_bottom">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-lg-6 col-sm-7">
                            <p class="mb-0 f_400">© David Igheose 2021 All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer> 
        </>
    )
}
