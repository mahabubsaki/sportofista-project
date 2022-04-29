import React from 'react';
import { FloatingLettersTextBuilder } from 'react-animated-text-builders'

const AnimatedText = () => {
    return (
        <span className="text-4xl text-white font-bold">
            <FloatingLettersTextBuilder
                floatingSpeed={500}
                lettersAppearanceDelay={500}
                animationMaxMargin={"20px"}
                animationMinMargin={"0px"}
            >SportoFista</FloatingLettersTextBuilder>
        </span>
    );
};

export default AnimatedText;