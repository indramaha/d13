// function App(){
//   return(
//     <h1>ini saya lagi belajar React</h1>
//   )
// }

// export default App;

const App = () => {
  const name = "Bagus"
  let umurAyah = 40
  const umurSaya = umurAyah/2
  const dateNow = new Date().getDate()
  const isOpen = false
  const bottom = "celana sebelah"
  const tahunSekarang = new Date().getFullYear()
  const tahunLahir =  1999
  
  const renderToko = () =>{
    return isOpen ? "toko buka":"Toko Tutup";
  }

  const renderWarteg = () =>{
    let result
    if(isOpen === true){
      result = "Warteg Buka"
    } else {
      result ="Warteg Tutup"
    }
    return result
  }

  const gender = (param) => {
    let hasil
    if(param === "rok"){
      hasil = "aku perempuan"
    } else if(param === "celana"){
      hasil = "aku laki-laki"
    } else {
      hasil = "kamua nanya?"
    }
    return hasil
  }

  const checkUsia = (param1, param2) => {
    return param1 - param2
  }

  const students = [
    {
      id: 1,
      name: "budi"
    },
    {
      id: 2,
      name: "rahmat"
    },
    {
      id: 3,
      name: "indah"
    }
  ];


  return(
    <div>
        <div>
          <img src="https://global-uploads.webflow.com/5e70b9a791ceb781b605048c/62c5720d8b3b6003c2f46fa4_logo-binar-academy.svg" alt="image1" />
        </div>
        <div>
          <p>Hallo, nama saya {name}, umur saya setengah umur ayah saya. panjang nama saya adalah {name.length}.</p>
          <p>Umur saya adalah {umurSaya} </p>
          <p>sekarang tanggal {dateNow}</p>
          <p>sekarang : {renderToko()}</p>
          <p>sekarang : {renderWarteg()}</p>
          <p>sekarang : {gender(bottom)}</p>
          <p>sekarang umur saya {checkUsia(tahunSekarang, tahunLahir)}</p>
          {
            students.map((item) => {
              return (
                <div>
                  <p>nomor absen {item.id}</p>
                  <p>nama situ siapa? {item.name}!</p>
                </div>
              )
            })
          }
          {
            students.filter((item) => {
              return item.id <3
            }).map((hasil) =>{
              return hasil.name
            })
          }
        </div>
    </div>
  )
}

export default App;