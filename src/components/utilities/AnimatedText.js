import React from 'react';
import { FloatingLettersTextBuilder } from 'react-animated-text-builders'

const AnimatedText = () => {
    return (
        <div className="text-5xl text-white font-bold">
            <FloatingLettersTextBuilder
                floatingSpeed={500}
                lettersAppearanceDelay={500}
                animationMaxMargin={"50px"}
                animationMinMargin={"0px"}
            >SportoFista</FloatingLettersTextBuilder>
        </div>
    );
};

export default AnimatedText;