
export default function FormattedDate(props){
    //console.log(props.date)
    
    let days=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    
    let day= days[props.date.getDay()] ;
    let hour=props.date.getHours();
      if (hour < 10)
         hour=` 0${props.date.getHours()}`
    let minutes=props.date.getMinutes();
       if(minutes < 10)
        minutes=`0${props.date.getHours()}` 
    
    
        return (`${day}, ${hour}:${minutes}`)
}