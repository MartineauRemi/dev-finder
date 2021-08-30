import { merge, slideInRight, fadeIn, slideInLeft } from "react-animations"
import { keyframes } from "styled-components"

const fadeInSlideInRight = merge(fadeIn, slideInRight)
const fadeInSlideInLeft = merge(fadeIn, slideInLeft)

export const fadeInAnim = keyframes`${fadeIn}`
export const fadeInSlideInLeftAnim = keyframes`${fadeInSlideInLeft}`
export const fadeInSlideInRightAnim = keyframes`${fadeInSlideInRight}`