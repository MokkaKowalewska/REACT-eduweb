import React, { Component } from "react";
import AppContext from "../../context";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";

const types = {
  twitter: "twitter",
  article: "article",
  note: "note",
};

const descriptions = {
  twitter: "favourite Twitter account",
  article: "Article",
  note: "Note",
};

class Form extends Component {
  state = {
    type: types.twitter,
    title: "",
    link: "",
    image: "",
    description: "",
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      type: type,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { type } = this.state;
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <Title>Add new {descriptions[type]}</Title>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={(e) => context.addItem(e, this.state)}
            >
              <div className={styles.radioWrapper}>
                <input
                  id={types.twitter}
                  type="radio"
                  checked={type === types.twitter}
                  onChange={() => this.handleRadioButtonChange(types.twitter)}
                />
                <label htmlFor={types.twitter}>Twitter</label>
                <input
                  id={types.article}
                  type="radio"
                  checked={type === types.article}
                  onChange={() => this.handleRadioButtonChange(types.article)}
                />
                <label htmlFor={types.article}>articles</label>
                <input
                  id={types.note}
                  type="radio"
                  checked={type === types.note}
                  onChange={() => this.handleRadioButtonChange(types.note)}
                />
                <label htmlFor={types.note}>notes</label>
              </div>
              <Input
                onChange={this.handleInputChange}
                value={this.state.title}
                name="title"
                label={type === types.twitter ? "Twitter Name" : "Title"}
                maxLength={60}
              />
              {type === types.note ? null : (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.link}
                  name="link"
                  label={type === types.twitter ? "Twitter link" : "Link"}
                />
              )}
              {type === types.twitter ? (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.image}
                  name="image"
                  label="Image"
                />
              ) : null}

              <Input
                onChange={this.handleInputChange}
                value={this.state.description}
                tag="textarea"
                name="description"
                label="Description"
              />
              <Button>add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
