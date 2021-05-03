function App() {
    const firstName = 'dagowask';
    const lastName = 'dev';
    const age = 26;
    const jobs = 'Front End Master';

    const mArr = [1, 2, 3, 4];
    const mObj = {
        nameObj: "dagsdago",
        ageObj: 27
    }

    const inputPlaceHolder = 'Enter Your Details';

    const getFullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`
    }

    const detailsInputBox = <input placeholder={inputPlaceHolder} autoComplete />;

    return (
        <div className="App" align="center">
            <h3>Full Name: {getFullName(firstName, lastName)}</h3>
            <p>Age: {mObj.ageObj}</p>
            <p>Jobs: {jobs}</p>
            {mArr[0]}
            {mArr[0] > 0 ? "True" : "False"}
            {/* {detailsInputBox} */}
        </div>
    );
}

export default App;
