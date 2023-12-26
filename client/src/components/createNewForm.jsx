import React, { useState } from 'react';

const NewGameForm = () => {
    const [rounds, setRounds] = useState('9');

    const handleRoundsChange = (e) => {
        setRounds(e.target.value);
    };

    const renderHoleInputs = () => {
        const holeInputs = [];
        for (let i = 1; i <= parseInt(rounds, 10); i++) {
            holeInputs.push(
                <div className="mb-3" key={i}>
                    <label htmlFor={`holeInput${i}`} className="form-label">
                        Hole {i}
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id={`holeInput${i}`}
                        aria-describedby="emailHelp"
                    />
                </div>
            );
        }
        return holeInputs;
    };

    return (
        <div className="d-flex text-white bgAuth">
            <div className="container d-flex w-50 mx-auto flex-column">
                <h1 className="text-center mt-4">Create New Game</h1>
                <div className="container mt-3 formBg">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Course
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Date
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Rounds
                            </label>
                            <select
                                name=""
                                id=""
                                className="form-control"
                                value={rounds}
                                onChange={handleRoundsChange}
                            >
                                <option value="9">9</option>
                                <option value="18">18</option>
                            </select>
                        </div>
                        {renderHoleInputs()}
                        <button type="submit" className="btn btn-success">
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewGameForm;
