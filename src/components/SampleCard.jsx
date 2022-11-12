import '../style/sampleCard.css'

function SampleCard({title,image,id,price,toggleClicked,data,handleModal}) {
  return (
    <div className="card-big-container" id={id}
         style={{backgroundColor:` ${toggleClicked ? 
               '#121212':'white'} `}}>
      
      <div className="card-inner-container cursor-pointer" onClick={()=>handleModal(data)}>
        <img className='card-image' src={image} alt=""/>
      </div>

        <h3 className={`card-title`}
         style={{color:` ${toggleClicked ? 
               'white':'#121212'} `}}
        >{title}</h3>

      <div className="card-paragraph">
        <p className={`text-[10px]`}
         style={{color:` ${toggleClicked ? 'white':'#121212'} `}}>
          We're proud to present the largest
          </p>
        <p className={`text-[10px]`}
         style={{color:` ${toggleClicked ? 'white':'#121212'} `}}
        >
          online collection of natural </p>
      </div>

      <div className="w-full text-center -mt-[8%]">
        <h4 className={`${toggleClicked ? 'text-[white]' : 'text-[#121212]'}`}>price:{price}</h4>
      </div>

      <div className="card-footer-container">
        <div className="card-buy-btn">Buy</div>
        <div   className='card-addCart-btn'>Add to Cart</div>
      </div>
    </div>
  )
}

export default SampleCard