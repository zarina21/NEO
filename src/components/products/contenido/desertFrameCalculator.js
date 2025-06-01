'use client'
import { useState, useEffect } from "react";
import barDataJson from "./varillaPrice.json";
import "../../../styles/desertFrameCalculator.scss";

export default function DesertFrameCalculator() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [selectedBar, setSelectedBar] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState({
    vidrio: false,
    papartu: false,
    espejo: false,
    dobleMoldura: false,
  });

  const barData = barDataJson.reduce((acc, bar) => {
    acc[bar.code] = {
      pricePerFoot: bar.price,
    };
    return acc;
  }, {});

  const filteredBars = Object.entries(barData).filter(([key]) =>
    key.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setOptions((prev) => ({ ...prev, [name]: checked }));
  };

  const handleBarSelection = (key) => {
    setSelectedBar(key);
    setSearchTerm(key);
  };

  const calculate = () => {
    const area = height * width;
    const perimeter = 2 * (parseFloat(height) + parseFloat(width));
    const rodsNeeded = Math.ceil(perimeter / 9);

    if (!selectedBar || !barData[selectedBar]) {
      return { area, rodsNeeded, totalPrice: "0.00" };
    }

    let basePrice = barData[selectedBar].pricePerFoot;
    let priceWithMarkup = basePrice * 1.5;

    if (options.vidrio) priceWithMarkup *= 1.2;
    if (options.papartu) priceWithMarkup *= 1.2;
    if (options.espejo) priceWithMarkup *= 1.3;

    let totalPrice = priceWithMarkup * perimeter;

    if (options.dobleMoldura) {
      totalPrice += priceWithMarkup * perimeter;
    }

    return {
      area,
      rodsNeeded,
      totalPrice: totalPrice.toFixed(2),
    };
  };

  const result = calculate();

  return (
    <div>
      <div className="parentDesertFrame">
        <div className="divDF1 mr-2">
          <pre>{`
import { useState, useEffect } from "react";
import barDataJson from "../../../data/varillaPrice.json";

export default function DesertFrameCalculator() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [selectedBar, setSelectedBar] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState({
    vidrio: false,
    papartu: false,
    espejo: false,
    dobleMoldura: false,
  });

  const barData = barDataJson.reduce((acc, bar) => {
    acc[bar.code] = {
      pricePerFoot: bar.price,
    };
    return acc;
  }, {});

  const filteredBars = Object.entries(barData).filter(([key]) =>
    key.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setOptions((prev) => ({ ...prev, [name]: checked }));
  };

  const handleBarSelection = (key) => {
    setSelectedBar(key);
    setSearchTerm(key);
  };

  const calculate = () => {
    const area = height * width;
    const perimeter = 2 * (parseFloat(height) + parseFloat(width));
    const rodsNeeded = Math.ceil(perimeter / 9);

    if (!selectedBar || !barData[selectedBar]) {
      return { area, rodsNeeded, totalPrice: "0.00" };
    }

    let basePrice = barData[selectedBar].pricePerFoot;
    let priceWithMarkup = basePrice * 1.5;

    if (options.vidrio) priceWithMarkup *= 1.2;
    if (options.papartu) priceWithMarkup *= 1.2;
    if (options.espejo) priceWithMarkup *= 1.3;

    let totalPrice = priceWithMarkup * perimeter;

    if (options.dobleMoldura) {
      totalPrice += priceWithMarkup * perimeter;
    }

    return {
      area,
      rodsNeeded,
      totalPrice: totalPrice.toFixed(2),
    };
  };

  const result = calculate();
}`}</pre>
        </div>

        <div className="divDF2 ml-2">
          <div className="field">
            <label className="label has-text-primary">Height (ft)</label>
            <div className="control">
              <input
                className="input"
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="field">
            <label className="label has-text-primary">Width (ft)</label>
            <div className="control">
              <input
                className="input"
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="field">
            <label className="label has-text-primary">Buscar varilla</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Buscar por código"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setSelectedBar(""); // resetea selección si cambias el texto
                }}
              />
            </div>
            {searchTerm && !selectedBar && (
              <div className="box mt-1">
                {filteredBars.map(([key]) => (
                  <div
                    key={key}
                    className="dropdown-item"
                    onClick={() => handleBarSelection(key)}
                    style={{ cursor: "pointer", padding: "0.5em 0" }}
                  >
                    {key}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="field">
            <label className="checkbox">
              <input
                type="checkbox"
                name="vidrio"
                checked={options.vidrio}
                onChange={handleCheckboxChange}
              />
              &nbsp;Con Vidrio (+20%)
            </label>
          </div>

          <div className="field">
            <label className="checkbox">
              <input
                type="checkbox"
                name="papartu"
                checked={options.papartu}
                onChange={handleCheckboxChange}
              />
              &nbsp;Con Papartu (+20%)
            </label>
          </div>

          <div className="field">
            <label className="checkbox">
              <input
                type="checkbox"
                name="espejo"
                checked={options.espejo}
                onChange={handleCheckboxChange}
              />
              &nbsp;Con Espejo (+30%)
            </label>
          </div>

          <div className="field">
            <label className="checkbox">
              <input
                type="checkbox"
                name="dobleMoldura"
                checked={options.dobleMoldura}
                onChange={handleCheckboxChange}
              />
              &nbsp;Doble Moldura (duplica moldura)
            </label>
          </div>

          <hr />

          <div className="content">
            <p className="has-text-primary"><strong>Área:</strong> {result.area} ft²</p>
            <p className="has-text-primary"><strong>Varillas necesarias:</strong> {result.rodsNeeded}</p>
            <p className="has-text-primary"><strong>Precio total:</strong> ${result.totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
