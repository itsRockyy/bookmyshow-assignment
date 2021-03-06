import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/assignment-1.css";

class Assignment1 extends React.Component {
  state = {
    existingArray: [7000, 7001, 7002, 7003, 7004, 7005],
    finalArray: [],
    duplicatesArray: [],
    userValues: []
  };

  componentDidMount = () => {
    document.title = "BMS Assignement 1";
  };

  filterRange = () => {
    let userInput = document.getElementById("range").value.trim();
    let finalArray = [];
    let duplicatesArray = [];

    if (userInput === "") {
      document.getElementById("range").classList.add("error");
    } else {
      document.getElementById("range").classList.remove("error");
      let userValues = userInput.split(",");
      this.setState({
        userValues: userInput.split(",")
      });
      userValues.forEach(element => {
        if (element.indexOf("-") === -1) {
          if (this.state.existingArray.indexOf(Number(element)) === -1)
            this.addToFinalArray(finalArray, Number(element));
          else this.addToDuplicatesArray(duplicatesArray, Number(element));
        } else {
          let lowerLimit = Number(element.split("-")[0]);
          let upperLimit = Number(element.split("-")[1]);
          if (lowerLimit < upperLimit) {
            for (let i = lowerLimit; i <= upperLimit; i++) {
              if (this.state.existingArray.indexOf(Number(i)) === -1) {
                this.addToFinalArray(finalArray, Number(i));
              } else {
                this.addToDuplicatesArray(duplicatesArray, Number(i));
              }
            }
          } else {
            for (let i = upperLimit; i <= lowerLimit; i++) {
              if (this.state.existingArray.indexOf(Number(i)) === -1) {
                this.addToFinalArray(finalArray, Number(i));
              } else {
                this.addToDuplicatesArray(duplicatesArray, Number(i));
              }
            }
          }
        }
      });
      this.setState({ finalArray, duplicatesArray });
    }
  };

  allowNumerals = event => {
    var regex = /[0-9,\s-]/;
    if (!regex.test(event.key)) event.preventDefault();
  };

  addToFinalArray = (finalArray, elemenToAdd) => {
    if (finalArray.indexOf(elemenToAdd) === -1) finalArray.push(elemenToAdd);
  };

  addToDuplicatesArray = (duplicatesArray, elemenToAdd) => {
    if (duplicatesArray.indexOf(elemenToAdd) === -1)
      duplicatesArray.push(elemenToAdd);
  };

  render() {
    return (
      <div className="container-1">
        <nav className="nav-1">
          <Link to="/" className="nav-link">
            {" "}
            <span>&#8592;</span> Go Back
          </Link>
        </nav>
        <main>
          <div className="card">
            <h3> Problem Statement</h3>
            <p>
              Create a text input that accepts single, multiple and even a range
              of numbers and matches the entered numbers with an already
              existing array and shows the duplicates, if any, and the final
              list of unique numbers.
            </p>
            <p>Eg inputs -> 7000, 6000, 8000-8005.</p>
            <p>
              If a range is entered, or multiple ranges are entered, all the
              numbers falling between that range/those ranges have to be
              considered, matched and displayed.
            </p>
            <p>
              So to sum it up, if I have an existing array of
              [7000,7001,7002,7003,7004,7005] in the script and in the text
              input I enter 6998-7003, I should be notified that 7000, 7001,
              7002, 7003 are duplicates and will be skipped, with the final list
              of new additions (2 in this case).
            </p>
          </div>

          <div className="solution">
            <input
              type="text"
              name="range"
              id="range"
              onKeyPress={this.allowNumerals}
              placeholder="Enter number/s or range"
            />
            <button onClick={this.filterRange}>Filter</button>
            {this.state.userValues.length > 0 && (
              <div>
                <strong> Existing Values: </strong>
                {this.state.existingArray.join(", ")}
              </div>
            )}

            {this.state.userValues.length > 0 && (
              <div>
                <strong>New Values added: </strong>
                {this.state.finalArray.length > 0
                  ? this.state.finalArray.join(", ")
                  : "No Unique Values found"}{" "}
              </div>
            )}

            {this.state.userValues.length > 0 && (
              <div>
                <strong>Duplicate Values: </strong>
                {this.state.duplicatesArray.length > 0
                  ? this.state.duplicatesArray.join(", ")
                  : "No Duplicate Values entered"}
              </div>
            )}

            {this.state.userValues.length > 0 && (
              <div>
                <strong>Final Unique Values: </strong>
                {this.state.finalArray.length > 0
                  ? [...this.state.existingArray, this.state.finalArray].join(
                      ", "
                    )
                  : this.state.existingArray.join(", ")}
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default Assignment1;
