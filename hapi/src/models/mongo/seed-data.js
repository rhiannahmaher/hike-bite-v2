export const seedData = {
    users: {
        _model: "User",
        homer: {
            firstName: "Homer",
            lastName: "Simpson",
            email: "homer@simpson.com",
            password: "secret",
        },
        marge: {
            firstName: "Marge",
            lastName: "Simpson",
            email: "marge@simpson.com",
            password: "secret",
        },
        bart: {
            firstName: "Bart",
            lastName: "Simpson",
            email: "bart@simpson.com",
            password: "secret",
        },
    },
    locations: {
        _model: "Location",
        antrim: {
            name: "Antrim"
        },
        armagh: {
            name: "Armagh"
        },
        carlow: {
            name: "Carlow"
        },
        cavan: {
            name: "Cavan"
        },
        clare: {
            name: "Clare"
        },
        cork: {
            name: "Cork"
        },
        derry: {
            name: "Derry"
        },
        donegal: {
            name: "Donegal"
        },
        down: {
            name: "Down"
        },
        dublin: {
            name: "Dublin"
        },
        fermanagh: {
            name: "Fermanagh"
        },
        galway: {
            name: "Galway"
        },
        kerry: {
            name: "Kerry"
        },
        kildare: {
            name: "Kildare"
        },
        kilkenny: {
            name: "Kilkenny"
        },
        laois: {
            name: "Laois"
        },
        leitrim: {
            name: "Leitrim"
        },
        limerick: {
            name: "Limerick"
        },
        longford: {
            name: "Longford"
        },
        louth: {
            name: "Louth"
        },
        mayo: {
            name: "Mayo"
        },
        meath: {
            name: "Meath"
        },
        monaghan: {
            name: "Monaghan"
        },
        offaly: {
            name: "Offaly"
        },
        roscommon: {
            name: "Roscommon"
        },
        sligo: {
            name: "Sligo"
        },
        tipperary: {
            name: "Tipperary"
        },
        tyrone: {
            name: "Tyrone"
        },
        waterford: {
            name: "Waterford"
        },
        westmeath: {
            name: "Westmeath"
        },
        wexford: {
            name: "Wexford"
        },
        wicklow: {
            name: "Wicklow"
        },
    },
    trails: {
        _model: "Trail",
        one: {
            name: "Vaughan's Anchor Inn",
            type: "Pub",
            donor: "->users.bart",
            location: "->locations.clare",
            lat: "52.93865",
            lng: "-9.38998",
        },
        two: {
            name: "The Dough Bros",
            type: "Restaurant",
            donor: "->users.marge",
            location: "->locations.galway",
            lat: "53.272894",
            lng: "-9.051814",
        },
        three: {
            name: "Cafe la Coco",
            type: "Cafe",
            donor: "->users.homer",
            location: "->locations.kilkenny",
            lat: "52.65057",
            lng: "-7.25161",
        },
    },
};
