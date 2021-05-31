class Lab{
    constructor(){
        this.scientist = loadImage("person.png")
        this.base = createSprite(400,200,800,400)
        this.people = createSprite(200,200,50,100)
        this.imgbg = loadImage("lab.png")
        this.base.visible = false
        this.base.addImage(this.imgbg)
        this.people.visible = false
        this.callout=  loadImage("images/callout-1.png")
        this.calloutLeft=  loadImage("images/callout-left.png")
    }
    display(){
   //     this.people.x = 100;
     //   this.people.y = 200;
     image(this.callout, 100, 0, 300, 200)
        this.base.visible = true
        this.base.scale = 3
        
        
        this.people.addImage(this.scientist)
    // people.shapeColor = "red"
        textSize(17)
        stroke("green")
        textFont("Comic Sans Ms")
        fill("black")
        text("WooHoo!!", 170, 50)
        text("I created, ", 150, 75)
        text("World's First..", 150, 95)
        text("Size Shrinking Formula!!", 130, 120)
        image(this.calloutLeft, 450, 0, 300, 150)
        text(" uhh.. uhh.. why am i coughing.", 450, 50)
        stroke("orange")
        text("DIES*", 20,350)
        text("press'l'", 100,350)
    }

    
    remove(){
        this.people.destroy();
    }

}
