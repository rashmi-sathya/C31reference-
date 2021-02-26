class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.damageLevel = 0;
    this.dead = false;

  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed > 3 && this.damageLevel === 0){
      this.image = loadImage("sprites/enemyDamaged.png");
      this.damageLevel = 1;
    }else if(this.body.speed > 4 && this.damageLevel === 1){
      this.image = loadImage("sprites/enemyCritical.png");
      this.damageLevel = 2;super.display();}
    //super.display();
    else if(this.body.speed < 5 && this.dead === false){
      super.display();
    }else{
      this.dead = true;

      Matter.World.remove(world, this.body);
    }
    
}
};



    //   this.dead = true;
    // this.dead = false;
