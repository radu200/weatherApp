import moment from 'moment'

export const formatDate = date => {
   return moment(date, 'YYYY-MM-DD h:mm:ss').format('dddd, MMM D h:mm a')
}
    
export  const iconPath = name => {
   return require(`./../assets/media/images/weather-icons/${name}.svg`);
}