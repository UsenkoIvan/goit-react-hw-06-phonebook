import React, { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./FormAddContacts.module.css";
import { addContacts } from "../../redux/actions";

class Form extends Component {
  state = {
    id: "",
    name: "",
    number: "",
  };

  static propTypes = {
    onAddContacts: PropTypes.PropTypes.func.isRequired,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onAddContacts } = this.props;
    const { name } = this.state;

    if (name.length > 0) {
      onAddContacts({ ...this.state });
      this.resetState();
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      id: shortid.generate(),
      [name]: value,
    });
  };

  resetState = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={name}
          name="name"
          placeholder="Enter name..."
          onChange={this.handleChange}
        />
        <input
          className={styles.input}
          type="text"
          value={number}
          name="number"
          placeholder="Enter number..."
          onChange={this.handleChange}
        />
        <button
          type="submit"
          className={styles.button}
          onClick={this.handleSubmit}
        >
          Add contact
        </button>
      </form>
    );
  }
}

const mapStatetoProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onAddContacts: (contact) => dispatch(addContacts(contact)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Form);
