import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)

        // Only add cursor if not on mobile
        if (!isMobile) {
            const cursorDot = document.querySelector('.cursor-dot')
            const cursorOutline = document.querySelector('.cursor-outline')
            let mouseX = 0
            let mouseY = 0
            let outlineX = 0
            let outlineY = 0

            const animate = () => {
                let distX = mouseX - outlineX
                let distY = mouseY - outlineY
                
                outlineX += distX * 0.15
                outlineY += distY * 0.15
                
                cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`
                requestAnimationFrame(animate)
            }

            const mouseMoveHandler = (e) => {
                mouseX = e.clientX
                mouseY = e.clientY
                
                cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
                
                if (!outlineX && !outlineY) {
                    outlineX = mouseX
                    outlineY = mouseY
                }
            }

            document.addEventListener('mousemove', mouseMoveHandler)
            animate()

            // Cleanup
            return () => {
                document.removeEventListener('mousemove', mouseMoveHandler)
                window.removeEventListener('resize', checkMobile)
            }
        }
    }, [isMobile])

    if (isMobile) return null

    return (
        <>
            <div className='cursor-dot'></div>
            <div className='cursor-outline'></div>
        </>
    )
}

export default CustomCursor