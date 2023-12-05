import * as React from 'react';
import './Home';
import './Vus'
import './App.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import Home from './Home';

const Kol = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const [look,setLook] = React.useState(false);

  const handlook = () => {
    setLook(!look);
  };

  const [car,setCar] = React.useState(false);

  const handcar = () => {
    setCar(!car);
  };

  const [l,setL] = React.useState(false);

  const handl = () => {
    setL(!l);
  };

  const [lo,setLo] = React.useState(false);

  const handlo = () => {
    setLo(!lo);
  };

  const [loo,setLoo] = React.useState(false);

  const handloo = () => {
    setLoo(!loo);
  };
  const [kar,setKar] = React.useState(false);

  const handkar = () => {
    setKar(!kar);
  };

  const [s,setS] = React.useState(false);

  const hands = () => {
    setS(!s);
  };

  const [sq,setSq] = React.useState(false);

  const handsq = () => {
    setSq(!sq);
  };

  const [sw,setSw] = React.useState(false);

  const handsw = () => {
    setSw(!sw);
  };

  const [se,setSe] = React.useState(false);

  const handse = () => {
    setSe(!se);
  };

  const [sr,setR] = React.useState(false);

  const handsr = () => {
    setR(!sr);
  };

  const [st,setSt] = React.useState(false);

  const handst = () => {
    setSt(!st);
  };


  return (
  <div>
    <p>Поменять расположение всего текста по центру</p>
    <div className="dropdown">
      <button className="but" onClick={handleOpen}>Колледж</button>
        {open ? (
          <ul className="menu">
            <li className="menu-item">
              <button onClick={handlook}>МИДиС</button>
                {look ? (
                  <div className="div1">
                    <p className="p">Средний балл: 3,9</p>
                    <button onClick={hands} className="butt">Отзывы</button> 
                    {s ? (
                      <div className="p2">
                        <a href='https://2gis.ru/chelyabinsk/firm/2111590606312509/61.320014%2C55.198096/tab/reviews?m=61.323888%2C55.197122%2F16.39' target='_blank'>2ГИС</a> <br></br>
                        <a href='https://yandex.ru/maps/56/chelyabinsk/?ll=61.324051%2C55.197699&mode=poi&poi%5Bpoint%5D=61.320358%2C55.198312&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1113168468&tab=reviews&z=16.5' target='_blank'>Яндекс</a>
                      </div>
                    ):null}
                    <YMaps>
                      <Map
                        className="map"
                        defaultState={{
                        center: [55.198520, 61.320070],
                        zoom: 15,
                        controls: ["zoomControl", "fullscreenControl"],
                        }}
                        modules={["control.ZoomControl", "control.FullscreenControl"]}>
                        <Placemark defaultGeometry={[55.198520, 61.320070]} />
                      </Map>
                    </YMaps>
                  </div>
                ): null}
            </li>
            <li className="menu-item">
              <button onClick={handcar}>ЧЮК</button>
              {car ? (
                  <div className="div1">
                    <p className="p">Средний балл: 3</p>
                    <button onClick={handst} className="butt">Отзывы</button> 
                    {st ? (
                      <div className="p2">
                        <a href='https://2gis.ru/chelyabinsk/search/чюк/firm/2111590606311720/tab/reviews?m=61.356733%2C55.189991%2F18.9' target='_blank'>2ГИС</a> <br></br>
                        <a href='https://yandex.ru/maps/56/chelyabinsk/?ll=61.356748%2C55.190454&mode=poi&poi%5Bpoint%5D=61.356748%2C55.190454&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1335894441&tab=reviews&z=16' target='_blank'>Яндекс</a>
                      </div>
                    ):null}
                    <YMaps>
                      <Map
                        className="map"
                        defaultState={{
                        center: [55.190488, 61.356632],
                        zoom: 14,
                        controls: ["zoomControl", "fullscreenControl"],
                        }}
                        modules={["control.ZoomControl", "control.FullscreenControl"]}>
                        <Placemark defaultGeometry={[55.190488, 61.356632]} />
                      </Map>
                    </YMaps>
                  </div>
                ): null}
            </li>
            <li className="menu-item">
              <button onClick={handkar}>ЮУрГТК</button>
              {kar ? (
                  <div className="div1">
                    <p className="p">Средний балл: 4,5</p>
                    <button onClick={handsr} className="butt">Отзывы</button> 
                    {sr ? (
                      <div className="p2">
                        <a href='https://2gis.ru/chelyabinsk/search/ЮУрГТК/firm/2111590606309667/tab/reviews?m=61.442914%2C55.16577%2F17.22' target='_blank'>2ГИС</a> <br></br>
                        <a href='https://yandex.ru/maps/org/yuzhno_uralskiy_gosudarstvenny_tekhnicheskiy_kolledzh/1095807886/reviews/?ll=61.442818%2C55.167107&mode=search&sctx=ZAAAAAgBEAAaKAoSCet0IOuprU5AETqy8stgmEtAEhIJg4jUtItplj8R2xg74SU4hT8iBgABAgMEBSgKOABAgc0GSAFqAnJ1nQHNzEw9oAEAqAEAvQGoHXgjwgERjufCigTznq71rAK53sWAzAHqAQDyAQD4AQCCAgzQrtCj0YDQk9Ci0JqKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=61.442818%2C55.167107&sspn=0.005965%2C0.002740&tab=reviews&text=ЮУрГТК&z=17.92' target='_blank'>Яндекс</a>
                      </div>
                    ):null}
                    <YMaps>
                      <Map
                        className="map"
                        defaultState={{
                        center: [55.166495, 61.441603],
                        zoom: 16,
                        controls: ["zoomControl", "fullscreenControl"],
                        }}
                        modules={["control.ZoomControl", "control.FullscreenControl"]}>
                        <Placemark defaultGeometry={[55.166495, 61.441603]} />
                      </Map>
                    </YMaps>
                  </div>
                ): null}
            </li>
            <li className="menu-item">
              <button onClick={handl}>УРК</button>
              {l ? (
                  <div className="div1">
                    <p className="p">Средний балл: 3</p>
                    <button onClick={handse} className="butt">Отзывы</button> 
                    {se ? (
                      <div className="p2">
                        <a href='https://2gis.ru/chelyabinsk/search/УРК/firm/70000001062445515/tab/reviews?m=61.340043%2C55.2123%2F13.36' target='_blank'>2ГИС</a> <br></br>
                        <a href='https://yandex.ru/maps/org/pou_uralskiy_regionalny_kolledzh/223313678335/reviews/?ll=61.285357%2C55.184652&mode=search&sll=61.442818%2C55.167107&sspn=0.005965%2C0.002740&tab=reviews&text=УРК&z=12.92' target='_blank'>Яндекс</a>
                      </div>
                    ):null}
                    <YMaps>
                      <Map
                        className="map"
                        defaultState={{
                        center: [55.184531, 61.285359],
                        zoom: 16,
                        controls: ["zoomControl", "fullscreenControl"],
                        }}
                        modules={["control.ZoomControl", "control.FullscreenControl"]}>
                        <Placemark defaultGeometry={[55.184531, 61.285359]} />
                      </Map>
                    </YMaps>
                  </div>
                ): null}
            </li>
            <li className="menu-item">
            <button onClick={handlo}>Юк Юумк</button>
            {lo ? (
                  <div className="div1">
                    <p className="p">Средний балл: 3,9</p>
                    <button onClick={handsw} className="butt">Отзывы</button> 
                    {sw ? (
                      <div className="p2">
                        <a href='https://2gis.ru/chelyabinsk/search/юк%20юумк/firm/2111590606311056/tab/reviews?m=61.39556%2C55.246156%2F15.82' target='_blank'>2ГИС</a> <br></br>
                        <a href='https://yandex.ru/maps/org/yuzhno_uralskiy_mnogoprofilny_kolledzh/1060427644/reviews/?ll=61.400676%2C55.248778&mode=search&sctx=ZAAAAAgBEAAaKAoSCaNXA5SGpE5AEQySPq2il0tAEhIJyQImcOtuyD8RpyA%2FG7lutj8iBgABAgMEBSgKOABA%2F8wGSAFqAnJ1nQHNzEw9oAEAqAEAvQEdFvZHwgEg%2FK7T%2BQOhn9rnA7rXvZ37AcfqufADrJTh2YoEj7OL9gPqAQDyAQD4AQCCAg3QrtC6INCu0YPQvNC6igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=61.400676%2C55.248778&sspn=0.062968%2C0.028859&tab=reviews&text=Юк%20Юумк&z=14.52' target='_blank'>Яндекс</a>
                      </div>
                    ):null}
                    <YMaps>
                      <Map
                        className="map"
                        defaultState={{
                        center: [55.247678, 61.391801],
                        zoom: 15,
                        controls: ["zoomControl", "fullscreenControl"],
                        }}
                        modules={["control.ZoomControl", "control.FullscreenControl"]}>
                        <Placemark defaultGeometry={[55.247678, 61.391801]} />
                      </Map>
                    </YMaps>
                  </div>
                ): null}
            </li>
            <li className="menu-item">
              <button onClick={handloo}>ЧИПс</button>
              {loo ? (
                  <div className="div1">
                    <p className="p">Средний балл: 3</p>
                    <button onClick={handsq} className="butt">Отзывы</button> 
                    {sq ? (
                      <div className="p2">
                        <a href='https://yandex.ru/maps/org/chips_urgups/1720727565/reviews/?ll=61.422370%2C55.153794&mode=search&sctx=ZAAAAAgBEAAaKAoSCWMl5llJs05AEW77HvXXn0tAEhIJlsyxvKsesD8RSfPHtDaNnT8iBgABAgMEBSgKOABAgM0GSAFqAnJ1nQHNzEw9oAEAqAEAvQFFBP4DwgEVjfDAtAb5%2F%2FbCmQHtvcPdA52kleED6gEA8gEA%2BAEAggII0YfQuNC%2F0YGKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=61.422370%2C55.153794&sspn=0.047721%2C0.021924&tab=reviews&text=чипс&z=14.92' target='_blank'>Яндекс</a>
                      </div>
                    ):null}
                    <YMaps>
                      <Map
                        className="map"
                        defaultState={{
                        center: [55.145612, 61.415229],
                        zoom: 17,
                        controls: ["zoomControl", "fullscreenControl"],
                        }}
                        modules={["control.ZoomControl", "control.FullscreenControl"]}>
                        <Placemark defaultGeometry={[55.145612, 61.415229]} />
                      </Map>
                    </YMaps>
                  </div>
                ): null}
            </li>
          </ul>
        ) : null}
    </div>
  </div>
  );

};

export default Kol;
