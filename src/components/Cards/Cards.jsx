import './Cards.css'

export default function Cards(){
    const element=[
        {img:'deal-01',category:'Luxury villa',price:'$2.264.000',location:'18 New Street Miami, OR 97219',bedrooms:'8',bathRooms:'4',area:'545m2',floor:'3',parking:'5 spots'},
        {img:'deal-02',category:'Pent house',price:'$2.264.000',location:'18 New Street Miami, OR 97219',bedrooms:'7',bathRooms:'8',area:'860m2',floor:'2',parking:'2 spots'},
        {img:'deal-03',category:'Luxury villa',price:'$2.264.000',location:'18 New Street Miami, OR 97219',bedrooms:'8',bathRooms:'7',area:'545m2',floor:'3',parking:'6 spots'},
        {img:'deal-01',category:'Apartment',price:'$2.264.000',location:'18 New Street Miami, OR 97219',bedrooms:'8',bathRooms:'6',area:'312m2',floor:'4',parking:'3 cars'},
        {img:'deal-02',category:'Pent house',price:'$2.264.000',location:'18 New Street Miami, OR 97219',bedrooms:'7',bathRooms:'3',area:'860m2',floor:'1',parking:'4 spots'},
        {img:'deal-01',category:'Apartment',price:'$2.264.000',location:'18 New Street Miami, OR 97219',bedrooms:'5',bathRooms:'7',area:'217m2',floor:'12',parking:'3 cars'},
        {img:'deal-03',category:'Pent house',price:'$2.264.000',location:'18 New Street Miami, OR 97219',bedrooms:'5',bathRooms:'7',area:'217m2',floor:'12',parking:'3 cars'},
        {img:'deal-02',category:'Luxury villa',price:'$2.264.000',location:'18 New Street Miami, OR 97219',bedrooms:'5',bathRooms:'7',area:'217m2',floor:'12',parking:'3 cars'},
        {img:'deal-03',category:'Apartment',price:'$2.264.000',location:'18 New Street Miami, OR 97219',bedrooms:'5',bathRooms:'7',area:'217m2',floor:'12',parking:'3 cars'},
        {img:'deal-01',category:'Luxury villa',price:'$2.264.000',location:'18 New Street Miami, OR 97219',bedrooms:'5',bathRooms:'7',area:'217m2',floor:'12',parking:'3 cars'},
    ];
    let elements=element.map((e, index) => {
        return(
        <div className='card' key={index} id={e.category}>
            <a href="/Property">
            <img src={`/src/images/${e.img}.jpg`} alt="" /> 
            </a>
            <div className="info">
            <span className="category">
            {e.category}
            </span>
            <h6>
            {e.price}
            </h6>
            <h4>
            <a href="/Property">
            {e.location}
            </a>
            </h4>
            </div>
            <ul>
                <li>
                    Bedrooms:
                    <span>{e.bedrooms}</span>
                </li>
                <li>
                    Bath rooms:
                    <span>{e.bathRooms}</span>
                </li>
                <li>
                    Area
                    <span>{e.area}</span>
                </li>
                <li>
                    Floor
                    <span>{e.floor}</span>
                </li>
                <li>
                    Parking
                    <span>{e.parking}</span>
                </li>
            </ul>
            <div className='main-button'>
                <a href="/Property">Schedule a visit</a>
            </div>
        </div>
        )
    });
    return (
        <dir className="cards">
            {elements}
        </dir>
    )
}