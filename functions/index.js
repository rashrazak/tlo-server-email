const admin = require("firebase-admin");
const functions = require("firebase-functions");
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox39cfff42a88845c8b1022df7754edc95.mailgun.org";
const mg = mailgun({apiKey: "227e685fbcb788d370377358499a737c-71b35d7e-b58d2516", domain: DOMAIN});

const cors = require("cors")({origin: true});
admin.initializeApp();
const runtimeOpts = {
  timeoutSeconds: 300,
};

exports.sendEmailTLO = functions.runWith(runtimeOpts).https.onRequest((req, res)=>{
  cors(req, res, () => {
    const recipientEmail = req.query.recipientEmail;
    const genCode = req.query.genCode;
    let subject = "[No Reply] - New generate code from Rashdan";
    let text = "Hello rashdanrazak91@gmail.com,below is the generate code:";
    const data = {
        from: "Mailgun Sandbox <postmaster@sandbox39cfff42a88845c8b1022df7754edc95.mailgun.org>",
        to: 'rashdanrazak91@gmail.com', //mailgun only valid for registered email and need smtp, but as long it doesnt return error it works
        subject,
        text
    };
    mg.messages().send(data, function (error, body) {
        if (error) {
            console.log(error)
            res.status(400).send(error);
            return false
        }
        //success will show, its free btw
        console.log(body);
        res.status(200).send({message: "Success", status: true});
    });
    
    

    
  });
});
