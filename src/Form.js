import React from 'react'

class Form extends React.Component {
  initialState = {
    title: '',
    author: '',
  }

  state = this.initialState;

  handleChange = (event) => {
    const {name, value} = event.target
  
    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }  

  render() {
    const { title, author } = this.state;
  
    return (
      <form>
        <label htmlFor="title">Name</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={this.handleChange} />
        <label htmlFor="author">Job</label>
        <input
          type="text"
          name="author"
          id="author"
          value={author}
          onChange={this.handleChange} />
        <input
            type="button"
            value="Submit"
            onClick={this.submitForm}/>
      </form>
    );
  }
    
}

export default Form;
