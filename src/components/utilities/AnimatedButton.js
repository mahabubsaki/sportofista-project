import { animated, useSpring } from '@react-spring/web'
import { useState } from 'react'

const AnimatedButton = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { backgroundColor: '#55D8C1' },
        from: { backgroundColor: '#005555' },
        reset: true,
        reverse: flip,
        delay: 500,
        onRest: () => set(!flip),
    })
    return <animated.button className="p-3 rounded-lg" style={props}><a href="#mini-inventory">Explore More</a></animated.button>
}
export default AnimatedButton