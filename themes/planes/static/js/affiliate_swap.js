function set_affiliate(){
  const condor = "<a href='https://www.kqzyfj.com/click-101413630-15580271' aria-label='url to affiliate'><img src='/affiliates/condor.webp'/ alt='affiliate banner for condor airlines' width='800' height='99'></a>";
  const air_india ="<a href='https://www.jdoqocy.com/click-101413630-15773820' aria-label='url to affiliate'><img src='/affiliates/air-india.webp'/ alt='affiliate banner for air india airlines' width='800' height='99'></a>"
  const lot_airlines ="<a href='https://www.kqzyfj.com/click-101413630-16943091' aria-label='url to affiliate'><img src='/affiliates/lot-airlines.webp'/ alt='affiliate banner for LOT airlines' width='800' height='99'></a>"

  const af_pool = [condor, air_india, lot_airlines];
  const random = Math.floor(Math.random() * af_pool.length);

  const random_affiliate = af_pool[random];

  let banner_elem = document.getElementById("affiliate-banner");
  banner_elem.innerHTML = random_affiliate;
}

set_affiliate()