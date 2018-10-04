import React from 'react';
import moment from 'moment';
import ReactMarkdown  from 'react-markdown';
import styled from 'react-emotion'


const Article = ({ match }) => {
    const post = {
        createdAt: moment().format(),
        slug: 'test',
        _id: '12',
        title: 'This is a test',
        imageUrl: 'https://images.unsplash.com/photo-1536060316316-2466bda904f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4d935cedb30c335a14affb922b820ec&auto=format&fit=crop&w=1100&q=80',
        imageCred: 'Avery Duffin',
        imageCredUrl: 'http://google.com',
        author: {
            slug: 'myName',
            imgUrl: 'https://images.unsplash.com/photo-1536060316316-2466bda904f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4d935cedb30c335a14affb922b820ec&auto=format&fit=crop&w=1100&q=80',
            name: 'Avery',
        },
        teaser: "This is a teaser",
        body: `# Vultusque nec meritis graminis fatigant extremum an\n\n\n\n ## Cur similes\n\nLorem markdownum humum, reddidit illo, micante subiecta tela ipso caede colentes\n\nlassavit alii limite deprenduntur. Scrobe quoque horrendum unum meruistis est\n\nlutea accipis, investigata *somni*: ligno exsternata inmane. Ire tibi! Et\n\nsuperatus equorum proles quae *sonum reliquit*?\n\n1. Et vesana vitant quae auxiliaribus quoque seposuisse\n\n2. In coepisse planxitque sed aut bracchia ungulaque\n\n3. Iuppiter incursu opes\n\n4. Meae quam nec sororia vidit verterat pars\n\n5. Sedes spiritus mediamque\n# Ius et vasta fugerat lege altaria quam\n\nInpiger dissimulant submisso; vita *pectore*, monte tacita Argolicas salientia\n*haec*. Vos illa tali, hausto quae, scopulis! Offensamque **ut rogato et** crine\npostes silvas tum: sed qui Polymestoris solebat nec si nec et.\n- Cuspis mora\n- Rutuli saevus sinuantur\n- Corpus acuto sacro\n- Vocat animos supinis et vocas diffundi\n- Cessent quae aethera\n- Est pelle facilesque nostra Deoida\n## Vidi bracchiaque figuram illi tepido sedit\nCarpit occupat indotata in cruorem quibus ventorum occurret, adunco: oportuit.\nTerruit facientia sollicitumque Philomela caper mirata res gens tela, parens\nsine vidit, admonitus. Terramque lene primosque Nelei. Ut beatos angues\npraestant cedite Coroneus: nigro, admirantibus feros si operitur captivo\nconplexibus. Alteraque Rhexenore cardine quoque adit iuncta serpentis inplet.\n## Degravat cupido in fugit aequora\nQuo latus potiere quod pariterque prope, galea ferus **non aequora**. Sonanti\ntibi non amplius e inlimis cumque.\nScylla uberibus nutrix retia partim; metu pabula. Cesserunt modo longius tundunt\ndicere valvae et lumen o ipsum Iovis Haemonio urbesque. Dubitatis ipsaque\nBacchum multa. Oenopiis natant Neptune, virtus Lucina iaculum ponite percussis\nstellas. Deus posses.`
    }
    return (
        <Container>
            <Title>
                { post.title } { match.params.id }
            </Title>
            <Date>
                { post.createdAt }
            </Date>
            <Line />
            <PhotoContainer>
                <BlogPhoto src={ post.imageUrl }/>
            </PhotoContainer>
            <TextContainer>
                <Credit>
                   Image credit { post.imageCred } { post.imageCredUrl }
                </Credit>
            </TextContainer>
            <TextContainer>
                <TextBody>
                    <ReactMarkdown escapeHtml={false} source={post.body} />
                </TextBody>
            </TextContainer>
            <Line />
        </Container>
    );
};

export default Article;

const Container = styled('div')`
    display: grid;
    max-width: 900px;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;
    padding-left: 24px;
    padding-right: 24px;
    grid-template-columns: 32px auto 32px;
    `;

const Title = styled('h1')`
    margin-bottom: 16px;
    grid-column: 2 / span 1;
    color: rgba(0, 0, 0, 0.87);
    font-size: 3.214285714285714rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.06667em;
    margin-left: -.02em;
`;

const Date = styled('h3')`
    margin-bottom: 16px;
    grid-column: 2 / span 1;
    color: rgba(0, 0, 0, 0.54);
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5em;
`;

const Line = styled('hr')`
    width: 100%;
    border: 0;
    height: 0;
    opacity: 0.2;
    border-top: 1px solid rgba(0, 0, 0, 0.54);
    margin-bottom: 16px;
    grid-column: 2 / span 1;
`;

const PhotoContainer = styled('div')`
    margin: 0;
    display: block;
    padding: 16px 0;
    overflow: hidden;
    grid-column: 1 / span 3;
`;

const BlogPhoto = styled('img')`
    width: 100%;
    margin: 0;
    display: block;
    padding: 0;
`;

const TextContainer = styled('div')`
    grid-column: 1 / span 3;
`;

const TextBody = styled('div')`
    color: rgba(0, 0, 0, 0.87);
    font-size: 1.1428571428571428rem;
    font-weight: 400;
    font-family: 'Lora', serif;
    line-height: 1.71429em;
    margin: 0;
    display: block;
`;

const Credit = styled('h4')`
    margin-bottom: 16px;
    grid-column: 2 / span 1;
    color: rgba(0, 0, 0, 0.54);
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5em;
`;
