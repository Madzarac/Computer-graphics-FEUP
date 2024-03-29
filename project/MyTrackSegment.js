import {CGFobject} from '../lib/CGF.js';
/**
 * MyTrackSegment
 * @constructor
 * @param {MyScene} scene - Reference to MyScene object
 * @param {Array} coords - Array of texture coordinates (optional)
 */
export class MyTrackSegment extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);
	}
	
	initBuffers() {
		this.vertices = [
			-1, 0.1, 2,	//0
			-1, 0.1, -2,	//1
			1, 0.1, 2,	//2
			1, 0.1, -2,	//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 3, 1,
            0, 2, 3
		];

		//Facing Y positive
		this.normals = [
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0
		];
		
		/*
		Texture coords (s,t)
		+----------> s
        |
        |
		|
		v
        t
        */

		this.texCoords = [
			0, 0,
			0, 1,
			1, 0,
			1, 1,
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}

}

