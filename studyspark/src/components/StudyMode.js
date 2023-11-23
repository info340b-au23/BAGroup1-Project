import React from "react";
import CardsView from "./CardsView";


export default function StudyMode() {
    const toggleFlip = () => {
        var flashcard = document.querySelector(".flashcard");
        flashcard.classList.toggle("flipped");
    };
    
    return (
        <body class="d-flex flex-column vh-100">
            <time id="timer" class="timer-container">
                <span id="minutes">00</span>:<span id="seconds">00</span>
            </time>

            <main class="study-set">
                <h1 class="deck-title">Deck Title/Progress</h1>

                <div class="flashcard" onclick="toggleFlip()">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">Front Content</div>
                        <div class="flashcard-back">
                            Back Content
                            <button class="progress-button incorrect-button">
                                <span class="arrow">&#8678;</span>
                                Wrong
                            </button>
                            <button class="progress-button correct-button">
                                Correct
                                <span class="arrow">&#8680;</span>
                            </button>
                        </div>
                    </div>
                </div>

                <button class="shuffle-button">Shuffle</button>
            </main>
        </body>
    );
}