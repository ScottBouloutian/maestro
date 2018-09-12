const hexParticle = {
    'interactivity': {
        'detect_on': 'canvas',
        'events': {
            'onclick': {
                'enable': false,
                'mode': 'push'
            },
            'onhover': {
                'enable': false,
                'mode': 'grab'
            },
            'resize': true
        },
        'modes': {
            'bubble': {
                'distance': 400,
                'duration': 2,
                'opacity': 8,
                'size': 40,
                'speed': 3
            },
            'grab': {
                'distance': 400,
                'line_linked': {
                    'opacity': 1
                }
            },
            'push': {
                'particles_nb': 4
            },
            'remove': {
                'particles_nb': 2
            },
            'repulse': {
                'distance': 200,
                'duration': 0.4
            }
        }
    },
    'particles': {
        'color': {
            'value': '#1b1e34'
        },
        'line_linked': {
            'color': '#ffffff',
            'distance': 200,
            'enable': false,
            'opacity': 1,
            'width': 2
        },
        'move': {
            'attract': {
                'enable': false,
                'rotateX': 600,
                'rotateY': 1200
            },
            'bounce': false,
            'direction': 'none',
            'enable': true,
            'out_mode': 'out',
            'random': false,
            'speed': 8,
            'straight': false
        },
        'number': {
            'density': {
                'enable': true,
                'value_area': 800
            },
            'value': 6
        },
        'opacity': {
            'anim': {
                'enable': false,
                'opacity_min': 0.1,
                'speed': 1,
                'sync': false
            },
            'random': true,
            'value': 0.3
        },
        'shape': {
            'image': {
                'height': 100,
                'src': 'img/github.svg',
                'width': 100
            },
            'polygon': {
                'nb_sides': 6
            },
            'stroke': {
                'color': '#000',
                'width': 0
            },
            'type': 'polygon'
        },
        'size': {
            'anim': {
                'enable': true,
                'size_min': 40,
                'speed': 10,
                'sync': false
            },
            'random': false,
            'value': 160
        }
    },
    'retina_detect': true
};

export default hexParticle;
