class BulletType1Controller extends BulletController {
    constructor(x, y, config) {
        super(x, y, "BulletType1.png", config);
        this.sprite.body.velocity.y = -1500;
    }
}