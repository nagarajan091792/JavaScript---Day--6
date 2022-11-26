// class Uber {
//     constructor (distance, waitingPeriod, rate) {
//         this.distance = distance;
//         this.waitingPeriod = waitingPeriod;
//         this.rate = rate;
//     }
//     setDistance(dist) {
//         this.distance = dist;
//     }
//     getRidedetails() {
//         return(`The distance of the tide is ${this.distance} with waiting period of ${this.waitingPeriod} and rate of ${this.rate}`)
//     }
//     getRate() {
//         let totalRate = (this.distance*this.rate) + (this.waitingPeriod*5)
//         return totalRate;
//     }
// }
// let customer1 = new Uber (100,10,15);
// console.log ("Rate: "+customer1.getRate());
// console.log ("Ride Details: "+customer1.getRidedetails());

// customer1.setDistance(180);
// console.log ("Distance 180km Rate: "+ customer1.getRate());


class Uber{

    constructor(vehile_type,vehicle_name,pickup_point,destination_point,base_price,distanceinKM,timetakeninMIN)
    {
    this.vehile_type=vehile_type;
    this.vehicle_name=vehicle_name;
    this.pickup_point=pickup_point;
    this.destination_point=destination_point;
    this.base_price=base_price;
    this.distanceinKM=distanceinKM;
    this.timetakeninMIN=timetakeninMIN;
    }
    getprice()
    {
    //time takes for one min is one rupees
    //base price differs beased on vehile vehile type
    //price for one km is 15 rupees
    return `Total price = ${this.base_price+(this.distanceinKM*15)+this.timetakeninMIN}`;
    
    }
    }
    var a=new Uber("car","waganor","karaikudi","paramakudi",200,40,45);
    var b=new Uber("auto","piagoo","trichy","madurai",250,55,60);
    console.log(a);
    console.log(a.getprice());

