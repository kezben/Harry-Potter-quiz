import React from "react";
import { quizData } from "./quizData";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

class MainQuiz extends React.Component {
  state = {
    currentQuestion: 0,
    userAnswer: "",
    numberOfAnswers: 0,
    score: 0,
    disabled: true,
    isEnd: false,
    ans: ""
  };

  finishHandler = () => {
      this.setState({
        isEnd: true,
      });
  };

  firstHandler = () => {
    if(this.state.userAnswer.value === quizData[0].answer) {
      this.state.score += 1;
    this.state.userAnswer = "";
    }
  }
  secondHandler = (e) => {
    if(JSON.stringify(e).includes(JSON.stringify(quizData[1].answer))) {
      this.state.score += 1;
    }
  }
  thirdHandler = (e) => {
    this.state.userAnswer = JSON.stringify(e).slice(11,-2);
    console.log(quizData[2].answer);
    if(this.state.userAnswer === quizData[2].answer) {
      this.state.score += 1;
    this.state.userAnswer = "";
    }
  }
  fourthHandler = (e) => {
    this.state.ans = e;
    console.log(this.state.ans);
  }

  render() {
// styling
    const checkboxStyle = {
        display: 'grid',
        justifyContent: 'center',
        marginBottom: '90px'
    };
    const btnStyle = {
        backgroundColor: '#73C2FB',
        color: '#ffffff',
        margin: '10px',
        marginBottom: '90px'
    };
    const menuStyle = {
        width: '25%',
        backgroundColor: '#ffffff',
        marginBottom: '90px'
    };
    const selectStyle = {
        padding: '10px',
    };
    const sliderStyle = {
        paddingLeft: '15%',
        paddingRight: '15%',
        marginBottom: '90px'
    };
    const textfieldStyle = {
        marginBottom: '90px'
    }

    const { isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="result">
          <h3>You have answered {this.state.score} out of {quizData.length} correctly! </h3>
        </div>
      );
    } else {
      return (
        <div>
            <p>Q{quizData[0].id + 1}</p>
            <h1>{quizData[0].question}</h1>
            <TextField 
              style={textfieldStyle}
              label={quizData[0].options}
              inputRef={(c) => {this.state.userAnswer = c}}
              onChange={this.firstHandler}
               />


            <p>Q{quizData[1].id + 1}</p>
            <h1>{quizData[1].question}</h1>
            <ToggleButtonGroup
              exclusive>
              {quizData[1].options.map(option => (
                <ToggleButton key={option} value={option} style={btnStyle} variant="contained"
                  onClick={this.secondHandler.bind(this, {option})}>
                  {option}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>


            <p>Q{quizData[2].id + 1}</p>
            <h1>{quizData[2].question}</h1>
            <FormControl style={menuStyle}>
                <InputLabel>Choose an answer</InputLabel>
                    <Select style={selectStyle}>
                        {quizData[2].options.map(option => (
                            <MenuItem key={option} value={option} onClick={this.thirdHandler.bind(this, {option})}>{option}</MenuItem>
                        ))}
                    </Select>
            </FormControl>


            <p>Q{quizData[3].id + 1}</p>
            <h1>{quizData[3].question}</h1>
            <FormGroup style={checkboxStyle}>
                {quizData[3].options.map(option => (
                    <FormControlLabel
                        key={option}
                        control={<Checkbox name={option} />}
                        label={option} 
                        onClick={this.fourthHandler.bind(this, {option})}
                        />
                ))}
            </FormGroup>


            <p>Q{quizData[4].id + 1}</p>
            <h1>{quizData[4].question}</h1>
            <Typography id="discrete-slider-custom" gutterBottom>
                     Choose an age:
            </Typography>
            <Grid container spacing={2} style={sliderStyle}>
                <Grid item>
                    0
                </Grid>
                <Grid item xs>
                    <Slider
                        defaultValue={0}
                        aria-labelledby="discrete-slider-custom"
                        step={1}
                        valueLabelDisplay="auto"
                        min={0}
                        max={20}
                    />
                </Grid>
                <Grid item>
                20
                </Grid>
            </Grid>
            <Button
                variant="contained"
                color="secondary"
                onClick={this.finishHandler}>
                    Submit
            </Button>
        </div>
        );
    }
  }
}

export default MainQuiz;
