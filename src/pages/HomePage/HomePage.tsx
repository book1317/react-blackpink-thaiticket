import React from 'react'
// import css from './homePage.module.scss'
import './homePage.scss'
import heroBanner from 'images/herobanner.jpg'
import ttmLogo from 'images/ttm-logo-txt-white.png'
import flagTh from 'images/flag-th.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimes, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import NaveBar from 'component/NaveBar/NavBar'
// import Section from 'component/Section/Section'
// import Footer from 'component/Footer/Footer'
// import ProductCard from 'component/ProductCard/ProductCard'
// import CloseButton from 'component/CloseButton/CloseButton'

function HomePage() {
    return (
        <div className="home-page">
            <header className="header">
                <div className="navBar">
                    <a href="/" className="tggLogo">
                        <img src={ttmLogo} alt="" />
                    </a>

                    <div className="midSection">
                        <a className="midBtn active" href="/">
                            BORN PINK
                        </a>
                        <a className="midBtn" href="/">
                            ซื้อบัตร
                        </a>
                        <a className="midBtn" href="/">
                            รายละเอียด
                        </a>
                    </div>

                    <div className="right-section align-items-center">
                        <div className="col">
                            <div className="btn-lang">
                                <span>
                                    <img src={flagTh} alt="" />
                                </span>
                                <span className="text">ไทย</span>
                            </div>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <button className="loginBtn">เข้าสู่ระบบ</button>
                        </div>
                    </div>
                </div>
            </header>

            {/* <img className="bgImage" src={heroBanner} alt="" /> */}
            <div className="fixBgImage" />

            <section className="emptySection" />

            <div className="textWrapper">
                <div className="introContainer">
                    <h1 className="text1" data-aos="fade-up">
                        หลังจากขายบัตรหมดเกลี้ยงทั้งสองรอบที่เกาหลี BLACKPINK
                        ประกาศเวิดล์ทัวร์ใหญ่ ‘THE BORN PINK WORLD TOUR’
                        พร้อมบุก 42 เมืองใหญ่ทั่วโลก บลิงก์ไทยเตรียมฟินได้เลย
                        7-8 มกราคม 2566 ที่สนามศุภชลาศัย
                    </h1>
                    <h2 className="text2" data-aos="fade-up">
                        BLINK Membership Pre-Sale เริ่ม 16 พฤศจิกายน 10.00 -
                        22.00 น. สามารถสมัคร BLINK Membership
                        เพื่อรับสิทธิ์พรีเซลล์ได้ทาง Weverse ตั้งแต่วันนี้ ถึง
                        30 ตุลาคม เวลา 13.00 น. Live Nation Pre-Sale 17
                        พฤศจิกายน 10.00 - 22.00 น. สมัครสมาชิกเลยที่
                        livenation.co.th และเปิดจำหน่ายบัตรรอบทั่วไป 18
                        พฤศจิกายนนี้ ตั้งแต่ 10.00 น. เป็นต้นไป
                    </h2>
                    <div className="pinkLine" data-aos="fade-up" />
                </div>

                <div className="dateContainer">
                    <h2 data-aos="fade-up">วันที่แสดง</h2>

                    <div className="row justify-content-center">
                        <div
                            data-aos="fade-up"
                            className="dateItem inner py-1 px-3 row align-items-center"
                        >
                            <div className="col">
                                <p className="ticketText">
                                    วันเสาร์ที่ 7 มกราคม 2566
                                </p>
                            </div>
                            <a className={`btnMain col-auto btn btn-main`}>
                                ซื้อบัตร
                            </a>
                        </div>

                        <div
                            data-aos="fade-up"
                            className="dateItem inner py-1 px-3 row align-items-center"
                        >
                            <div className="col">
                                <p className="ticketText">
                                    วันเสาร์ที่ 8 มกราคม 2566
                                </p>
                            </div>
                            <a className="btnMain col-auto btn btn-main">
                                <span>เปิดจำหน่าย</span>
                                <span>เร็วๆ นี้</span>
                            </a>
                        </div>
                    </div>
                    <div className="pinkLine" data-aos="fade-up" />
                </div>

                <div>
                    <h2>วันพรีเซลล์</h2>
                    <div>
                        <div>BLINK MEMBERSHIP EARLY BIRD PRESALE</div>
                        <div>16 พฤศจิกายน 2565, 10.00 น, – 22.00 น.</div>
                    </div>
                    <div>
                        <div>BLINK MEMBERSHIP PRESALE</div>
                        <div>16 พฤศจิกายน 2565, 11.00 น, – 22.00 น.</div>
                    </div>
                    <div>
                        <div>LIVE NATION TERO MEMBER PRESALE</div>
                        <div>17 พฤศจิกายน 2565, 10.00 น, – 22.00 น.</div>
                    </div>

                    <div>
                        <div>
                            <h2>วันพรีเซลล์</h2>
                            <div>วันศุกร์ที่ 18 พฤศจิกายน 2565, 10:00 น.</div>
                        </div>
                        <div className="pinkLine" data-aos="fade-up" />
                        <div>
                            <h2>ประตูเปิด</h2>
                            <div>ก่อนการแสดงเริ่มประมาณ 1 ชม.</div>
                        </div>
                    </div>
                </div>

                <div className="pinkLine" data-aos="fade-up" />
            </div>
        </div>
    )
}

export default HomePage
