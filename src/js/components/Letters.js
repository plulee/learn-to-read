import React from "react";
import PropTypes from "prop-types";
import alphabet from "../constants/alphabet";

class Letters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            puzzleSolved: false,
            lettersSolved: 0,
            wordLength: props.text.length
        };
    }

    handleButtonClick (buttonIndex, letter) {
        let lettersSolved = this.state.lettersSolved;
        const wordLength = this.state.wordLength;


        if (buttonIndex === lettersSolved) {
            if (Object.prototype.hasOwnProperty.call(alphabet, letter)) {
                const letterAudio = new Audio(alphabet[letter].sound);
                letterAudio.play();
            }
            lettersSolved++;
            const puzzleSolved = (wordLength === lettersSolved);
            if (puzzleSolved) {
                const wordAudio = new Audio(this.props.sound);
                setTimeout(
                    function(){
                        wordAudio.play();
                    }, 500);
            }
            this.setState({ lettersSolved, puzzleSolved });
        } else {
            if (this.state.puzzleSolved) {
                this.props.puzzleSolved();
            }
        }
    }

    setImageClass() {
        const puzzleSolved = this.state.puzzleSolved;
        const lettersSolved = this.state.lettersSolved;
        const wordLength = this.state.wordLength;

        let classModifier = "unsolved";

        if (puzzleSolved) {
            classModifier = "word-solved";
        } else if (lettersSolved > 0) {
            classModifier = `${lettersSolved}-${wordLength}`;
        }

        const imageClass = "puzzle__image";
        return `${imageClass} ${imageClass}--${classModifier}`;
    }

    setButtonClass(index) {
        const puzzleSolved = this.state.puzzleSolved;
        const lettersSolved = this.state.lettersSolved;
        let classModifier = "unsolved";

        if (puzzleSolved) {
            classModifier = "word-solved";
        } else if (index < lettersSolved) {
            classModifier = "letter-solved";
        } else if (index === lettersSolved) {
            classModifier = "active";
        }

        const buttonClass = "letter-button";
        return `${buttonClass} ${buttonClass}--${classModifier}`;
    }

    render() {
        const text = this.props.text;
        const imgUrl = this.props.image;
        let letters = [];
        for (let i = 0; i < text.length; i++) {
            letters.push(text.charAt(i));
        }

        return (
            <div className="puzzle">
                <div className="puzzle__image-wrapper">
                    <img className={this.setImageClass()}
                        src={imgUrl} alt={text} />
                </div>
                <div className="puzzle__buttons">
                    {letters.map((letter, index) =>
                        (
                            <button
                                key={index}
                                onClick={()=> {this.handleButtonClick(index, letter);}}
                                className={this.setButtonClass(index)}>
                                {letter}
                            </button>
                        )
                    )}
                </div>
            </div>
        );
    }
}

Letters.propTypes = {
    image: PropTypes.string.isRequired,
    sound: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Letters;
