"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

const Home2WorkProcess = () => {

  return (
    <>
     <div className="home2-feature-section mb-110" id="section3">
  <div className="container">
    <div className="row g-xl-4 gy-5">
      <div className="col-xl-5">
        <div className="section-title-wrap wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="section-title2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={11} height={11} viewBox="0 0 11 11">
                <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
              </svg>
              Platforma
              <svg xmlns="http://www.w3.org/2000/svg" width={11} height={11} viewBox="0 0 11 11">
                <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
              </svg>
            </span>
            <h2>Sənədlərinizi Rəqəmsal İdarəetmənin Yeni Səviyyəsinə Qaldırın</h2>
            <p>Kağız istifadəsini 50% azaltmaq və iş axınınızı 40% sürətləndirmək üçün sənədlərinizi daha ağıllı idarə edin</p>
          </div>
        </div>
      </div>
      <div className="col-xl-7">
        <ul className="feature-list">
          <li>
            <div className="feature-card3 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="feature-content">
                    <h3>Sənəd Yaradılması</h3>
                    <p>BirDoc ilə yeni sənədlər yaratmaq asandır və sürətlidir.</p>
                    <ul>
                      <li>
                        <div className="check-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17">
                            <g>
                              <path d="M7.75396 15.9875C7.70254 15.9875 7.65167 15.9769 7.60456 15.9563C7.55744 15.9357 7.51511 15.9055 7.48021 15.8678L0.0990473 7.88347C0.0498426 7.83025 0.017223 7.76383 0.00518074 7.69235C-0.00686153 7.62086 0.00219586 7.54742 0.0312445 7.48101C0.0602931 7.4146 0.108073 7.3581 0.168736 7.31842C0.229399 7.27874 0.300314 7.2576 0.372802 7.2576H3.92568C3.97903 7.25761 4.03175 7.26906 4.08029 7.29117C4.12884 7.31329 4.17207 7.34556 4.20708 7.38581L6.67389 10.2238C6.94049 9.65391 7.45657 8.70504 8.3622 7.5488C9.70104 5.83947 12.1913 3.32557 16.452 1.0562C16.5343 1.01235 16.6301 1.00097 16.7204 1.0243C16.8108 1.04764 16.8891 1.104 16.9399 1.18225C16.9907 1.26051 17.0103 1.35496 16.9949 1.44698C16.9794 1.53899 16.93 1.62186 16.8565 1.67924C16.8402 1.69195 15.1975 2.98561 13.3069 5.35515C11.5669 7.53572 9.25389 11.1013 8.11574 15.7044C8.09574 15.7852 8.04924 15.8571 7.98365 15.9084C7.91806 15.9598 7.83715 15.9877 7.75385 15.9877L7.75396 15.9875Z" />
                            </g>
                          </svg>
                        </div>
                        <div className="content">
                          <h5>Sadə və İntuitiv İnterfeys</h5>
                          <p>İstifadəsi asan alətlər ilə sənədlərinizi tez bir zamanda yaradın.</p>
                        </div>
                      </li>
                      <li>
                        <div className="check-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17">
                            <g>
                              <path d="M7.75396 15.9875C7.70254 15.9875 7.65167 15.9769 7.60456 15.9563C7.55744 15.9357 7.51511 15.9055 7.48021 15.8678L0.0990473 7.88347C0.0498426 7.83025 0.017223 7.76383 0.00518074 7.69235C-0.00686153 7.62086 0.00219586 7.54742 0.0312445 7.48101C0.0602931 7.4146 0.108073 7.3581 0.168736 7.31842C0.229399 7.27874 0.300314 7.2576 0.372802 7.2576H3.92568C3.97903 7.25761 4.03175 7.26906 4.08029 7.29117C4.12884 7.31329 4.17207 7.34556 4.20708 7.38581L6.67389 10.2238C6.94049 9.65391 7.45657 8.70504 8.3622 7.5488C9.70104 5.83947 12.1913 3.32557 16.452 1.0562C16.5343 1.01235 16.6301 1.00097 16.7204 1.0243C16.8108 1.04764 16.8891 1.104 16.9399 1.18225C16.9907 1.26051 17.0103 1.35496 16.9949 1.44698C16.9794 1.53899 16.93 1.62186 16.8565 1.67924C16.8402 1.69195 15.1975 2.98561 13.3069 5.35515C11.5669 7.53572 9.25389 11.1013 8.11574 15.7044C8.09574 15.7852 8.04924 15.8571 7.98365 15.9084C7.91806 15.9598 7.83715 15.9877 7.75385 15.9877L7.75396 15.9875Z" />
                            </g>
                          </svg>
                        </div>
                        <div className="content">
                          <h5>Real Vaxtda Redaktə</h5>
                          <p>Sənədlərinizi real vaxtda redaktə edin və dəyişiklikləri dərhal görün.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="feature-img shadow-sm p-3 rounded">
                    <img src="assets/img/home2/1.png" alt="Sənəd Dövriyyəsi" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="feature-card3 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="feature-content">
                    <h3>Sənədləri İdarə Et və &amp; İmzala</h3>
                    <p>BirDoc ilə sənədlərinizi idarə edin və təhlükəsiz şəkildə imzalayın.</p>
                    <ul>
                      <li>
                        <div className="check-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17">
                            <g>
                              <path d="M7.75396 15.9875C7.70254 15.9875 7.65167 15.9769 7.60456 15.9563C7.55744 15.9357 7.51511 15.9055 7.48021 15.8678L0.0990473 7.88347C0.0498426 7.83025 0.017223 7.76383 0.00518074 7.69235C-0.00686153 7.62086 0.00219586 7.54742 0.0312445 7.48101C0.0602931 7.4146 0.108073 7.3581 0.168736 7.31842C0.229399 7.27874 0.300314 7.2576 0.372802 7.2576H3.92568C3.97903 7.25761 4.03175 7.26906 4.08029 7.29117C4.12884 7.31329 4.17207 7.34556 4.20708 7.38581L6.67389 10.2238C6.94049 9.65391 7.45657 8.70504 8.3622 7.5488C9.70104 5.83947 12.1913 3.32557 16.452 1.0562C16.5343 1.01235 16.6301 1.00097 16.7204 1.0243C16.8108 1.04764 16.8891 1.104 16.9399 1.18225C16.9907 1.26051 17.0103 1.35496 16.9949 1.44698C16.9794 1.53899 16.93 1.62186 16.8565 1.67924C16.8402 1.69195 15.1975 2.98561 13.3069 5.35515C11.5669 7.53572 9.25389 11.1013 8.11574 15.7044C8.09574 15.7852 8.04924 15.8571 7.98365 15.9084C7.91806 15.9598 7.83715 15.9877 7.75385 15.9877L7.75396 15.9875Z" />
                            </g>
                          </svg>
                        </div>
                        <div className="content">
                          <h5>Asan İmza Prosesi</h5>
                          <p>Asan İmza inteqrasiyası ilə sənədlərinizi qanuni və təhlükəsiz şəkildə imzalayın.</p>
                        </div>
                      </li>
                      <li>
                        <div className="check-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17">
                            <g>
                              <path d="M7.75396 15.9875C7.70254 15.9875 7.65167 15.9769 7.60456 15.9563C7.55744 15.9357 7.51511 15.9055 7.48021 15.8678L0.0990473 7.88347C0.0498426 7.83025 0.017223 7.76383 0.00518074 7.69235C-0.00686153 7.62086 0.00219586 7.54742 0.0312445 7.48101C0.0602931 7.4146 0.108073 7.3581 0.168736 7.31842C0.229399 7.27874 0.300314 7.2576 0.372802 7.2576H3.92568C3.97903 7.25761 4.03175 7.26906 4.08029 7.29117C4.12884 7.31329 4.17207 7.34556 4.20708 7.38581L6.67389 10.2238C6.94049 9.65391 7.45657 8.70504 8.3622 7.5488C9.70104 5.83947 12.1913 3.32557 16.452 1.0562C16.5343 1.01235 16.6301 1.00097 16.7204 1.0243C16.8108 1.04764 16.8891 1.104 16.9399 1.18225C16.9907 1.26051 17.0103 1.35496 16.9949 1.44698C16.9794 1.53899 16.93 1.62186 16.8565 1.67924C16.8402 1.69195 15.1975 2.98561 13.3069 5.35515C11.5669 7.53572 9.25389 11.1013 8.11574 15.7044C8.09574 15.7852 8.04924 15.8571 7.98365 15.9084C7.91806 15.9598 7.83715 15.9877 7.75385 15.9877L7.75396 15.9875Z" />
                            </g>
                          </svg>
                        </div>
                        <div className="content">
                          <h5>Düzəliş və Yenidən Yükləmə</h5>
                          <p>Sənədlərdə düzəlişlər edin və yenidən yükləyin, hər şey bir platformada.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="feature-img shadow-sm p-3 rounded">
                    <img src="assets/img/home2/2.png" alt="Sənəd Dövriyyəsi" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="feature-card3 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="feature-content">
                    <h3>Marşrutların Yaradılması və İdarə Edilməsi</h3>
                    <p>
                    Sənədlərin təsdiqi və imzalanması üçün avtomatik marşrutlar yaradın və idarə edin.</p>
                    <ul>
                      <li>
                        <div className="check-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17">
                            <g>
                              <path d="M7.75396 15.9875C7.70254 15.9875 7.65167 15.9769 7.60456 15.9563C7.55744 15.9357 7.51511 15.9055 7.48021 15.8678L0.0990473 7.88347C0.0498426 7.83025 0.017223 7.76383 0.00518074 7.69235C-0.00686153 7.62086 0.00219586 7.54742 0.0312445 7.48101C0.0602931 7.4146 0.108073 7.3581 0.168736 7.31842C0.229399 7.27874 0.300314 7.2576 0.372802 7.2576H3.92568C3.97903 7.25761 4.03175 7.26906 4.08029 7.29117C4.12884 7.31329 4.17207 7.34556 4.20708 7.38581L6.67389 10.2238C6.94049 9.65391 7.45657 8.70504 8.3622 7.5488C9.70104 5.83947 12.1913 3.32557 16.452 1.0562C16.5343 1.01235 16.6301 1.00097 16.7204 1.0243C16.8108 1.04764 16.8891 1.104 16.9399 1.18225C16.9907 1.26051 17.0103 1.35496 16.9949 1.44698C16.9794 1.53899 16.93 1.62186 16.8565 1.67924C16.8402 1.69195 15.1975 2.98561 13.3069 5.35515C11.5669 7.53572 9.25389 11.1013 8.11574 15.7044C8.09574 15.7852 8.04924 15.8571 7.98365 15.9084C7.91806 15.9598 7.83715 15.9877 7.75385 15.9877L7.75396 15.9875Z" />
                            </g>
                          </svg>
                        </div>
                        <div className="content">
                          <h5>	Avtomatik Proseslər</h5>
                          <p>İş axınını avtomatlaşdırın və təsdiqləmə proseslərini optimallaşdırın.</p>
                        </div>
                      </li>
                      <li>
                        <div className="check-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17">
                            <g>
                              <path d="M7.75396 15.9875C7.70254 15.9875 7.65167 15.9769 7.60456 15.9563C7.55744 15.9357 7.51511 15.9055 7.48021 15.8678L0.0990473 7.88347C0.0498426 7.83025 0.017223 7.76383 0.00518074 7.69235C-0.00686153 7.62086 0.00219586 7.54742 0.0312445 7.48101C0.0602931 7.4146 0.108073 7.3581 0.168736 7.31842C0.229399 7.27874 0.300314 7.2576 0.372802 7.2576H3.92568C3.97903 7.25761 4.03175 7.26906 4.08029 7.29117C4.12884 7.31329 4.17207 7.34556 4.20708 7.38581L6.67389 10.2238C6.94049 9.65391 7.45657 8.70504 8.3622 7.5488C9.70104 5.83947 12.1913 3.32557 16.452 1.0562C16.5343 1.01235 16.6301 1.00097 16.7204 1.0243C16.8108 1.04764 16.8891 1.104 16.9399 1.18225C16.9907 1.26051 17.0103 1.35496 16.9949 1.44698C16.9794 1.53899 16.93 1.62186 16.8565 1.67924C16.8402 1.69195 15.1975 2.98561 13.3069 5.35515C11.5669 7.53572 9.25389 11.1013 8.11574 15.7044C8.09574 15.7852 8.04924 15.8571 7.98365 15.9084C7.91806 15.9598 7.83715 15.9877 7.75385 15.9877L7.75396 15.9875Z" />
                            </g>
                          </svg>
                        </div>
                        <div className="content">
                          <h5>Rol Əsaslı İdarəetmə</h5>
                          <p>Müxtəlif istifadəçi rolları təyin edin və prosesləri daha səmərəli edin.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="feature-img shadow-sm p-3 rounded">
                    <img src="assets/img/home2/3.png" alt="Sənəd Dövriyyəsi" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
 
    </>
  )
}

export default Home2WorkProcess