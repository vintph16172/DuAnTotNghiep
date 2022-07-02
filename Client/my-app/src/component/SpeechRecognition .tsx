import React, { useRef, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';

type Props = {

}


const SpeechRecognition = (props: Props) => {
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const [isListening, setIsListening] = useState(false);
    const microphoneRef = useRef<HTMLDivElement>(null);
    if (!browserSupportsSpeechRecognition) {
        return (
            <div className="mircophone-container">
                Browser is not Support Speech Recognition.
            </div>
        );
    }
    // const handleListing = () => {
    //     setIsListening(true);
    //     microphoneRef.current?.classList.add("listening");
    //     SpeechRecognition.startListening({
    //         continuous: true,
    //     });
        
    // };
    // const stopHandle = () => {
    //     setIsListening(false);
    //     microphoneRef.current?.classList.remove("listening");
    //     SpeechRecognition.stopListening();
    // };
    // const handleReset = () => {
    //     stopHandle();
    //     resetTranscript();
    // };
    return (
        <div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        {/* <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div>
        // <div className="microphone-wrapper">
        //     <div className="mircophone-container">
        //         <div
        //             className="microphone-icon-container"
        //             ref={microphoneRef}
        //             onClick={handleListing}
        //         >
        //             Speech
        //         </div>
        //         <div className="microphone-status">
        //             {isListening ? "Listening........." : "Click to start Listening"}
        //         </div>
        //         {isListening && (
        //             <button className="microphone-stop btn" onClick={stopHandle}>
        //                 Stop
        //             </button>
        //         )}
        //     </div>
        //     {transcript && (
        //         <div className="microphone-result-container">
        //             <div className="microphone-result-text">{transcript}</div>
        //             <button className="microphone-reset btn" onClick={handleReset}>
        //                 Reset
        //             </button>
        //         </div>
        //     )}
        // </div>
    )}

export default SpeechRecognition 