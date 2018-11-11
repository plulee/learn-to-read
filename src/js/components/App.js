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
        const wordUrl = words[index].url;
        const wordText = words[index].text;

        return (
            <div className="container">
                <ErrorBoundary>
                    <h1>Learn to read - {this.props.pointsCount}</h1>
                    <section className="products">
                        <Letters
                            key = {wordId}
                            url = {wordUrl}
                            text = {wordText}
                        />
                    </section>
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;
