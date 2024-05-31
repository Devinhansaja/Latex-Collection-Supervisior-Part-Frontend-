import React from 'react'

export default function Route() {
  
     return (
    <div className="app">
      <div className="form-container">
        <div className="date-container">
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
        </div>

        <div className="search-container">
          <label>Search (Calendar):</label>
          <input type="date" name="searchDate" value={formData.searchDate} onChange={handleInputChange} />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="details">
          <label>Vehicle No:</label>
          <input type="text" name="vehicleNo" value={formData.vehicleNo} onChange={handleInputChange} />
        </div>
        <div className="details">
          <label>Driver:</label>
          <input type="text" name="driver" value={formData.driver} onChange={handleInputChange} />
        </div>
        <div className="details">
          <label>Helper:</label>
          <input type="text" name="helper" value={formData.helper} onChange={handleInputChange} />
        </div>
        <div className="details">
          <label>Supervisor:</label>
          <input type="text" name="supervisor" value={formData.supervisor} onChange={handleInputChange} />
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Weight</th>
                <th>DRC</th>
                <th>VFA</th>
                <th>NH3</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {formData.weights.map((weight, index) => (
                <tr key={index}>
                  <td><input type="text" name="weight" value={weight.weight} onChange={(e) => handleWeightChange(index, e)} /></td>
                  <td><input type="text" name="drc" value={weight.drc} onChange={(e) => handleWeightChange(index, e)} /></td>
                  <td><input type="text" name="vfa" value={weight.vfa} onChange={(e) => handleWeightChange(index, e)} /></td>
                  <td><input type="text" name="nh3" value={weight.nh3} onChange={(e) => handleWeightChange(index, e)} /></td>
                  <td><button onClick={() => handleSee(formData.date)}>See</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {previousData.length > 0 && (
          <div className="previous-data">
            <h3>Previous 7 Days Data</h3>
            {previousData.map((data, index) => (
              <div key={index} className="previous-data-entry">
                <p>Date: {data.date}</p>
                <p>Vehicle No: {data.vehicleNo}</p>
                <p>Driver: {data.driver}</p>
                <p>Helper: {data.helper}</p>
                <p>Supervisor: {data.supervisor}</p>
                <table>
                  <thead>
                    <tr>
                      <th>Weight</th>
                      <th>DRC</th>
                      <th>VFA</th>
                      <th>NH3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.weights.map((weight, weightIndex) => (
                      <tr key={weightIndex}>
                        <td>{weight.weight}</td>
                        <td>{weight.drc}</td>
                        <td>{weight.vfa}</td>
                        <td>{weight.nh3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

};




