var level0 = { 
"COMMENT": "Car",
"type": "node",
"name": "rootNode",

"children":
[
	// CAMERA
	{
		"type": "perspectiveCamera",
		"name": "camera1",
		"eye": [0, 8, 18],
		"center": [0, 1, 0],
		"vup": [0, 1, 0],
		"fov": 20
	},

	// LIGHTS
	{
		"type": "directionalLight",
		"name": "dlight1",
		"color": [1, 1, 0.5],
		"position": [1, 2, 1]
	},
	{
		"type": "directionalLight",
		"name": "dlight2",
		"color": [0.1, 0.1, 0.3],
		"position": [-1, 0.1, 0.5]
	},
	{
		"type": "hemisphereLight",
		"name": "hlight",
		"skyColor": [0.3, 0.3, 0.6],
		"groundColor": [0.2, 0.3, 0],
		"intensity": 1.0
	},

	// CAR MODEL
	{
		"type": "node",
		"name": "car",
		"rotate": [0, 1, 0, 0.0],
		"userData":
		{
			"scripts": ["carController"]
		},
		"children":
		[
		// CAR BODY
		{
			"type": "mesh",
			"name": "carBody",
			"scale": [3, 0.25, 1],
			"translate": [0, 1.0, 0],
			"geometry": "cube",
			"material": 
			{
				"type": "meshPhongMaterial",
				"diffuseColor": [1, 0.3, 0.3],
				"specular": [0.1, 0.1, 0.1],
				"shininess": 10
			}
		},
		{
			"type": "mesh",
			"name": "carBody2",
			"scale": [1.5, 0.5, 0.8],
			"translate": [0.5, 1.75, 0],
			"geometry": "cube",
			"material": 
			{
				"type": "meshPhongMaterial",
				"diffuseColor": [0.3, 0.3, 0.3],
				"specular": [0.1, 0.1, 0.1],
				"shininess": 10
			}
		},
		// REAR WHEEL 1
		{
			"type": "mesh",
			"name": "rearWheel1",
			"scale": [1, 1, 0.3],
			"translate": [1.5, 1, 1.35],
			"geometry": "sphere",
			"widthSegments": 8,
			"heightSegments": 6,
			"material": 
			{
				"type": "meshPhongMaterial",
				"diffuseColor": [0.3, 1.0, 0.3],
				"specular": [0.02, 0.02, 0.02],
				"shininess": 80,
				"shading": "flat"
			}
		},
		// REAR WHEEL 2
		{
			"type": "mesh",
			"name": "rearWheel2",
			"scale": [1, 1, 0.3],
			"translate": [1.5, 1, -1.35],
			"geometry": "sphere",
			"widthSegments": 8,
			"heightSegments": 6,
			"material": 
			{
				"type": "meshPhongMaterial",
				"diffuseColor": [0.3, 0.3, 1.0],
				"specular": [0.02, 0.02, 0.02],
				"shininess": 80,
				"shading": "flat"
			}
		},
		// FRONT WHEEL 1
		{
			"type": "node",
			"name": "frontWheelNode1",
			"rotate": [0, 1, 0, 0.4],
			"translate": [-1.5, 1, 1.35],
			"children":
			[
			{
				"type": "mesh",
				"name": "frontWheel1",
				"scale": [1, 1, 0.3],
				"geometry": "sphere",
				"widthSegments": 8,
				"heightSegments": 6,
				"material": 
				{
					"type": "meshPhongMaterial",
					"diffuseColor": [1.0, 0.5, 0.2],
					"specular": [0.02, 0.02, 0.02],
					"shininess": 80,
					"shading": "flat"
				}
			}
			]
		},
		// FRONT WHEEL 2
		{
			"type": "node",
			"name": "frontWheelNode2",
			"rotate": [0, 1, 0, 0.4],
			"translate": [-1.5, 1, -1.35],
			"children":
			[
			{
				"type": "mesh",
				"name": "frontWheel2",
				"scale": [1, 1, 0.3],
				"geometry": "sphere",
				"widthSegments": 8,
				"heightSegments": 6,
				"material": 
				{
					"type": "meshPhongMaterial",
					"diffuseColor": [1.0, 1.0, 0.2],
					"specular": [0.02, 0.02, 0.02],
					"shininess": 80,
					"shading": "flat"
				}
			}
			]
		}
		]
	}
]
}

