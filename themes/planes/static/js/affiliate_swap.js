function set_affiliate(){
  const condor = "<a href='https://www.kqzyfj.com/click-101413630-15580271'><img src='/affiliates/condor.gif'/></a>";
  const air_india ="<a href='https://www.jdoqocy.com/click-101413630-15773820'><img src='/affiliates/air-india.png'/></a>"
  const lot_airlines ="<a href='https://www.kqzyfj.com/click-101413630-16943091'><img src='/affiliates/lot-airlines.png'/></a>"

  const af_pool = [condor, air_india, lot_airlines];
  const random = Math.floor(Math.random() * af_pool.length);

  const random_affiliate = af_pool[random];

  let banner_elem = document.getElementById("affiliate-banner");
  banner_elem.innerHTML = random_affiliate;
}

set_affiliate()