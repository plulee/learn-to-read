import React from "react";
import ErrorBoundary from "react-error-boundary";
import words from "../constants/words";
import Letters from "./Letters";

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
            active: false,
            words
        };
    }

    render() {
        return (
            <div className="container">
                <ErrorBoundary>
                    <h1>Learn to read</h1>
                    <section className="products">
                        {this.state.words.map(word =>
                            (
                                <Letters
                                    key = {word.id}
                                    url = {word.url}
                                    text = {word.text}
                                />
                            )
                        )}
                    </section>
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;
