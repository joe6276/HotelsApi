import React, { Component } from 'react'
import axios  from 'axios'

export default class Hotel extends Component {


    constructor(props){
        super(props)

        this.state={
           hotels:[],
           
        }
    }

componentDidMount(){

const options = {
method: 'GET',
url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
params: {
latitude: '-1.2833322',  
longitude: '36.8166634',

},
headers: {
  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
  'x-rapidapi-key': process.env.KEY
}
};

        const getData = async ()=>{
            const { data} = await axios.request(options)
             console.log(data.data)
             console.log(data.data.ancestors)
             //console.log(data.data[1].photo.images.medium.url)
             this.setState({
                hotels: data.data
             })
        }

        getData();
    }

    render() {
  const {hotels}= this.state;
return (
    <div style={{
        display: 'grid',
        gridTemplateColumns:"repeat(3, 1fr)",
        gap:"20px"
    }}>
     
         {
             hotels.map(hotel=>

    <div className="card bordered"   key ={hotel.location_id}>
          <img src= {hotel.photo? hotel.photo.images.medium.url : 
        'https://cdn.pixabay.com/photo/2016/01/08/17/59/stars-1128772__340.jpg' } class="card-img-top" style={{width:'100%', height:'250px'}} alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{hotel.name}</h5>
                <h6 class="card-title">{hotel.ancestors[0].name}</h6>
                <p class="card-text">{hotel.email? hotel.email:'No Email' }</p>
                <a href={hotel.website? hotel.website :'http://localhost:3000/'} class="btn btn-primary"> Visit Website</a>
            </div>        
    </div>
    
                        )
        }
        </div>
        
    )
    
}
}

