import React, { useEffect, useState } from 'react'
import './homePage.scss'
import heroBannerM from 'images/herobanner-m.jpg'
import ttmLogo from 'images/ttm-logo-txt-white.png'
import flagTh from 'images/flag-th.svg'
import seatMapThumb from 'images/seatmap-thumb.jpg'
import seatMap from 'images/seatmap.jpg'
import { Fancybox } from '@fancyapps/ui/'

let maxFilter = 14.3
let maxOpacity = 1.43
let maxFilterScrollY = 140
let activeHeaderScrollY = 400

function HomePage() {
    const [bgEffect, setBgEffect] = useState({
        filter: 0,
        opacity: 0,
    })
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isActiveHeader, setIsActiveHeader] = useState(false)

    useEffect(() => {
        function calBgFilterAndOpacity() {
            const scrollY =
                window.scrollY > maxFilterScrollY
                    ? maxFilterScrollY
                    : window.scrollY
            setBgEffect({
                filter: (maxFilter * scrollY) / maxFilterScrollY,
                opacity: (maxOpacity * scrollY) / maxFilterScrollY,
            })
        }

        function handleScrollY() {
            if (window.scrollY < maxFilterScrollY) {
                calBgFilterAndOpacity()
            }

            if (window.scrollY > activeHeaderScrollY) {
                setIsActiveHeader(true)
            } else {
                if (isActiveHeader) {
                    setIsActiveHeader(false)
                }
            }
        }

        calBgFilterAndOpacity()
        window.addEventListener('scroll', handleScrollY)
        return () => window.removeEventListener('scroll', handleScrollY)
    }, [isActiveHeader])

    function showFancyBox() {
        Fancybox.show([
            {
                src: seatMap,
                type: 'image',
            },
        ])
    }

    return (
        <div className="home-page">
            <div className="bgImage" />

            <header className={`header ${isActiveHeader && 'active'}`}>
                <div className="navBar">
                    <div
                        onClick={() => {
                            setIsOpenMenu(!isOpenMenu)
                        }}
                        className="menuBtn d-lg-none"
                    >
                        <div className={`menu ${!isOpenMenu && 'active'}`} />
                        <div className={`close ${isOpenMenu && 'active'}`} />
                    </div>
                    <a href="/" className="tggLogo">
                        <img src={ttmLogo} alt="" />
                    </a>

                    <div
                        className={`midSection d-lg-flex ${
                            isOpenMenu && 'active'
                        }`}
                    >
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

            <img className="bannerImage d-lg-none" src={heroBannerM} alt="" />
            <div
                style={{ filter: `blur(${bgEffect.filter}px)` }}
                className="fixBannerImage d-none d-lg-block"
            />
            <div
                style={{ opacity: bgEffect.opacity }}
                className="bgOpacity d-none d-lg-block"
            />
            <section className="emptySection d-none d-lg-block" />

            <div className="container textWrapper">
                <div className="col-12 col-lg-10 introContainer">
                    <h1 className="text1" data-aos="fade-up">
                        หลังจากขายบัตรหมดเกลี้ยงทั้งสองรอบที่เกาหลี BLACKPINK
                        ประกาศเวิดล์ทัวร์ใหญ่ ‘THE BORN PINK WORLD TOUR’
                        พร้อมบุก 42 เมืองใหญ่ทั่วโลก บลิงก์ไทยเตรียมฟินได้เลย
                        7-8 มกราคม 2566 ที่สนามศุภชลาศัย
                    </h1>
                    <h2 className="text2 h5" data-aos="fade-up">
                        BLINK Membership Pre-Sale เริ่ม 16 พฤศจิกายน 10.00 -
                        22.00 น. สามารถสมัคร BLINK Membership
                        เพื่อรับสิทธิ์พรีเซลล์ได้ทาง Weverse ตั้งแต่วันนี้ ถึง
                        30 ตุลาคม เวลา 13.00 น. Live Nation Pre-Sale 17
                        พฤศจิกายน 10.00 - 22.00 น. สมัครสมาชิกเลยที่
                        livenation.co.th และเปิดจำหน่ายบัตรรอบทั่วไป 18
                        พฤศจิกายนนี้ ตั้งแต่ 10.00 น. เป็นต้นไป
                    </h2>
                    <div
                        data-aos="fade-up"
                        className="youtube-video ratio ratio-16x9 mt-3 mt-lg-5 mb-3"
                    >
                        <iframe
                            title="=Black Pink"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            src="https://www.youtube.com/embed/988Ib209R3I?rel=0&autoplay=1?rel=0&amp;showinfo=0"
                        ></iframe>
                    </div>
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
                            <a
                                className={`btnMain col-auto btn btn-main`}
                                href="/"
                            >
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
                            <a
                                className="btnMain col-auto btn btn-main"
                                href="/"
                            >
                                <span>เปิดจำหน่าย</span>
                                <span>เร็วๆ นี้</span>
                            </a>
                        </div>
                    </div>
                    <div className="pinkLine" data-aos="fade-up" />
                </div>

                <div className="pre-sale">
                    <div data-aos="fade-up">
                        <h2>วันพรีเซลล์</h2>
                        <div className="my-3">
                            <strong>BLINK MEMBERSHIP EARLY BIRD PRESALE</strong>
                            <div>16 พฤศจิกายน 2565, 10.00 น, – 22.00 น.</div>
                        </div>
                        <div className="my-3">
                            <strong>BLINK MEMBERSHIP PRESALE</strong>
                            <div>16 พฤศจิกายน 2565, 11.00 น, – 22.00 น.</div>
                        </div>
                        <div className="my-3">
                            <strong>LIVE NATION TERO MEMBER PRESALE</strong>
                            <div>17 พฤศจิกายน 2565, 10.00 น, – 22.00 น.</div>
                        </div>
                    </div>

                    <div className="pinkLine" data-aos="fade-up" />

                    <div data-aos="fade-up">
                        <h2>วันเปิดจำหน่าย</h2>
                        <div>วันศุกร์ที่ 18 พฤศจิกายน 2565, 10:00 น.</div>
                    </div>
                    <div className="pinkLine" data-aos="fade-up" />
                    <div data-aos="fade-up">
                        <h2>ประตูเปิด</h2>
                        <div>ก่อนการแสดงเริ่มประมาณ 1 ชม.</div>
                    </div>
                    <div className="pinkLine" data-aos="fade-up" />
                </div>

                <div className="col-lg-10" data-aos="fade-up">
                    <h2>ผังที่นั่ง</h2>
                    <div className="bg-black rounded">
                        <div
                            className="rounded-top d-block hv-img-zoom"
                            onClick={showFancyBox}
                        >
                            <img
                                className="mx-auto"
                                src={seatMapThumb}
                                alt=""
                            />
                        </div>
                        <a
                            href="https://goo.gl/maps/a3bLS7c2XdmUutY67"
                            className="place-link d-block text-white p-3 text-center text-muted"
                        >
                            สนามกีฬาแห่งชาติ (สนามศุภชลาศัย)
                        </a>
                    </div>
                </div>

                <div className="col-lg-10 py-5" data-aos="fade-up">
                    <h2>รายละเอียด</h2>
                </div>

                <div style={{ height: '100vh' }}></div>
            </div>
        </div>
    )
}

export default HomePage
