import React, { useEffect, useRef, useState } from 'react'

function ToggleCard({ title, children }) {
    const [isShow, setIsShow] = useState(true)
    const contentRef = useRef(null)
    const contentHeight = useRef(null)

    useEffect(() => {
        contentHeight.current = contentRef.current.clientHeight
        setIsShow(false)
    }, [])

    return (
        <div
            onClick={() => {
                setIsShow(!isShow)
            }}
            data-aos="fade-up"
            className="detailCard align-items-center col-12 col-lg-11 col-xxl-10"
        >
            <div className="label">
                <h3 className="tg-label">{title}</h3>
                <div className="plusBtn" />
            </div>
            <div
                ref={contentRef}
                className="content"
                style={{
                    height: isShow ? contentHeight.current + 'px' : '0px',
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default ToggleCard
