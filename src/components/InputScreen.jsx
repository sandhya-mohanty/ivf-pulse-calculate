import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const InputScreen = ({ setSuccessRate }) => {
  const [ageRange, setAgeRange] = useState('');
  const [cycles, setCycles] = useState(1);
  const [icsi, setIcsi] = useState(false);
  const [pgt, setPgt] = useState(false);
  const [conditions, setConditions] = useState([]);
  const navigate = useNavigate();

  const handleCalculate = () => {
    let rate = 50 + (ageRange === '30-34' ? 10 : 0) - conditions.length * 5;
    setSuccessRate(rate > 100 ? 100 : rate);
    navigate('/result');
  };

  return (
    <>
    <Header/>
    <div className="flex flex-col min-h-screen bg-white p-4 sm:p-6">
      <h1 className="text-l  text-gray-700 mb-4">Home/IVF Success Rate Calculator</h1>

      <div className="space-y-6 mx-auto">
        {/* Age Range Selection */}
        <div>
          <label className="block mb-2 font-medium text-gray-700 md:text-4xl ">Which age range applies to you?</label>
          <div className="space-y-2 grid md:grid-cols-3">
            {['Under 30', 'Between 30-34', 'Between 35-37', 'Between 38-40', 'Between 41-43', 'Above 43'].map((range) => (
              <label key={range} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="ageRange"
                  value={range}
                  checked={ageRange === range}
                  onChange={() => setAgeRange(range)}
                  className="w-4 h-4 text-blue-500 focus:ring-blue-400"
                />
                <span className='text-red'>{range}</span>
              </label>
            ))}
          </div>
        </div>

        {/* IVF Cycles */}
        <div>
          <label className="block mb-2 font-medium md:text-4xl text-gray-700">Number of IVF Cycles?</label>
          <div className="flex items-center">
            <input
              type="range"
              min="1"
              max="5"
              value={cycles}
              onChange={(e) => setCycles(Number(e.target.value))}
              className="w-full text-red-400"
            />
            <span className="ml-2 font-medium text-gray-700">{cycles}</span>
          </div>
        </div>

        {/* Procedures */}
          {/* Procedures Section */}
          <div className="mb-6">
          <h2 className="md:text-4xl font-semibold text-gray-700">
            Have you undergone these procedures before?
          </h2>
          <div className="mt-3 grid md:grid-cols-2 gap-4 ">
            <div className="flex items-center">
              <label className="mr-2 text-sm text-gray-700">ICSI Procedure:</label>
              <div className="flex space-x-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="icsi"
                    checked={icsi}
                    onChange={() => setIcsi(true)}
                    className="text-red-500"
                  />
                  <span className="ml-2 text-sm">Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="icsi"
                    checked={!icsi}
                    onChange={() => setIcsi(false)}
                    className="text-red-500"
                  />
                  <span className="ml-2 text-sm">No</span>
                </label>
              </div>
            </div>
            <div className="flex items-center">
              <label className="mr-2 text-sm text-gray-700">PGT Testing:</label>
              <div className="flex space-x-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="pgt"
                    checked={pgt}
                    onChange={() => setPgt(true)}
                    className="text-red-500"
                  />
                  <span className="ml-2 text-sm">Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="pgt"
                    checked={!pgt}
                    onChange={() => setPgt(false)}
                    className="text-red-500"
                  />
                  <span className="ml-2 text-sm">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Conditions */}
        <div className=''>
          <label className="block mb-2 font-medium text-gray-700 md:text-4xl">
            Do you have any of these medical conditions?
          </label>
          <div className="space-y-2 md:flex md:space-x-5">
            {['PCOS', 'Endometriosis', 'Low Ovarian Reserve', 'Male Factor Infertility'].map((condition) => (
              <label key={condition} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={condition}
                  checked={conditions.includes(condition)}
                  onChange={(e) =>
                    setConditions((prev) =>
                      e.target.checked
                        ? [...prev, condition]
                        : prev.filter((c) => c !== condition)
                    )
                  }
                  className="w-4 h-4 text-blue-500 focus:ring-blue-400"
                />
                <span>{condition}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          className="flex items-center justify-center mx-auto px-3 py-2 mt-4 font-bold text-white bg-red-500 rounded hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:ring-offset-1"
        >
          Calculate
        </button>
      </div>
    </div>
    </>
  );
};

export default InputScreen;
