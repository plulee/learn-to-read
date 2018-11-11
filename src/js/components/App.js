import React from "react";
import ErrorBoundary from "react-error-boundary";
import words from "../constants/words";
import Letters from "./Letters";

const App = () =>  (
    <div className="container">
        <ErrorBoundary>
            <h1>Learn to read</h1>
            <section className="products">
                {words.map(word =>
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

export default App;
