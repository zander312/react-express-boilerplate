import React from 'react';
import styles from './Login.scss';
import axios from 'axios';

import Grid from 'material-ui/Grid';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import Button from 'material-ui/Button';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      pass: ''
    };
  }

  componentDidMount() {
    axios.get('/animals/domestic')
      .then(function(res) {
        console.log(res)
        this.setState({
          animals: res.data.animals
        })
      }.bind(this))
      .then(function(err) {
        console.log(err)
      })
  }

  _handleChange(e){
    let state = this.state
    state[e.target.name] = e.target.value
    this.setState({...state})
    console.log(state)
  } 

  _handleSubmit(e){
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={() => {console.log("submitted")}}>
          <Grid item className={styles.form} xs={12} sm={6} md={4}>
            <FormControl>
              <InputLabel htmlFor="fname">
                first name
              </InputLabel>
              <Input id="fname" name="fname" onChange={(e) => {this._handleChange(e)}}/>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="lname">
                last name
              </InputLabel>
              <Input id="lname" name="lname" onChange={(e) => {this._handleChange(e)}}/>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="email">
                email
              </InputLabel>
              <Input id="email" name="email" onChange={(e) => {this._handleChange(e)}}/>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="pass">
                password
              </InputLabel>
              <Input id="pass" name="pass" onChange={(e) => {this._handleChange(e)}}/>
            </FormControl>

            <Button 
              raised primary 
              className={styles.btn}
              onClick={(e) => {this._handleSubmit(e)}}
              > Sign Up </Button>

          </Grid>
        </form>
      </div>
    );
  }
}
