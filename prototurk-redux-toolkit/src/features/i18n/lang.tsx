import React, { useState } from 'react';

const Language = () => {
  const [lang, setLang] = useState('tr');
  const [select, setSelect] = useState(0);
  return (
    <div>
      <div>
        <h2>Language</h2>
        <p>{lang}</p>

        <select onChange={(e) => setLang(e.target.value)}>
          <option value={0}>Seçiniz</option>
          <option value={1}>Türkçe</option>
          <option value={2}>English</option>
        </select>
      </div>
    </div>
  );
};

export default Language;
