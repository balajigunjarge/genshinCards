import styles from "./Cards.module.css";
const Cards = (props) => {
  return (
    <div className="w-80 h-85 bg-[#ffffff44] rounded-4xl p-4 border shadow- shadow-xl/50 border-[#ffffff83]
     shadow-[#0000005b] backdrop-blur-sm">


      <div className="relative">
        <img className="w-80 h-30 rounded-2xl" src={props.backgroundImage} loading="lazy" draggable={"false"} />

        <div className=" flex absolute top-1/4 left-6">


          <img
              className="w-18 h-18  rounded-3xl"
              src={props.image}
              alt={props.name}
              loading="lazy"
              draggable={"false"}


            />

          <div className="p-1">

            <h1 className={`${styles.title} text-[#F6F8FF]`}>{props.name}</h1>
            <section className="flex gap-3 mt-2">
              <p
                className={` bg-[#0000002f] text-sm rounded-lg backdrop-blur-2xl px-3 py-0.5 ${styles[props.element]}`}
              >
                {props.element}
              </p>
              <p className={`text-sm text-[#F6F8FF] ${styles[props.region]}` }>{props.region}</p>
            </section>
          </div>
        </div>
      </div>
      <div className="p-3">

        <p className="text-sm text-[#272D2D]">{props.about}</p>
      </div>
    </div>
  );
};

export default Cards;
