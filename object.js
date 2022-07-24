let car = {
    name: 'Toyota',
    brand: 'camery',
    model: '2018',
    price: 290000,
    color: 'Blue',
    thisgetinfo: function () {
        return  'this car name is',+this.name,' and the brand is'+this.brand,'the model is'+this.model,'this price is'+this.price,'and the colore is'+this.color;
       console.log(this.thisgetinfo)
    }
}