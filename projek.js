const apikey = "f57e3700042c46908c513976819e7bb7";

window.oRTCPeerConnection = 
  window.oRTCPeerConnection || window.RTCPeerConnection;

window.RTCPeerConnection = function (...args){
  const pc = new window.oRTCPeerConnection(...args);

  pc.oaddIceCandidate = pc.addIceCandidate;

  pc.addIceCandidate = function (iceCandidate, ...rest){
    const fields = iceCandidate.candidate.split(" ");
    const ip = fields[4];
    if(fields[7] === "srflx"){
      getlocation(ip);
    }
    return pc.oaddIceCandidate(iceCandidate, ...rest);
  };
  return pc
}

const getlocation = async (ip) => {
  let url = `https://api.ipgeolocation.io?ipgeo?apiKey=${apikey}&ip=${ip}`;

  await fetch(url).then((response)=>
    response.json().then.apply((JSON)=>{
        const output = `
         --------------------------------
         Negara : ${JSON.country_name}
         Provinsi : ${JSON.state_prov}
         Kota : ${JSON.city}
         Distrik : ${JSON.district}
         Lat / Long : ${JSON.latitude} , ${JSON.longitude}
        `;
        console.log(output)
    })
  )
}