import React, { useState } from 'react'
import { ReactMic } from 'react-mic';
import styles from './Microphone.module.css'


function Microphone() {
    const [record, setRecord] = useState<boolean>(false);
    const [blob, setBlob] = useState<Blob>();

    const startStopRecording = () => {
        setRecord(!record);

        if (record) {
            // console.log(blob);
        }
    }

    const onData = (recordedBlob: any) => {
        // console.log('chunk of real-time data is: ', recordedBlob);
    }

    const onStop = (recordedBlob: any) => {
        // console.log('recordedBlob is: ', recordedBlob);
        setBlob(recordedBlob);
    }

    return (
        <>
            <div className={styles.container} >
                <ReactMic
                    record={record}
                    className={styles.canvas}
                    onStop={onStop}
                    onData={onData}
                    strokeColor="#000000"
                    backgroundColor="blue"
                />

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <button className={styles.mic_button} onClick={startStopRecording} type="button"><i className="fa fa-microphone" style={{ fontStyle: "font-size:36px" }}></i></button>

            </div>
        </>
    )
}

export default Microphone


//record = { boolean }         // defaults -> false.  Set to true to begin recording
// pause = { boolean }          // defaults -> false (available in React-Mic-Gold)
// visualSetting = "sinewave" // defaults -> "sinewave".  Other option is "frequencyBars"
// className = { string }       // provide css class name
// onStop = { function}        // required - called when audio stops recording
// onData = { function}        // optional - called when chunk of audio data is available
// onBlock = { function}       // optional - called if user selected "block" when prompted to allow microphone access (available in React-Mic-Gold)
// strokeColor = { string }     // sinewave or frequency bar color
// backgroundColor = { string } // background color
// mimeType = "audio/webm"     // defaults -> "audio/webm".  Set to "audio/wav" for WAV or "audio/mp3" for MP3 audio format (available in React-Mic-Gold)
// echoCancellation = { boolean } // defaults -> false
// autoGainControl = { boolean }  // defaults -> false
// noiseSuppression = { boolean } // defaults -> false
// channelCount = { number }     // defaults -> 2 (stereo).  Specify 1 for mono.
// bitRate = { 256000}          // defaults -> 128000 (128kbps).  React-Mic-Gold only.
// sampleRate = { 96000}        // defaults -> 44100 (44.1 kHz).  It accepts values only in range: 22050 to 96000 (available in React-Mic-Gold)
// timeSlice = { 3000}          // defaults -> 4000 milliseconds.  The interval at which captured audio is returned to onData callback (available in React-Mic-Gold).