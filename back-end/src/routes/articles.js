import { Articles } from '../db/schemas';
// import { missingParams, sendError } from '../utils';
// import logger from '../logger';

// if (missingParams(['server', 'vendorUserId'], req.body, res)) return;

export const getAllArticles = (req, res) => {
    const where = {};
    Articles.find(where, (err, articles) => {
        if(err) return res.sendStatus(500);
        res.json(articles);
    });
};

export const getArticle = (req, res) => {};

// const article = new Articles();
// article.slug = 'test';
// article.title = 'My first Article';
// article.imageUrl = 'https://images.unsplash.com/photo-1536060316316-2466bda904f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4d935cedb30c335a14affb922b820ec&auto=format&fit=crop&w=1100&q=80';
// article.imageCred = 'Avery',
// article.imageCredUrl = 'http://google.com',
// article.author = {
//     slug: 'Author',
//     imgUrl:'https://images.unsplash.com/photo-1536060316316-2466bda904f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4d935cedb30c335a14affb922b820ec&auto=format&fit=crop&w=1100&q=80',
//     name: 'Avery',
// };
// article.teaser = 'this is a teaser';
// article.body = `# Vultusque nec meritis graminis fatigant extremum an\n\n\n\n ## Cur similes\n\nLorem markdownum humum, reddidit illo, micante subiecta tela ipso caede colentes\n\nlassavit alii limite deprenduntur. Scrobe quoque horrendum unum meruistis est\n\nlutea accipis, investigata *somni*: ligno exsternata inmane. Ire tibi! Et\n\nsuperatus equorum proles quae *sonum reliquit*?\n\n1. Et vesana vitant quae auxiliaribus quoque seposuisse\n\n2. In coepisse planxitque sed aut bracchia ungulaque\n\n3. Iuppiter incursu opes\n\n4. Meae quam nec sororia vidit verterat pars\n\n5. Sedes spiritus mediamque\n# Ius et vasta fugerat lege altaria quam\n\nInpiger dissimulant submisso; vita *pectore*, monte tacita Argolicas salientia\n*haec*. Vos illa tali, hausto quae, scopulis! Offensamque **ut rogato et** crine\npostes silvas tum: sed qui Polymestoris solebat nec si nec et.\n- Cuspis mora\n- Rutuli saevus sinuantur\n- Corpus acuto sacro\n- Vocat animos supinis et vocas diffundi\n- Cessent quae aethera\n- Est pelle facilesque nostra Deoida\n## Vidi bracchiaque figuram illi tepido sedit\nCarpit occupat indotata in cruorem quibus ventorum occurret, adunco: oportuit.\nTerruit facientia sollicitumque Philomela caper mirata res gens tela, parens\nsine vidit, admonitus. Terramque lene primosque Nelei. Ut beatos angues\npraestant cedite Coroneus: nigro, admirantibus feros si operitur captivo\nconplexibus. Alteraque Rhexenore cardine quoque adit iuncta serpentis inplet.\n## Degravat cupido in fugit aequora\nQuo latus potiere quod pariterque prope, galea ferus **non aequora**. Sonanti\ntibi non amplius e inlimis cumque.\nScylla uberibus nutrix retia partim; metu pabula. Cesserunt modo longius tundunt\ndicere valvae et lumen o ipsum Iovis Haemonio urbesque. Dubitatis ipsaque\nBacchum multa. Oenopiis natant Neptune, virtus Lucina iaculum ponite percussis\nstellas. Deus posses.`;
    

// article.save((err) => {
//     if (err) {
//         logger.error(err);
//     }
// });