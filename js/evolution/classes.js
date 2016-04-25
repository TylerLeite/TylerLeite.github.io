var Bone = function (w, h, m, r, ch, k, ak, sk) {
	this.width = w;
	this.height = h;
	this.mass = m;
	this.restitution = r;
	this.roundness = ch;
	this.friction = k;
	this.air_friction = ak;
	this.static_friction = sk;

	this.muscles = [];
	this.joints = [];
	this.tendons = [];
};

var Tendon = function (a, b) {
	this.boneA = a;
	this.boneB = b;
}

var Joint = function (b1, b2, t, r, a, w) {
	// smoke weed every day
	this.bone_a = b1;
	this.bone_b = b2;

	this.timer = t;
	this.range = r;
	this.startAngle = a
	this.angular_velocity = w; // negative for ccw
}

Joint.prototype.act = function (frame) {
	if (frame % this.timer != 0) {
		return;
	}

	Body.setVelocity(this.b, {x: this.vx, y: this.vy});
}

var Muscle = function (b1, b2, t, vx, vy, a) {
	this.bone = b1;
	this.bone_b = b2;

	this.timer = t;
	this.velocity_x = vx;
	this.velocity_y = vy;
}

Muscle.prototype.act = function (frame) {
	if (frame % this.timer != 0) {
		return;
	}

	Body.setVelocity(this.b, {x: this.vx, y: this.vy});
}

//neural net

//creature
