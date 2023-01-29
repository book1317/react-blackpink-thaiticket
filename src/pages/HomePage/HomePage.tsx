import React, { useEffect, useState } from 'react'
import { Fancybox } from '@fancyapps/ui/'
import heroBannerM from 'images/herobanner-m.jpg'
import ttmLogo from 'images/ttm-logo-txt-white.png'
import flagTh from 'images/flag-th.svg'
import seatMapThumb from 'images/seatmap-thumb.jpg'
import seatMap from 'images/seatmap.jpg'
import ToggleCard from './component/ToggleCard/ToggleCard'
import './homePage.scss'

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
    const [currentSection, setCurrentSection] = useState('')
    const introElem = document.getElementById('intro')
    const ticketElem = document.getElementById('ticket')
    const detailElem = document.getElementById('detail')

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

        function setCurrentMenu() {
            const ticketScroll = ticketElem?.getBoundingClientRect().top
            const detailScroll = detailElem?.getBoundingClientRect().top

            if (detailScroll < 50) {
                setCurrentSection('detail')
            } else if (ticketScroll < 50) {
                setCurrentSection('ticket')
            } else {
                setCurrentSection('intro')
            }
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

            setCurrentMenu()
        }

        calBgFilterAndOpacity()
        setCurrentMenu()

        window.addEventListener('scroll', handleScrollY)
        return () => window.removeEventListener('scroll', handleScrollY)
    }, [isActiveHeader, ticketElem, detailElem])

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
                        <button
                            className={`midBtn ${
                                currentSection === 'intro' && 'active'
                            }`}
                            onClick={() => {
                                introElem.scrollIntoView()
                                setCurrentSection('intro')
                            }}
                        >
                            BORN PINK
                        </button>
                        <button
                            className={`midBtn ${
                                currentSection === 'ticket' && 'active'
                            }`}
                            onClick={() => {
                                ticketElem.scrollIntoView()
                                setCurrentSection('ticket')
                            }}
                        >
                            ซื้อบัตร
                        </button>
                        <button
                            className={`midBtn ${
                                currentSection === 'detail' && 'active'
                            }`}
                            onClick={() => {
                                detailElem.scrollIntoView()
                                setCurrentSection('detail')
                            }}
                        >
                            รายละเอียด
                        </button>
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
            <section className="emptySection d-none d-lg-block" id="intro" />

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
                </div>

                <div className="pinkLine mb-0" data-aos="fade-up" />

                <div className="pt-3" id="ticket">
                    <div className="dateContainer pt-5" id="ticket">
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
                            <div>16 พฤศจิกายน 2565, 11.00 น, - 22.00 น.</div>
                        </div>
                        <div className="my-3">
                            <strong>LIVE NATION TERO MEMBER PRESALE</strong>
                            <div>17 พฤศจิกายน 2565, 10.00 น, - 22.00 น.</div>
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

                <div className="col-12 col-xl-5" data-aos="fade-up">
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

                <div id="detail" className="pt-4">
                    <div className="container py-5 row justify-content-center">
                        <div className="col-lg-10" data-aos="fade-up">
                            <h1>รายละเอียด</h1>
                        </div>
                        <ToggleCard title={'แพคเกจ VIP'}>Hello</ToggleCard>
                        <ToggleCard title={'Blink Membership Presale'}>
                            Hello
                        </ToggleCard>
                        <ToggleCard title={'Live Nation Tero Members Pre-Sale'}>
                            Hello
                        </ToggleCard>
                        <ToggleCard title={'เปิดจำหน่ายบัตรทั่วไป'}>
                            Hello
                        </ToggleCard>
                        <ToggleCard title={'เงื่อนไขการซื้อบัตร'}>
                            Hello
                        </ToggleCard>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3 col-xl-4 d-none d-lg-block">
                            <address className="box-address">
                                <a className="ttm-logo" href="/">
                                    <img
                                        src="https://www.thaiticketmajor.com/assets/img/ttm-logo-dark.png"
                                        alt="THAITICKETMAJOR"
                                    />
                                </a>
                                <p>
                                    <span className="txtMed">
                                        บริษัท ไทยทิคเก็ตเมเจอร์ จำกัด
                                    </span>
                                </p>
                                <p>
                                    3199 อาคารมาลีนนท์ทาวเวอร์ ชั้น 27,
                                    ถนนพระราม 4,
                                    <br />
                                    แขวงคลองตัน, เขตคลองเตย, กรุงเทพฯ 10110{' '}
                                </p>
                                <p>
                                    โทร : 02-262-3456 <br />
                                    อีเมล :{' '}
                                    <a href="mailto:cs@thaiticketmajor.com">
                                        cs@thaiticketmajor.com
                                    </a>
                                </p>
                            </address>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="menu-group">
                                <h3 className="menu-head">ไทยทิคเก็ตเมเจอร์</h3>
                                <div className="menu-list">
                                    <div className="menu-item">
                                        <a
                                            href="/about-us.php"
                                            title="เกี่ยวกับเรา"
                                        >
                                            เกี่ยวกับเรา
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a
                                            target="_blank"
                                            href="/policies.php"
                                            title="เงื่อนไขการใช้บริการ"
                                        >
                                            เงื่อนไขการใช้บริการ
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a
                                            target="_blank"
                                            href="/outlet-location.php"
                                            title="จุดจำหน่าย"
                                        >
                                            จุดจำหน่าย
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a
                                            target="_blank"
                                            href="/advertisement.php"
                                            title="ติดต่อลงโฆษณา"
                                        >
                                            ติดต่อลงโฆษณา
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a
                                            target="_blank"
                                            href="/job.php"
                                            title="ร่วมงานกับเรา"
                                        >
                                            ร่วมงานกับเรา
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="menu-group">
                                <h3 className="menu-head">บริการ</h3>
                                <div className="menu-list">
                                    <div className="menu-item">
                                        <a href="/all-event/" title="งานแสดง">
                                            ทุกงานแสดง
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a
                                            target="_blank"
                                            href="/travel/"
                                            title="ท่องเที่ยว &amp; การเดินทาง"
                                        >
                                            ท่องเที่ยว &amp; การเดินทาง
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a
                                            href="http://shopping.thaiticketmajor.com/"
                                            title="ช็อปปิ้ง"
                                        >
                                            สินค้าที่ระลึก
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a
                                            target="_blank"
                                            href="/variety/"
                                            title="ข่าวสาร"
                                        >
                                            วาไรตี้
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a href="/promotion/" title="โปรโมชั่น">
                                            โปรโมชั่น
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="menu-group">
                                <h3 className="menu-head">ช่วยเหลือ</h3>
                                <div className="menu-list">
                                    <div className="menu-item">
                                        <a
                                            target="_blank"
                                            href="/contact-us.php"
                                            title="ติดต่อเรา"
                                        >
                                            ติดต่อเรา
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a
                                            target="_blank"
                                            href="/faq.php"
                                            title="คำถามที่พบบ่อย"
                                        >
                                            คำถามที่พบบ่อย
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a
                                            target="_blank"
                                            href="/how-to-pay.php"
                                            title="วิธีการชำระเงิน"
                                        >
                                            วิธีการชำระเงิน
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a
                                            href="/ajax/popup-feedback.php"
                                            className="btn-popup-ajax"
                                            title="ติชม/แจ้งปัญหาการใช้งาน"
                                        >
                                            ติชม/แจ้งปัญหาการใช้งาน
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a
                                            href="/regis/unsub.htm"
                                            title="สมัคร/ยกเลิกรับข่าวสาร"
                                        >
                                            สมัคร/ยกเลิกรับข่าวสาร
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 col-xl-2">
                            <div className="contact-group">
                                <p>
                                    <span className="d-inline-block d-lg-block">
                                        <small className="d-none d-lg-block">
                                            โทร
                                        </small>
                                        <i
                                            className="fa fa-phone d-inline-block d-lg-none"
                                            aria-hidden="true"
                                        ></i>
                                        <span className="txt-callcenter">
                                            <a href="tel:022623456">
                                                02-262-3456
                                            </a>
                                        </span>
                                    </span>
                                    <span className="d-inline-block d-lg-none">
                                        <i
                                            className="fa fa-envelope ml-1"
                                            aria-hidden="true"
                                        ></i>
                                        <span>
                                            <a href="mailto:callcenter@thaiticketmajor.com">
                                                callcenter@thaiticketmajor.com
                                            </a>
                                        </span>
                                    </span>
                                </p>
                                <p className="box-social">
                                    <a
                                        className="item"
                                        title="Facbook Fanpage"
                                        href="https://www.facebook.com/ThaiTicketMajor"
                                    >
                                        <img
                                            src="https://www.thaiticketmajor.com/assets/img/icon/facebook-circle.svg"
                                            alt="Facebook"
                                        />
                                    </a>
                                    <a
                                        className="item"
                                        title="Twitter"
                                        href="https://twitter.com/#!/ThaiTicketMajor"
                                    >
                                        <img
                                            src="https://www.thaiticketmajor.com/assets/img/icon/twitter-circle.svg"
                                            alt="Twitter"
                                        />
                                    </a>
                                    <a
                                        className="item"
                                        title="Line"
                                        href="https://line.me/R/ti/p/%40gaw9520p"
                                    >
                                        <img
                                            src="https://www.thaiticketmajor.com/assets/img/icon/line-circle.svg"
                                            alt="Line"
                                        />
                                    </a>
                                    <a
                                        className="item"
                                        title="Instagram"
                                        href="https://instagram.com/thaiticketmajor"
                                    >
                                        <img
                                            src="https://www.thaiticketmajor.com/assets/img/icon/instagram-circle.svg"
                                            alt="Instagram"
                                        />
                                    </a>
                                    <a
                                        className="item"
                                        title="Youtube"
                                        href="https://www.youtube.com/channel/UCIIP01HQDYGpc4qxNsqTMjw"
                                    >
                                        <img
                                            src="https://www.thaiticketmajor.com/assets/img/icon/youtube-circle.svg"
                                            alt="Youtube"
                                        />
                                    </a>
                                </p>
                                <p>
                                    <small className="copyright">
                                        © 2023 <a href="/">ไทยทิคเก็ตเมเจอร์</a>
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
