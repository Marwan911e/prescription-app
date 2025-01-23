import React, { useState } from 'react';
import './App.css';

function App() {
  const [drugs, setDrugs] = useState([{ drug: '', item: '', quantity: '' }]);
  const [patientName, setPatientName] = useState('');
  const [month, setMonth] = useState('');
  const [doctorName, setDoctorName] = useState('');

  const handleChange = (index, e) => {
    const values = [...drugs];
    values[index][e.target.name] = e.target.value;
    setDrugs(values);
  };

  const addDrugRow = () => {
    setDrugs([...drugs, { drug: '', item: '', quantity: '' }]);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      <h1>شركة التمساح لبناء السفن</h1>
      <h2>علاج شهري</h2>
      <div className="form-group">
        <label>اسم المريض</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          placeholder="اسم المريض"
        />
      </div>
      <div className="form-group">
        <label>الشهر</label>
        <input
          type="text"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>الكميه</th>
            <th>الصنف</th>
            <th>الدواء</th>
          </tr>
        </thead>
        <tbody>
          {drugs.map((drug, index) => (
            <tr key={index}>
              <td><input type="number" name="quantity" className='small' value={drug.quantity} onChange={(e) => handleChange(index, e)} /></td>
              <td><input type="text" name="item" className='small' value={drug.item} onChange={(e) => handleChange(index, e)} /></td>
              <td className='big'><input type="text" name="drug" className='big' value={drug.drug} onChange={(e) => handleChange(index, e)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-row-btn" onClick={addDrugRow}>إضافة دواء</button>
      <div className="">
        <p><strong>اسم الطبيب: </strong>د/ السيد عبد العزيز</p>
      </div>
      <button onClick={handlePrint}>طباعة</button>
    </div>
  );
}

export default App;
