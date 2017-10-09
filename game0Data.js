var level0 = 
{ 
"COMMENT": "A CUBE, SPHERE, AND DIRECTIONAL LIGHTS",
"type": "node",
"name": "rootNode",

"userData":
{
	"scripts": ["sceneControl"]
},

"children":
[
	{
		"COMMENT": "Player",
		"type": "mesh",
		"name": "Player",
		"geometry": "sphere",
		"scale": [1,1,1],
		"translate": [0,0,0],
		"material":
			{
            "type": "meshLambertMaterial",
            "name": "cubeMat",
            "diffuseColor": [0, 1, .05],
			"diffuseMap": "earth2k.jpg"
        	}
	},
	{
		"COMMENT": "CAMERA LOOKING AT ORIGIN FROM ALONG THE Z AXIS",
		"type": "perspectiveCamera",
		"name": "camera1",
		"eye": [0, 20, 15],
		"center": [0, 0, 0],
		"vup": [0, 1, 0],
		"fov": 30
	},
    {
        "type": "mesh",
        "name": "theCube",
        "scale": [26, 0.14, 26],
        "translate": [0, -1, 0],
        "geometry": "cube",
        "material":
            {
                "type": "meshPhongMaterial",
                "name": "cubeMat",
                "diffuseColor": [0.5, 0.4, 0.4],
                "specularColor": [0.01, 0.01, 0.01],
                "shininess": 200
            }
    },
    {
        "type": "spotLight",
        "name": "slight",
        "target": "Player",
        "color": [1.5, 1.3, 0.9],
        "intensity": .35,
        "angle": 1.5,
        "penumbra": 0.6,
        "decay": 1.0,
        "distance": 100,
        "castShadow": true,
        "mapSize": 512
    }

]
};

