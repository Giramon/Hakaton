import * as React from 'react';
import './Glav'
import './App.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

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
    <div className="dropdown">
      <button className="but" onClick={handleOpen}>ВУЗ</button>
        {open ? (
          <ul className="menu">
            <li className="menu-item">
              <button onClick={handlook}>ЮУрГУ</button>
                {look ? (
                  <div className="div1">
                    <p className="p1">Платно: 134 балла</p>
                    <p className="p1">Бюджет: 277 баллов</p>
                    <button onClick={hands} className="butt">Отзывы</button> 
                    {s ? (
                      <div className="p2">
                        <a href='https://2gis.ru/chelyabinsk/search/просп.%20Ленина%2C%2076/firm/70000001036603397/61.370287%2C55.160442/tab/reviews?m=61.370327%2C55.159953%2F16.7' target='_blank'>2ГИС</a> <br></br>
                        <a href='https://yandex.ru/maps/org/yuzhno_uralskiy_gosudarstvenny_universitet/1003823376/reviews/?filter=chain_id%3A732185765&ll=61.379164%2C55.157917&mode=search&sctx=ZAAAAAgBEAAaKAoSCTljmBO0tU5AEe6W5IBdlUtAEhIJ7SsP0lPkwj8RgzP4%2B8VsqT8iBgABAgMEBSgKOABAgs0GSAFqAnJ1nQHNzEw9oAEAqAEAvQH6nznCwgF3kMLU3gOHo%2FnX6QSqv6DyA8uQyfcD5OP%2Byp4GmtzYtcAFueymrPoDgPG5n%2F0DkpL4%2FYIDg5LmqgT%2Fr4XnI9nBzeID6aXIjsQE9%2BiNwRqM1In%2FBJDt0uEDtbXWhbUF6IyOmgWJ5OrIhwXEp%2FDyBsOf1MkG%2FrO3kQTqAQDyAQD4AQCCAgrQrtCj0YDQs9GDigIAkgIAmgIMZGVza3RvcC1tYXBzqgIzNzMyMTg1NzY1LDczMjE4NTc2NCw4MjU2MTU2NTYsODI1NjEyMDQ1LDIxNDU1NjM4OTE1sAIB&sll=61.375191%2C55.157917&sspn=0.029764%2C0.010016&tab=reviews&text=ЮУргу&z=16.05' target='_blank'>Яндекс</a>
                      </div>
                    ):null}
                    <YMaps>
                      <Map
                        className="map"
                        defaultState={{
                        center: [55.160519, 61.370259],
                        zoom: 14,
                        controls: ["zoomControl", "fullscreenControl"],
                        }}
                        modules={["control.ZoomControl", "control.FullscreenControl"]}>
                        <Placemark defaultGeometry={[55.160519, 61.370259]} />
                      </Map>
                    </YMaps>
                  </div>
                ): null}
            </li>
            <li className="menu-item">
              <button onClick={handcar}>ЮУрГГПУ</button>
              {car ? (
                  <div className="div1">
                    <p className="p1">Платно: 124 балла</p>
                    <p className="p1">Бюджет: 172 баллов</p>
                    <button onClick={handst} className="butt">Отзывы</button> 
                    {st ? (
                      <div className="p2">
                        <a href='https://2gis.ru/chelyabinsk/search/ЮУрГГПУ/firm/2112045873460677/tab/reviews?m=61.396675%2C55.158794%2F14.37' target='_blank'>2ГИС</a> <br></br>
                        <a href='https://yandex.ru/maps/org/yuzhno_uralskiy_gosudarstvenny_gumanitarno_pedagogicheskiy_universitet/165998637294/reviews/?ll=61.386792%2C55.156892&mode=search&sll=61.379164%2C55.157917&sspn=0.021805%2C0.010016&tab=reviews&text=ЮУрГГПУ&z=16.04' target='_blank'>Яндекс</a>
                      </div>
                    ):null}
                    <YMaps>
                      <Map
                        className="map"
                        defaultState={{
                        center: [55.159455, 61.387776],
                        zoom: 15,
                        controls: ["zoomControl", "fullscreenControl"],
                        }}
                        modules={["control.ZoomControl", "control.FullscreenControl"]}>
                        <Placemark defaultGeometry={[55.159455, 61.387776]} />
                      </Map>
                    </YMaps>
                  </div>
                ): null}
            </li>
            <li className="menu-item">
              <button onClick={handkar}>МИДиС</button>
              {kar ? (
                  <div className="div1">
                   <p className="p1">Платно: 95 баллов</p>
                    <p className="p1">Бюджет: отсутсвует</p>
                    <button onClick={handsr} className="butt">Отзывы</button> 
                    {sr ? (
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
              <button onClick={handl}>УралГУФК</button>
              {l ? (
                  <div className="div1">
                    <p className="p1">Платно: 172 балла</p>
                    <p className="p1">Бюджет: 201 балл</p>
                    <button onClick={handse} className="butt">Отзывы</button> 
                    {se ? (
                      <div className="p2">
                        <a href='https://2gis.ru/chelyabinsk/search/УралГУФК/firm/2111590606312123/tab/reviews?m=61.419099%2C55.154293%2F15.82' target='_blank'>2ГИС</a> <br></br>
                        <a href='https://yandex.ru/maps/org/uralgufk/1078645421/reviews/?ll=61.408900%2C55.162725&mode=search&sll=61.389086%2C55.157266&sspn=0.033979%2C0.015609&tab=reviews&text=УралГУФК&z=14.41' target='_blank'>Яндекс</a>
                      </div>
                    ):null}
                    <YMaps>
                      <Map
                        className="map"
                        defaultState={{
                        center: [55.153812, 61.418157],
                        zoom: 14,
                        controls: ["zoomControl", "fullscreenControl"],
                        }}
                        modules={["control.ZoomControl", "control.FullscreenControl"]}>
                        <Placemark defaultGeometry={[55.153812, 61.418157]} />
                      </Map>
                    </YMaps>
                  </div>
                ): null}
            </li>
            <li className="menu-item">
            <button onClick={handlo}>ЮУрГАУ</button>
            {lo ? (
                  <div className="div1">
                    <p className="p1">Платно: 99 баллов</p>
                    <p className="p1">Бюджет: 142 балла</p>
                    <button onClick={handsw} className="butt">Отзывы</button> 
                    {sw ? (
                      <div className="p2">
                        <a href='https://yandex.ru/maps/org/fgbou_vo_yuzhno_uralskiy_gosudarstvenny_agrarny_universitet/1060385804/reviews/?filter=chain_id%3A21455638915&ll=61.389086%2C55.157266&mode=search&sctx=ZAAAAAgBEAAaKAoSCV4td2aCsU5AEYSAfAkVlEtAEhIJp8zNN6J7lj8Raf0tAfinhD8iBgABAgMEBSgAOABAgs0GSAFqAnJ1ggEUY2hhaW5faWQ6MjE0NTU2Mzg5MTWdAc3MTD2gAQCoAQC9AZjEhu7CASiM6ND5A8G0zfMDmtT4%2FQaV1%2BOCB8XR6eMG6Y2v7wabgIH6BIjKy4kH6gEA8gEA%2BAEAggIUY2hhaW5faWQ6MjE0NTU2Mzg5MTWKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAjMyMTQ1NTYzODkxNSw4MjU2MTIwNDUsNzMyMTg1NzY1LDczMjE4NTc2NCw4MjU2MTU2NTawAgE%3D&sll=61.389086%2C55.157266&sspn=0.033979%2C0.015609&tab=reviews&text=ЮУрГАУ&z=15.41' target='_blank'>Яндекс</a>
                      </div>
                    ):null}
                    <YMaps>
                      <Map
                        className="map"
                        defaultState={{
                        center: [55.159208, 61.378407],
                        zoom: 16,
                        controls: ["zoomControl", "fullscreenControl"],
                        }}
                        modules={["control.ZoomControl", "control.FullscreenControl"]}>
                        <Placemark defaultGeometry={[55.159208, 61.378407]} />
                      </Map>
                    </YMaps>
                  </div>
                ): null}
            </li>
            <li className="menu-item">
              <button onClick={handloo}>ЧелГУ</button>
              {loo ? (
                  <div className="div1">
                    <p className="p1">Платно: 150 баллов</p>
                    <p className="p1">Бюджет: 190 баллов</p>
                    <button onClick={handsq} className="butt">Отзывы</button> 
                    {sq ? (
                      <div className="p2">
                        <a href='https://2gis.ru/chelyabinsk/search/челгу/firm/2112045873460636/61.318803%2C55.176896/tab/reviews?m=61.31901%2C55.176819%2F17.27' target='_blank'>2ГИС</a> <br></br>
                        <a href='https://yandex.ru/maps/org/chelyabinskiy_gosudarstvenny_universitet/1682445531/reviews/?filter=chain_id%3A825612045&ll=61.326415%2C55.176077&mode=search&sctx=ZAAAAAgBEAAaKAoSCSb752nAsk5AEe2ePCzUlEtAEhIJlWJH41C%2Ftz8R0xbX%2BEz2nz8iBgABAgMEBSgAOABAOEgBagJydYIBEmNoYWluX2lkOjgyNTYxMjA0NZ0BzcxMPaABAKgBAL0BGdFnXsIBFtupoKIGwvy0t%2FQBtKmRgrYGua6oxAbqAQDyAQD4AQCCAhJjaGFpbl9pZDo4MjU2MTIwNDWKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAjM4MjU2MTIwNDUsODI1NjE1NjU2LDIxNDU1NjM4OTE1LDczMjE4NTc2NSw3MzIxODU3NjSwAgE%3D&sll=61.326415%2C55.176077&sspn=0.023861%2C0.010956&tab=reviews&text=челгу&z=15.92' target='_blank'>Яндекс</a>
                      </div>
                    ):null}
                    <YMaps>
                      <Map
                        className="map"
                        defaultState={{
                        center: [55.176527, 61.318831],
                        zoom: 14,
                        controls: ["zoomControl", "fullscreenControl"],
                        }}
                        modules={["control.ZoomControl", "control.FullscreenControl"]}>
                        <Placemark defaultGeometry={[55.176527, 61.318831]} />
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
