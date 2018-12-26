import React from "react";
import ErrorBoundary from "react-error-boundary";
import words from "../constants/words";
import Letters from "../containers/Letters";

class App extends React.Component {
    constructor(props) {
        super(props);

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

        shuffleArray(words);

        this.state = {
            words,
            index: this.props.pointsCount
        };
    }

    render() {
        const length = this.state.words.length;
        let index = this.props.pointsCount;
        index = index - length * parseInt(index/length, 10);
        const words = this.state.words;

        const wordId = words[index].id;
        const wordImage = words[index].image;
        const wordSound = words[index].sound;
        const wordText = words[index].text;

        return (
            <div className="page">
                <ErrorBoundary>
                    <header>
                        <div className="container">
                            <h1>Naumi</h1>
                            <h2>punkty <span className="points">{this.props.pointsCount}</span></h2>
                        </div>
                    </header>
                    <main className="container puzzles">
                        <Letters
                            key = {wordId}
                            image = {wordImage}
                            sound = {wordSound}
                            text = {wordText}
                        />
                    </main>
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;
