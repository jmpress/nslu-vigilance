const bcrypt = require('bcrypt');

async function makeSaltedHash(plain_pass){
    const saltRounds = 10;
    try{
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(plain_pass, salt);
        return hash;
    } catch(err){
        console.log(err);
    }
}

async function comparePasswords(password, hash){
    try{
        const matchFound = await bcrypt.compare(password, hash);
        return matchFound;
    } catch(err) {
        console.log(err);
    }
    return false;
}

function sanitizeInput(stringle, numChar){
    stringle = stringle.replace(/[^a-z0-9áéíóúñü \.,'_@-]/gim,"");
    stringle = stringle.trim();
            if(stringle.length > numChar){
                stringle = stringle.slice(0, numChar);
            }
    return stringle;
}

function sanitizeUlpdata(suspectData){
    let { submitted_by, subsec1, subsec2, subsec3, subsec4, subsec5, subsec6, subsec7, date_of_incident, store_number, staff_witnesses, offending_manager, incident_summary } = suspectData;
    date_of_incident = sanitizeInput(date_of_incident, 10);
    staff_witnesses = sanitizeInput(staff_witnesses, 50);
    offending_manager = sanitizeInput(offending_manager, 30);
    incident_summary = sanitizeInput(incident_summary, 255);

    const cleanData = { submitted_by, subsec1, subsec2, subsec3, subsec4, subsec5, subsec6, subsec7, date_of_incident, store_number, staff_witnesses, offending_manager, incident_summary };
    return cleanData;
}

function formatUlpdata(rawUlpdata){
    let formattedUlpdata = []
    rawUlpdata.forEach(element => {
        formattedUlpdata.push(element.dataValues);
    })
    return formattedUlpdata;
}

module.exports = { makeSaltedHash, comparePasswords, sanitizeInput, sanitizeUlpdata, formatUlpdata };