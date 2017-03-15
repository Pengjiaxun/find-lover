const age = ['','不限', 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
const height = ['','不限', 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211];
const weight = ['','不限', 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110];

export default {
    name: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: ''
    },
    sex: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: '',
        optionsBox: {
            visible: false,
            slots: [{
                flex: 1,
                values: [],
                className: 'slot1',
                textAlign: 'center'
            }]
        }
    },
    tel: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: ''
    },
    age: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: '',
        optionsBox: {
            visible: false,
            slots: [{
                flex: 1,
                values: age,
                className: 'slot1',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                values: age,
                className: 'slot3',
                textAlign: 'center'
            }]
        }
    },
    native: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: '',
        list: [],
        optionsBox: {
            visible: false,
            slots: [{
                flex: 1,
                values: [],
                className: 'slot1',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                values: [],
                className: 'slot3',
                textAlign: 'center'
            }]
        }
    },
    nation: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: '',
        optionsBox: {
            visible: false,
            slots: [{
                flex: 1,
                values: [],
                className: 'slot1',
                textAlign: 'center'
            }]
        }
    },
    education: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: '',
        optionsBox: {
            visible: false,
            slots: [{
                flex: 1,
                values: [],
                className: 'slot1',
                textAlign: 'center'
            }]
        }
    },
    constellation: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: '',
        optionsBox: {
            visible: false,
            slots: [{
                flex: 1,
                values: [],
                className: 'slot1',
                textAlign: 'center'
            }]
        }
    },
    height: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: '',
        optionsBox: {
            visible: false,
            slots: [{
                flex: 1,
                values: height,
                className: 'slot1',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                values: height,
                className: 'slot3',
                textAlign: 'center'
            }],
        }
    },
    weight: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: '',
        optionsBox: {
            visible: false,
            slots: [{
                flex: 1,
                values: weight,
                className: 'slot1',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                values: weight,
                className: 'slot3',
                textAlign: 'center'
            }],
        }
    },
    occupation: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: '',
        list: [],
        optionsBox: {
            visible: false,
            slots: [{
                flex: 1,
                values: [],
                className: 'slot1',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                values: [],
                className: 'slot3',
                textAlign: 'center'
            }]
        }
    },
    workplace: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: '',
        list: [],
        optionsBox: {
            visible: false,
            slots: [{
                flex: 1,
                values: [],
                className: 'slot1',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                values: [],
                className: 'slot3',
                textAlign: 'center'
            }]
        }
    },
    salary: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: '',
        optionsBox: {
            visible: false,
            slots: [{
                flex: 1,
                values: [],
                className: 'slot1',
                textAlign: 'center'
            }]
        }
    },
    house: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: '',
        optionsBox: {
            visible: false,
            slots: [{
                flex: 1,
                values: [],
                className: 'slot1',
                textAlign: 'center'
            }]
        }
    },
    car: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: '',
        optionsBox: {
            visible: false,
            slots: [{
                flex: 1,
                values: [],
                className: 'slot1',
                textAlign: 'center'
            }]
        }
    },
    smoke: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: '',
        optionsBox: {
            visible: false,
            slots: [{
                flex: 1,
                values: [],
                className: 'slot1',
                textAlign: 'center'
            }]
        }
    },
    pic: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: ''
    },
    desc: {
        id: '',
        cName: '',
        hint: '',
        regx: '',
        show: ''
    }
}
