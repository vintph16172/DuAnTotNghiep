import React from 'react';
import 'regenerator-runtime'
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const appId = '8048b4dd-a8e2-4547-88d2-0405420e90f1';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const Test = () => {
    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable
    } = useSpeechRecognition();
    const startListening = () => SpeechRecognition.startListening({ continuous: true });
    console.log(transcript);
    console.log(listening);
    console.log(browserSupportsSpeechRecognition);
    if (!browserSupportsSpeechRecognition) {
        alert("Browser doesn't support speech recognition.")
    }
    if (!isMicrophoneAvailable) {
        alert("Browser doesn't support speech recognition when Mic is Off")
    }

    return (
        <div>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button
                onTouchStart={startListening}
                onMouseDown={startListening}
                onTouchEnd={SpeechRecognition.stopListening}
                onMouseUp={SpeechRecognition.stopListening}
            >Hold to talk</button>
            <p>{transcript}</p>
        </div>
    );
};
export default Test;