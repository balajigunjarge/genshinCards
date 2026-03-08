
const Cards = (props) => {
  return (
    <div className='w-80 h-85 bg-[#ffffff40] rounded-4xl p-4 border shadow- shadow-xl/50 border-[#ffffff83]
     shadow-[#0000005b] backdrop-blur-sm'>
     <div className="relative">
      <img className="w-80 rounded-2xl" src={props.backgroundImage}/>

       <div className=" flex absolute top-1/4 left-6">
         <div>  <img className="w-16 object-cover object-center rounded-full " src={props.image}/>
     </div>
   <div> <h1 className="">{props.name}</h1>
   <section className="flex gap-3"><p className="">{props.element} </p>  <p>{props.region}</p ></section>
        </div>

       </div>
       </div>
       <div className="p-3"> <p>{props.about}</p></div>






    </div>
  )
}

export default Cards
