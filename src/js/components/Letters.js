import React from "react";
import PropTypes from "prop-types";


class Letters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            puzzleSolved: false,
            lettersSolved: 0,
            wordLength: props.text.length
        };
    }

    handleButtonClick (buttonIndex) {
        let lettersSolved = this.state.lettersSolved;
        const wordLength = this.state.wordLength;
        if (buttonIndex === lettersSolved) {
            lettersSolved++;
            const puzzleSolved = (wordLength === lettersSolved);

            this.setState({ lettersSolved, puzzleSolved });
        }
    }

    setBackground (index,state) {
        if (this.state.puzzleSolved) {
            return "green";
        } else if (index < state) {
            return "red";
        } else {
            return "grey";
        }
    }

    render() {
        const text = this.props.text;
        const imgUrl = this.props.url;
        let letters = [];
        for (let i = 0; i < text.length; i++) {
            letters.push(text.charAt(i));
        }

        return (
            <div className="product">
                <img className="product__image" src={imgUrl} alt={text} />
                <div className="product__information">
                    {letters.map((letter,index) =>
                        (
                            <button className="product__color-sample"
                                key={index}
                                onClick={()=> {this.handleButtonClick(index);}}
                                title={letter}
                                style={{backgroundColor: this.setBackground(index,this.state.lettersSolved)}}>
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
    url: PropTypes.string.isRequired,
    text: PropTypes.array.isRequired,
};

export default Letters;
